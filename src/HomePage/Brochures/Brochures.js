import React, { Component } from "react";
import { config } from '../../config';
import { Link } from 'react-router-dom';

export default class Brochures extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        console.log("=========", this.props);
        return (
            <div>
                <section className="website_developement_section">
                    <div className="container">
                        <div className="sectio_title">
                            <h2>Flyer / Brochure / Resume</h2>
                        </div>
                        <div className="website_developement_slider">
                            {
                                this.props.brochures.map((page, index) =>
                                    <div key={index} className="single_website_developement_slide">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="landing_page_image_slider">
                                                    {page.images.length ? page.images.map((image, index) =>
                                                        <div key={index} className="single_image_slider_box">
                                                            <img src={config.baseMediaUrl + image} onError={() => this.src = 'images/inner_slider_1.jpg'} className="img-fluid" alt="slider image1" />
                                                        </div>
                                                    ) : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {
                             this.props.brochures.length?
                             <div className="view_more" >
                             <Link to={{ pathname:'brochure-detail' , state: { data:this.props.brochures }}} >View More</Link>
                         </div>:null
                        }
                       
                    </div>
                </section>
            </div>
        )
    }
}