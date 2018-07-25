import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyCAp6SONDJGV7IaymbUJyzSA8bLHifHdAk';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };


        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // this.setState({videos: videos}); The same thing
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector(".container"));
