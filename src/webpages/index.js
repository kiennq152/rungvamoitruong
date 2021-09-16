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
import so57 from './mybooks';
import editionalboard from './editionalboard';
import Footer from '../components/Footer';
import JournalList from './journallist';
import Guidelines from './guidelines';

const Webpages = () => {
    return(
        <div>
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mybooks" component={so57} />
                <Route path="/editionalboard" component={editionalboard} />
                <Route path="/journallist" component={JournalList} />
                <Route path="/guidelines" component={Guidelines} />
            </Layout>
        </Router>
        </div>
    );
};
export default Webpages;