import React, { useEffect, useState } from "react";
import NavMenu from './navbars/NavMenu';
import sliderImage from "./sliderImage";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import "./slider.css";
import Footer from './Footer';

const len = sliderImage.length - 1;

function About(props) {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);


  return (
    <>
    <div>
      <NavMenu />
      </div>
      <h1>About us</h1>
      <h2>Everyday With Jensenfy Music !</h2>
      <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    
      </div>
      <section id = "hire-section">
        <div className = "container-b">
      <div calssName = "row">
        <div className = "text-wrap">
          <h1> Passionate <strong> team member </strong> </h1>
          <p style={{ "font-size": "20px",
                      "line-height": "32px"}}>
        Find team member who share the value of music. </p>
          <p style={{ "font-size": "20px",
                      "line-height": "32px"}}>
        If you want to make someone feel the joy of music.<br></br>
              Contact us !</p>
        </div>
      </div>

      <div className = "col">
        <ul className="hire-wrap">
        <a href= {'https://www.spotify.com/se/student/?utm_source=se-se_brand_contextual_text&utm_medium=paidsearch&utm_campaign=alwayson_europe_se_performancemarketing_core_brand+contextual+text+exact+se+google&gclid=CjwKCAjw4c-ZBhAEEiwAZ105ReyG8ouLJ2kSipxxpXA4v-tW3Dk8xaR5lFv62E3ae1bM8FZ8AN1TFxoCbRMQAvD_BwE&gclsrc=aw.ds'}>
                    Jensenfy </a>
          <li><a href={'https://open.spotify.com/'}> Front-end 
          Developer <span>immediate opening</span></a></li>
          <li><a href={'https://open.spotify.com/'}> Back-end 
          Developer <span>immediate opening</span></a></li>
          <li><a href={'https://www.bing.com/jobs?q=spotify+frontend+developer+job&scp=0&jid=-1659000462.Retro&rb=0&rc=20&L2=true&c=1'}>Community Manager <span>immediate opening</span></a></li>
          <li><a href={'https://www.bing.com/jobs?q=spotify+frontend+developer+job&scp=0&jid=-1659000462.Retro&rb=0&rc=20&L2=true&c=1'}>Procuct Designer <span>immediate opening</span></a></li>
          
        </ul>
      </div>
      </div>
      </section>
        <Footer />
      
    </>
  )
}


export default About
