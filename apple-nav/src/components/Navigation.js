import React from 'react';
import appimg from '../images/app.png';
import macimg from '../images/mac.png';
import ipadimg from '../images/ipad.png';
import iphoneimg from '../images/iphone.png';
import watchimg from '../images/watch.png';
import tvimg from '../images/tv.png';
import musicimg from '../images/music.png';
import supportimg from '../images/support.png';
import searchimg from '../images/search.png';
import bagimg from '../images/bag.png';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="Nav">
                <img className='Navimg' src={appimg} alt={`apple`} />
                <img className='Navimg'src={macimg } alt={`mac`} />
                <img className='Navimg'src={ipadimg} alt={'ipad'} />
                <img className='Navimg'src={iphoneimg} alt={`iphone`} />
                <img className='Navimg'src={watchimg} alt={`watch`} />
                <img className='Navimg'src={tvimg} alt={`tv`} />
                <img className='Navimg'src={musicimg} alt={`music`} />
                <img className='Navimg'src={supportimg} alt={`support`} />
                <img className='Navimg'src={searchimg} alt={`search`} />
                <img className='Navimg bag'src={bagimg} alt={`bag`} />
            </div>
        )
    }
};
export default Navigation;