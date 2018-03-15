import React from 'react';
import { Menu } from 'semantic-ui-react';


class RightMenu extends React.Component {
    constructor(props) {
		super(props);
		this.state = {activeItem: 'Rofl'};
	}
	
    componentDidMount() {
		this.setState({ activeItem: this.props.activeItem });
	}
	
  	render() {
		
    	return (
			<Menu fluid widths={3} pointing secondary inverted>
		        <Menu.Item
		          	name='Rofl'
		          	active={this.props.activeItem === 'Rofl'}
		          	onClick={this.props.handleItemClick}
		        >
		          	Rofl
		        </Menu.Item>

		        <Menu.Item
		          	name='Lmao'
		          	active={this.props.activeItem === 'Lmao'}
		          	onClick={this.props.handleItemClick}
		        >
		          	Lmao
		        </Menu.Item>
	      </Menu>
    	);
 	}
}

export default RightMenu;

{/* https://stackoverflow.com/questions/45808674/render-a-component-within-a-component-from-onclick-event-in-reactjs */}