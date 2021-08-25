import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo">Virtual Checkin</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/new-customer">Add Customer</a></li>
                                 <li><a href="/">View Waitlist</a></li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
