import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from 'styled-components';
import {Flex, Box} from 'rebass';
// import "./styles.css";
// import "./styles-custom.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <br />
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

/* // Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 0rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
}; */

const ApplyWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.8fr 9fr;
    grid-template-areas:
      "ApplyTitle"
      "ApplyDescription"
      "ApplyForm";
    background-color: white;
    height: 100%;  
`;

const ApplyTitle = styled.div`
    grid-area: ApplyTitle;
    font-size: 40px;
    margin-top: 40px;
    margin-bottom: 30px;
    font-weight: bold;
    color: #293241;
    text-align: center;
`;

const ApplyDescription = styled.div`
    grid-area: ApplyDescription;
    margin: 0 auto;
    text-align: center;
    width: 40%;
`;

const ApplyForm = styled.div`
    grid-area: ApplyForm;
    line-height: 40px;
    margin: 0px 300px 0px 300px;
    
`;

const SignupForm = () => {
  return (
    <ApplyWrapper>
      <ApplyTitle>Help Protect Protestors.</ApplyTitle>
      <ApplyDescription>
        <p>Are you a lawyer interested in representing protestors pro bono? If so, fill out this form to be added to the database where others can search for you.</p>
      </ApplyDescription>
      <ApplyForm>
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
        //???
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <Flex sx={{display:"flex", justifyContent:"space-evenly"}}>
          <Box>
          <MyTextInput
            label="Name"
            name="Name"
            type="text"
            placeholder="Jane Doe Firm"
          />
          </Box>
          <Box>
          <MyTextInput
            label="Phone"
            name="phone"
            type="text"
            placeholder="123-456-7890"
          />
          </Box>
          <Box>
          <MyTextInput
            label="Location"
            name="location"
            type="text"
            placeholder="Houston, TX"
          />
          </Box>
          </Flex>
          <Flex sx={{display:"flex", justifyContent:"space-evenly"}}>
          <Box>
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@rice.edu"
          />
          </Box>
          <Box>
          <MyTextInput
            label="Language"
            name="language"
            type="text"
            placeholder="Spanish"
          />
          </Box>
          <Box>
          <MyTextInput
            label="Race"
            name="race"
            type="text"
            placeholder="African American"
          />
          </Box>
          </Flex>
          <Flex sx={{display:"flex", justifyContent:"space-evenly"}}>
          <Box>
          <MyTextInput
            label="First Area of Expertise"
            name="expertise1"
            type="text"
            placeholder="Criminal Defense"
          />
          </Box>
          <Box>
          <MyTextInput
            label="Second Area of Expertise"
            name="expertise2"
            type="text"
            placeholder="Assault"
          />
          </Box>
          <Box>
          <MyTextInput
            label="Third Area of Expertise"
            name="expertise3"
            type="text"
            placeholder="Immigration"
          />
          </Box>
          <Box>
          <MyTextInput
            label="Fourth Area of Expertise"
            name="expertise4"
            type="text"
            placeholder="Injury"
          />
          </Box>
          </Flex>
          <Flex sx={{display:"flex", justifyContent:"space-evenly", marginTop:"40px"}}>
              <button type="submit" style={{fontSize:"15px", borderStyle:"solid", borderColor:"#3d5a80", borderWidth:"4px", borderRadius:"10px"}}>Submit</button>
          </Flex>
        </Form>
      </Formik>
      </ApplyForm>
    </ApplyWrapper>
  )
}

export default SignupForm;
