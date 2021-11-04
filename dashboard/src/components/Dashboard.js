import React, { Component } from 'react';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {database: []}
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(database => this.setState({ database }));
    }

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <ul>
                    {this.state.database.map(user =>
                        <li key={user.id}>{user.username}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Dashboard;