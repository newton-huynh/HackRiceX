import React from "react";
import { Formik, Field, Form } from "formik";
import './quiz.css';
import * as Yup from 'yup';
import MatchResults from "./MatchResults";
// import { Lawyers } from "../Lawyers/Lawyers.js";

const lawyers = {
    "Lawyers": [
        {
            Name: 'Kimbrough Legal, PLLC',
            Phone: '833-533-4251',
            Email: 'info@kimbroughlegal.com',
            Location: 'Austin, TX',
            Expertise1: 'Family Law',
            Expertise2: 'Criminal Defense',
            Expertise3: 'Accident',
            Expertise4: undefined,
            Language: 'Italian',
            Race: undefined
        },
        {
            Name: 'Law Office of Aishah McCoy',
            Phone: '512-872-7845',
            Email: undefined,
            Location: 'Austin, TX',
            Expertise1: undefined,
            Expertise2: undefined,
            Expertise3: undefined,
            Expertise4: undefined,
            Language: 'French',
            Race: undefined
        },
        {
            Name: 'Matthew S. Manning',
            Phone: '361-236-2060',
            Email: 'Parker@wcctxlaw.com',
            Location: 'Corpus Christi, TX',
            Expertise1: 'Accident',
            Expertise2: 'Wrongful Death',
            Expertise3: undefined,
            Expertise4: undefined,
            Language: 'French',
            Race: 'Black'
        },
        {
            Name: 'Yodit Tewolde',
            Phone: '214-383-8310',
            Email: 'yodittewolde@gmail.com',
            Location: 'Dallas, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: undefined,
            Expertise3: undefined,
            Expertise4: undefined,
            Language: 'French',
            Race: 'Black'
        },
        {
            Name: 'Asante Legal PLLC',
            Phone: '972-515-2959',
            Email: 'asantelegal@gmail.com',
            Location: 'Dallas, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Expunctions',
            Expertise3: 'Misdemeanors',
            Expertise4: undefined,
            Language: 'Spanish',
            Race: undefined
        },
        {
            Name: 'Jasmine Crockett',
            Phone: '469-527-4100',
            Email: undefined,
            Location: 'Dallas, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Family Law',
            Expertise3: 'Injury',
            Expertise4: 'Assault',
            Language: 'French',
            Race: 'Black'
        },
        {
            Name: 'Nnamdi Ekeh',
            Phone: '469-351-9604',
            Email: undefined,
            Location: 'Dallas, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Accident',
            Expertise3: undefined,
            Expertise4: undefined,
            Language: 'Swahili',
            Race: 'Black'
        },
        {
            Name: 'Edward Okwueze & Associates',
            Phone: '832-798-9850',
            Email: 'criminalandimmigrationlawyers@yahoo.com',
            Location: 'Houston, TX',
            Expertise1: 'Immigration',
            Expertise2: 'Personal Injury',
            Expertise3: 'Criminal Defense',
            Expertise4: undefined,
            Language: 'Afrikaans',
            Race: 'Black'
        },
        {
            Name: 'Lisa Shapiro Strauss',
            Phone: '713-429-7310',
            Email: 'lisa@lisastrausslaw.com',
            Location: 'Houston, TX',
            Expertise1: 'Assault',
            Expertise2: 'Domestic Violence',
            Expertise3: 'Drug Crimes',
            Expertise4: 'Felony Offenses',
            Language: 'German',
            Race: undefined
        },
        {
            Name: 'The Law Office of Marcus Esther PLLC',
            Phone: '409-276-8034',
            Email: undefined,
            Location: 'Houston, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Family Law',
            Expertise3: 'Personal Injury',
            Expertise4: 'Contracts',
            Language: 'Spanish',
            Race: 'Black'
        },
        {
            Name: 'Orlando Mercado',
            Phone: '956-432-5380',
            Email: 'omercadolaw@gmail.com',
            Location: 'McAllen, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Personal Injury',
            Expertise3: undefined,
            Expertise4: undefined,
            Language: 'Spanish',
            Race: 'Mexican'
        },
        {
            Name: 'Branden Lopez',
            Phone: '210-224-2600',
            Email: undefined,
            Location: 'San Antonio, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: undefined,
            Expertise3: undefined,
            Expertise4: undefined,
            Language: 'Spanish',
            Race: undefined
        },
        {
            Name: 'Maria Salazar',
            Phone: '210-226-7529',
            Email: undefined,
            Location: 'San Antonio, TX',
            Expertise1: 'Family Law',
            Expertise2: 'LGBT Law',
            Expertise3: undefined,
            Expertise4: undefined,
            Language: 'Spanish',
            Race: undefined
        },
        {
            Name: 'Rashin Mazaheri',
            Phone: '210-472-1400',
            Email: undefined,
            Location: 'San Antonio, TX',
            Expertise1: 'Personal Injury',
            Expertise2: 'Family Law',
            Expertise3: 'Insurance Claims',
            Expertise4: 'Business Litigation',
            Language: 'Arabic',
            Race: undefined
        },
        {
            Name: 'Ricardo Briones',
            Phone: '210-227-1515',
            Email: undefined,
            Location: 'San Antonio, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Family Law',
            Expertise3: 'DUI',
            Expertise4: undefined,
            Language: 'Spanish',
            Race: undefined
        },
        {
            Name: 'Theodore Wenske, JD',
            Phone: '210-858-7997',
            Email: undefined,
            Location: 'San Antonio, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Family Law',
            Expertise3: 'Wills',
            Expertise4: undefined,
            Language: 'Chinese',
            Race: undefined
        }
    ]
};

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
                console.log(results.location);
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
                        results.expertise === lawyer_info.Expertise3 || results.expertise === lawyer_info.Expertise4) {
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
                        }
                    }
                    top_3_indices.push(high_score_index);
                }
                // Find and return the top 3 highest-scoring lawyers based on their indices.
                
                for (let i = 0; i < 3; i++) {
                    let lawyer_index = top_3_indices[i];
                    console.log(lawyer_index);
                    top_3_lawyers.push(lawyer_list[lawyer_index]);
                }
                // Print the information for each of the lawyers.
                for (let i = 0; i < 3; i++) {
                    console.log("Name: " + top_3_lawyers[i].Name);
                    console.log("Phone: " + top_3_lawyers[i].Phone);
                    console.log("Email: " + top_3_lawyers[i].Email);
                    console.log("Location: " + top_3_lawyers[i].Location);
                    console.log("Expertise 1: " + top_3_lawyers[i].Expertise1);
                    console.log("Expertise 2: " + top_3_lawyers[i].Expertise2);
                    console.log("Expertise 3: " + top_3_lawyers[i].Expertise3);
                    console.log("Expertise 4: " + top_3_lawyers[i].Expertise4);
                    console.log("Language: " + top_3_lawyers[i].Language);
                    console.log("Race: " + top_3_lawyers[i].Race);
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

                    <button type="submit" style={{fontSize:"18px", borderStyle:"solid", borderColor:"#3d5a80", borderWidth:"4px", borderRadius:"10px"}}>Submit</button>
                </Form>
            )}
        </Formik>
        <MatchResults lawyers={top_3_lawyers}></MatchResults>
    </div >
);

export default Quiz;