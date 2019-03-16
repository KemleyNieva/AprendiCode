import React from "react";
import './Root.scss';

import {Header} from './Header'
import {Footer} from './Footer'
import Main from './Main'

const Root = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default Root