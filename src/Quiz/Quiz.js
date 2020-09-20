import React from "react";
import { Formik, Field, Form } from "formik";
import './quiz.css';
import * as Yup from 'yup';
import { Lawyers } from "../Lawyers/Lawyers.js";

const locations = ['Houston, TX', 'San Antonio, TX', 'Dallas, TX', 'Austin, TX', 'Corpus Christi, TX', 'McAllen, TX', 'No Preference'];
const locationOptions = locations.map(location =>
    <div className="quiz-option">
        <label className="button-appearance">{location}
            <Field className="radio-button" type="radio" name="location" value={location} />
        </label>
    </div>
);

const expertises = ['Family Law', 'Criminal Defense', 'Accident', 'Assault', 'Personal Injury', 'No Preference'];
const expertiseOptions = expertises.map(expertise =>
    <div className="quiz-option">
        <label>{expertise}</label>
        <Field className="radio-button" type="radio" name="expertise" value={expertise} />
    </div>
);

const languages = ['Spanish', 'French', 'Arabic', 'Chinese', 'No Preference'];
const languageOptions = languages.map(language =>
    <div className="quiz-option">
        <label>{language}</label>
        <Field className="radio-button" type="radio" name="language" value={language} />
    </div>
);

const races = ['Black', 'Hispanic', 'No Preference'];
const raceOptions = races.map(race =>
    <div className="quiz-option">
        <label>{race}</label>
        <Field className="radio-button" type="radio" name="race" value={race} />
    </div>
);

let results = null;

const Quiz = () => (
    <div>
        <Formik
            initialValues={{
                location: "",
                expertise: "",
                language: "",
                race: "",
            }}
            validationSchema={Yup.object().shape({
                location: Yup.string()
                    .required('Required'),
                expertise: Yup.string()
                    .required('Required'),
                language: Yup.string()
                    .required('Required'),
                race: Yup.string()
                    .required('Required'),
            })}
            onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500));
                results = JSON.stringify(values, null, 2);
                console.log(results);
                // Lawyers(results);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="quiz-question">
                        <p className="quiz-label">Select your preferred location:</p>
                        {locationOptions}
                        {errors.location && touched.location ? (
                            <div>{errors.location}</div>
                        ) : null}
                    </div>
                    < div className="quiz-question">
                        <p className="quiz-label">Select your preferred expertise:</p>
                        {expertiseOptions}
                        {errors.expertise && touched.expertise ? (
                            <div>{errors.expertise}</div>
                        ) : null}
                    </div>

                    <div className="quiz-question">
                        <p className="quiz-label">Select your preferred language:</p>
                        {languageOptions}
                        {errors.language && touched.language ? (
                            <div>{errors.language}</div>
                        ) : null}
                    </div>

                    <div className="quiz-question">
                        <p className="quiz-label">Select your preferred race:</p>
                        {raceOptions}
                        {errors.race && touched.race ? (
                            <div>{errors.race}</div>
                        ) : null}
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div >
);

export default Quiz;