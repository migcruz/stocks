import React from 'react';
import { Menu } from 'semantic-ui-react';
import {NavLink} from "react-router-dom";


class HomeNavbar extends React.Component {
	state = {}

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  	render() {
  		const { activeItem } = this.state;
    	return (
			<Menu fixed={'top'} inverted>
		        <Menu.Item
		          	name='Home'
		          	active={activeItem === 'Home'}
		          	onClick={this.handleItemClick}
		          	as={NavLink}
		          	to="/app"
		        >
		          	Home
		        </Menu.Item>

		        <Menu.Item
		          	name='Kek'
		          	active={activeItem === 'Kek'}
		          	onClick={this.handleItemClick}
		          	as={NavLink}
		          	to="/app/kek"
		        >
		          	Kek
		        </Menu.Item>

		        <Menu.Item
		          	name='Lol'
		          	active={activeItem === 'Lol'}
		          	onClick={this.handleItemClick}
		          	as={NavLink}
		          	to="/app/lol"
		        >
		          	Lol
		        </Menu.Item>
	      </Menu>
    	);
 	}
}

export default HomeNavbar;



{/* see react-router-bootstrap
<Navbar>
				<Navbar.Header>
				<Navbar.Brand>
					<Link to="/app">Dota 2 Analytics</Link>
				</Navbar.Brand>
				</Navbar.Header>
				<Nav>
				<Link to="/app/lol"><NavItem eventKey={1}>Lol</NavItem></Link>
				<Link to="/app/kek"><NavItem eventKey={2}>Kek</NavItem></Link>
				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.4}>Separated link</MenuItem>
				</NavDropdown>
				</Nav>
			</Navbar>
			*/}