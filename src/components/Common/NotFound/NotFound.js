import React from 'react'
import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Oops! Nothing was found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <Link to="/">Return to homepage</Link></p>
            </div>
        </div>
    )
}