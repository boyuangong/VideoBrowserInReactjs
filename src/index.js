import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCAp6SONDJGV7IaymbUJyzSA8bLHifHdAk';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };


        YTSearch({key: API_KEY, term: 'surfboards'}, (vidoes) => {
            this.setState({ vidoes });
            // this.setState({videos: videos}); The same thing

        });
    }
    
    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector(".container"));
