// import logo from './logo.svg';
import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <section className="sec-1" id="home">
        <nav className="nav-bar">
          <ul className="nav-item">
            <li>
              <img
                className="logo"
                src={require("./images/icon-1.png")}
                alt="LOGO"
              />
            </li>
          </ul>
          <ul className="nav-item">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#properties">PROPERTIES</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="el-1"></div>
        {/* <div className="el-2"></div> */}
        <div className="el-3"></div>
        <div className="discover">
          <h1>DISCOVER</h1>
          <h3>Investment Opportunities</h3>
          <button className="btn">CLICK HERE</button>
        </div>
        <div className="list-item">
          <div className="items">
            <img
              className="icons"
              src={require("./images/icon-1.png")}
              alt=""
            />
            <h6>GROWTH</h6>
          </div>
          <div className="items">
            <img
              className="icons"
              src={require("./images/icon-2.png")}
              alt=""
            />
            <h6>INVESTMENT</h6>
          </div>
          <div className="items">
            <img
              className="icons"
              src={require("./images/icon-3.png")}
              alt=""
            />
            <h6>PROPERTY</h6>
          </div>
          <div className="items">
            <img
              className="icons"
              src={require("./images/icon-4.png")}
              alt=""
            />
            <h6>ASSITANCE</h6>
          </div>
        </div>
        <div className="show-case"></div>
      </section>
      <section className="sec-2" id="about">
        <div className="about">
          <h2>
            <span>ABOUT</span> US
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </p>
        </div>
      </section>
      <section className="sec-3" id="properties">
        <div className="title">
          <img src={require("./images/Polygon 1.png")} alt="" />
          <h2 className="prop-title">PROPERTIES</h2>
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <img className="img" src={require("./images/Vector 1.png")} alt="" />
        </div>
      </section>
      <section className="sec-4" id="contact">
        <div className="contact">
          <p>
            <span>CONNECT</span> WITH US
          </p>
          <p className="fill">PLEASE FILL THIS FORM!!</p>
          <form action="">
            <input type="text" placeholder="Name" />
            <div className="phone">
              <input type="text" placeholder="+91" />
              <input type="text" placeholder="Contact Number" />
            </div>
            <input type="text" placeholder="Any Comments?" />
            <button className="submit" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
      <section className="sec-5">
        <div className="footer">
          <div className="footer-logo">
            <p>LOGO</p>
          </div>
          <div>
            <div className="address">
              <img src={require("./images/icon-5.png")} alt="" />
              <p>MAIL ID</p>
            </div>
            <div className="address">
              <img src={require("./images/icon-6.png")} alt="" />
              <p>CONTACT NO.</p>
            </div>
          </div>
          <div className="nav-footer">
            <ul className="nav-item">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#properties">PROPERTIES</a></li>
            <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
          <div className="link">
            <h6>DIRECTLY CONTACT US ON</h6>
            <div className="whatsup">
              <img src={require("./images/icon-7.png")} alt="" />
              <p> WHATSAPP</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="copy-right">
          <p>&copy;2024 ALL RIGHTS RESERVED | POWERED BY <span>PROPERTY VISTA</span> DISCLAIMER</p>
        </div>
      </section>
    </div>
  );
}

export default App;
