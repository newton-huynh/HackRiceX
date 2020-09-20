import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

let results = {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SignupForm = () => {
  return (
    <>
      <h1>Help Protect Protestors.</h1>
      <Formik
        initialValues={{
          Name: "",
          location: "",
          phone: "",
          email: "",
          language: "",
          race: "",
          expertise1: "",
          expertise2: "",
          expertise3: "",
          expertise4: "",
        }}
        validationSchema={Yup.object({
          Name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          location: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          phone: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          language: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          race: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          expertise1: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          expertise2: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          expertise3: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          expertise4: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={async (values) => {
          await sleep(500);
          //alert(JSON.stringify(values, null, 2));
          results = JSON.stringify(values, null, 2);
          alert(results);

          var Airtable = require("airtable");
          var base = new Airtable({ apiKey: "keyZe4sjft8xdVXzp" }).base(
            "apppENI9HbgvplxWY"
          );

          base("Imported table").create(
            [
              {
                fields: {
                  Name: "--",
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
        }}
      >
        <Form>
          <MyTextInput
            label="Name"
            name="Name"
            type="text"
            placeholder="Jane Doe Firm"
          />
          <MyTextInput
            label="Phone"
            name="phone"
            type="text"
            placeholder="123-456-7890"
          />
          <MyTextInput
            label="Location"
            name="location"
            type="text"
            placeholder="Houston, TX"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@rice.edu"
          />
          <MyTextInput
            label="Language"
            name="language"
            type="text"
            placeholder="Spanish"
          />
          <MyTextInput
            label="Race"
            name="race"
            type="text"
            placeholder="African American"
          />
          <MyTextInput
            label="First Area of Expertise"
            name="expertise1"
            type="text"
            placeholder="Criminal Defense"
          />
          <MyTextInput
            label="Second Area of Expertise"
            name="expertise2"
            type="text"
            placeholder="Assault"
          />
          <MyTextInput
            label="Third Area of Expertise"
            name="expertise3"
            type="text"
            placeholder="Immigration"
          />
          <MyTextInput
            label="Fourth Area of Expertise"
            name="expertise4"
            type="text"
            placeholder="Injury"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
