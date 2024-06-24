import React, { useState } from 'react';
import { HiSearch, HiChevronDown } from 'react-icons/hi';
import img from './logo.jpeg';
import links from './links';
import './Navbar.css';

const reactIconStyle = { width: '20px', height: '20px', color: '#9e9ea7', cursor: 'pointer' };

function DesktopNavbar() {
    const [showDropdown, setShowDropdown] = useState(null);

    const toggleDropdown = (name) => {
        if (showDropdown === name) {
            setShowDropdown(null);
        } else {
            setShowDropdown(name);
        }
    };

    return (
        <div className='nav-container'>
            <nav className='nav-desktop'>
                <ul className='desktop-menu'>
                    {links.map((link) => (
                        <li 
                            key={link.name} 
                            onMouseEnter={() => toggleDropdown(link.name)} 
                            onMouseLeave={() => toggleDropdown(link.name)}
                        >
                            <a href={link.route}>
                                {link.name}
                                {(link.name === 'Find designers' || link.name === 'Courses') && <HiChevronDown style={{ marginLeft: '5px' }} />}
                            </a>
                            {link.name === 'Find designers' && showDropdown === 'Find designers' && (
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a href='/find-designers/topic1'>Designer Search</a>
                                        <p className='note'>Quickly find your next designer</p>
                                    </li>
                                    <li>
                                        <a href='/find-designers/topic2'>Post a job</a>
                                        <p className='note'>The #1 job board for design talent</p>
                                    </li>
                                </ul>
                            )}
                            {link.name === 'Courses' && showDropdown === 'Courses' && (
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a href='/courses/topic1'>UX Diploma</a>
                                        <p className='note'>Learn UX from scratch in 6 months</p>
                                    </li>
                                    <li>
                                        <a href='/courses/topic2'>UI certificate</a>
                                        <p className='note'>12-week UI skill building for designers</p>
                                    </li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='nav-logo'>
                <img src={img} alt='dribbble img' />
            </div>
            <div className='nav-actions'>
                <div className='search-container'>
                    <HiSearch style={reactIconStyle} />
                    <input type='text' placeholder='Search...' className='search-input' />
                </div>
                <div className="avatar">
                    L
                </div>
                {/* <ul className='desktop-menu-btns'>
                    <li>Login</li>
                </ul> */}
            </div>
        </div>
    );
}

export default function Navbar() {
    return (
        <header>
            <DesktopNavbar />
        </header>
    );
}

