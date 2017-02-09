import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.matchNames = this.matchNames.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    } 

    matchNames() {
        const input = this.state.inputValue.toLowerCase();
        return this.props.artists.filter(artist => 
            artist.name.toLowerCase().match(input))
    }

    render() {
        const filteredArtists = this.matchNames()
        return (
            <div>
                <FilterInput handleChange={this.handleChange}/>
                {console.log(this.state.inputValue)}                
                <Artists artists={filteredArtists}/>
            </div>
        );
    }
}
 {/*render FilterInput and Artists propbably*/}