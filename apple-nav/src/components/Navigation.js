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
                <img src={appimg} alt={`apple`} />
                <img src={macimg } alt={`mac`} />
                <img src={ipadimg} alt={'ipad'} />
                <img src={iphoneimg} alt={`iphone`} />
                <img src={watchimg} alt={`watch`} />
                <img src={tvimg} alt={`tv`} />
                <img src={musicimg} alt={`music`} />
                <img src={supportimg} alt={`support`} />
                <img src={searchimg} alt={`search`} />
                <img src={bagimg} alt={`bag`} />
            </div>
        )
    }
};
export default Navigation;