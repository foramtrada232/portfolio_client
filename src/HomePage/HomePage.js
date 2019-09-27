import React, { Component } from "react";
import { config } from '../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import About from './About/About';
import Websites from './Websites/Websites';
import MobileApps from './MobileApps/MobileApps';
import LandingPage from './Landingpage/Landingpage';
import LogoDesign from './Logodesign/LogoDesign';
import Brochure from './Brochures/Brochures';
import * as _ from 'lodash';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileApps: [],
            webApps: [],
            landingPages: [],
            logoDesign: [],
            brochures: []
        }
    }

    componentDidMount() {
        fetch(config.baseApiUrl + 'project', {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((jsonRes) => {
            console.log(jsonRes);
            _.forEach(jsonRes.data, el => {
                if (el.name === 'Web Application') {
                    this.setState({
                        webApps: el.projects
                    })
                } else if (el.name === 'Mobile Application') {
                    this.setState({
                        mobileApps: el.projects
                    })
                }
            })
        }).catch((err) => {
            console.log(err)
        })

        this.getLandingPage();
        this.getLogoDesign();
        this.getBrochures();
    }
    getLandingPage = () => {
        fetch(config.baseApiUrl + 'project/landingpage', {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((jsonRes) => {
            console.log('landingPage========>', jsonRes);
            this.setState({ landingPages: jsonRes.data })
        }).catch((err) => {
            console.log(err)
        })
    }

    getLogoDesign = () => {
        fetch(config.baseApiUrl + 'project/logo-design', {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((jsonRes) => {
            console.log('landingPage========>', jsonRes);
            this.setState({ logoDesign: jsonRes.data })
        }).catch((err) => {
            console.log(err)
        })
    }

    getBrochures = () => {
        fetch(config.baseApiUrl + 'project/brochure', {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((jsonRes) => {
            console.log('landingPage========>', jsonRes);
            this.setState({ brochures: jsonRes.data })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Header />
                <Banner />
                <About />
                <Websites projects={this.state.webApps} />
                <MobileApps projects={this.state.mobileApps} />
                <LandingPage landingpage={this.state.landingPages} />
                <LogoDesign logoDesign={this.state.logoDesign} />
                <Brochure brochures={this.state.brochures} />
                <Footer />
            </div>
        );
    }
}
export default HomePage;
