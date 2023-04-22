
//  import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import Spline from '@splinetool/react-spline';

//  import timelineElements from "./timelineElements";
//  import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
//  import { ReactComponent as SchoolIcon } from "./school.svg";
//  import { ReactComponent as WorkIcon } from "./work.svg";
import "react-vertical-timeline-component/style.min.css";
import './styles.css';



export default function App() {
  //  let workIconStyles = { background: "white" };
  //  let schoolIconStyles = { background: "white" };
  //  const [scrollPosition, setScrollPosition] = useState(0);
  //  const titleRef = useRef(null);
  //  const subTitleRef = useRef(null);
  //  useEffect(() => {
  //    window.addEventListener('scroll', () => {
  //      setScrollPosition(window.scrollY);
  //    });
  //  }, []);

  //  useEffect(() => {
  //    const handleScroll = () => {
  //      setScrollPosition(window.scrollY);
  //    };

  //    window.addEventListener("scroll", handleScroll);

  //    return () => {
  //      window.removeEventListener("scroll", handleScroll);
  //    };
  //  }, []);

  //  const isTitleVisible = scrollPosition <= 100;



  return (
    <div class="grid grid-cols-2 gap-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div class="flex flex-col mt-5 -ml-5 ">
        <img class="w-24 sm:w-36" src={logo} alt="Logo" />
        <h1 class="font text-6xl font-bold tracking-tight text-white sm:text-6xl py-20">Hello world</h1>
        <p class="mt-10 text-xl text-white sm:text-xl">Imagine you are a character in a story, and your mission is to create something that will inspire others. What would you create? How would you do it? Think about the impact you want to have on the world and let your creativity guide you.</p>
      </div>
      <div class="h-65 sm:h-full">
        <Spline scene="https://prod.spline.design/C-CAjXRA9cJOnhpf/scene.splinecode" />
      </div>
    </div>
  );
}




