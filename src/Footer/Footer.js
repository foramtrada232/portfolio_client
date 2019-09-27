import React, { Component } from "react";
const loadjs = require('loadjs');
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        loadjs('/js/custom.js');
    }

    render() {
        return (
            <div>
                <footer className="footer_section">
                    <div className="container">
                        <h3 className="text-white">Rao Information Technology</h3>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <p className="text-white"><img src="images/location.png" alt="icon image1" />C-1009, Synthesis The First, B/H Keshavbaug Party Plot, Near Shivalik High-Street, Ahmedabad-380015, Gujarat</p>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <p className="text-white"><img src="images/location.png" alt="icon image2" />3rd Floor, T.N.Rao College, Nr. Saurashtra University Campus, Rajkot-360005, Gujarat</p>
                            </div>
                            <div className="col-xl-4 col-md-12">
                                <ul className="contact_detail text-white row">
                                    <li className="col-xl-12 col-md-6"><span><img src="images/call.png" alt="icon image3" /><a className="text-white" href="tel:+919979430007">+91 9979430007</a> / <a className="text-white" href="tel:+919016310001">+91 9016310001</a></span></li>
                                    <li className="col-xl-12 col-md-6"><span><img src="images/mail.png" alt="icon image3" /><a className="text-white" href="mailto:hello@raoinformationtechnology.com">hello@raoinformationtechnology.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="copy_right_text text-center text-white">© 2019 Rao Information Technology. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;
