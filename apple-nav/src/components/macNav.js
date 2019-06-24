import React from 'react';
import macbook from '../images/macbook.JPG';
import macbookair from '../images/macbookair.JPG';
import macbookpro from '../images/macbookpro.JPG';
import imac from '../images/imac.JPG';
import imacpro from '../images/imacpro.JPG';
import compare from '../images/compare.JPG';
import accessories from '../images/accessories.JPG';
import mojave from '../images/mojave.JPG';


function MacNav (){
    return (
        <div className='Macnavdiv'>
            <img className='Macnav' src={macbook} alt= 'macbook small' />
            <img className='Macnav' src={macbookair} alt = 'mac book air' />
            <img className='Macnav' src={macbookpro} alt = 'mac book pro' />
            <img className='Macnav' src={imac} alt = 'imac' />
            <img className='Macnav'src={imacpro} alt = 'imac pro' />
            <img className='Macnav'src={compare} alt = 'compare' />
            <img className='Macnav'src={accessories} alt = 'accessories' />
            <img className='Macnav'src={mojave} alt = 'mojave' />
        </div>
    )
}

export default MacNav;