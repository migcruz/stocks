import React from 'react';
import { Image, Item, Grid } from "semantic-ui-react";

import PriceChart from './components/PriceChart';
import axios from 'axios';

const staticRoot = window.django.urls.staticRoot;

{/* async loading of webms dont work so paths must be stored in js file */}
const hero_portrait_paths = {
    "AAPL": `${staticRoot}aapl.svg`
};


class CompanyPage extends React.Component {

	constructor(props) {
        super(props);
        this.state = {fetched: false};
        this.company_url = this.props.match.params.company;
        this.logo_path = hero_portrait_paths[this.company_url][1];
        this.company_json = {};

    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        {/*must be https for heroku*/}
        axios.get(`http://127.0.0.1:8000/api/companies/${this.company_url}/?format=json`) 
          .then(res => {
            this.company_json = res.data;
            this.setState({fetched: true});
        });
    }
	
  	render() {
        var comp;
        var time_series_comp;
        var time_series_price;
        if (this.state.fetched){
            comp = null
            time_series_comp = null
            time_series_price= null;
            
        }
        else {
            comp = null;
            time_series_comp = null;
            time_series_price = null;
        }

        return (
            <div style={{paddingTop: '40px'}}>
                <div>
                    <h4>BAR</h4>
                </div>
                <div style={{width: '800px', margin: '10px auto 0'}}>
                    <PriceChart/>
                </div>
                <div>
                    <h4>TEST</h4>
                </div>


                {/* <div className="HeroPage-header">
                    <Grid>
                        <Grid.Row columns={3} key="view_row" centered>
                            <Grid.Column key="left_view">
                                <LeftMenu handleItemClick={this.handleLeftItemClick} activeItem={leftActiveItem}/>
                                { this.state.leftActiveItem === 'Foo' &&
                                    <div style={{width: '400px', margin: '10px auto 0'}}>
                                        {hero_roles}
                                    </div>
                                }
                            </Grid.Column>
                            <Grid.Column key="mid_view">
                                <div style={{textAlign: 'center'}}>
                                    <h1>{this.hero_json["localized_name"]}</h1>
                                        <h4>{roles}</h4>
                                        <video autoPlay loop preload>
                                            <source src={this.portrait_path} type="video/webm"/>
                                        </video>
                                        <div style={{paddingTop: '10px'}}>
                                        <div className="HeroPage-health_bar">
                                            <h5>{`${this.hero_json["base_health"]+(health_per_str*this.hero_json["base_str"])}`}</h5>
                                        </div>
                                        <div className="HeroPage-mana_bar">
                                            <h5>{`${this.hero_json["base_mana"]+(mana_per_int*this.hero_json["base_int"])}`}</h5>
                                        </div>
                                    </div>
                                    <div style={{width: '234px', margin: '10px auto 0'}}>
                                        <Attributes
                                            str={`${this.hero_json["base_str"]} + ${parseFloat(this.hero_json["str_gain"]).toFixed(2).toString()}`} 
                                            agi={`${this.hero_json["base_agi"]} + ${parseFloat(this.hero_json["agi_gain"]).toFixed(2).toString()}`}
                                            int={`${this.hero_json["base_int"]} + ${parseFloat(this.hero_json["int_gain"]).toFixed(2).toString()}`}
                                            />
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column key="right_view">
                                <RightMenu handleItemClick={this.handleRightItemClick} activeItem={rightActiveItem}/>
                                { this.state.rightActiveItem === 'Rofl' &&
                                    <div style={{width: '400px', margin: '10px auto 0'}}>
                                        {hero_roles}
                                    </div>
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <div className="HeroPage-abilities">
                        {comp}
                    </div>
                </div>
                <div className={`HeroPage-strip_${this.hero_json["primary_attr"]}`}/>                 
                <h1> LMAO </h1>
                <div style={{width: '400px', margin: '10px auto 0'}}>
                    {hero_roles}
                </div> */}
            </div> 
        );
    	
	    
  	}
}

export default CompanyPage;


{/*<video src={`${staticRoot}dota2assets/npc_dota_hero_queenofpain.webm`} autoplay loop/>*/}

{/*<video autoplay loop>
  					<source src={`${staticRoot}dota2assets/npc_dota_hero_queenofpain.webm`} type="video/webm"/>
				</video>*/}



{/*

                <div style={{textAlign: 'center'}}>
                        <h1>{this.hero_json["localized_name"]}</h1>
                        <h4>{roles}</h4>
                        <video autoPlay loop preload>
                            <source src={this.portrait_path} type="video/webm"/>
                        </video
                        <div style={{paddingTop: '10px'}}>
                        <div className="HeroPage-health_bar">
                            <h5>{`${this.hero_json["base_health"]+(health_per_str*this.hero_json["base_str"])}`}</h5>
                        </div>
                        <div className="HeroPage-mana_bar">
                            <h5>{`${this.hero_json["base_mana"]+(mana_per_int*this.hero_json["base_int"])}`}</h5>
                        </div>
                    </div>
                    <div style={{width: '234px', margin: '10px auto 0'}}>
                        <Attributes
                            str={`${this.hero_json["base_str"]} + ${parseFloat(this.hero_json["str_gain"]).toFixed(2).toString()}`} 
                            agi={`${this.hero_json["base_agi"]} + ${parseFloat(this.hero_json["agi_gain"]).toFixed(2).toString()}`}
                            int={`${this.hero_json["base_int"]} + ${parseFloat(this.hero_json["int_gain"]).toFixed(2).toString()}`}
                            />
                    </div>
                    <div className="HeroPage-abilities">
                        {comp}
                    </div>
                </div>
                
                
                https://webbridgestudios.com/how-to-create-a-css-noise-background-with-a-gradient/
                http://webdesignerwall.com/tutorials/css3-image-styles




                http://127.0.0.1:8000/api/heroes/${this.hero_id}/?format=json
                    */}