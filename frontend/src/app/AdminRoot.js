import React from "react";
import {Provider} from "react-redux";
import {Router} from "react-router";

import stylesheets from "app/stylesheets/index.less"; //eslint-disable-line no-unused-vars
import configureStore from "app/configureStore";
import history from "app/history";
import adminurls from "app/adminurls";

const store = configureStore();


class AdminRoot extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {adminurls}
                </Router>
            </Provider>
        );
    }
}

export default AdminRoot;
