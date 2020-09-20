// The lawyer data used to find the user's match.

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
            Language: 'Spanish',
            Race: 'Black'
        },
        {
            Name: 'Law Office of Aishah McCoy',
            Phone: '512-872-7845',
            Email: 'contact@legalmccoy.com',
            Location: 'Austin, TX',
            Expertise1: 'Personal Injury',
            Expertise2: 'Domestic Violence',
            Expertise3: 'Assault',
            Language: 'French',
            Race: 'Unknown'
        },
        {
            Name: 'Matthew S. Manning',
            Phone: '361-236-2060',
            Email: 'Parker@wcctxlaw.com',
            Location: 'Corpus Christi, TX',
            Expertise1: 'Accident',
            Expertise2: 'Family Law',
            Expertise3: 'Criminal Defense',
            Language: 'French',
            Race: 'Black'
        },
        {
            Name: 'Yodit Tewolde',
            Phone: '214-383-8310',
            Email: 'yodittewolde@gmail.com',
            Location: 'Dallas, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Insurance Claims',
            Expertise3: 'Drug Crimes',
            Language: 'Viatnamese',
            Race: 'Black'
        },
        {
            Name: 'Asante Legal PLLC',
            Phone: '972-515-2959',
            Email: 'asantelegal@gmail.com',
            Location: 'Dallas, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Misdemeanors',
            Expertise3: 'Accident',
            Language: 'Spanish',
            Race: 'Native American'
        },
        {
            Name: 'Jasmine Crockett',
            Phone: '469-527-4100',
            Email: 'crockett@gmail.com',
            Location: 'El Paso, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Family Law',
            Expertise3: 'Injury',
            Language: 'Viatnamese',
            Race: 'Black'
        },
        {
            Name: 'Nnamdi Ekeh',
            Phone: '469-351-9604',
            Email: 'information@ekehahelp.com',
            Location: 'Dallas, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Accident',
            Expertise3: 'Assault',
            Language: 'French',
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
            Language: 'Arabic',
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
            Language: 'German',
            Race: 'Pacific Islander'
        },
        {
            Name: 'The Law Office of Marcus Esther PLLC',
            Phone: '409-276-8034',
            Email: 'marcus@pllcoffice',
            Location: 'Houston, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Personal Injury',
            Expertise3: 'Contracts',
            Language: 'Hindi',
            Race: 'Asian'
        },
        {
            Name: 'Orlando Mercado',
            Phone: '956-432-5380',
            Email: 'omercadolaw@gmail.com',
            Location: 'McAllen, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Personal Injury',
            Expertise3: 'Accident',
            Language: 'Spanish',
            Race: 'Hispanic/Latinx'
        },
        {
            Name: 'Branden Lopez',
            Phone: '210-224-2600',
            Email: 'lopez24@gmail.com',
            Location: 'San Antonio, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Immigration',
            Expertise3: 'Insurance Claims',
            Language: 'Spanish',
            Race: 'Hispanic/Latinx'
        },
        {
            Name: 'Maria Salazar',
            Phone: '210-226-7529',
            Email: 'salazar@gmail.com',
            Location: 'San Antonio, TX',
            Expertise1: 'Family Law',
            Expertise2: 'LGBT Law',
            Expertise3: 'Drug Crimes',
            Language: 'Spanish',
            Race: 'Hispanic/Latinx'
        },
        {
            Name: 'Rashin Mazaheri',
            Phone: '210-472-1400',
            Email: 'rashincourt@gmail.com',
            Location: 'El Paso, TX',
            Expertise1: 'Personal Injury',
            Expertise2: 'Family Law',
            Expertise3: 'Insurance Claims',
            Expertise4: 'Business Litigation',
            Language: 'Arabic',
            Race: 'Unknown'
        },
        {
            Name: 'Ricardo Briones',
            Phone: '210-227-1515',
            Email: 'briones@probono.com',
            Location: 'San Antonio, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Family Law',
            Expertise3: 'LGBT Law',
            Language: 'Spanish',
            Race: 'Native American'
        },
        {
            Name: 'Theodore Wenske, JD',
            Phone: '210-858-7997',
            Email: 'tedwenske@jd.org',
            Location: 'San Antonio, TX',
            Expertise1: 'Criminal Defense',
            Expertise2: 'Family Law',
            Expertise3: 'Personal Injury',
            Language: 'Chinese',
            Race: 'Asian'
        }
    ]
};

export default lawyers;

// GET DATA FROM AIRTABLE:

// const getData = function () {
//     var lawyer_records = [];
//     var Airtable = require("airtable");
//     var base = new Airtable({ apiKey: "keyr1Jn9z3aX6Lyuv" }).base(
//         "apppENI9HbgvplxWY"
//     );
//     console.log("TABLE");
//     base("Imported table").select({
//         view: "Grid view"
//     }).eachPage(function page(records, fetchNextPage) {
//         // This function (`page`) will get called for each page of records.
//         records.forEach(function (record) {
//             const lawyer_info = {
//                 "Name": record.get("Name"),
//                 "Phone": record.get("Phone"),
//                 "Email": record.get("Email"),
//                 "Location": record.get("Location"),
//                 "Expertise1": record.get("Expertise1"),
//                 "Expertise2": record.get("Expertise2"),
//                 "Expertise3": record.get("Expertise3"),
//                 "Expertise4": record.get("Expertise4"),
//                 "Language": record.get("Language"),
//                 "Race": record.get("Race")
//             };
//             lawyer_records.push(lawyer_info);
//         });
//         fetchNextPage();
//     },
//         function done(err) {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//         });
//     return lawyer_records;
// }

// export default getData;