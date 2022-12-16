import React from "react";
import "./brand.css";
import { google, stack, atlassian, dropbox, shopify } from "./import.js";

const Brand = () => {
  return(
  <div className="brand section-padding">
    <div>
      <img src={google} alt='google' />
    </div>
    <div>
      <img src={stack} alt='stack' />
    </div>
    <div>
      <img src={atlassian} alt='atlassian' />
    </div>
    <div>
      <img src={dropbox} alt='dropbox' />
    </div>
    <div>
      <img src={shopify} alt='shopify' />
    </div>
  </div>)
};

export default Brand;
