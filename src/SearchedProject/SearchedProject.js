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
                    <div className="container">
                        <div className="row ">
                            {
                                this.state.searchedProject && this.state.searchedProject.length
                                    ? this.state.searchedProject[0].projectData.map((project) => {
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
                                    :
                                    <div className="col-12" style={{ marginBottom: 252 }}>
                                        <h2 className="text-center m-auto">No Search Result</h2>
                                    </div>
                            }
                        </div>
                        {this.state.searchedProject && this.state.searchedProject.length ?
                            <div>  {this.state.searchedProject[1] ? <div>
                                {this.state.searchedProject[1].landingData && this.state.searchedProject[1].landingData.length ?
                                    <div className="row"><h3 className="w-100">Landing Page</h3>{
                                        this.state.searchedProject[1].landingData.map((landingData) => {
                                            return (
                                                <div className="search_project_img" >
                                                    <img src={config.baseMediaUrl + landingData.images[0]} />
                                                </div>
                                            )
                                        })}</div> : null
                                }</div> : null}

                                {this.state.searchedProject[2] ? <div>
                                    {this.state.searchedProject[2].logoData && this.state.searchedProject[2].logoData.length ?
                                        <div className="row"><h3 className="w-100">Logo</h3>
                                            {this.state.searchedProject[2].logoData.map((logoData) => {
                                                return (
                                                    <div className="col-lg-3">
                                                        <div className="search_project_img">
                                                            <img src={config.baseMediaUrl + logoData.images[0]} />
                                                        </div>
                                                    </div>
                                                )
                                            })}</div> : null
                                    }</div> : null}

                                {this.state.searchedProject[3] ? <div>
                                    {this.state.searchedProject[3].brochureData && this.state.searchedProject[3].brochureData.length ?
                                        <div className="row"><h3 className="w-100">Brochure Page</h3>
                                            {this.state.searchedProject[3].brochureData.map((brochureData) => {
                                                return (
                                                    <div className="col-lg-3">
                                                        <div className="search_project_img">
                                                            <img src={config.baseMediaUrl + brochureData.images[0]} /></div>
                                                    </div>
                                                )
                                            })}</div> : null
                                    }</div> : null}
                            </div> : null}
                    </div>
                </div>
                <div style={{ position: 'relative', bottom: 0, right: 0, left: 0 }}>
                    <Footer />
                </div>
            </div>
        )
    }
}