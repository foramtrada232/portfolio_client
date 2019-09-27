import React, { Component } from "react";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="about_our_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <span className="font_bg">R</span>
                                <div className="about_text_content">
                                    <h4>Creative Strategy</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <span className="font_bg">A</span>
                                <div className="about_text_content">
                                    <h4>Branding Genius</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <span className="font_bg">O</span>
                                <div className="about_text_content">
                                    <h4>UI/UX Design</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default About;
