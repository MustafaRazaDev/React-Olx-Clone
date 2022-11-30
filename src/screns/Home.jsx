import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import olxLogo from "../images/olxLogo.png";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import Carousel from "react-bootstrap/Carousel";
import { collection, getDocs } from "firebase/firestore";
import db from "../db";
import { useNavigate } from "react-router-dom";
import {doc} from 'firebase/firestore'
import Card from "react-bootstrap/Card";

function Home(props) {
  console.log("🚀 ~ file: Home.jsx:15 ~ Home ~ props", props)
  const [adds, setAdds] = useState([""]);
  const navigate = useNavigate() 

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const list = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      list.push({...doc.data(),id: doc.id});
      setAdds(list);
      // console.log(doc.id)
    });
  }
  return (
    <div>
      <div className="homeHeader">
        <img className="olxLogo" src={olxLogo} alt="" />

        <div className="assignButton">
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
      <div className="mainSection">
        <Carousel>
          <Carousel.Item>
            <img
              id="sliderImg"
              src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="sliderImg"
              src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="recText">Fresh recommendations</h1>
        <div className="add">
          {adds.map((event) => {
            return (
              <Card style={{ width: "18rem" }} onClick={ () => navigate("AdDetailPage:"+event.id)}>
                <Card.Img variant="top" id="ProductImg" src={event.ProductImage} />
                <Card.Body>
                  <Card.Title>{event.ProductTitle}</Card.Title>
                  <Card.Text><b>Rs: {event.ProductPrice}</b></Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
export default Home;
