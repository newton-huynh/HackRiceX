var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyZe4sjft8xdVXzp" }).base(
  "apppENI9HbgvplxWY"
);
//const preferences = require
//refer to array later

base("Imported table")
  .select({
    // parameters
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log("Retrieved", record.get("Name"));
        name = record.get("Name");
        //lawyers.push(record.get("Name"));
        //lawyers.push(record.get("Location"));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

exports.default = records;
