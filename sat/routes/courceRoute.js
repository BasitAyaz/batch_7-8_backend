const express = require("express");
const route = express.Router();
let a = [
  {
    id: 1,
    cources: "ABC",
  },
  {
    id: 2,
    cources: "XYZ",
  },
  {
    id: 3,
    cources: "MNO",
  },
  {
    id: 4,
    cources: "YUO",
  },
];
route.get("/", (req, res) => {
  res.send(JSON.stringify(a)).status(200);
});
route.get("/:id", (req, res) => {
  let id = req.params.id;
  let i = a.findIndex((x) => x.id == id);
  if (i > -1) {
    res.send(a[i]).status(200);
  } else {
    res.send("No Data Found").status(404);
  }
});
route.post("/", (req, res) => {
  let { cources } = req.body;

  let errArr = [];

  if (!cources || cources == " ") {
    errArr.push("Rquired Cource Name");
  }
  if (errArr.length > 0) {
    res.send(errArr).status(400);
    return;
  } else {
    let obj = {
      cources: cources,
      id: a.length + 1,
    };
    a.push(obj);

    res.send(obj).status(200);
  }
});
route.put("/:id", (req, res) => {
  let id = req.params.id;
  let { cources } = req.body;

  let i = a.findIndex((x) => x.id == id);
  if (i > -1) {
    a[i].cources = cources;
    res.send(a[i]).status(200);
  } else {
    res.send("Data Not Found").status(404);
  }
});
route.delete("/:id", (req, res) => {
  let id = req.params.id;

  let i = a.findIndex((x) => x.id == id);
  if (i > -1) {
    a.splice(i, 1);
    res.send({ message: "Dat Deleted Successfully", data: a }).status(200);
  } else {
    res.send("No Data Found on this ID").status(404);
  }
});

module.exports = route;
