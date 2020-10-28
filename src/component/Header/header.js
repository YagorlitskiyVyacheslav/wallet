import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div>logo</div>
                <div>
                    <p>Name</p>
                    <button type='button'>Logout</button>
                </div>
            </header>
        )
    }
}