import React from "react";
import styled from "styled-components";
import { Link, Button } from "rebass";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyZe4sjft8xdVXzp" }).base(
  "apppENI9HbgvplxWY"
);

base("Imported table").create(
  [
    {
      fields: {
        Name: "Kimbrough Legal, PLLC",
        Location: "Austin, TX",
        Phone: "833-533-4251",
        Email: "info@kimbroughlegal.com",
        Expertise1: "Family Law",
        Language: "Italian",
        Expertise2: "Criminal Defense",
        Expertise3: "Accident",
      },
    },
  ],
  function (err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  }
);
