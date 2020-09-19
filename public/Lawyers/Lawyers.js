var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyZe4sjft8xdVXzp" }).base(
  "apppENI9HbgvplxWY"
);

let lawyers = [];

base("Imported table")
  .select({
    // Selecting the first 3 records in Grid view:
    //maxRecords: 3,
    view: "Grid view",
    //filterByFormula: "({City} = 'Houston')",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log("Retrieved", record.get("Name"));
      });

      console.log(records);
      lawyers = records;
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

exports.default = lawyers;
