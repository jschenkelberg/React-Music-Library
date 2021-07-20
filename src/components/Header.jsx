import React from 'react';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titlebar-nav col-align">                
                    <h1>Music Library</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;