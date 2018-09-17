/* @flow */
import React  from "react";
import SearchBar  from "./components/search-bar";
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';
import Clock from "./components/clock";

const API_KEY = '';

class App extends React.Component<any> {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null            
        };

    }
    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            console.log(videos);
            
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const debouncedVideoSearch = _.debounce((searchTerm) => {this.videoSearch(searchTerm)}, 300);

        return (
        <div>
            <SearchBar onSearchTermChange={debouncedVideoSearch}/>
            <Clock />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
    videos={this.state.videos}/>
        </div>
        );
    }
}

export default App