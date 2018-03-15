import React from 'react';
import HeroGrid from './components/HeroGrid';


class Home extends React.Component {
  	render() {
		const staticRoot = window.django.urls.staticRoot;
    	return (
			<div className="Home">
				<div className="Home-header">
					<img src={`${staticRoot}dota2assets/img/dota2logo.png`} className="Home-logo" alt="logo" />
					<h2 className="heading">
						Dota 2 Analytics Under construction -Miguel
					</h2>
				</div>
				<p className="Home-intro">
					I hope to release this ASAP.
				</p>
				<div className="Home-grid">
					<HeroGrid/>
				</div>
			</div>
    	);
  	}
}

export default Home;
