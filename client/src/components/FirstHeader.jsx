import React from 'react';

const FirstHeader = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-white bg-white shadow'>
        <div className='container'>
          {/* Navbar Brand */}
          <a className='navbar-brand' href='/'>
            MyBrand
          </a>

          {/* Navbar Toggler */}
          <button 
            className='navbar-toggler' 
            type='button' 
            data-bs-toggle='collapse' 
            data-bs-target='#navbarNav'
            aria-controls='navbarNav' 
            aria-expanded='false' 
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          {/* Collapsible Navbar Links */}
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/services'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default FirstHeader;
