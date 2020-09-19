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


function QuizTesting() {
    const flavors = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const places = [
        { value: 'CA', label: 'California' },
        { value: 'TX', label: 'Texas' },
        { value: 'AR', label: 'Arkansas' },
    ]
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
    return (
        <div className="QuizTesting">
            {placesElement}
            {flavorsElement}
        </div>
    );
}

export default QuizTesting;