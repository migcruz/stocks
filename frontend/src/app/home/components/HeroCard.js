import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

const src = "http://cdn.dota2.com/apps/dota2/images/heroes/queenofpain_vert.jpg";

class HeroCard extends React.Component {
	constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


	render() {
        const staticRoot = window.django.urls.staticRoot;		
    	return (
            <div className="HeroCard-card">
                <Card color="blue" image={src} centered/>
            </div>
    	);
  	}
}

export default HeroCard;

{/* https://www.reddit.com/r/DotA2/comments/27d6vl/dota_2_animated_hero_portraits/ 

<div className="HeroCard-card">
                <Card color="blue" centered>
                    <div className="HeroCard-avatar">
                        <Image src="http://cdn.dota2.com/apps/dota2/images/heroes/queenofpain_vert.jpg" centered/>
                    </div>
                    <Card.Content>
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            10 Friends
                        </a>
                    </Card.Content>
                </Card>
            </div>  
        */}