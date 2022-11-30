import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../db";
import olxLogo from "../images/olxLogo.png";
import { collection, addDoc } from "firebase/firestore";
import { IconButton } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";

function AdForm() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [adLocation, setAdLocation] = useState("");
  const [adUserName, setAdUserName] = useState("");
  const [adUserNum, setAdUserNum] = useState("");

  async function dataHandle() {
    if (title === "" || discription === "" || img === "" || price === "" || adLocation === "" || adUserName === ""|| adUserNum === "") {
      alert("Something went wrong");
    } else {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          ProductTitle: title,
          ProductDiscription: discription,
          ProductImage: img,
          ProductPrice: price,
          ProductLocation: adLocation,
          UserName: adUserName,
          UserNum: adUserNum,
        });
        alert("Document written with ID: ", docRef.id);
        setTitle("");
        setImg("");
        setDiscription("");
        setPrice("");
        setAdLocation("");
        setAdUserName("");
        setAdUserNum("");
      } catch (e) {
        alert("Error adding document: ", e);
      }
    }
  }
  return (
    <div>
      <div className="adFormHeader">
        <img className="olxLogo" src={olxLogo} alt="" />

        <div className="backButton">
          <Link to="/">
            <IconButton>
              <BackIcon />
            </IconButton>
          </Link>
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Post Your Ad</h2>
      <div className="adDetail">
        <h3></h3>
        <h2>Include Some Detail</h2>
        <TextField
          id="outlined-basic"
          className="adDetailInput"
          label="Ad Title"
          value={title}
          variant="outlined"
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          className="adDetailInput"
          label="Ad Discription"
          value={discription}
          variant="outlined"
          onChange={(event) => setDiscription(event.target.value)}
        />
        <span className="lineHr"></span>
        <h2>Set Price</h2>
        <TextField
          id="outlined-basic"
          className="adDetailInput"
          label="Ad Price"
          value={price}
          variant="outlined"
          onChange={(event) => setPrice(event.target.value)}
        />
        <span className="lineHr"></span>
        <h2>Enter Ad Image URL</h2>
        <TextField
          id="outlined-basic"
          className="adDetailInput"
          label="Ad Picture URL"
          value={img}
          variant="outlined"
          onChange={(event) => setImg(event.target.value)}
        />
        <span className="lineHr"></span>
        <h2>Your Ad's Location</h2>
        <TextField
          id="outlined-basic"
          className="adDetailInput"
          label="Ad Location"
          value={adLocation}
          variant="outlined"
          onChange={(event) => setAdLocation(event.target.value)}
        />
        <span className="lineHr"></span>
        <h2>Review Your Details</h2>
        <TextField
          id="outlined-basic"
          className="adDetailInput"
          label="Enter Your Name"
          value={adUserName}
          variant="outlined"
          onChange={(event) => setAdUserName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          className="adDetailInput"
          label="Enter Your Phone Number"
          value={adUserNum}
          variant="outlined"
          onChange={(event) => setAdUserNum(event.target.value)}
        />
        <span className="lineHr"></span>
        <div>
          <button
            variant="contained"
            className="postAdButton"
            onClick={dataHandle}
          >
            Post Now
          </button>
        </div>
      </div>
      {/* <img src={img} />
      <p>{title}</p>
      <p>{price}</p> */}
    </div>
  );
}
export default AdForm;
