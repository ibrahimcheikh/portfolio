import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles.css'; // Import the CSS file
export default function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  }, []);
  return (
    <Wrapper>

      <Spline className="spline" scene="https://prod.spline.design/C-CAjXRA9cJOnhpf/scene.splinecode" />
      <Content>
        <Menu>
          <li><img src={logo} alt="Logo" /></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Education</a></li>
          <li><a href="/">Experience</a></li>

        </Menu>

        <h1 style={{ opacity: scrollPosition > 100 ? 0 : 1 }}>Ibrahim Cheikh</h1>
        <p style={{ opacity: scrollPosition > 100 ? 0 : 1 }}>Imagine you are a character in a story,
          and your mission is to create something
          that will inspire others. What would you create?
          How would you do it? Think about the impact you
          want to have on the world and let your creativity
          guide you.
        </p>

      </Content>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  font-family: "Spline sans",sans-serif;  
  font-size: 16px;
  color: white;
  .spline {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div`
position:absolute;
top:30px;
display: flex;
flex-direction:column;

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
gap:30px;
align-items:center

padding: 0;
li{
  list-style: none;
  margin:55px;
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
`