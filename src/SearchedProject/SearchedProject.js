import React, { Component } from "react";
import { config } from '../config';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { EventEmitter } from '../event';
import $ from 'jquery';

export default class SearchedProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: undefined,
            searchedProject: [],
            isSearchResult: false
        }
    }

    componentDidMount() {
        console.log("=======query= in didmount=========", this.props.location.state);
        if (this.props.location.state && this.props.location.state.query) {
            this.state.query = this.props.location.state.query;
        }
        console.log(this.state.query);
        fetch(config.baseApiUrl + "/project/search-projects", {
            method: 'POST',
            body: JSON.stringify(this.state.query)
        }).then(async res => {
            return res.json();
        }).then(async jsonRes => {
            console.log("res==============>", jsonRes.data);
            console.log("this.state.ser======>", this.state.searchedProject)
            await this.setState({ searchedProject: jsonRes.data });
            console.log("this.state.serachedProject==========>", this.state.searchedProject);
        }).catch(err => {
            console.error(err);
        })
    }

    getDataOfSearchedProject() {
        EventEmitter.subscribe('result', (event) => { console.log("in chage event emitter result===============>", event); this.setState({ searchedProject: event, isSearchResult: true }) });
        //   console.log("PROJECTDATA:",event.projectData)
    }

    render() {
        $('.loader').fadeOut('slow', function () {
            $('body').removeAttr('style');
        });
        console.log("======", this.state.searchedProject);
        this.getDataOfSearchedProject();

        return (
            <div>
                <Header />
                <div className="flex items-center justify-center h-full px-3 bg-blue-100" style={{ position: 'relative' }}>
                    {
                        this.state.searchedProject && this.state.searchedProject.length
                            ? <div className="web_section">
                                <div className="container">
                                    <h3 className="w-100">Web Design</h3>
                                    <div className="row ">
                                        {this.state.searchedProject[0].projectData.map((project) => {
                                            return (
                                                <div className="col-lg-6">
                                                    <div className="card website_developement_section mt-10" style={{ padding: '15px', marginTop: '20px', 'marginBottom': '10px' }}>
                                                        <div className="row">
                                                            <div className="col-sm-4 col-xs-12">
                                                                {
                                                                    project.images.length ?
                                                                        <div className="search_project_img">
                                                                            <img src={config.baseMediaUrl + project.images[0]}
                                                                            /></div> :
                                                                        <div className="search_project_img">
                                                                            <img
                                                                                src='images/images.jpeg'
                                                                            />
                                                                        </div>
                                                                }
                                                            </div>
                                                            <div className="col-sm-8 col-xs-12">
                                                                <div className="ml-3">
                                                                    <div className="mb-1">
                                                                        <p>{project.category[0].name}</p>
                                                                        <h5 className="text-1xl text-gray font-bold text-uppercase">{project.title}</h5>
                                                                        <p className="text-sm text-gray-600">{project.desc}</p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-xs text-gray-700">Technology</div>
                                                                        <ul style={{ padding: '5px' }}>
                                                                            {
                                                                                project.technology.map((tech) => {
                                                                                    return (
                                                                                        <li className="tag_list">
                                                                                            {
                                                                                                tech.logo ? <img src={config.baseMediaUrl + tech.logo} height="20px" width="20px" style={{
                                                                                                    marginLeft: '-6px',
                                                                                                    marginRight: '2px',
                                                                                                    marginTop: '-1px'
                                                                                                }} /> : null
                                                                                            }
                                                                                            {tech.name}</li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                        <div className="text-xs text-gray-700">Tags</div>
                                                                        <ul style={{ padding: '5px' }}>
                                                                            {
                                                                                project.hashtag && project.hashtag.length ?
                                                                                    project.hashtag.map((tag) => {
                                                                                        return (
                                                                                            <>
                                                                                                <li className="tag_list">{tag}</li>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                    : null
                                                                            }
                                                                        </ul>
                                                                        <div className="single_website_developement_slide"> <Link to={"/details/" + project._id}>Read More</Link></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                        }
                                    </div></div></div>
                            :
                            <div className="col-12" style={{ marginBottom: 252 }}>
                                <h2 className="text-center m-auto">No Search Result</h2>
                            </div>

                    }
                </div>

                {this.state.searchedProject && this.state.searchedProject.length ?
                    <div>  {this.state.searchedProject[1] ? <div>
                        <section className="app_section">
                            {this.state.searchedProject[1].landingData && this.state.searchedProject[1].landingData.length ?
                                <div className="container">
                                    <h3 className="w-100">Application Design</h3>{
                                        this.state.searchedProject[1].landingData.map((landingData) => {
                                            return (
                                                <div className="app_img_slider">
                                                    <img src={config.baseMediaUrl + landingData.images[0]} />
                                                </div>
                                            )
                                        })}</div> : null
                            }</section></div> : null}
                        {this.state.searchedProject[2] ? <div>
                            <section className="logo_section">
                                {this.state.searchedProject[2].logoData && this.state.searchedProject[2].logoData.length ?
                                    <div className="container">
                                        <h3 className="w-100">Logo Design</h3>
                                        <div className="logo_slider">
                                        <div class="gallery">
                                            {this.state.searchedProject[2].logoData.map((logoData) => {
                                                return (
                                                    
                                                            <a href={config.baseMediaUrl + logoData.images[0]}><img src={config.baseMediaUrl + logoData.images[0]}/></a>
                                                    //         {/* <a href="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/Desert.jpg"><img src="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/tn/Desert.jpg" alt="Desert mountains" /></a>
                                                    //         <a href="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/Hydrangeas.jpg"><img src="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/tn/Hydrangeas.jpg" width="100" height="75" alt="Hydrangeas, called 'Hortensia' in Dutch" /></a>
                                                    //         <a href="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/Jellyfish.jpg"><img src="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/tn/Jellyfish.jpg" title="Jellyfish" /></a>
                                                    //         <a href="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/Koala.jpg"><img src="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/tn/Koala.jpg" alt="Koala" /></a>
                                                    //         <a href="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/Lighthouse.jpg"><img src="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/tn/Lighthouse.jpg" alt="Lighthouse" /></a>
                                                    //         <a href="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/Penguins.jpg"><img src="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/tn/Penguins.jpg" alt="Penguins" /></a>
                                                    //         <a href="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/Tulips.jpg" /><img src="https://home.et.utwente.nl/slootenvanf/div/fancybox_images/tn/Tulips.jpg" alt="Yellow tulips" /></a>  */}
                                                   

                                                    // // {/* // <div className="logo_img_slider">
                                                    // // //     <img src={config.baseMediaUrl + logoData.images[0]} />
                                                    // // // </div> */}
                                                )
                                               
                                            })}</div> </div>
                                    </div> : null

                                }</section></div> : null}
                        {this.state.searchedProject[3] ? <div>
                            <section className="brand_section">
                                {this.state.searchedProject[3].brochureData && this.state.searchedProject[3].brochureData.length ?
                                    <div className="container">
                                        <div className="Brand_heading">
                                            <h3 className="w-100">Branding Design</h3>
                                            <p>Flyer / Brochure</p>
                                        </div>
                                        {this.state.searchedProject[3].brochureData.map((brochureData) => {
                                            return (

                                                <div className="brand_img_slider">
                                                    <img src={config.baseMediaUrl + brochureData.images[0]} /></div>

                                            )
                                        })}</div> : null
                                }</section></div> : null}
                    </div> : null}
                <div style={{ position: 'relative', bottom: 0, right: 0, left: 0 }}>
                    <Footer />
                </div>
            </div>
        )
    }
}