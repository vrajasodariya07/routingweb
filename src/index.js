import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// component file
import Banner from './Component/Home/Banner.js';




import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { RxDragHandleHorizontal } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";

import { FaCar, FaWifi } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { TbRulerMeasure } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaCcPaypal, FaCcMastercard, FaCcVisa, FaCcStripe, FaFacebookF, FaTwitter, FaPinterestSquare, FaYoutube, FaInstagram, FaPaperPlane } from "react-icons/fa";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
