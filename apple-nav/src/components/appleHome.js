import React from 'react';
import appleHome from '../images/appleHome.jpg';

function AppleHome() {
    return (
        <div>
            <div>
              <h1>iPhone XR from $19.99/mo. or $479.</h1>
              <h3>Two great ways to buy. Just trade in your current </h3>
              <h4>iPhone online or at an Apple Store.*</h4>
            </div>

            <img src={appleHome} alt={'home'} ></img>
        </div>
    )
}

export default AppleHome;