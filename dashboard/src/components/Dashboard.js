import React, { Component } from 'react';
import SearchBar from './SearchBar';
const qs = require('query-string');

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {data: [],
                    filter: null,
                    query:null}
    }

    filterUsers = (user) => {
        var filter = this.state.filter;
        var query = this.state.query;
        if (filter !== null && query !== null) {
            if (filter === 'id') {
                console.log(user._id);
                if (user._id === query) {
                    return true;
                }
            } else {return false;}
            if (filter === 'code') {
                user.coupons.foreach(coupon => {
                    if (coupon.code === query) {
                        return true;
                    }
                });
                return false;
            }
            return false;
        }
        return true;
    }

    componentDidMount() {
        console.log(this.state);
        fetch('/users')
        .then(res => res.json())
        .then(data => this.setState({ data: data.filter(this.filterUsers)}));        
    }

    updateSearch(e) {
        var filter = e.target.filter.value;
        var search = e.target.search.value;
        if (filter !== null  && search !== null) {
            this.setState({ filter: filter,
                            query:search},
                            () => console.log(this.state));
        } else {
            this.setState({filter: null,
                            query: null},
                            ()=>console.log(this.state));
        }
        e.preventDefault();
    }
 
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <SearchBar onSubmit={this.updateSearch.bind(this)} />
                <form action="/users" method="POST">
                    <button>Create New User</button>
                </form>
                <form action="/users/deleteAll" method="POST">
                    <button>Delete all users</button>
                </form>
                <ul>
                    {this.state.data.map(user =>
                        <div key={user._id}>
                            <h3>User ID: {user._id}</h3>
                            {/* <form action={'/users/' + user._id} method="POST">
                                <p>Create Coupon</p>
                                <label>Store Name</label>
                                <input type="text"></input><br/>
                                <label>Store URL</label>
                                <input type="text"></input><br/>
                                <label>Code</label>
                                <input type="text"></input><br/>
                                <button>Submit</button>
                            </form> */}
                            <ul>
                            {user.coupons.length ? user.coupons.map(coupon => 
                                <li>
                                    <p>
                                        Code: {coupon.code}<br/>
                                        Store: {coupon.storeName}<br/>
                                        URL: {coupon.storeURL}<br/>
                                    </p>
                                </li>
                            ) : <p>No Coupons found</p>} 
                            </ul>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default Dashboard;