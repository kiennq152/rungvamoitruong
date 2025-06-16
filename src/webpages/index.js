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
import JournalList11 from './journallist11';
import JournalList1 from './journallist1';
import JournalList2 from './journallist2';
import JournalList3 from './journallist3';
import JournalList4 from './journallist4';
import JournalList5 from './journallist5';
import Journalpage from './journalpage';


import Guidelines from './guidelines';

const Webpages = () => {
    return(
        <div>
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mybooks" component={so57} />
                <Route path="/editionalboard" component={editionalboard} />
                <Route path="/journallist1" component={JournalList11} />
                <Route path="/journallist1" component={JournalList1} />
                <Route path="/journallist2" component={JournalList2} />
                <Route path="/journallist3" component={JournalList3} />
                <Route path="/journallist4" component={JournalList4} />
                <Route path="/journallist5" component={JournalList5} />
                <Route path="/journalpage" component={Journalpage} />
                <Route path="/guidelines" component={Guidelines} />
            </Layout>
        </Router>
        </div>
    );
};
export default Webpages;