import React from "react";
import "./FeedThePeople.css";
import ftpImage from "../assets/images/photo_2025-12-03_15-06-05.jpg";
import candyCaneBorder from "../assets/images/candy-cane-border.png";

const FeedThePeople = () => {
  return (
    <section className="ftp-section" id="feed-the-people">
      <div className="bg-snow"></div>
      <div className="ftp-container relative-content">
        <div className="header-group">
          <h1 className="ftp-title">Feed The People</h1>
          <p className="ftp-subtitle">A Special Collaboration</p>
        </div>

        <div className="ftp-content">
          <div className="ftp-text-card">
            <div className="card-decoration top-left"></div>
            <div className="card-decoration bottom-right"></div>
            
            <p className="ftp-paragraph greeting">What’s up guys!</p>
            
            <p className="ftp-paragraph">
              We have a cool collaboration coming up with <span className="highlight">@roboPBOC</span> 🎅
            </p>
            
            <p className="ftp-paragraph">
              He recently started a coin called <strong>Official Santa Claus Coin</strong> together with the real Santa Claus from Lapland, who literally launched it and is supporting it. A portion of the creator rewards will be donated to us to fund a children’s toy drive for Christmas 🎄
            </p>
            
            <p className="ftp-paragraph">
              We’re working out the details now, but once everything is confirmed we’ll make a full post, and yes, it will all be on stream 🙏🏽
            </p>
            
            <p className="ftp-paragraph signature">Love y’all 💚</p>

            <div className="tweet-proof">
              <span className="tweet-label">Tweet Proof</span>
              <a
                href="https://x.com/ftponsol/status/1996693226913210542?t=KnoptlFMF1TxW5XYfy67tg&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="ftp-tweet-link"
              >
                View Official Post
              </a>
            </div>
          </div>

          <div className="ftp-image-container">
            <div className="image-frame">
              <img src={ftpImage} alt="Feed The People Collaboration" className="ftp-image" />
              <img src={candyCaneBorder} alt="decoration" className="border-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedThePeople;

