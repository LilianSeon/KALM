import React, {Component} from 'react';
import Map from './Map';
import Sidebar from './Sidebar';
import RightSideBar from './RightSideBar';

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
                <div className="col s6">
                    <Map/>
                </div>
                <RightSideBar/>
            </div>
        )
    }

}

export default Home2;