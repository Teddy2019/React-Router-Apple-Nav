import React from 'react';
import MacNav from './macNav';
import { Route} from 'react-router-dom';
import Macbook from './Macbook';
import  MacHome from './macHome';

class Mac extends React.Component {
    constructor(props) {
        super(props);
    }
 render() {
     return (
         <div>
             <MacNav />
             <MacHome />
             <Route path='/macbook' exact render={()=> <Macbook />} />
         </div>
     )
 }
}
export default Mac;