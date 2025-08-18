import React from "react";
import Layout, { Content } from "../components/layout";

const About = () => {
    return (
        
        <Content contentTitle="About Me">
          
          <Content contentTitle="Personal">
            Hi, I'm Simone! (she/they)
            <br/>
            I'm a maker and creator, striving to practice as many different artistic mediums as I possibly can!
            <br/>
            My passions include playing piano, composing music, and sketching/painting.
            <br/>
            I built this website to show off some of the things I've made :)
          </Content>
          
          <Content contentTitle="Professional">
            My topics of professional interest include:
            {/* who knows why ul doesn't work here? shrug */}
            <div className="px-10 mt-1 mb-1">
              <li>3D manufacturing technology</li>
              <li>embedded systems programming</li>
              <li>mechatronics/robotics</li> 
              <li>software development (full stack)</li>
            </div>
            
          </Content>
  
          <Content contentTitle="Site Info">
            All art is my own, and is not allowed to be used for any purpose without my explicit permission.
            <br/>
            I developed this web page using Vite, React, and Tailwind.
            <br/>
            Digital art was created in Krita and Sketchbook.
            <br/>
            3D Models were created in Blender, Fusion360, and Solidworks. 
            <br/>
            Animations were created in Krita and Blender.        
          </Content>
  
          <Content contentTitle="Contact">
              Send me an email or something won't ya? --&gt; simone_hamby@proton.me
          </Content>
          </Content>

        
    );
};

export default About