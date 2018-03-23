import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { VictoryChart, VictoryAxis, VictoryBrushContainer, VictoryZoomContainer, VictoryLine, VictoryScatter, VictoryCandlestick } from 'victory';

import minBy from 'lodash.minby';
import maxBy from 'lodash.maxby';


const staticRoot = window.django.urls.staticRoot;


class PriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.time_series = this.props.time_series;
		this.time_series_list = [];
		this.high_list = [];
		this.close_list = [];
		var key_list = (Object.keys(this.time_series)).sort();

		for (var index in key_list) {
			if (Date.parse(key_list[index]) <= Date.parse("2014-06-06")){

				this.time_series[key_list[index]]["1. open"] = (parseFloat(this.time_series[key_list[index]]["1. open"])/7).toFixed(2);
				this.time_series[key_list[index]]["4. close"] = (parseFloat(this.time_series[key_list[index]]["4. close"])/7).toFixed(2);
				this.time_series[key_list[index]]["2. high"] =(parseFloat(this.time_series[key_list[index]]["2. high"])/7).toFixed(2);
				this.time_series[key_list[index]]["3. low"] =(parseFloat(this.time_series[key_list[index]]["3. low"])/7).toFixed(2);

			}
			var price = parseFloat(this.time_series[key_list[index]]["2. high"]).toFixed(2);

			this.time_series_list.push(
				{ 
					x: new Date(key_list[index]),
					open: (parseFloat(this.time_series[key_list[index]]["1. open"]).toFixed(2)), 
					close: (parseFloat(this.time_series[key_list[index]]["4. close"]).toFixed(2)), 
					high: (parseFloat(this.time_series[key_list[index]]["2. high"]).toFixed(2)), 
					low: (parseFloat(this.time_series[key_list[index]]["3. low"]).toFixed(2)) 
				}
			)

			this.high_list.push(
				{ 
					x: Date.parse(key_list[index]),
					y: Number(price)
				}
			)

			this.close_list.push(
				{ 
					x: Date.parse(key_list[index]),
					y: Number(parseFloat(this.time_series[key_list[index]]["4. close"]).toFixed(2))
				}
			)
		}

		{/*this.state = {
        		zoomDomain: { x: [new Date(key_list[0]), new Date(key_list[-1])] }
		};*/}

		this.entireDomain = this.getEntireDomain(this.high_list);
		this.state = {
			zoomedXDomain: this.entireDomain.x,
		};

	}

	handleZoom(domain) {
		this.setState({ zoomDomain: domain });
	}

	getData(data) {
		const { zoomedXDomain } = this.state;
		const { maxPoints } = this.props;
		const filtered = data.filter(
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
		const factor = (this.entireDomain.x[1]-this.entireDomain.x[0]) / (zoomedXDomain[1] - zoomedXDomain[0]);
		return _.round(factor, factor < 3 ? 1 : 0);
	}

	setTickLabel(){
		
	}

	render() {
		const renderedDataCandle = this.getData(this.time_series_list);
		const renderedDataLine = this.getData(this.close_list);
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
					<VictoryAxis 
						dependentAxis 
						style={{
							ticks: {stroke: "grey", size: 5},
							tickLabels: {fontSize: 10, padding: 5}
						}}
					/>
					<VictoryAxis
						style={{
							ticks: {stroke: "grey", size: 5},
							tickLabels: {fontSize: 10, padding: 5}
						}}
						tickFormat={(x) => new Date(x).getFullYear()}
					/>
					<VictoryLine
						style={{
							data: { stroke: "royalblue", strokeWidth: 0.25, strokeOpacity: 0.5 }
						  }}
                		data={renderedDataLine}
              		/>
					<VictoryCandlestick
						style={{
							data: {strokeWidth: 0.25}
						}}
						candleColors={{ positive: "#1cff60", negative: "#c43a31" }}
                		data={renderedDataCandle}
              		/>
					
				</VictoryChart>
				<div>
          			{this.getZoomFactor()}x zoom;
          			rendering {renderedDataCandle.length} of {this.time_series_list.length}
       			</div>
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

