import React from 'react';
import { Image, Item, Grid } from "semantic-ui-react";
import Attributes from './components/Attributes';
import Abilities from './components/Abilities';
import Roles from './components/Roles';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
import axios from 'axios';

const health_per_str = 20;
const mana_per_int = 11;
const staticRoot = window.django.urls.staticRoot;

{/* async loading of webms dont work so paths must be stored in js file */}
const hero_portrait_paths = {
	"Abaddon": [102, `${staticRoot}dota2assets/webm/heroes/abaddon.webm`],
    "Alchemist": [73, `${staticRoot}dota2assets/webm/heroes/alchemist.webm`],
    "Ancient_Apparition": [68, `${staticRoot}dota2assets/webm/heroes/ancient_apparition.webm`],
    "Anti-Mage": [1, `${staticRoot}dota2assets/webm/heroes/antimage.webm`],
    "Arc_Warden": [113, `${staticRoot}dota2assets/webm/heroes/arc_warden.webm`],
    "Axe": [2, `${staticRoot}dota2assets/webm/heroes/axe.webm`],
    "Bane": [3, `${staticRoot}dota2assets/webm/heroes/bane.webm`],
    "Batrider": [65, `${staticRoot}dota2assets/webm/heroes/batrider.webm`],
    "Beastmaster": [38, `${staticRoot}dota2assets/webm/heroes/beastmaster.webm`],
    "Bloodseeker": [4, `${staticRoot}dota2assets/webm/heroes/bloodseeker.webm`],
    "Bounty_Hunter": [62, `${staticRoot}dota2assets/webm/heroes/bounty_hunter.webm`],
    "Brewmaster": [78, `${staticRoot}dota2assets/webm/heroes/brewmaster.webm`],
    "Bristleback": [99, `${staticRoot}dota2assets/webm/heroes/bristleback.webm`],
    "Broodmother": [61, `${staticRoot}dota2assets/webm/heroes/broodmother.webm`],
    "Centaur_Warrunner": [96, `${staticRoot}dota2assets/webm/heroes/centaur.webm`],
    "Chaos_Knight": [81, `${staticRoot}dota2assets/webm/heroes/chaos_knight.webm`],
    "Chen": [66, `${staticRoot}dota2assets/webm/heroes/chen.webm`],
    "Clinkz": [56, `${staticRoot}dota2assets/webm/heroes/clinkz.webm`],
    "Clockwerk": [51, `${staticRoot}dota2assets/webm/heroes/rattletrap.webm`],
    "Crystal_Maiden": [5, `${staticRoot}dota2assets/webm/heroes/crystal_maiden.webm`],
    "Dark_Seer": [55, `${staticRoot}dota2assets/webm/heroes/dark_seer.webm`],
    "Dazzle": [50, `${staticRoot}dota2assets/webm/heroes/dazzle.webm`],
    "Death_Prophet": [43, `${staticRoot}dota2assets/webm/heroes/death_prophet.webm`],
    "Disruptor": [87, `${staticRoot}dota2assets/webm/heroes/disruptor.webm`],
    "Doom": [69, `${staticRoot}dota2assets/webm/heroes/doom_bringer.webm`],
    "Dragon_Knight": [49, `${staticRoot}dota2assets/webm/heroes/dragon_knight.webm`],
    "Drow_Ranger": [6, `${staticRoot}dota2assets/webm/heroes/drow_ranger.webm`],
    "Earth_Spirit": [107, `${staticRoot}dota2assets/webm/heroes/earth_spirit.webm`],
    "Earthshaker": [7, `${staticRoot}dota2assets/webm/heroes/earthshaker.webm`],
    "Elder_Titan": [103, `${staticRoot}dota2assets/webm/heroes/elder_titan.webm`],
    "Ember_Spirit": [106, `${staticRoot}dota2assets/webm/heroes/ember_spirit.webm`],
    "Enchantress": [58, `${staticRoot}dota2assets/webm/heroes/enchantress.webm`],
    "Enigma": [33, `${staticRoot}dota2assets/webm/heroes/enigma.webm`],
    "Faceless_Void": [41, `${staticRoot}dota2assets/webm/heroes/faceless_void.webm`],
    "Gyrocopter": [72, `${staticRoot}dota2assets/webm/heroes/gyrocopter.webm`],
    "Huskar": [59, `${staticRoot}dota2assets/webm/heroes/huskar.webm`],
    "Invoker": [74, `${staticRoot}dota2assets/webm/heroes/invoker.webm`],
    "Io": [91, `${staticRoot}dota2assets/webm/heroes/wisp.webm`],
    "Jakiro": [64, `${staticRoot}dota2assets/webm/heroes/jakiro.webm`],
    "Juggernaut": [8, `${staticRoot}dota2assets/webm/heroes/juggernaut.webm`],
    "Keeper_of_the_Light": [90, `${staticRoot}dota2assets/webm/heroes/keeper_of_the_light.webm`],
    "Kunkka": [23, `${staticRoot}dota2assets/webm/heroes/kunkka.webm`],
    "Legion_Commander": [104, `${staticRoot}dota2assets/webm/heroes/legion_commander.webm`],
    "Leshrac": [52, `${staticRoot}dota2assets/webm/heroes/leshrac.webm`],
    "Lich": [31, `${staticRoot}dota2assets/webm/heroes/lich.webm`],
    "Lifestealer": [54, `${staticRoot}dota2assets/webm/heroes/life_stealer.webm`],
    "Lina": [25, `${staticRoot}dota2assets/webm/heroes/lina.webm`],
    "Lion": [26, `${staticRoot}dota2assets/webm/heroes/lion.webm`],
    "Lone_Druid": [80, `${staticRoot}dota2assets/webm/heroes/lone_druid.webm`],
    "Luna": [48, `${staticRoot}dota2assets/webm/heroes/luna.webm`],
    "Lycan": [77, `${staticRoot}dota2assets/webm/heroes/lycan.webm`],
    "Magnus": [97, `${staticRoot}dota2assets/webm/heroes/magnataur.webm`],
    "Medusa": [94, `${staticRoot}dota2assets/webm/heroes/medusa.webm`],
    "Meepo": [82, `${staticRoot}dota2assets/webm/heroes/meepo.webm`],
    "Mirana": [9, `${staticRoot}dota2assets/webm/heroes/mirana.webm`],
    "Monkey_King": [114, `${staticRoot}dota2assets/webm/heroes/monkey_king.webm`],
    "Morphling": [10, `${staticRoot}dota2assets/webm/heroes/morphling.webm`],
    "Naga_Siren": [89, `${staticRoot}dota2assets/webm/heroes/naga_siren.webm`],
    "Natures_Prophet": [53, `${staticRoot}dota2assets/webm/heroes/furion.webm`],
    "Necrophos": [36, `${staticRoot}dota2assets/webm/heroes/necrolyte.webm`],
    "Night_Stalker": [60, `${staticRoot}dota2assets/webm/heroes/night_stalker.webm`],
    "Nyx_Assassin": [88, `${staticRoot}dota2assets/webm/heroes/nyx_assassin.webm`],
    "Ogre_Magi": [84, `${staticRoot}dota2assets/webm/heroes/ogre_magi.webm`],
    "Omniknight": [57, `${staticRoot}dota2assets/webm/heroes/omniknight.webm`],
    "Oracle": [111, `${staticRoot}dota2assets/webm/heroes/oracle.webm`],
    "Outworld_Devourer": [76, `${staticRoot}dota2assets/webm/heroes/obsidian_destroyer.webm`],
    "Phantom_Assassin": [44, `${staticRoot}dota2assets/webm/heroes/phantom_assassin.webm`],
    "Phantom_Lancer": [12, `${staticRoot}dota2assets/webm/heroes/phantom_lancer.webm`],
    "Phoenix": [110, `${staticRoot}dota2assets/webm/heroes/phoenix.webm`],
    "Puck": [13, `${staticRoot}dota2assets/webm/heroes/puck.webm`],
    "Pudge": [14, `${staticRoot}dota2assets/webm/heroes/pudge.webm`],
    "Pugna": [45, `${staticRoot}dota2assets/webm/heroes/pugna.webm`],
    "Queen_of_Pain": [39, `${staticRoot}dota2assets/webm/heroes/queenofpain.webm`],
    "Razor": [15, `${staticRoot}dota2assets/webm/heroes/razor.webm`],
    "Riki": [32, `${staticRoot}dota2assets/webm/heroes/riki.webm`],
    "Rubick": [86, `${staticRoot}dota2assets/webm/heroes/rubick.webm`],
    "Sand_King": [16, `${staticRoot}dota2assets/webm/heroes/sand_king.webm`],
    "Shadow_Demon": [79, `${staticRoot}dota2assets/webm/heroes/shadow_demon.webm`],
    "Shadow_Fiend": [11, `${staticRoot}dota2assets/webm/heroes/nevermore.webm`],
    "Shadow_Shaman": [27, `${staticRoot}dota2assets/webm/heroes/shadow_shaman.webm`],
    "Silencer": [75, `${staticRoot}dota2assets/webm/heroes/silencer.webm`],
    "Skywrath_Mage": [101, `${staticRoot}dota2assets/webm/heroes/skywrath_mage.webm`],
    "Slardar": [28, `${staticRoot}dota2assets/webm/heroes/slardar.webm`],
    "Slark": [93, `${staticRoot}dota2assets/webm/heroes/slark.webm`],
    "Sniper": [35, `${staticRoot}dota2assets/webm/heroes/sniper.webm`],
    "Spectre": [67, `${staticRoot}dota2assets/webm/heroes/spectre.webm`],
    "Spirit_Breaker": [71, `${staticRoot}dota2assets/webm/heroes/spirit_breaker.webm`],
    "Storm_Spirit": [17, `${staticRoot}dota2assets/webm/heroes/storm_spirit.webm`],
    "Sven": [18, `${staticRoot}dota2assets/webm/heroes/sven.webm`],
    "Techies": [105, `${staticRoot}dota2assets/webm/heroes/techies.webm`],
    "Templar_Assassin": [46, `${staticRoot}dota2assets/webm/heroes/templar_assassin.webm`],
    "Terrorblade": [109, `${staticRoot}dota2assets/webm/heroes/terrorblade.webm`],
    "Tidehunter": [29, `${staticRoot}dota2assets/webm/heroes/tidehunter.webm`],
    "Timbersaw": [98, `${staticRoot}dota2assets/webm/heroes/shredder.webm`],
    "Tinker": [34, `${staticRoot}dota2assets/webm/heroes/tinker.webm`],
    "Tiny": [19, `${staticRoot}dota2assets/webm/heroes/tiny.webm`],
    "Treant_Protector": [83, `${staticRoot}dota2assets/webm/heroes/treant.webm`],
    "Troll_Warlord": [95, `${staticRoot}dota2assets/webm/heroes/troll_warlord.webm`],
    "Tusk": [100, `${staticRoot}dota2assets/webm/heroes/tusk.webm`],
    "Underlord": [108, `${staticRoot}dota2assets/webm/heroes/abyssal_underlord.webm`],
    "Undying": [85, `${staticRoot}dota2assets/webm/heroes/undying.webm`],
    "Ursa": [70, `${staticRoot}dota2assets/webm/heroes/ursa.webm`],
    "Vengeful_Spirit": [20, `${staticRoot}dota2assets/webm/heroes/vengefulspirit.webm`],
    "Venomancer": [40, `${staticRoot}dota2assets/webm/heroes/venomancer.webm`],
    "Viper": [47, `${staticRoot}dota2assets/webm/heroes/viper.webm`],
    "Visage": [92, `${staticRoot}dota2assets/webm/heroes/visage.webm`],
    "Warlock": [37, `${staticRoot}dota2assets/webm/heroes/warlock.webm`],
    "Weaver": [63, `${staticRoot}dota2assets/webm/heroes/weaver.webm`],
    "Windranger": [21, `${staticRoot}dota2assets/webm/heroes/windrunner.webm`],
    "Winter_Wyvern": [112, `${staticRoot}dota2assets/webm/heroes/winter_wyvern.webm`],
    "Witch_Doctor": [30, `${staticRoot}dota2assets/webm/heroes/witch_doctor.webm`],
    "Wraith_King": [42, `${staticRoot}dota2assets/webm/heroes/skeleton_king.webm`],
    "Zeus": [22, `${staticRoot}dota2assets/webm/heroes/zuus.webm`]
};

class HeroPage extends React.Component {

	constructor(props) {
        super(props);
        this.state = {fetched: false, leftActiveItem: 'Foo', rightActiveItem: 'Rofl'};
        this.hero_url = this.props.match.params.hero;
        this.portrait_path = hero_portrait_paths[this.hero_url][1];
        this.hero_id = hero_portrait_paths[this.hero_url][0];
        this.hero_json = {};

        this.handleLeftItemClick = (e, { name }) => this.setState({ leftActiveItem: name }) ;
        this.handleRightItemClick = (e, { name }) => this.setState({ rightActiveItem: name }) ;
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(`https://mysterious-hamlet-77399.herokuapp.com/api/heroes/${this.hero_id}/?format=json`)
          .then(res => {
            this.hero_json = res.data;
            this.setState({fetched: true});
        });
    }
	
  	render() {
        var comp;
        var hero_roles;
        var roles;
        if (this.state.fetched){
            comp = <Abilities skills={this.hero_json["abilities"]}/>
            roles = _.keys(this.hero_json["roles"]).join(" ");
            hero_roles = <Roles roles={this.hero_json["roles"]} primary_attr={this.hero_json["primary_attr"]}/>
            
        }
        else {
            hero_roles = null;
            comp = null;
            roles = null;
        }

        const { leftActiveItem } = this.state;
        const { rightActiveItem } = this.state;
        console.log(leftActiveItem);
        return (
            <div style={{paddingTop: '40px'}}>
                <div className="HeroPage-header">
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
                </div>
            </div> 
        );
    	
	    
  	}
}

export default HeroPage;


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