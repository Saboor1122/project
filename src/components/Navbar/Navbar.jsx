import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { IoIosArrowDown } from 'react-icons/io';
import './Navbar.css';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };
console.log(activeDropdown);
    return (
        <div className='navbar'>
            <div className='navbar-right'>
                <img src={logo} alt='' />
            </div>
            <div className='navbar-middle'>
                <ul>
                    <li onClick={() => handleDropdownToggle(1)}>
                        Learn<IoIosArrowDown />
                        {activeDropdown === 1 && (
                            <div className='dropdown'>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li onClick={() => handleDropdownToggle(2)}>
                        Solution<IoIosArrowDown />
                        {activeDropdown === 2 && (
                            <div className='dropdown'>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li onClick={() => handleDropdownToggle(3)}>
                        Products<IoIosArrowDown />
                        {activeDropdown === 3 && (
                            <div className='dropdown'>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='navbar-left'>
                <ul>
                    <li>Contact Sales</li>
                </ul>
                <button className='launch'>Launch App</button>
            </div>
        </div>
    );
};

export default Navbar;
