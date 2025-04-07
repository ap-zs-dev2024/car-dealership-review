import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dealerships from './components/Dealerships';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Signup from './components/Signup';
import PostReview from './components/PostReview';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dealerships} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/dealership/:id/review" component={PostReview} />
            </Switch>
        </Router>
    );
};

export default App;
