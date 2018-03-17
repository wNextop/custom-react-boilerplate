import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/todo">To-do app</Link></li>
                </ul>
            </div>
        )
    }
}