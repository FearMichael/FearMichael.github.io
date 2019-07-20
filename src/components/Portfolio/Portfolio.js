import React, { Component } from 'react';
import M from "materialize-css";
import portfolioInfo from "../../portfolioInfo"
import LeftImgDiv from "./LeftImgDiv";
import RightImgDiv from "./RightImgDiv";


class Portfolio extends Component {

    componentDidMount() {
        M.AutoInit();
      }
    
    render() {
        return (
            <div>
                <div className="container">
                    <h2 id="Portfolio" className="scrollspy center-align">Portfolio <i className="small material-icons" onClick={this.props.toTop}>arrow_upward</i></h2>
                </div>
                <hr className="line-blue"></hr>
                {portfolioInfo.map(portInfo => {
                return portfolioInfo.indexOf(portInfo)%2 === 0 ? 
                    <LeftImgDiv key={portInfo.name.toString()} portInfo={portInfo} /> : <RightImgDiv key={portInfo.name.toString()} portInfo={portInfo}/>
            })}
            </div>
        )
    }
}


export default Portfolio;