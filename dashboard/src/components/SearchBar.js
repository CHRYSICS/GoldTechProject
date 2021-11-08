import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>Search By..</label>
                <div>
                    <input type="radio" name="filter" value="id"/> user ID
                    <input type="radio" name="filter" value="code"/> coupon code
                </div>
                <input type="text" name="search" placeholder="Search"></input>
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBar;
