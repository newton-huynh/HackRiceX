import React from "react";
import { Formik, Field, Form } from "formik";
import './quiz.css';
import * as Yup from 'yup';
import lawyers from "../Lawyers/AirtableData.js";
import MatchResults from "./MatchResults";

// Define the available options.
const locations = ['Houston, TX', 'San Antonio, TX', 'Dallas, TX', 'Austin, TX', 'El Paso, TX', 'Corpus Christi, TX', 'McAllen, TX', 'No Preference'];
const expertises = ['Family Law', 'Criminal Defense', 'Accident', 'Assault', 'Personal Injury', 'Domestic Violence', 'Misdemeanors',
    'Immigration', 'LGBT Law', 'Insurance Claims', 'Drug Crimes', 'Contracts', 'No Preference'];
const languages = ['Spanish', 'Chinese', 'Vietnamese', 'German', 'French', 'Hindi', 'Arabic', 'No Preference'];
const races = ['Black', 'Hispanic/Latinx', 'Asian', 'Native American', 'Pacific Islander', 'No Preference'];

// Create the options for the quiz questions.
const locationOptions = locations.map(location =>
    <div className="quiz-option">
        <Field type="radio" name="location" value={location} />
        <label>{location}</label>
    </div>
);

const expertiseOptions = expertises.map(expertise =>
    <div className="quiz-option">
        <Field type="radio" name="expertise" value={expertise} />
        <label>{expertise}</label>
    </div>
);

const languageOptions = languages.map(language =>
    <div className="quiz-option">
        <Field type="radio" name="language" value={language} />
        <label>{language}</label>
    </div>
);

const raceOptions = races.map(race =>
    <div className="quiz-option">
        <Field type="radio" name="race" value={race} />
        <label>{race}</label>
    </div>
);

// Create the quiz and define its submission behavior.
let top_3_lawyers = [];
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
                    .required('*Required'),
                expertise: Yup.string()
                    .required('*Required'),
                language: Yup.string()
                    .required('*Required'),
                race: Yup.string()
                    .required('*Required'),
            })}
            onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500));
                const strResults = JSON.stringify(values, null, 2);
                const results = JSON.parse(strResults);
                let lawyer_list = [];
                let lawyer_scores = [];
                // Loop through each of the lawyers and calculate their scores.
                for (let i = 0; i < lawyers.Lawyers.length; i++) {
                    const lawyer_info = lawyers.Lawyers[i];
                    let point_count = 0;
                    if (results.location === lawyer_info.Location) {
                        point_count += 8;
                    }
                    if (results.expertise === lawyer_info.Expertise1 || results.expertise === lawyer_info.Expertise2 ||
                        results.expertise === lawyer_info.Expertise3) {
                        point_count += 4;
                    }
                    if (results.language === lawyer_info.Language) {
                        point_count += 5;
                    }
                    if (results.race === lawyer_info.Race) {
                        point_count += 2;
                    }
                    lawyer_list.push(lawyer_info);
                    lawyer_scores.push(point_count);
                }
                // Find the top 3 highest-scoring lawyers and save their indices.
                let top_3_indices = [];
                for (let i = 0; i < 3; i++) {
                    let high_score = Math.max(...lawyer_scores);
                    let high_score_index = 0;
                    for (let j = 0; j < lawyer_scores.length; j++) {
                        if (lawyer_scores[j] == high_score) {
                            high_score_index = j;
                            lawyer_scores[j] = 0;
                            break;
                        }
                    }
                    top_3_indices.push(high_score_index);
                }
                // Identify the top 3 highest-scoring lawyers based on their indices.

                for (let i = 0; i < 3; i++) {
                    let lawyer_index = top_3_indices[i];
                    top_3_lawyers.push(lawyer_list[lawyer_index]);
                }
            }}
        >
            {({ errors, touched }) => (
                <Form className='entire-quiz'>

                    <div className='quiz-question'>
                        <p className="quiz-label">Select your preferred location:</p>
                        <div className='quiz-answers'>{locationOptions}</div>
                        {errors.location && touched.location ? (
                            <div className='error-message'>{errors.location}</div>
                        ) : null}
                    </div>
                    < div className="quiz-question">
                        <p className="quiz-label">Select your preferred expertise:</p>
                        <div className="quiz-answers">{expertiseOptions}</div>
                        {errors.expertise && touched.expertise ? (
                            <div className='error-message'>{errors.expertise}</div>
                        ) : null}
                    </div>

                    <div className="quiz-question">
                        <p className="quiz-label">Select your preferred language:</p>
                        <div className="quiz-answers">{languageOptions}</div>
                        {errors.language && touched.language ? (
                            <div className='error-message'>{errors.language}</div>
                        ) : null}
                    </div>

                    <div className="quiz-question">
                        <p className="quiz-label">Select your preferred race:</p>
                        <div className="quiz-answers">{raceOptions}</div>
                        {errors.race && touched.race ? (
                            <div className='error-message'>{errors.race}</div>
                        ) : null}
                    </div>
                    <MatchResults lawyers={top_3_lawyers}></MatchResults>
                </Form>
            )}
        </Formik>

    </div >
);

export default Quiz;