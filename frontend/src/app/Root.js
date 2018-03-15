import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import HomeNavbar from "app/home/components/HomeNavbar";
import stylesheets from "app/stylesheets/index.less"; //eslint-disable-line no-unused-vars
import configureStore from "app/configureStore";
import urls from "app/urls";


const store = configureStore();


class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                	<div className="Home-background">
                		<HomeNavbar/>
                		{urls}
                	</div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Root;
