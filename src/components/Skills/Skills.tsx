import './skills.css';
import code from './icons/code.svg';
import js from './icons/javascript.svg';
import ts from './icons/typescript.svg';
import html from './icons/html5.svg';
import css from './icons/css3.svg';
import python from './icons/python.svg';
import cplusplus from './icons/cplusplus.svg';
import database from './icons/database.svg';
import react from './icons/react.svg';
import nodejs from './icons/nodejs.svg';
import mongodb from './icons/mongodb.svg';
import bootstrap from './icons/bootstrap.svg';
import jest from './icons/jest.svg';
import tools from './icons/nodejs.svg';
import git from './icons/git.svg';
import webpack from './icons/webpack.svg';
import creative from './icons/creative.svg';
import figma from './icons/figma.svg';
import premierepro from './icons/adobepremierepro.svg';
import photoshop from './icons/adobephotoshop.svg';

export default function Skills() {
  return (
    <div className='skills'>Skill<span style={{color: 'white', backgroundColor: '#2D3047', borderRadius: 4, padding: 3, margin: 3}}>s</span>
      <div className="skills-array">
        <ul className="languages">
          <li className="list-title"><img src={code} alt="code" style={{width:20, margin:0}} />Languages</li>
          <li><img src={js} alt="code" style={{width:20, margin:0}} /> Javascript</li>
          <li><img src={ts} alt="code" style={{width:20, margin:0}} /> Typescript</li>
          <li><img src={html} alt="code" style={{width:20, margin:0}} /> HTML5</li>
          <li><img src={css} alt="code" style={{width:20, margin:0}} /> CSS3</li>
          <li><img src={python} alt="code" style={{width:20, margin:0}} /> Python</li>
          <li><img src={cplusplus} alt="code" style={{width:20, margin:0}} /> C++</li>
        </ul>
        <ul className="frameworks-databases">
          <li className="list-title"><img src={database} alt="code" style={{width:20, margin:0}} />Frameworks/Databases</li>
          <li><img src={react} alt="code" style={{width:20, margin:0}} /> React.js</li>
          <li><img src={nodejs} alt="code" style={{width:20, margin:0}} /> Node.js/Express.js</li>
          <li><img src={mongodb} alt="code" style={{width:20, margin:0}} /> MongoDB/Mongoose</li>
          <li><img src={bootstrap} alt="code" style={{width:20, margin:0}} /> Bootstrap</li>
          <li><img src={jest} alt="code" style={{width:20, margin:0}} /> Jest</li>
        </ul>
        <ul className="tools">
          <li className="list-title"><img src={tools} alt="code" style={{width:20, margin:0}} />Tools</li>
          <li><img src={git} alt="code" style={{width:20, margin:0}} /> Git</li>
          <li><img src={webpack} alt="code" style={{width:20, margin:0}} /> Webpack</li>
          <li>VS Code</li>
          <li>Linux</li>
        </ul>
        <ul className="creative-tools">
          <li className='list-title'><img src={creative} alt="code" style={{width:20, margin:0}} />Creative Tools</li>
          <li><img src={figma} alt="code" style={{width:20, margin:0}} /> Figma</li>
          <li><img src={premierepro} alt="code" style={{width:20, margin:0}} /> Premiere Pro</li>
          <li><img src={photoshop} alt="code" style={{width:20, margin:0}} /> Photoshop</li>
          <li>Final Cut Pro</li>
          <li>Pixelmator Pro</li>
          <li>Paper</li>
          <li>Pencil</li>
        </ul>
      </div>
    </div>
  )
}