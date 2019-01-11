// Libraries // 
import React, {Component} from 'react'; //Find Lib:React and assign values to var react
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//Components //
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
// API-KEY //
const API_KEY = 'AIzaSyB_Ztj9owYc6buRlAwuF4fEsqdw5nCPBEc';

// Create a new component,
//This component should produce some HTML.
class App extends Component  {      
    constructor(props){
        super(props);
        this.state = { 
        videos: [],
        selectedVideo:null
        };// An array because it will contain a list of objects
        this.videoSearch('surfboards')
    }
   
        videoSearch(term){
            YTSearch({key: API_KEY, term:term},(videos) => {
                this.setState({
                        videos:videos,
                        selectedVideo:videos[0]
                    });
                });
        }
    
    render(){

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
            <SearchBar onSearchTermChange = {videoSearch} />
            <VideoDetail video = {this.state.selectedVideo}/>
            <VideoList
             onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
             videos = {this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/> , document.querySelector('.container')); //Render App Function
//We use reactDom because we are changing the page(The DOM)