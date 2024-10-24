import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="https://raw.githubusercontent.com/hatimenezari/portfolio/refs/heads/main/public/hatim-enezari-pic.jpeg" 
            alt="description" 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
          />    
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Hatim Enezari</strong>. I'm originally from Morocco. 
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my carreer, I had the opportunity to engage in fascinating projects. Notably, I contributed in the development of may projects for clients such as aircanada, dailymotion, myautogrill...
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
