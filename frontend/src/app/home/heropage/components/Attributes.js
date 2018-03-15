import React from 'react';
import { Image } from 'semantic-ui-react';

const staticRoot = window.django.urls.staticRoot;

class Attributes extends React.Component {

    constructor(props) {
        super(props);
    }

  	render() {

    	return (
			<div>
                <div>
                    <Image src={`${staticRoot}dota2assets/img/strength.png`} avatar />
                    <span>{this.props.str}</span>
                </div>
                <div>
                    <Image src={`${staticRoot}dota2assets/img/agility.png`} avatar />
                    <span>{this.props.agi}</span>
                </div>
                <div>
                    <Image src={`${staticRoot}dota2assets/img/intelligence.png`} avatar />
                    <span>{this.props.int}</span>
                </div>
            </div>
    	);
 	}
}

export default Attributes;
