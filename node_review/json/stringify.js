const fs = require("fs");

const userList = [
  { name: "korea", area: "asia" },
  { name: "usa", area: "north america" },
  { name: "france", area: "europe" },
  { name: "canada", area: "north america" },
  { name: "spain", area: "europe" },
  { name: "japan", area: "asia" },
];

fs.writeFile(
  "./node_review/json/world_list.json",
  JSON.stringify(userList),
  function (error) {
    console.log("write end!");
  }
);
