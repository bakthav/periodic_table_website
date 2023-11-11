import React, { Component, useState, useEffect, useMemo } from "react";
// import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import CardArrow from "../../../assets/images/card-arrow.png";
// import "react-rangeslider/lib/index.css";
// import Slider from "react-rangeslider";
import Logo from '../../../assets/images/logo.png'
import $ from 'jquery';

// import SideBar from "../components/sidebar/SideBar";
// import Content from "../components/content/Content";
// import "./LaunchApp.css"

class LunchApp extends Component {
constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
        return (
          <div className="App wrapper">
            {/* <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
            <Content toggle={this.toggle} isOpen={this.state.isOpen} /> */}
          </div>
        );
  }
}

export default LunchApp;