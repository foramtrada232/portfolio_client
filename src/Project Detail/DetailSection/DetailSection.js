import React, { Component } from "react";
import { config } from '../../config';
class DetailSection extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <section className="breadcrumbs_section">
                    <h2>{this.props.project ? this.props.project.title : ''}</h2>
                    <p>{this.props.project ? this.props.project.category.name : ''}</p>
                </section>
                <section className="mobile_development_details_page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2>{this.props.project ? this.props.project.title : ''}</h2>
                                <p>{this.props.project ? this.props.project.desc : ''}</p>
                            </div>
                            {
                                this.props.project ?
                                    this.props.project.category.name === 'Mobile Application'
                                        ?
                                        <div className="mobile_image_slider">
                                            {this.props.project && this.props.project.images.length
                                                ? this.props.project.images.map((image, index) =>
                                                    <div key={index} className="single_image_slider_box">
                                                        <img src={config.baseMediaUrl + image} onError={() => this.src = 'images/inner_slider_2.jpg'} className="img-fluid" alt="slider image1" />
                                                    </div>
                                                ) : <div className="single_image_slider_box">
                                                    <img src='images/inner_slider_2.jpg' className="img-fluid" alt="slider image1" />
                                                </div>
                                            }
                                        </div>
                                        :
                                        <div className="col-12">
                                            <div className="mobile_development_details_slider laptop_image_slider">
                                                {/* <div className="single_image_slider_box">
                                        <img src="images/inner_slider_1.jpg" className="img-fluid" alt="slider image1" />
                                    </div>
                                    <div className="single_image_slider_box">
                                        <img src="images/inner_slider_1.jpg" className="img-fluid" alt="slider image1" />
                                    </div>
                                    <div className="single_image_slider_box">
                                        <img src="images/inner_slider_1.jpg" className="img-fluid" alt="slider image1" />
                                    </div> */}
                                                {
                                                    this.props.project && this.props.project.images.length
                                                        ? this.props.project.images.map((image, index) =>
                                                            <div key={index} className="single_image_slider_box">
                                                                <img src={config.baseMediaUrl + image} onError={() => this.src = 'images/inner_slider_1.jpg'} className="img-fluid" alt="slider image1" />
                                                            </div>
                                                        )
                                                        : <div className="single_image_slider_box">
                                                            <img src='images/inner_slider_1.jpg' className="img-fluid" alt="slider image1" />
                                                        </div>}

                                            </div>

                                        </div>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                </section>
                {
                    this.props.project && (this.props.project.products || this.props.project.services || this.props.project.features)
                        ? <section className="products_or_contents_sections text-white">
                            <div className="container">
                                {
                                    this.props.project.products
                                        ? <><h2>Products</h2>
                                            <span dangerouslySetInnerHTML={this.getData(this.props.project.products)}></span></>
                                        : null
                                }
                                {
                                    this.props.project.services
                                        ? <><h2>Services</h2>
                                            <span dangerouslySetInnerHTML={this.getData(this.props.project.services)}></span></>
                                        : null
                                }
                                {
                                    this.props.project.features
                                        ? <><h2>Features</h2>
                                            <span dangerouslySetInnerHTML={this.getData(this.props.project.features)}></span></>
                                        : null
                                }
                            </div>
                        </section>
                        : null
                }
                <section className="website_fonts_and_colors">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="details_box colors_box">
                                    <h3>Color Palette</h3>
                                    <ul className="row m-0">
                                        {
                                            this.props.project && this.props.project.colorPalette.length
                                                ? this.props.project.colorPalette.map((color, index) =>
                                                    <li key={index} className="col-3 p-0" style={{ "backgroundColor": color, "color": this.invertColor(color, true) }}>{color}</li>
                                                )
                                                : 'N/A'
                                        }
                                        {/* <li className="col-3 p-0" style={{ "backgroundColor": "#EC212D", "color": this.invertColor('#EC212D', true) }}>#EC212D</li>
                                        <li className="col-3 p-0" style={{ "backgroundColor": "#1D4993", "color": this.invertColor('#1D4993', true) }}>#1D4993</li>
                                        <li className="col-3 p-0" style={{ "backgroundColor": "#616161", "color": this.invertColor('#616161', true) }}>#616161</li>
                                        <li className="col-3 p-0" style={{ "backgroundColor": "#ffffff", "color": this.invertColor('#ffffff', true) }}>#ffffff</li>
                                        <li className="col-3 p-0" style={{ "backgroundColor": "#87CDE9", "color": this.invertColor('#87CDE9', true) }}>#87CDE9</li>
                                        <li className="col-3 p-0" style={{ "backgroundColor": "#1E4796", "color": this.invertColor('#1E4796', true) }}>#1E4796</li>
                                        <li className="col-3 p-0" style={{ "backgroundColor": "#CB4335", "color": this.invertColor('#CB4335', true) }}>#CB4335</li>
                                        <li className="col-3 p-0" style={{ "backgroundColor": "#757575", "color": this.invertColor('#757575', true) }}>#757575</li>
                                        <li className="col-3 p-0" style={{ "backgroundColor": "#2196F3", "color": this.invertColor('#2196F3', true) }}>#2196F3</li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="details_box font_box">
                                    <h3>Font Family</h3>
                                    <h5>Segoe UI</h5>
                                    <p className="bold">Bold - abcdefghijklmnopqrstuvwxyz</p>
                                    <p className="regular">Regular - abcdefghijklmnopqrstuvwxyz</p>
                                    <p className="light">Light - abcdefghijklmnopqrstuvwxyz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    getData(data) {
        return { __html: data }
    }

    invertColor(hex, bw) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        var r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
        if (bw) {
            return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                ? '#000000'
                : '#FFFFFF';
        }
        // invert color components
        r = (255 - r).toString(16);
        g = (255 - g).toString(16);
        b = (255 - b).toString(16);
        // pad each with zeros and return
        return "#" + this.padZero(r) + this.padZero(g) + this.padZero(b);
    }

    padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }
}
export default DetailSection;
