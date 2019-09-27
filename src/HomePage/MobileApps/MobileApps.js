import React, { Component } from "react";
import { config } from '../../config';
import { Link } from 'react-router-dom';

class MobileApps extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="mobile_app_developement_section">
                    <div className="container">
                        <div className="sectio_title text-center">
                            <h2>Mobile Application Development</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                        </div>
                        <div className="mobile_app_developement_slider">
                            {
                                this.props.projects.map((project, index) =>
                                    <div key={index} className="single_mobile_app_developement_slide">
                                        <div className="row flex-row-reverse">
                                            <div className="col-lg-4">
                                                <div className="mobile_image_slider">
                                                {project.images.length ? project.images.map((image, index) =>
                                                        <div key={index} className="single_image_slider_box">
                                                            <img src={config.baseMediaUrl + image} onError={() => this.src = 'images/inner_slider_2.jpg'} className="img-fluid" alt="slider image1" />
                                                        </div>
                                                    ) : <div className="single_image_slider_box">
                                                            <img src='images/inner_slider_2.jpg' className="img-fluid" alt="slider image1" />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <span>Mobile Application Development</span>
                                                <h2>{project.title}</h2>
                                                <p>{project.desc}</p>
                                                <Link to={"/details/" + project._id}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {/* <div className="single_mobile_app_developement_slide">
                                <div className="row flex-row-reverse">
                                    <div className="col-lg-4">
                                        <div className="mobile_image_slider">
                                            <div className="single_image_slider_box">
                                                <img src="images/inner_slider_2.jpg" className="img-fluid" alt="slider image" />
                                            </div>
                                            <div className="single_image_slider_box">
                                                <img src="images/inner_slider_2.jpg" className="img-fluid" alt="slider image" />
                                            </div>
                                            <div className="single_image_slider_box">
                                                <img src="images/inner_slider_2.jpg" className="img-fluid" alt="slider image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <span>Mobile Application Development</span>
                                        <h2>Bouti Vogue</h2>
                                        <p>BoutiVogue the best adjacent salon discoverer application is tied in with adjusting yourself or longing for an entire change of your look. The experience of having a slick hairstyle, a breathtaking nail treatment incline, an exemplary wet shave, or a back rub to ruin you, this all can turn out to be significantly more advantageous with BoutiVogue, your magnificence salon discoverer application. The unisex salon discoverer application encourages you to locate the most snazzy beautician the hairdressers easily.</p>
                                        <p>The best thing about BoutiVogue is that it helps you to make your online excellence booking knowledge better.</p>
                                        <p>There are a lot of astounding highlights offered by BoutiVogue, for example, an excellence salon discoverer or giving dependable outcomes to your questions like "Best Male salon near me," "spa bene</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default MobileApps;
