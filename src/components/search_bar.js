import React,{ Component } from 'react'; // We need to import react due to the translation call -->

class SearchBar extends Component{ //We use class based components when state is important

    constructor(props){ //Called first, for each individual instance
        //
        super(props);
        this.state = { term: '' };
        }


    ///When Defining a component always have a render method.
    render(){
                        //Provide functionality and emit the "change event"
        return (         //Always manipulate state w/ this.setState (via constructor)
        <div className ="search-bar">
        <input
         value = {this.state.term}
         onChange = {event => this.onInputChange(event.target.value)} 
         placeholder = " Search " />       
        </div>
    );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
} 

export default SearchBar;
//Components must be exported.
 
