import Chats from "parts/Chats";
import Header from "parts/Header";
import React, { Component } from "react";

export default class PageChat extends Component {
  render() {
    return (
      <section className="overflow-hidden w-screen top-0 left-0 bottom-0 absolute h-screen">
        <Chats />
      </section>
    );
  }
}
