import React from "react";
import "./card.css";
import img1 from "./img-card.webp";
const ProfileComponent = () => {
  return (
    <section>
      <div className="box1 box">
        <div className="content">
          <div className="image">
            <img src={img1} alt="Profile Image" />
          </div>
          <div className="level">
            <p>PRO</p>
          </div>
          <div className="text">
            <p className="name">Ethan Rivers</p>
            <p className="job_title">UI / UX Designer</p>
            <p className="job_discription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              atque, ipsam a amet laboriosam eligendi.
            </p>
          </div>
          <div className="icons">
            <button>
              <ion-icon name="logo-dribbble"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-instagram"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-twitter"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-linkedin"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
            <button>
              <ion-icon name="logo-behance"></ion-icon>
            </button>
          </div>
          <div className="button">
            <div>
              <button className="message" type="button">
                Message
              </button>
            </div>
            <div>
              <button className="connect" type="button">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="box2 box">
        <div className="content">
          <div className="row">
            <div className="image">
              <img src={img1} alt="Profile Image" />
            </div>
            <div className="post">
              <p>Post</p>
              <h5>28</h5>
            </div>
            <div className="followers">
              <p>Followers</p>
              <h5>678</h5>
            </div>
            <div className="following">
              <p>Following</p>
              <h5>120</h5>
            </div>
          </div>
          <div className="text">
            <p className="name">Ethan Rivers</p>
            <p className="job_title">UI / UX Designer</p>
            <p className="about">About</p>
            <p className="job_discription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
              placeat obcaecati. Eaque fugit eveniet error voluptates totam enim
              molestias vitae, amet aliquid deleniti ipsa ea.
            </p>
          </div>
        </div>
      </div>P
    </section>
  );
};

export default ProfileComponent;
