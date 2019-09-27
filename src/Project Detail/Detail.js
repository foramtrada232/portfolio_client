import React, { Component } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DetailSection from './DetailSection/DetailSection';
import TechnologySection from './TechnologySection/TechnologySection';
import { config } from '../config';
class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectId: this.props.match.params.id,
            project: undefined
        };
    }

    componentDidMount() {
        fetch(config.baseApiUrl + 'project/' + this.state.projectId, {
            method: 'GET'
        }).then((res)=>{
            return res.json();
        }).then((jsonRes)=>{
            console.log(jsonRes);
            this.setState({
                project: jsonRes.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Header />
                <DetailSection project={this.state.project} />
                <TechnologySection project={this.state.project} />
                <Footer />
            </div>
        );
    }
}
export default Detail;
