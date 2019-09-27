import React, { Component } from "react";
import { config } from '../config';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

export default class BrochuresDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brochure: this.props.location.state.data
        }
    }
    render() {
        console.log("brocherdetails=========>", this.props.location.state.data, this.state.brochure);
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row w-100">
                        {
                            this.state.brochure.length ?
                                <div className="row">
                                    {
                                        this.state.brochure.map((brochure) =>
                                            <div className="col-lg-6 brochure_img">
                                                <div className="card website_developement_section mt-10" style={{ padding: '15px', marginTop: '20px', 'marginBottom': '10px' }}>
                                                    <img src={config.baseMediaUrl + brochure.images[0]}></img>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                : null
                        }
                    </div>
                    <div style={{ right: 0,position: 'absolute',left: 0}}>
                        <Footer />
                    </div>


                </div>
            </div >
        )
    }
}