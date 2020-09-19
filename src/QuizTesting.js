import React from 'react';
import Select from 'react-select';

class SelectElement extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.options}
                isSearchable={this.props.searchable}
                isMulti={this.props.multi}
                isClearable={true}
            />
        );
    }
}

function getLocations(info) {
    let locations = [];
    for (const record of info.records) {
        const city = record.fields.CITY;
        const state = record.fields.STATE;
        // TODO: check if location already in locations
        locations.push({
            value: city + ", " + state,
            label: city + ", " + state,
        });
    }
    return locations;
}

const sheetInfo = {
    "records": [
        {
            "id": "recdqU4dbZsh2CsYk",
            "fields": {
                "STATE": "GA",
                "CITY": "Atlanta",
                "CONTACT NAME": "Emily Strongwater",
                "OFFICE": "Strongwater & Associates",
                "PHONE": "404-872-1700"
            },
            "createdTime": "2020-09-19T04:55:03.000Z"
        },
        {
            "id": "recddtkAjjTKcGf2x",
            "fields": {
                "STATE": "TX",
                "CITY": "Houston",
                "CONTACT NAME": "J. Edward Shipp",
                "PHONE": "404-507-6773"
            },
            "createdTime": "2020-09-19T04:55:03.000Z"
        },
        {
            "id": "recoyU4PrrUULDDMp",
            "fields": {
                "STATE": "CA",
                "CITY": "Cupertino",
                "CONTACT NAME": "Adam Brown",
                "OFFICE": "Law Office of Adam D. Brown",
                "PHONE": "404-476-6695"
            },
            "createdTime": "2020-09-19T04:55:03.000Z"
        }
    ],
    "offset": "recoyU4PrrUULDDMp"
};

const flavors = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const places = [
    { value: 'CA', label: 'California' },
    { value: 'TX', label: 'Texas' },
    { value: 'AR', label: 'Arkansas' },
];
const locations = getLocations(sheetInfo);

function QuizTesting() {
    const placesElement = <SelectElement
        options={places}
        searchable={true}
        multi={false}
    />;
    const flavorsElement = <SelectElement
        options={flavors}
        searchable={false}
        multi={true}
    />
    const locationsElement = <SelectElement
        options={locations}
        searchable={true}
        multi={false}
    />
    return (
        <div className="QuizTesting">
            {placesElement}
            {flavorsElement}
            {locationsElement}
        </div>
    );
}

export default QuizTesting;