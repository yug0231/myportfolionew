import "./hero.css";
import gitIcon from "../Images/github.png";
import linkedIcon from "../Images/linkedin.png";
import instaIcon from "../Images/insta.png";
const Hero = () => {
  return (
    <div id="hero">
      <div id="heroSocial">
        <a href="https://github.com/yug0231" target="_blank">
          <img src={gitIcon} className="socialIcon" />
        </a>
        <a href="www.linkedin.com/in/yugalnemade" target="_blank">
          <img src={linkedIcon} className="socialIcon" />
        </a>
        <a href="https://www.instagram.com/___yug/" target="_blank">
          <img src={instaIcon} className="socialIcon" />
        </a>
      </div>
      <div id="heroInfo">
        <div class="wrapper">
          <div class="typing-demo">WELCOME...!</div>
        </div>
        <h1>
          <span
            style={{
              color: "rgb(78, 78, 78)",
              width: "100%",
            }}
          >
            Hi, I'm
          </span>{" "}
          YUGAL NEMADE
        </h1>
        <h3>
          <span>a</span>
          <div class="message">
            <div class="word1">HUMAN</div>
            <div class="word2">FULL STACK DEVLOPER</div>
            <div class="word3">GRAPHICS DESIGNER</div>
          </div>
        </h3>
      </div>
      <div id="heroImage"></div>
    </div>
  );
};
export { Hero };
