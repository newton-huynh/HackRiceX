// vivian API key: keyr1Jn9z3aX6Lyuv
// janet API key: keyZe4sjft8xdVXzp

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyr1Jn9z3aX6Lyuv" }).base(
  "apppENI9HbgvplxWY"
);

const Lawyers = (results) => {
  var lawyer_list = [];
  var lawyer_scores = [];
  base("Imported table").select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function (record) {
      const lawyer_info = {
        "Name": record.get("Name"),
        "Phone": record.get("Phone"),
        "Email": record.get("Email"),
        "Location": record.get("Location"),
        "Expertise1": record.get("Expertise1"),
        "Expertise2": record.get("Expertise2"),
        "Expertise3": record.get("Expertise3"),
        "Expertise4": record.get("Expertise4"),
        "Language": record.get("Language"),
        "Race": record.get("Race")
      };
      let point_count = 0;
      if (results.location == lawyer_info.Location) {
        point_count += 8;
      }
      if (results.expertise == lawyer_info.Expertise1 || results.expertise == lawyer_info.Expertise2 ||
        results.expertise == lawyer_info.Expertise3 || results.expertise == lawyer_info.Expertise4) {
        point_count += 4;
      }
      if (results.language == lawyer_info.Language) {
        point_count += 5;
      }
      if (results.race == lawyer_info.Race) {
        point_count += 2;
      }
      lawyer_list.push(lawyer_info);
      lawyer_scores.push(point_count);
    });
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  },
    function done(err) {
      console.log(lawyer_list);
      // Find the top 3 highest-scoring lawyers and save their indices.
      let top_3_indices = [];
      for (let i = 0; i < 3; i++) {
        let high_score = Math.max(...lawyer_scores);
        let high_score_index = 0;
        for (let j = 0; j < lawyer_scores.length; j++) {
          if (lawyer_scores[j] == high_score) {
            high_score_index = j;
          }
        }
        top_3_indices.push(high_score_index);
        lawyer_scores.splice(high_score_index, 1);
      }
      // Find and return the top 3 highest-scoring lawyers based on their indices.
      let top_3_lawyers = [];
      for (let i = 0; i < 3; i++) {
        let lawyer_index = top_3_indices[i];
        top_3_lawyers.push(lawyer_list[lawyer_index]);
      }
      // console.log(top_3_lawyers);
      return top_3_lawyers;
      if (err) {
        console.error(err);
        return;
      }
    }
  );
}

const sample_result = {
  "location": "Dallas, TX",
  "expertise": "Criminal Defense",
  "language": "Spanish",
  "race": "Black"
};

Lawyers(sample_result);

// ONLY ONE PAGE OF RECORDS
  //   base('Imported table').select({
  //     view: 'Grid view'
  //   }).firstPage(function (err, records) {
  //     if (err) { console.error(err); return; }
  //     console.log(records);
  //     records.forEach(function (record) {
  //       const lawyer_info = {
  //         "Name": record.get("Name"),
  //         "Phone": record.get("Phone"),
  //         "Email": record.get("Email"),
  //         "Location": record.get("Location"),
  //         "Expertise1": record.get("Expertise1"),
  //         "Expertise2": record.get("Expertise2"),
  //         "Expertise3": record.get("Expertise3"),
  //         "Expertise4": record.get("Expertise4"),
  //         "Language": record.get("Language"),
  //         "Race": record.get("Race")
  //       };
  //       let point_count = 0;
  //       if (results.location == lawyer_info.Location) {
  //         point_count += 8;
  //       }
  //       if (results.expertise == lawyer_info.Expertise1 || results.expertise == lawyer_info.Expertise2 ||
  //         results.expertise == lawyer_info.Expertise3 || results.expertise == lawyer_info.Expertise4) {
  //         point_count += 4;
  //       }
  //       if (results.language == lawyer_info.Language) {
  //         point_count += 5;
  //       }
  //       if (results.race == lawyer_info.Race) {
  //         point_count += 2;
  //       }
  //       lawyer_list.push(lawyer_info);
  //       lawyer_scores.push(point_count);
  //     });
  //   });
  //   // Find the top 3 highest-scoring lawyers and save their indices.
  //   let top_3_indices = [];
  //   for (let i = 0; i < 3; i++) {
  //     let high_score = Math.max(...lawyer_scores);
  //     let high_score_index = 0;
  //     for (let j = 0; j < lawyer_scores.length; j++) {
  //       if (lawyer_scores[j] == high_score) {
  //         high_score_index = j;
  //       }
  //     }
  //     top_3_indices.push(high_score_index);
  //     lawyer_scores.splice(high_score_index, 1);
  //   }
  //   // Find and return the top 3 highest-scoring lawyers based on their indices.
  //   let top_3_lawyers = [];
  //   for (let i = 0; i < 3; i++) {
  //     let lawyer_index = top_3_indices[i];
  //     top_3_lawyers.push(lawyer_list[lawyer_index]);
  //   }
  //   console.log(top_3_lawyers);
  //   return top_3_lawyers;
  // }