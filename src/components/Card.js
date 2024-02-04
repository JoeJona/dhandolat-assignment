import React, { Component } from "react";
import "./Card.css";

export class Card extends Component {
  render() {
    return (
      <div>
        {/* <h2><img src={require("../images/Polygon 1.png")} alt="" /> PROPERTIES</h2> */}
        <div className="card-item">
          <div className="image">
            <div className="card-img"></div>
            <h6>NAME NAME</h6>
          </div>
          <div className="details">
            <div className="left">
              <div className="detail">
                <p className="tag-1">20 Lakhs</p>
                <p className="tag-2">MINI INVESTMENT</p>
              </div>
              <div className="detail">
                <p className="tag-1">9%-12%</p>
                <p className="tag-2">RENTAL YIELD</p>
              </div>
            </div>
            <div className="right">
              <div className="detail">
                <p className="tag-1">100 sq.ft.</p>
                <p className="tag-2">MINI AREA</p>
              </div>
              <div className="detail">
                <p className="tag-1">Sector 121, Noida</p>
                <p className="tag-2">LOCATION</p>
              </div>
            </div>
          </div>
          <div >
            <button className="contact-btn">CONTACT</button>
          </div>
        </div>
      </div>
    );
  }
}
