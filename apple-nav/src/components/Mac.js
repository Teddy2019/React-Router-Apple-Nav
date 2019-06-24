import React from 'react';
import mac1 from '../images/mac1.JPG';
import mac2 from '../images/mac2.JPG';
import MacNav from './macNav';
import { Route} from 'react-router-dom';
import Macbook from './Macbook';

class Mac extends React.Component {
    constructor(props) {
        super(props);
    }
 render() {
     return (
         <div>
             <MacNav />
             <h1>Mac Pro</h1>
             <h1>Power to change </h1>
             <h1>everything.</h1>
             <img src={mac1} alt='mac book' />
             <h3>Pro Display XDR</h3>
             <h1>Believing is seeing.</h1>
             <img src={mac2} alt='mac 3d' />
             <Route path='/macbook' exact render={()=> <Macbook />} />
         </div>
     )
 }
}
export default Mac;