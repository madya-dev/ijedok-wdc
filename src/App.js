import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage.js";
import AllTestimoni from "pages/AllTestimoni";
import NotFound from "pages/NotFound";
import MenuConsultation from "pages/MenuConsultation";
import DokterUmum from "pages/DokterUmum";
import DokterCovid from "pages/DokterCovid";
import DokterAnak from "pages/DokterAnak";
import DokterKandungan from "pages/DokterKandungan";
import PageChat from "pages/PageChat";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import PageProfile from "pages/PageProfile";
import PageApotek from "pages/PageApotek";
import PageDetailApotek from "pages/PageDetailApotek";
import PageTestCovid from "pages/PageTestCovid";
import PageDetailTestCovid from "pages/PageDetailTestCovid";
import PageDetailVaksinasi from "pages/PageDetailVaksinasi";
import PageVaksinasi from "pages/PageVaksinasi";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          exact
          path="/konsultasi-dokter"
          component={MenuConsultation}
        ></Route>
        <Route exact path="/testimoni" component={AllTestimoni}></Route>
        <Route exact path="/dokter-umum" component={DokterUmum}></Route>
        <Route
          exact
          path="/dokter-penanganan-covid-19"
          component={DokterCovid}
        ></Route>
        <Route exact path="/spesialis-anak" component={DokterAnak}></Route>
        <Route
          exact
          path="/spesialis-kandungan"
          component={DokterKandungan}
        ></Route>
        <Route exact path="/chat" component={PageChat}></Route>
        <Route exact path="/chat/:id" component={PageChat}></Route>
        <Route exact path="/masuk" component={LoginPage}></Route>
        <Route exact path="/daftar" component={RegisterPage}></Route>
        <Route exact path="/profile" component={PageProfile}></Route>
        <Route exact path="/apotek" component={PageApotek}></Route>
        <Route exact path="/apotek/:id" component={PageDetailApotek}></Route>
        <Route exact path="/tes-covid19" component={PageTestCovid}></Route>
        <Route
          exact
          path="/vaksinasi-covid19/:id"
          component={PageDetailVaksinasi}
        ></Route>
        <Route
          exact
          path="/vaksinasi-covid19"
          component={PageVaksinasi}
        ></Route>
        <Route
          exact
          path="/tes-covid19/:id"
          component={PageDetailTestCovid}
        ></Route>
        <Route component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
