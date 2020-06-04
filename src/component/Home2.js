import React, {Component} from 'react';
import SalleService from '../service/salle.service';
import '../css/Map.css';
import Materialize from "materialize-css";
import Map from './Map';
import Sidebar from './Sidebar';
import RightSideBar from './RightSideBar';

class Home2 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            salles:[],
            sallesBySearching: []
        };

        let elems = document.querySelectorAll('.tooltipped');
        Materialize.Tooltip.init(elems,{});
    }

    async componentDidMount(){
        let response = await SalleService.list(); // Avoir la liste des salles
            if(response.ok){
                let data = await response.json();
                this.setState({
                    salles: data.salles,
                });
            }else{
                console.log(response.error);
            }

            var dataSalle = {}; // Remplir un obj pour l'autocomplete
            for (var i = 0; i < this.state.salles.length; i++) {
                dataSalle[this.state.salles[i].nom] = this.state.salles[i].image;
            }

        // Autocomplete options
        let elems = document.querySelectorAll('.autocomplete');
        Materialize.Autocomplete.init(elems, {
            data: dataSalle,
            limit: 7,
            onAutocomplete: () =>{
                this.search();
            }
        });
    }

    async search() { // Recherche une salle via l'input text
        var input, filter, li, a, i, txtValue;
        input = document.getElementById("autocomplete-input");
        filter = input.value.toUpperCase();
        let card = document.getElementById("result");
        li = card.getElementsByClassName("hit");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByClassName("title")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }

        if(document.getElementById('autocomplete-input').value !== ""){
            let response = await SalleService.searchMap(document.getElementById('autocomplete-input').value); // Avoir la liste des salles en fonction de la recherche
                if(response.ok){
                    let data = await response.json();
                    this.setState({
                        sallesBySearching: data.salles,
                    });
                }else{
                    console.log(response);
                }
        }else{
            let response = await SalleService.list(); // Avoir la liste des salles
            if(response.ok){
                let data = await response.json();
                this.setState({
                    sallesBySearching: data.salles,
                });
            }else{
                console.log(response.error);
            }
        }
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <div className="col s6">
                    <div className="row" style={{left: '50%'}}>
                        <div className="input-field col s4 searchBar">
                            <i className="material-icons prefix">search</i>
                            <input type="text" id="autocomplete-input" className="autocomplete" onKeyUp={this.search.bind(this)}/>
                            <label htmlFor="autocomplete-input">Salle de sport...</label>
                        </div>
                    </div>
                    <Map search={this.state.sallesBySearching}/>
                </div>
                <RightSideBar/>
            </div>
        )
    }

}

export default Home2;