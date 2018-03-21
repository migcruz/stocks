import React from "react";
import {Grid, Image, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

{/*import axios from "axios";
const API_HOST = "http://cdn.dota2.com";
const staticRoot2 = window.django.urls.staticRoot;
var jsonres;
axios.get(`${staticRoot2}dota2assets/heroes.json`).then(result=>{console.log(result.data[1]);});
console.log("HELLO");
console.log(jsonres[1]);*/}


const staticRoot = window.django.urls.staticRoot;
const hero_icon_paths = [
    {key: "Apple Inc.", value: ["AAPL", `${staticRoot}aapl.svg`]}
];





class HeroGrid extends React.Component {
    constructor(props) {
        super(props);
        this.rows = [];
    }

    componentWillMount() { 
        var row = [];
        var row_list = [];
        var j = 0;
        for (var i = 0; i < hero_icon_paths.length; i++){
            if (j > 14){
                row_list.push(row);
                row = [];
                j = 0;
            }       
            row.push(
                <Grid.Column key={hero_icon_paths[i].key}>
                    <div className="HeroGrid-wrapper">
                        <div className="HeroGrid-name">
                            {/* <NavLink to={"/app/"+hero_icon_paths[i].value[0]} activeStyle={{fontWeight: 'bold',color: 'red'}}>{hero_icon_paths[i].key}</NavLink> */}
                            <h5>{hero_icon_paths[i].key}</h5>
                        </div>
                        <div className="HeroGrid-hero">
                            <Image src={hero_icon_paths[i].value[1]} as={NavLink} to={"/app/"+hero_icon_paths[i].value[0]}/>
                        </div>
                    </div>
                </Grid.Column>
            );
            j++;
        }
        row_list.push(row);

        for (var i = 0; i < row_list.length; i++){
            this.rows.push(
                <Grid.Row columns={15} key={i.toString()} centered>
                    {row_list[i]}
                </Grid.Row>
            );
        }
    }


	render() {		
    	return (
			<Grid>
		  		{this.rows}
			</Grid>
    	);
  	}
}
 
export default HeroGrid;

