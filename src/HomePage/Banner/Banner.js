import React, { Component } from "react";

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="banner_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 blue_bg p-0 d-flex flex-wrap align-content-center">
                                <div className="banner_text_content text-right text-white">
                                    <h1>our</h1>
                                    <h3>portfolio</h3>
                                </div>
                            </div>
                            <div className="col-md-6 light_blue_bg p-0 d-flex flex-wrap align-content-center">
                                <div className="banner_text_content text-white">
                                    <h2>A Collection<br /> of our Awesome<br /> Work.</h2>
                                    <button id="jump_to_next">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Banner;