import React from 'react';
import hackDuke from '../img/hackduke.png';
import hackUMass from '../img/hackumass.png';
import newYearNewHack from '../img/nynh.png';

class Home extends React.Component {

    //constructor(props) {
    //    super(props);
    //}

    render() {
        return (
            <div>
                <div class="card" id="header">
                    <h1>Isaac Thompson's Website</h1>
                </div>
                <div class="card" id="skills">
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
                <div class="card" id="hackathons">
                    <h1>My hackathons</h1>
                    <a href="https://devpost.com/software/carbon-crushes" target="_blank" rel="noreferrer">
                        <div className="hackImg"><img src={hackDuke}/></div>
                    </a>
                    <a href="https://dashboard.hackumass.com/projects/22" target="_blank" rel="noreferrer">
                        <div className="hackImg"><img src={hackUMass}/></div>
                    </a>
                    <a href="https://devpost.com/software/placeholder-nbyseg" target="_blank" rel="noreferrer">
                        <div className="hackImg"><img src={newYearNewHack}/></div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;