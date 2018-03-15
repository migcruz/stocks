import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { VictoryChart, VictoryBar, VictoryStack, VictoryPolarAxis, VictoryTheme, VictoryPie } from 'victory'; 


const staticRoot = window.django.urls.staticRoot;
const role_ticks = {0: "Carry", 40: "Escape", 80: "Pusher", 120: "Jungler", 160: "Disabler", 200: "Support", 240: "Initiator", 280: "Nuker", 320: "Durable"};
const role_array = ["Carry", "Escape", "Pusher", "Jungler", "Disabler", "Support", "Initiator", "Nuker", "Durable"];

class Roles extends React.Component {

    constructor(props) {
        super(props);
        this.roles = this.props.roles;
        this.primary_attr = this.props.primary_attr;

        if (this.primary_attr == "agi"){
            this.primary_attr_icon = `${staticRoot}dota2assets/img/agility.png`;
            this.colors = ["limegreen", "mediumspringgreen", "#1cff60", "lime"];
        }
        else if (this.primary_attr == "int"){
            this.primary_attr_icon = `${staticRoot}dota2assets/img/intelligence.png`;
            this.colors = ["royalblue", "cyan", "dodgerblue", "#1c43ff"];
        }
        else {
            this.primary_attr_icon = `${staticRoot}dota2assets/img/strength.png`;
            this.colors = ["crimson", "darkorange", "orangered", "red"];
        }
        
        this.role_data1 = [
            { x: 0, y: 0},
            { x: 40, y: 0},
            { x: 80, y: 0},
            { x: 120, y: 0},
            { x: 160, y: 0},
            { x: 200, y: 0},
            { x: 240, y: 0},
            { x: 280, y: 0},
            { x: 320, y: 0}
        ];

        this.role_data2 = [
            { x: 0, y: 0},
            { x: 40, y: 0},
            { x: 80, y: 0},
            { x: 120, y: 0},
            { x: 160, y: 0},
            { x: 200, y: 0},
            { x: 240, y: 0},
            { x: 280, y: 0},
            { x: 320, y: 0}
        ];

        this.role_data3 = [
            { x: 0, y: 0},
            { x: 40, y: 0},
            { x: 80, y: 0},
            { x: 120, y: 0},
            { x: 160, y: 0},
            { x: 200, y: 0},
            { x: 240, y: 0},
            { x: 280, y: 0},
            { x: 320, y: 0}
        ];

        {/* so that the chart has a range up to 3 even if hero roles only has a max of "2", use 4
            because 1 role level means y = 2 therefore 2 + 1 + 1 = 4  #1cc0ff*/}
        this.role_data_dummy = [
            { x: 0, y: 4 },
            { x: 40, y: 4 },
            { x: 80, y: 4 },
            { x: 120, y: 4 },
            { x: 160, y: 4 },
            { x: 200, y: 4 },
            { x: 240, y: 4 },
            { x: 280, y: 4 },
            { x: 320, y: 4 }
        ];
       
        for (var role in this.roles){
            var role_level = this.roles[role];
            {/*double for loop, try implementing a dict to map roles to index instead*/}
            for (var i = 0; i < role_array.length; i++){
                if (role == role_array[i]){
                    if (role_level == 1) {
                        this.role_data1[i]["y"] = 2;
                    }
                    else if (role_level == 2) {
                        this.role_data1[i]["y"] = 2;
                        this.role_data2[i]["y"] = 1;
                    }
                    else if (role_level == 3) {
                        this.role_data1[i]["y"] = 2;
                        this.role_data2[i]["y"] = 1;
                        this.role_data3[i]["y"] = 1;
                    }
                }
            }
        }

    }

  	render() {
    	return (
            <div>
                <svg height="0">
                    <defs>
                        <pattern id="img1" patternUnits="userSpaceOnUse" width="60" height="60">
                            <image xlinkHref={this.primary_attr_icon} x="0" y="0" width="60" height="60" />
                        </pattern>

                    </defs>
                </svg>

                {/*width prevents labels from being cut off*/}
                <VictoryChart polar theme={VictoryTheme.material} domainPadding={{ y: 10 }}
                    innerRadius={20}
                    width={380} 
                >
                            
                    <VictoryBar
                        style={{ data: { fill: "none", width: 40 } }}
                        data={this.role_data_dummy}
                    />
                    <VictoryStack
                        colorScale={this.colors}>
                        <VictoryBar
                            domainPadding={{ y: 40 }}
                            style={{ data: { width: 50} }}
                            data={[
                            { x: 0, y: 0.5 },
                                { x: 40, y: 0.5 },
                                { x: 80, y: 0.5 },
                                { x: 120, y: 0.5 },
                                { x: 160, y: 0.5 },
                                { x: 200, y: 0.5 },
                                { x: 240, y: 0.5 },
                                { x: 280, y: 0.5 },
                                { x: 320, y: 0.5 }
                            ]}
                        />
                        <VictoryBar
                            style={{ data: {width: 42 } }}
                            domainPadding={{ y: 7.5 }}
                            data={this.role_data1}
                        />
                        <VictoryBar
                            style={{ data: {width: 42 } }}
                            domainPadding={{ y: 3 }}
                            data={this.role_data2}
                        />
                        <VictoryBar
                            style={{ data: {width: 42 } }}
                            data={this.role_data3}
                        />
                        
                    </VictoryStack>
                    <VictoryPolarAxis dependentAxis
                        tickValues={[2, 3, 4]}
                        style={{ 
                            tickLabels: { fill: "none" },
                            axis: { stroke: "none", strokeWidth: 0.5},
                            grid: { stroke: "none", strokeWidth: 0.2, opacity: 1, strokeDasharray: "5,0" },
                            axisLabel: {fill: "black"}
                        }}
                    />
                    <VictoryPie
                        colorScale={[
                            this.colors[0]
                        ]}
                        data={[
                            { x: "Carry", y: 1 },
                            { x: "Durable", y: 1 },
                            { x: "Nuker", y: 1 },
                            { x: "Initiator", y: 1 },
                            { x: "Support", y: 1 },
                            { x: "Disabler", y: 1 },
                            { x: "Jungler", y: 1 },
                            { x: "Pusher", y: 1 },
                            { x: "Escape", y: 1 }
                        ]}
                        innerRadius={120}
                        startAngle={70}
                        endAngle={450}
                        padAngle={1}
                        style={{ 
                            labels: { fill: "white" },
                            data: {stroke: this.colors[0], strokeWidth: 1}
                        }}

                    />
                    <circle transform="translate(40,25)" cx={150} cy={150} r={22} fill="url(#img1)"/>
                </VictoryChart>
            </div>
    	);
 	}
}

export default Roles;
