import React from 'react';
import { Menu } from 'semantic-ui-react';


class LeftMenu extends React.Component {
    constructor(props) {
		super(props);
		this.state = {activeItem: 'Foo'};
	}
	
    componentDidMount() {
		this.setState({ activeItem: this.props.activeItem });
	}
	
  	render() {
		
    	return (
			<Menu fluid widths={3} pointing secondary inverted>
		        <Menu.Item
		          	name='Foo'
		          	active={this.props.activeItem === 'Foo'}
		          	onClick={this.props.handleItemClick}
		        >
		          	Foo
		        </Menu.Item>

		        <Menu.Item
		          	name='Bar'
		          	active={this.props.activeItem === 'Bar'}
		          	onClick={this.props.handleItemClick}
		        >
		          	Bar
		        </Menu.Item>
	      </Menu>
    	);
 	}
}

export default LeftMenu;

{/* https://stackoverflow.com/questions/45808674/render-a-component-within-a-component-from-onclick-event-in-reactjs */}