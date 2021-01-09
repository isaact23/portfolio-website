import React from 'react';
import personalImage from '../img/isaacthompson.jfif';
// Links
import linkedIn from '../img/links/linkedin.jfif';
import devpost from '../img/links/devpost.png';
// Hacks
import hackDuke from '../img/hackathons/hackduke.png';
import hackUMass from '../img/hackathons/hackumass.png';
import newYearNewHack from '../img/hackathons/nynh.png';
import nwHacks from '../img/hackathons/nwhacks.png';
// Unity
import iTakeStew from '../img/unity/itakestew.png';
import flopp from '../img/unity/flopp.png';
import stackCity from '../img/unity/stackcity.png';

class Home extends React.Component {

    //constructor(props) {
    //    super(props);
    //}

    render() {
        return (
            <div>
                <div className="card" id="intro">
                    <div className="introText">
                        <h1>Welcome!</h1>
                        <p>This is Isaac Thompson's personal website.</p>
                    </div>
                    <div className="introImage">
                        <img src={personalImage} />
                    </div>
                </div>
                <div className="card" id="links">
                    <h1>Quick links</h1>
                    <a href="https://www.linkedin.com/in/isaact23/" target="_blank" rel="noreferrer">
                        <div className="linkImg"><img src={linkedIn} alt="LinkedIn"/></div>
                    </a>
                    <a href="https://devpost.com/isaact23" target="_blank" rel="noreferrer">
                        <div className="linkImg"><img src={devpost} alt="Devpost"/></div>
                    </a>
                </div>
                <div className="card" id="unity">
                    <h1>Unity3D showcase</h1>
                    <a href="https://gaming-project-at-vt.itch.io/i-take-stew" target="_blank" rel="noreferrer">
                        <div className="unityImg"><img src={iTakeStew} alt="I Take Stew"/></div>
                    </a>
                    <a href="https://shufflesninja.itch.io/flopp" target="_blank" rel="noreferrer">
                        <div className="unityImg"><img src={flopp} alt="Flopp"/></div>
                    </a>
                    <a href="https://shufflesninja.itch.io/stack-city" target="_blank" rel="noreferrer">
                        <div className="unityImg"><img src={stackCity} alt="Stack City"/></div>
                    </a>
                </div>
                <div className="card" id="hackathons">
                    <h1>My hackathons</h1>
                    <a href="https://devpost.com/software/carbon-crushes" target="_blank" rel="noreferrer">
                        <div className="hackImg"><img src={hackDuke} alt="HackDuke"/></div>
                    </a>
                    <a href="https://dashboard.hackumass.com/projects/22" target="_blank" rel="noreferrer">
                        <div className="hackImg"><img src={hackUMass} alt="HackUMass"/></div>
                    </a>
                    <a href="https://devpost.com/software/placeholder-nbyseg" target="_blank" rel="noreferrer">
                        <div className="hackImg"><img src={newYearNewHack} alt="NewYearNewHack"/></div>
                    </a>
                    <div className="hackImg"><img src={nwHacks} alt="nwHacks"/></div>
                </div>
                <div className="card" id="skills">
                    <h1>Tools I use</h1>
                    <div className="skillBox" id="python">    <h2>Python</h2></div>
                    <div className="skillBox" id="java">      <h2>Java</h2></div>
                    <div className="skillBox" id="html">      <h2>HTML</h2></div>
                    <div className="skillBox" id="javascript"><h2>JavaScript</h2></div>
                    <div className="skillBox" id="react">     <h2>ReactJS</h2></div>
                    <div className="skillBox" id="unity">     <h2>Unity3D</h2></div>
                    <div className="skillBox" id="blender">   <h2>Blender</h2></div>
                    <div className="skillBox" id="flutter">   <h2>Flutter</h2></div>
                </div>
            </div>
        );
    }
}

export default Home;