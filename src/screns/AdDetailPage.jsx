import React, { useState, useEffect } from "react";
import "../App.css";
import { getDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import db from "../db";
import olxLogo from "../images/olxLogo.png";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import { IconButton } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";

function AdDetailPage() {
  const [adTitle, setAdTitle] = useState();
  const [adDiscription, setAdDiscription] = useState();
  const [adImg, setAdImg] = useState();
  const [adPrice, setAdPrice] = useState();
  const [adLocation, setAdLocation] = useState();
  const [adUserName, setAdUserName] = useState();
  const [adUserNum, setAdUserNum] = useState();

  const { userId } = useParams();
  useEffect(() => {
    getDoc(doc(db, "users", userId.split(":")[1])).then((e) => {
      setAdTitle(e.data().ProductTitle);
      setAdDiscription(e.data().ProductDiscription);
      setAdImg(e.data().ProductImage);
      setAdPrice(e.data().ProductPrice);
      setAdLocation(e.data().ProductLocation);
      setAdUserName(e.data().UserName);
      setAdUserNum(e.data().UserNum);
    });
  }, []);
  return (
    <div>
      <div className="AdDetailPageHeader">
        <Link to="/">
          <IconButton>
            <BackIcon />
          </IconButton>
        </Link>
        <img
          className="olxLogo"
          style={{ position: "absolute", left: "8%" }}
          src={olxLogo}
          alt=""
        />

        <div className="assignButton" style={{ width: "15%" }}>
          <Link to="/AdForm">
            <Button id="navButton" variant="contained" startIcon={<AddIcon />}>
              Post an Ad
            </Button>
          </Link>
          <Link to="/AdForm">
            <Button
              id="navButton"
              variant="contained"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
      <div className="adDetailSection">
        <div className="sec1">
          <img src={adImg} alt="" />
        </div>
        <div className="sec2">
          <h4>
            <b>Discription:</b>
            <br />
            <br />
            {adDiscription}
          </h4>
        </div>
        <div className="sec3">
          <h3>Rs : <b> {adPrice} </b> </h3>
          <br />
          <h4>{adTitle}</h4>
          <h6>
            {" "}
            <b> Location : </b> {adLocation}
          </h6>
        </div>
        <div className="sec4">
          <h4>
            <b>Seller Discription:</b>
          </h4>
          <br />
          <h5>
            {" "}
            <b> Seller Name : </b>
            {adUserName}
          </h5>
          <h5>
            <b> Seller Contact : </b>
            {adUserNum}
          </h5>
        </div>
      </div>
    </div>
  );
}
export default AdDetailPage;
