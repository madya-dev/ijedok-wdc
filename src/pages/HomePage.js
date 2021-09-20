import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Testimoni from "parts/Testimoni";
import TestimoniData from "json/Testimoni.json";
import Footer from "parts/Footer";
import MenuHome from "parts/MenuHome";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.refMenu = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="">
        <Header />
        <Hero refMenu={this.refMenu} />
        <MenuHome refMenu={this.refMenu} />
        <Testimoni data={TestimoniData} />
        <Footer></Footer>
      </section>
    );
  }
}
