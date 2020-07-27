import React from "react";

import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
//css
import Globalstyle from "../Styles/Globalstyle";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Section />
        <Footer />
        <Globalstyle />
      </>
    );
  }
}

export default App;
