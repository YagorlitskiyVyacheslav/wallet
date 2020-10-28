import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div>logo
                    <div>name logo</div>
                </div>
                <div>
                    <p>Name</p>
                    <button type='button'>Logout</button>
                </div>
            </header>
        )
    }
}