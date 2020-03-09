import React, {Component} from 'react';
import Map from './Map';
import Sidebar from './Sidebar';

class Home2 extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <div style={{ height: '100vh', width: '100%'}}>
                    <Map/>
                </div>
            </div>
        )
    }

}

export default Home2;