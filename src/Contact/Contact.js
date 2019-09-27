import React, { Component } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            a: ''
        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Header />
                <section className="breadcrumbs_section">
                    <h2>Contact Us</h2>
                    <p>Get in touch with us</p>
                </section>
                <section className="contact_frm_section">
                    <div className="container">
                        <form id="contact-form">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="form_input_box">
                                        <input type="text" className="form_input" placeholder="Enter your name" value={this.state.formData.name} onChange={(val) => {
                                            let formData = { ...this.state.formData };
                                            formData['name'] = val.target.value;
                                            this.setState({ formData: formData })
                                        }} />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="form_input_box">
                                        <input type="email" className="form_input" placeholder="Enter your email address" value={this.state.formData.email} onChange={(val) => {
                                            let formData = { ...this.state.formData };
                                            formData['email'] = val.target.value;
                                            this.setState({ formData: formData })
                                        }} />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="form_input_box">
                                        <input type="text" className="form_input" placeholder="Enter your company name" value={this.state.formData.companyName} onChange={(val) => {
                                            let formData = { ...this.state.formData };
                                            formData['companyName'] = val.target.value;
                                            this.setState({ formData: formData })
                                        }} />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="form_input_box">
                                        <input type="text" className="form_input" placeholder="Enter your company number" value={this.state.formData.companyNumber} onChange={(val) => {
                                            let formData = { ...this.state.formData };
                                            formData['companyNumber'] = val.target.value;
                                            this.setState({ formData: formData })
                                        }} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form_input_box">
                                        <textarea ref="message" id="textArea" className="form_input" placeholder="Enter your message" value={this.state.formData.message} onChange={(val) => {
                                            let formData = { ...this.state.formData };
                                            formData['message'] = val.target.value;
                                            this.setState({ formData: formData })
                                        }}></textarea>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn_submit" type="button" onClick={(e) => this.contactRequest(e)} disabled={!this.state.formData.name || !this.state.formData.message || !this.state.formData.email}>Submit</button>
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
    contactRequest = (e) => {
        e.preventDefault();
        console.log("data=========>", this.state.formData);
        // console.log("data=========>", this.state.a);
        setTimeout(() => {
            document.getElementById("contact-form").reset();
            var notes = this.refs.message;
            notes.value = ""
            this.setState({ formData: {} });
            console.log("formdata=====>", this.state.formData);
        }, 200);
        //  fetch(config.baseApiUrl + "/contact-us", {
        //     method: 'POST',
        //     body: JSON.stringify( this.state.formData)
        // }).then(res => {
        //     return res.json();
        // }).then(jsonRes => {
        //     console.log("res", jsonRes);
        // }).catch(err => {
        //     console.error(err);
        // })
    }
}


export default Contact;
