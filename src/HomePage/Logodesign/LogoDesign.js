import React, { Component } from "react";
import { config } from '../../config';
import { Link } from 'react-router-dom';

export default class LogoDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        console.log("====in logo=====", this.props.logoDesign);
        return (
            <div>
                <section className="mobile_app_developement_section">
                    <div className="container">
                        <div className="sectio_title">
                            <h2>Logo Design</h2>
                        </div>
                        <div className="website_developement_slider">
                            {
                                this.props.logoDesign.map((logo, index) =>
                                    <div key={index} className="single_website_developement_slide">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="landing_page_image_slider">
                                                    {logo.images.length ? logo.images.map((image, index) =>
                                                        <div key={index} className="single_image_slider_box">
                                                            <img src={config.baseMediaUrl + image} onError={() => this.src = 'images/inner_slider_1.jpg'} className="img-fluid" alt="slider image1" />
                                                        </div>
                                                    ) : null
                                                        // <div key={index} className="single_image_slider_box">
                                                        //     <img src='images/inner_slider_1.jpg' className="img-fluid" alt="slider image1" />
                                                        // </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {
                            this.props.logoDesign.length ?
                                <div className="view_more">
                                    <Link to={{ pathname: 'brochure-detail', state: { data: this.props.logoDesign } }} >View More</Link>
                                </div> : null
                        }

                    </div>
                </section>
            </div>
        )
    }
}