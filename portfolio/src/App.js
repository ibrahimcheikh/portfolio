import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import 'aos/dist/aos.css';
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as WorkIcon } from "./work.svg";
import "react-vertical-timeline-component/style.min.css";
import './styles.css'; // Import the CSS file


export default function App() {
  let workIconStyles = { background: "white" };
  let schoolIconStyles = { background: "white" };
  const [scrollPosition, setScrollPosition] = useState(0);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTitleVisible = scrollPosition <= 100;



  return (
    <Wrapper>
      <Spline className="spline" scene="https://prod.spline.design/C-CAjXRA9cJOnhpf/scene.splinecode" />
      <Content>
        <Menu>
          <li><img src={logo} alt="Logo" /></li>
        </Menu>
        <h1
          className={`${isTitleVisible ? "slide-in" : "slide-out"}`}
          ref={titleRef}
        >
          Hello World!
        </h1>
        <p style={{ opacity: scrollPosition > 100 ? 0 : 1 }}>Imagine you are a character in a story,
          and your mission is to create something
          that will inspire others. What would you create?
          How would you do it? Think about the impact you
          want to have on the world and let your creativity
          guide you.
        </p>
      </Content>
      <Time>
        <h2 className={`${isTitleVisible ? "slide-out " : "slide-in"}`}
          ref={subTitleRef}>Overview</h2>

        <VerticalTimeline >
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}

              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                      }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Time>
    </Wrapper >
  );
}




const Wrapper = styled.div`
  font-family: "Spline sans",sans-serif;  
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  gap:80px;
@media (max-width: 1024px){
  gap:40px;
}

  .spline {
    margin:0;
    position: absolute;
    top: 0;
    right: 0;
   

    @media (max-width: 1286px){
      transform:scale(0.8) translateX(-300px);
    }

    @media (max-width: 876px){
      transform:scale(0.75) translateX(-100px);
      right:auto;
      left:50%;
      margin-left:-600px
    }

    @media (max-width: 375){
      transform:scale(0.65) translateX(-50px);
      right:auto;
      left:50%;
      margin-left:-600px
    }
  }
  .center{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Spline sans",sans-serif;  
  font-size: 16px;
  color: black;
  width: 100%;
  }
`;

const Time = styled.div`
  font-family: "Spline sans",sans-serif;  
  justify-content: center;
  font-size: 16px;
  color: black;
  width: 100%;
  display: flex;
  flex-direction:column;

  @media (max-width: 1920px){
    transform:scale(0.99) translateX(1000px);
    right:auto;
    left:50%;
    margin-left:-600px;
    margin-top:1000px;
  }

  @media (max-width: 1300px){
    transform:scale(0.85) translateX(800px);
    right:auto;
    left:50%;
    margin-left:-600px
  }

  @media (max-width: 955px){
    transform:scale(0.75) translateX(800px);
    right:auto;
    left:50%;
    margin-left:-600px
  }


  @media (max-width: 767px){
    transform:scale(0.65) translateX(800px);
    right:auto;
    left:50%;
    margin-left:-600px
  }

  @media (max-width: 635px){
    transform:scale(0.65) translateX(700px);
    right:auto;
    left:50%;
    margin-left:-600px
  }

  @media (max-width: 569px){
    transform:scale(0.6) translateX(700px);
    right:auto;
    left:50%;
    margin-left:-600px
  }

  
  @media (max-width: 390px){
    transform:scale(0.375) translateX(800px);
    right:auto;
    left:50%;
    margin-left:-600px
  }

  h2{
    font-family: "Spline sans",sans-serif;  
    color:white;
    font-size: 100px;
    font-weight:bold;
    display: flex;
    flex-direction:column;
    margin:0;
    justify-content: center;
    transition: opacity 0.5s ease-in-out;
  }
`;



const Content = styled.div`
position:absolute;
top:30px;
display: flex;
flex-direction:column;
gap:80px;
@media (max-width: 1024px){
  gap:40px;
}

h1{
  font-family: "Spline sans",sans-serif;  
  font-size: 100px;
  font-weight:bold;
  margin:0;
  max-width: 500px;
  transition: opacity 0.5s ease-in-out;
}
p{
  font-weight:normal;
  line-height:150%;
  max-width:380px;

  transition: opacity 0.5s ease-in-out 0.2s;
}
h1,p{
  margin: 0 30px 0 100px;
}
`;

const Menu = styled.ul`
display: flex;
gap:15px;
align-items:center;
margin:0 30px 0 100px;

padding: 0;
li{
  list-style: none;

  img {
    height: 200px;
  }
}
a{
  text-decoration:none;
  color:white;
  padding: 8px 100px;
  border: 1px solid rgba(255,255,255,0);
  transition: 1s;
  border-radius:14px;

  :hover{
    border:1px solid rgba(255,255,255,0.2)
  }

}
`;