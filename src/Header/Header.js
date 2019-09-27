import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { config } from '../config';
import * as _ from 'lodash';
import ReactDropDownAutoComplete from 'react-dropdown-autocomplete';
import {EventEmitter} from '../event';
import $ from 'jquery';

class Header extends Component {
    data = [];
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
            query: [],
            technologies: [],
            categories: [],
            dataList: [],
            tags: [],
            array: undefined,
            message: 'no tags found....'
        };
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        fetch(config.baseApiUrl + 'category', {
            method: 'GET'
        }).then(res => {
            return res.json();
        }).then(jsonRes => {
            console.log("category", jsonRes);
            this.setState({
                categories: jsonRes.data
            })
        }).catch(err => {
            console.log("category", err);
        })

        fetch(config.baseApiUrl + 'technology', {
            method: 'GET'
        }).then(res => {
            return res.json();
        }).then(jsonRes => {
            console.log("technology", jsonRes);
            this.setState({
                technologies: jsonRes.data
            })
        }).catch(err => {
            console.log("technology", err);
        })

        fetch(config.baseApiUrl + 'hashtag', {
            method: 'GET'
        }).then(res => {
            return res.json();
        }).then(async jsonRes => {
            console.log("tags", jsonRes);
            let arr = [];
            _.forEach(jsonRes.data, async tag => {
                await this.data.push({ name: tag.hashtag });
            })
            console.log("data================>", this.data);
            await this.setState({
                tags: arr
            });
            console.log("=========", this.state.tags);
        }).catch(err => {
            console.log("tags", err);
        })
    }
    
    handleClick() {
        console.log('query in handle click header======>', this.state.query);
        this.setState({
            isSearch: true
        });
        console.log("currunt url------------->", window.location.href, this.state.query);
        if (window.location.href.includes("search-project")) {
            if (this.state.query) {
                fetch(config.baseApiUrl + "/project/search-projects", {
                    method: 'POST',
                    body: JSON.stringify(this.state.query)
                }).then(async res => {
                    return res.json();
                }).then(async jsonRes => {
                    console.log("res in header", jsonRes);
                    EventEmitter.dispatch('result',jsonRes.data)
                    this.setState({query:''})
                }).catch(err => {
                    console.error(err);
                })
            }
        }
    }

    deleteTag(index) {
        console.log("index==================>", index, this.state.tags, this.state.query.hashtag);
        this.state.tags.hashtag.splice(index, 1)
        console.log("stag state========>", this.state.tags);
        this.setState({ tags: this.state.tags })
    }

    render() {
        $('.search_btn').click(function () {
            $(this).addClass('active_filter');
            $(this).next('.filter_section').addClass('open_filter');
            $('body').css({ 'overflow': 'hidden' });
        });
        console.log("this.state.isserached========>", this.state.isSearch);
        if (this.state.isSearch) {
            this.setState({ isSearch: false })
            console.log(this.state.isSearch);
            return (
                <Redirect to={{
                    pathname: '/search-project',
                    state: { query: this.state.query }
                }} />
            )
        }
        return (
            <div>
                <div className="loader"></div>
                <header>
                    <div className="side_bar_fixed">
                        <div className="logo">
                            <Link to="/"><img src="images/logo.png" className="img-fluid" alt="logo image1" /></Link>
                        </div>
                        <div className="menu_and_filter text-center">
                            <Link className="menu_btn" to=""><img src="images/menu.png" alt="menu btn" /></Link>
                            <Link className="search_btn"><img src="images/search.png" alt="search btn" /></Link>
                            <div className="filter_section text-left d-flex flex-wrap align-content-center">
                                <Link className="close_filter">X</Link>
                                <form>
                                    <h2 className="text-white">Filter</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input_with_icon input_box">
                                                <img src="images/search_gray.png" alt="icon image1" />
                                                <input type="text" className="form_input" placeholder="Search Anything here..." value={this.state.query.searchKey || ""} onChange={(val) => {
                                                    var query = { ...this.state.query };
                                                    query['searchKey'] = val.target.value;
                                                    this.setState({ query: query })
                                                }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input_with_icon input_box">
                                                <img src="images/filter_gray.png" alt="icon image1" />
                                                {
                                                    this.state.query.hashtag ? (<div className='tag_chip_section'>{
                                                        this.state.query.hashtag.map((tag, index) => {
                                                            console.log('tag==========>', tag);
                                                            return (<span className="tag_chip" onClick={() => this.deleteTag(index)}><span>{tag}</span><i style={{ 'cursor': 'pointer' }} className="fa fa-times"></i></span>
                                                            )
                                                        })
                                                    }
                                                    </div>) : (null)
                                                }
                                                <ReactDropDownAutoComplete
                                                    getItemValue={item => item.name}
                                                    className="form_input"
                                                    id="tag"
                                                    placeholder="Enter Tags"
                                                    data={this.data}
                                                    renderItem={item => (
                                                        <div
                                                            role="button"
                                                            tabIndex="-1"
                                                        >{item.name}</div>
                                                    )}
                                                    onChange={(val) => {
                                                        console.log('valin onchange========', val);
                                                        let i = _.findIndex(this.data, { name: val });
                                                        if (i === -1) {
                                                            console.log("{{{}}}}}", i, this.state.message);
                                                            return <div style={{ 'color': 'white' }}>{this.state.message}</div>
                                                        }
                                                        if (i !== -1) {
                                                            console.log('this.state.query========>', this.state.query);
                                                            let query = this.state.query;
                                                            console.log("query===>", query)
                                                            let arr = query['hashtag'] || [];
                                                            if (arr.indexOf(val) === -1) {
                                                                arr.push(val);
                                                            }
                                                            query['hashtag'] = arr;
                                                            this.setState({ query: query })
                                                            this.setState({ tags: query });
                                                            console.log("this.state.tags========>", this.state.tags);
                                                            console.log(this.state.query);
                                                        }
                                                    }}
                                                />

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input_box">
                                                <select placeholder="Technologies" className="form_input" onChange={(val) => {
                                                    var query = { ...this.state.query };
                                                    query['technology'] = val.target.value;
                                                    this.setState({ query: query })
                                                }}>
                                                    <option selected disabled>Technologies</option>
                                                    {this.state.technologies.map((tech) => <option key={tech._id} value={tech._id}>{tech.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input_box">
                                                <select placeholder="Type of Application" className="form_input" onChange={(val) => {
                                                    var query = { ...this.state.query };
                                                    query['category'] = val.target.value;
                                                    this.setState({ query: query })
                                                }}>
                                                    <option selected disabled>Type of Application</option>
                                                    {this.state.categories.map((cate) => <option key={cate._id} value={cate._id}>{cate.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn_filter_search" disabled={(!this.state.query.searchKey || (!this.state.query.hashtag && !this.state.query.technology && !this.state.query.category))} onClick={this.handleClick}>Search</button>
                                </form>
                            </div>
                        </div>
                        <ul>
                            <li className="divider"><Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                            <li><Link to=""><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                            <li><Link to=""><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }

}
export default Header;


