import React from "react";
import { Formik, Field, Form } from "formik";
import './quiz.css';
import * as Yup from 'yup';
import { Lawyers } from "../Lawyers/Lawyers.js";

const locations = ['Houston, TX', 'San Antonio, TX', 'Dallas, TX', 'Austin, TX', 'Corpus Christi, TX', 'McAllen, TX', 'No Preference'];
const locationOptions = locations.map(location =>
    <div className="quiz-option">
        
        <Field type="radio" name="location" value={location} />
        <label>{location}</label>

    </div>
);

const expertises = ['Family Law', 'Criminal Defense', 'Accident', 'Assault', 'Personal Injury', 'No Preference'];
const expertiseOptions = expertises.map(expertise =>
    <div className="quiz-option">
        
        <Field type="radio" name="expertise" value={expertise} />
        <label>{expertise}</label>

    </div>
);

const languages = ['Spanish', 'French', 'Arabic', 'Chinese', 'No Preference'];
const languageOptions = languages.map(language =>
    <div className="quiz-option">

        
        <Field type="radio" name="language" value={language} />
        <label>{language}</label>

    </div>
);

const races = ['Black', 'Hispanic', 'No Preference'];
const raceOptions = races.map(race =>
    <div className="quiz-option">

        
        <Field type="radio" name="race" value={race} />
        <label>{race}</label>

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
                results = JSON.stringify(values, null, 2);
                console.log(results);
                // Lawyers(results);
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

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div >
);

export default Quiz;