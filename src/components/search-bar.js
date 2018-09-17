import React, { Component } from 'react'

class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {searchTerm: ''}
    }
    onInputChange(searchTerm) {
        this.setState({searchTerm: searchTerm});
        this.props.onSearchTermChange(searchTerm);
    }

    render() {
    return (
        <div className='search-bar'>
            <input
                value={this.state.searchTerm} 
                onChange={event => this.onInputChange(event.target.value)} />             
        </div>
    )
  }
}
export default SearchBar