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
    {key: "Abaddon", value: ["Abaddon", `${staticRoot}dota2assets/img/heroes/abaddon.png`]},
    {key: "Alchemist", value: ["Alchemist", `${staticRoot}dota2assets/img/heroes/alchemist.png`]},
    {key: "Ancient Apparition", value: ["Ancient_Apparition", `${staticRoot}dota2assets/img/heroes/ancient_apparition.png`]},
    {key: "Anti-Mage", value: ["Anti-Mage", `${staticRoot}dota2assets/img/heroes/antimage.png`]},
    {key: "Arc Warden", value: ["Arc_Warden", `${staticRoot}dota2assets/img/heroes/arc_warden.png`]},
    {key: "Axe", value: ["Axe", `${staticRoot}dota2assets/img/heroes/axe.png`]},
    {key: "Bane", value: ["Bane", `${staticRoot}dota2assets/img/heroes/bane.png`]},
    {key: "Batrider", value: ["Batrider", `${staticRoot}dota2assets/img/heroes/batrider.png`]},
    {key: "Beastmaster", value: ["Beastmaster", `${staticRoot}dota2assets/img/heroes/beastmaster.png`]},
    {key: "Bloodseeker", value: ["Bloodseeker", `${staticRoot}dota2assets/img/heroes/bloodseeker.png`]},
    {key: "Bounty Hunter", value: ["Bounty_Hunter", `${staticRoot}dota2assets/img/heroes/bounty_hunter.png`]},
    {key: "Brewmaster", value: ["Brewmaster", `${staticRoot}dota2assets/img/heroes/brewmaster.png`]},
    {key: "Bristleback", value: ["Bristleback", `${staticRoot}dota2assets/img/heroes/bristleback.png`]},
    {key: "Broodmother", value: ["Broodmother", `${staticRoot}dota2assets/img/heroes/broodmother.png`]},
    {key: "Centaur Warrunner", value: ["Centaur_Warrunner", `${staticRoot}dota2assets/img/heroes/centaur.png`]},
    {key: "Chaos Knight", value: ["Chaos_Knight", `${staticRoot}dota2assets/img/heroes/chaos_knight.png`]},
    {key: "Chen", value: ["Chen", `${staticRoot}dota2assets/img/heroes/chen.png`]},
    {key: "Clinkz", value: ["Clinkz", `${staticRoot}dota2assets/img/heroes/clinkz.png`]},
    {key: "Clockwerk", value: ["Clockwerk", `${staticRoot}dota2assets/img/heroes/rattletrap.png`]},
    {key: "Crystal Maiden", value: ["Crystal_Maiden", `${staticRoot}dota2assets/img/heroes/crystal_maiden.png`]},
    {key: "Dark Seer", value: ["Dark_Seer", `${staticRoot}dota2assets/img/heroes/dark_seer.png`]},
    {key: "Dazzle", value: ["Dazzle", `${staticRoot}dota2assets/img/heroes/dazzle.png`]},
    {key: "Death Prophet", value: ["Death_Prophet", `${staticRoot}dota2assets/img/heroes/death_prophet.png`]},
    {key: "Disruptor", value: ["Disruptor", `${staticRoot}dota2assets/img/heroes/disruptor.png`]},
    {key: "Doom", value: ["Doom", `${staticRoot}dota2assets/img/heroes/doom_bringer.png`]},
    {key: "Dragon Knight", value: ["Dragon_Knight", `${staticRoot}dota2assets/img/heroes/dragon_knight.png`]},
    {key: "Drow Ranger", value: ["Drow_Ranger", `${staticRoot}dota2assets/img/heroes/drow_ranger.png`]},
    {key: "Earth Spirit", value: ["Earth_Spirit", `${staticRoot}dota2assets/img/heroes/earth_spirit.png`]},
    {key: "Earthshaker", value: ["Earthshaker", `${staticRoot}dota2assets/img/heroes/earthshaker.png`]},
    {key: "Elder Titan", value: ["Elder_Titan", `${staticRoot}dota2assets/img/heroes/elder_titan.png`]},
    {key: "Ember Spirit", value: ["Ember_Spirit", `${staticRoot}dota2assets/img/heroes/ember_spirit.png`]},
    {key: "Enchantress", value: ["Enchantress", `${staticRoot}dota2assets/img/heroes/enchantress.png`]},
    {key: "Enigma", value: ["Enigma", `${staticRoot}dota2assets/img/heroes/enigma.png`]},
    {key: "Faceless Void", value: ["Faceless_Void", `${staticRoot}dota2assets/img/heroes/faceless_void.png`]},
    {key: "Gyrocopter", value: ["Gyrocopter", `${staticRoot}dota2assets/img/heroes/gyrocopter.png`]},
    {key: "Huskar", value: ["Huskar", `${staticRoot}dota2assets/img/heroes/huskar.png`]},
    {key: "Invoker", value: ["Invoker", `${staticRoot}dota2assets/img/heroes/invoker.png`]},
    {key: "Io", value: ["Io", `${staticRoot}dota2assets/img/heroes/wisp.png`]},
    {key: "Jakiro", value: ["Jakiro", `${staticRoot}dota2assets/img/heroes/jakiro.png`]},
    {key: "Juggernaut", value: ["Juggernaut", `${staticRoot}dota2assets/img/heroes/juggernaut.png`]},
    {key: "Keeper of the Light", value: ["Keeper_of_the_Light", `${staticRoot}dota2assets/img/heroes/keeper_of_the_light.png`]},
    {key: "Kunkka", value: ["Kunkka", `${staticRoot}dota2assets/img/heroes/kunkka.png`]},
    {key: "Legion Commander", value: ["Legion_Commander", `${staticRoot}dota2assets/img/heroes/legion_commander.png`]},
    {key: "Leshrac", value: ["Leshrac", `${staticRoot}dota2assets/img/heroes/leshrac.png`]},
    {key: "Lich", value: ["Lich", `${staticRoot}dota2assets/img/heroes/lich.png`]},
    {key: "Lifestealer", value: ["Lifestealer", `${staticRoot}dota2assets/img/heroes/life_stealer.png`]},
    {key: "Lina", value: ["Lina", `${staticRoot}dota2assets/img/heroes/lina.png`]},
    {key: "Lion", value: ["Lion", `${staticRoot}dota2assets/img/heroes/lion.png`]},
    {key: "Lone Druid", value: ["Lone_Druid", `${staticRoot}dota2assets/img/heroes/lone_druid.png`]},
    {key: "Luna", value: ["Luna", `${staticRoot}dota2assets/img/heroes/luna.png`]},
    {key: "Lycan", value: ["Lycan", `${staticRoot}dota2assets/img/heroes/lycan.png`]},
    {key: "Magnus", value: ["Magnus", `${staticRoot}dota2assets/img/heroes/magnataur.png`]},
    {key: "Medusa", value: ["Medusa", `${staticRoot}dota2assets/img/heroes/medusa.png`]},
    {key: "Meepo", value: ["Meepo", `${staticRoot}dota2assets/img/heroes/meepo.png`]},
    {key: "Mirana", value: ["Mirana", `${staticRoot}dota2assets/img/heroes/mirana.png`]},
    {key: "Monkey King", value: ["Monkey_King", `${staticRoot}dota2assets/img/heroes/monkey_king.png`]},
    {key: "Morphling", value: ["Morphling", `${staticRoot}dota2assets/img/heroes/morphling.png`]},
    {key: "Naga Siren", value: ["Naga_Siren", `${staticRoot}dota2assets/img/heroes/naga_siren.png`]},
    {key: "Nature's Prophet", value: ["Natures_Prophet", `${staticRoot}dota2assets/img/heroes/furion.png`]},
    {key: "Necrophos", value: ["Necrophos", `${staticRoot}dota2assets/img/heroes/necrolyte.png`]},
    {key: "Night Stalker", value: ["Night_Stalker", `${staticRoot}dota2assets/img/heroes/night_stalker.png`]},
    {key: "Nyx Assassin", value: ["Nyx_Assassin", `${staticRoot}dota2assets/img/heroes/nyx_assassin.png`]},
    {key: "Ogre Magi", value: ["Ogre_Magi", `${staticRoot}dota2assets/img/heroes/ogre_magi.png`]},
    {key: "Omniknight", value: ["Omniknight", `${staticRoot}dota2assets/img/heroes/omniknight.png`]},
    {key: "Oracle", value: ["Oracle", `${staticRoot}dota2assets/img/heroes/oracle.png`]},
    {key: "Outworld Devourer", value: ["Outworld_Devourer", `${staticRoot}dota2assets/img/heroes/obsidian_destroyer.png`]},
    {key: "Phantom Assassin", value: ["Phantom_Assassin", `${staticRoot}dota2assets/img/heroes/phantom_assassin.png`]},
    {key: "Phantom Lancer", value: ["Phantom_Lancer", `${staticRoot}dota2assets/img/heroes/phantom_lancer.png`]},
    {key: "Phoenix", value: ["Phoenix", `${staticRoot}dota2assets/img/heroes/phoenix.png`]},
    {key: "Puck", value: ["Puck", `${staticRoot}dota2assets/img/heroes/puck.png`]},
    {key: "Pudge", value: ["Pudge", `${staticRoot}dota2assets/img/heroes/pudge.png`]},
    {key: "Pugna", value: ["Pugna", `${staticRoot}dota2assets/img/heroes/pugna.png`]},
    {key: "Queen of Pain", value: ["Queen_of_Pain", `${staticRoot}dota2assets/img/heroes/queenofpain.png`]},
    {key: "Razor", value: ["Razor", `${staticRoot}dota2assets/img/heroes/razor.png`]},
    {key: "Riki", value: ["Riki", `${staticRoot}dota2assets/img/heroes/riki.png`]},
    {key: "Rubick", value: ["Rubick", `${staticRoot}dota2assets/img/heroes/rubick.png`]},
    {key: "Sand King", value: ["Sand_King", `${staticRoot}dota2assets/img/heroes/sand_king.png`]},
    {key: "Shadow Demon", value: ["Shadow_Demon", `${staticRoot}dota2assets/img/heroes/shadow_demon.png`]},
    {key: "Shadow Fiend", value: ["Shadow_Fiend", `${staticRoot}dota2assets/img/heroes/nevermore.png`]},
    {key: "Shadow Shaman", value: ["Shadow_Shaman", `${staticRoot}dota2assets/img/heroes/shadow_shaman.png`]},
    {key: "Silencer", value: ["Silencer", `${staticRoot}dota2assets/img/heroes/silencer.png`]},
    {key: "Skywrath Mage", value: ["Skywrath_Mage", `${staticRoot}dota2assets/img/heroes/skywrath_mage.png`]},
    {key: "Slardar", value: ["Slardar", `${staticRoot}dota2assets/img/heroes/slardar.png`]},
    {key: "Slark", value: ["Slark", `${staticRoot}dota2assets/img/heroes/slark.png`]},
    {key: "Sniper", value: ["Sniper", `${staticRoot}dota2assets/img/heroes/sniper.png`]},
    {key: "Spectre", value: ["Spectre", `${staticRoot}dota2assets/img/heroes/spectre.png`]},
    {key: "Spirit Breaker", value: ["Spirit_Breaker", `${staticRoot}dota2assets/img/heroes/spirit_breaker.png`]},
    {key: "Storm Spirit", value: ["Storm_Spirit", `${staticRoot}dota2assets/img/heroes/storm_spirit.png`]},
    {key: "Sven", value: ["Sven", `${staticRoot}dota2assets/img/heroes/sven.png`]},
    {key: "Techies", value: ["Techies", `${staticRoot}dota2assets/img/heroes/techies.png`]},
    {key: "Templar Assassin", value: ["Templar_Assassin", `${staticRoot}dota2assets/img/heroes/templar_assassin.png`]},
    {key: "Terrorblade", value: ["Terrorblade", `${staticRoot}dota2assets/img/heroes/terrorblade.png`]},
    {key: "Tidehunter", value: ["Tidehunter", `${staticRoot}dota2assets/img/heroes/tidehunter.png`]},
    {key: "Timbersaw", value: ["Timbersaw", `${staticRoot}dota2assets/img/heroes/shredder.png`]},
    {key: "Tinker", value: ["Tinker", `${staticRoot}dota2assets/img/heroes/tinker.png`]},
    {key: "Tiny", value: ["Tiny", `${staticRoot}dota2assets/img/heroes/tiny.png`]},
    {key: "Treant Protector", value: ["Treant_Protector", `${staticRoot}dota2assets/img/heroes/treant.png`]},
    {key: "Troll Warlord", value: ["Troll_Warlord", `${staticRoot}dota2assets/img/heroes/troll_warlord.png`]},
    {key: "Tusk", value: ["Tusk", `${staticRoot}dota2assets/img/heroes/tusk.png`]},
    {key: "Underlord", value: ["Underlord", `${staticRoot}dota2assets/img/heroes/abyssal_underlord.png`]},
    {key: "Undying", value: ["Undying", `${staticRoot}dota2assets/img/heroes/undying.png`]},
    {key: "Ursa", value: ["Ursa", `${staticRoot}dota2assets/img/heroes/ursa.png`]},
    {key: "Vengeful Spirit", value: ["Vengeful_Spirit", `${staticRoot}dota2assets/img/heroes/vengefulspirit.png`]},
    {key: "Venomancer", value: ["Venomancer", `${staticRoot}dota2assets/img/heroes/venomancer.png`]},
    {key: "Viper", value: ["Viper", `${staticRoot}dota2assets/img/heroes/viper.png`]},
    {key: "Visage", value: ["Visage", `${staticRoot}dota2assets/img/heroes/visage.png`]},
    {key: "Warlock", value: ["Warlock", `${staticRoot}dota2assets/img/heroes/warlock.png`]},
    {key: "Weaver", value: ["Weaver", `${staticRoot}dota2assets/img/heroes/weaver.png`]},
    {key: "Windranger", value: ["Windranger", `${staticRoot}dota2assets/img/heroes/windrunner.png`]},
    {key: "Winter Wyvern", value: ["Winter_Wyvern", `${staticRoot}dota2assets/img/heroes/winter_wyvern.png`]},
    {key: "Witch Doctor", value: ["Witch_Doctor", `${staticRoot}dota2assets/img/heroes/witch_doctor.png`]},
    {key: "Wraith King", value: ["Wraith_King", `${staticRoot}dota2assets/img/heroes/skeleton_king.png`]},
    {key: "Zeus", value: ["Zeus", `${staticRoot}dota2assets/img/heroes/zuus.png`]}
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

