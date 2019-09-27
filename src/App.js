import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, HashRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Contact from './Contact/Contact';
import Detail from './Project Detail/Detail';
import SearchedProject from './SearchedProject/SearchedProject';
import BrochuresDetails from './BrochuresDetail/BrouchersDetail';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<Router>
				<HashRouter>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/contact-us" component={Contact} />
						<Route path="/details/:id" component={Detail} />
						<Route path="/search-project" component={SearchedProject} />
						<Route path="/brochure-detail" component={BrochuresDetails} />
					</Switch>
				</HashRouter>
			</Router>
		);
	}
}

export default App;
