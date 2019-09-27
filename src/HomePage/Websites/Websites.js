import React, { Component } from "react";
import { config } from '../../config';
import { Link } from 'react-router-dom';

class Websites extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <section className="website_developement_section">
                    <div className="container">
                        <div className="sectio_title text-center">
                            <h2>Website Development</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                        </div>
                        <div className="website_developement_slider">
                            {
                                this.props.projects.map((project, index) =>
                                    <div key={index} className="single_website_developement_slide">
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <div className="laptop_image_slider">
                                                    {project.images.length ? project.images.map((image, index) =>
                                                        <div key={index} className="single_image_slider_box">
                                                            <img src={config.baseMediaUrl + image} onError={() => this.src = 'images/inner_slider_1.jpg'} className="img-fluid" alt="slider image1" />
                                                        </div>
                                                    ) : <div key={index} className="single_image_slider_box">
                                                            <img src='images/inner_slider_1.jpg' className="img-fluid" alt="slider image1" />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <span>Website Development</span>
                                                <h2>{project.title}</h2>
                                                <p>{project.desc}</p>
                                                <Link to={"/details/" + project._id}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Websites;
