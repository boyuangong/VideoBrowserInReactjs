import _ from 'lodash';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetails';

const API_KEY = 'AIzaSyCAp6SONDJGV7IaymbUJyzSA8bLHifHdAk';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    

        this.videoSearch('Drakes');
    }
    
    videoSearch(term) {
	    YTSearch({key: API_KEY, term: term}, (videos) => {
		    this.setState({
			    videos: videos,
			    selectedVideo: videos[0]
		    });
		    // this.setState({videos: videos}); The same thing
	    });
    }
    
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
      
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
	                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector(".container"));
