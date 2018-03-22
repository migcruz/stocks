import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { VictoryChart, VictoryAxis, VictoryBrushContainer, VictoryZoomContainer, VictoryLine, VictoryScatter } from 'victory';

import minBy from 'lodash.minby';
import maxBy from 'lodash.maxby';


const staticRoot = window.django.urls.staticRoot;


class PriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.time_series = this.props.time_series;
		this.time_series_list = [];
		var key_list = (Object.keys(this.time_series)).sort();

		for (var index in key_list) {
			var price = parseFloat(this.time_series[key_list[index]]["4. close"]).toFixed(2);
			this.time_series_list.push({ x: new Date(key_list[index]), y: Number(price) })
		}

		{/*this.state = {
        		zoomDomain: { x: [new Date(key_list[0]), new Date(key_list[-1])] }
		};*/}

		this.entireDomain = this.getEntireDomain(this.time_series_list);
		this.state = {
			zoomedXDomain: this.entireDomain.x,
		};

	}

	handleZoom(domain) {
		this.setState({ zoomDomain: domain });
	}

	getData() {
		const { zoomedXDomain } = this.state;
		const { maxPoints } = this.props;
		const filtered = this.time_series_list.filter(
			(d) => (d.x >= zoomedXDomain[0] && d.x <= zoomedXDomain[1]));

		if (filtered.length > maxPoints) {
			const k = Math.ceil(filtered.length / maxPoints);
			return filtered.filter(
				(d, i) => ((i % k) === 0)
			);
		}
		return filtered;
	}



	onDomainChange(domain) {
		this.setState({
			zoomedXDomain: domain.x,
		});
	}

	getEntireDomain(time_series_data) {
		const data  = time_series_data;
		{/* _.minBy is a lodash package fcn*/}
		return {
			y: [minBy(data, d => d.y).y, maxBy(data, d => d.y).y],
			x: [data[0].x, _.last(data).x]
		};
	}

	getZoomFactor() {
		const { zoomedXDomain } = this.state;
		const factor = 10 / (zoomedXDomain[1] - zoomedXDomain[0]);
		return _.round(factor, factor < 3 ? 1 : 0);
	}

	render() {
		const renderedData = this.getData();
		return (
			<div>
				<VictoryChart
					domain={this.entireDomain}
					containerComponent={
						<VictoryZoomContainer
							zoomDimension="x"
							onZoomDomainChange={this.onDomainChange.bind(this)}
							minimumZoom={{ x: 1 / (this.time_series_list.length) }}
						/>
					}
				>
					<VictoryAxis dependentAxis />
					<VictoryAxis
						tickFormat={(x) => new Date(x).getFullYear()}
					/>
					<VictoryLine
                		style={{
                  		data: { stroke: "tomato" }
                		}}
                		data={renderedData}
              		/>
				</VictoryChart>
			</div>
		);
	}
}


export default PriceChart;


{/*<div>
          		<VictoryChart width={600} height={470} scale={{ x: "time" }}
            		containerComponent={
              			<VictoryZoomContainer
                			zoomDimension="x"
                			zoomDomain={this.state.zoomDomain}
                			onZoomDomainChange={this.handleZoom.bind(this)}
              			/>
            		}
          		>
              		<VictoryLine
                		style={{
                  		data: { stroke: "tomato" }
                		}}
                		data={this.time_series_list}
              		/>
  
				</VictoryChart>
				<VictoryChart
					padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
					width={600} height={100} scale={{ x: "time" }}
					containerComponent={
						<VictoryBrushContainer
							brushDimension="x"
							brushDomain={this.state.zoomDomain}
							onBrushDomainChange={this.handleZoom.bind(this)}
						/>
					}
				>
					<VictoryAxis
						tickFormat={(x) => new Date(x).getFullYear()}
					/>
					<VictoryLine
						style={{
						data: { stroke: "tomato" }
						}}
						data={this.time_series_list}
					/>
				</VictoryChart>
					</div>*/}

