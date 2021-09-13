//file: src/webpages/index.js
import React from 'react';
import Layout from '../components/Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home';
import MyBooks from './mybooks';
import Favorites from './favorites';
import Footer from '../components/Footer';

const Webpages = () => {
    return(
        <div>
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mybooks" component={MyBooks} />
                <Route path="/favorites" component={Favorites} />
            </Layout>
        </Router>
        </div>
    );
};
export default Webpages;