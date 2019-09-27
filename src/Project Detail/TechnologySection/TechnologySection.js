import React, { Component } from "react";
import {config} from '../../config';
class TechnologySection extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="technologies_section">
                    <div className="container">
                        <h3>Technology</h3>
                        <ul className="hexa_structure">
                            {
                                this.props.project && this.props.project.technology.length
                                    ? this.props.project.technology.map((tech, index) =>
                                        <li key={index}>
                                            <div className="roundHex">
                                                <div className="hexa_content d-flex flex-wrap align-content-center">
                                                    {
                                                        tech.logo
                                                            ? <img src={config.baseMediaUrl + tech.logo}
                                                                className="img-fluid" alt="" />
                                                            : <img src="http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"
                                                                className="img-fluid" alt="" />
                                                    }

                                                    <p className="text-center">{tech.name}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                    : null
                            }
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}
export default TechnologySection;
