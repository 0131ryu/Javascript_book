var fs = require("fs");

fs.readFile("./node/web/CRUD/sample.txt", "utf8", function (err, data) {
  console.log(data);
});
