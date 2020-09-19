const records = require("./Lawyers.js").default;
// we have array of jsons for specific lawyers,

for (var i = 0; i < records.length; i++) {
  var lawyer = records[i];
  console.log(lawyer.id);
}
