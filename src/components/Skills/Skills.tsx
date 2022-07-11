import './skills.css';
import { FaFigma } from 'react-icons/fa';
import { SiAdobepremierepro } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiWebpack } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { FaDatabase } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { SiLivejournal } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiPython } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { SiJest } from 'react-icons/si'

export default function Skills() {
  return (
    <div className='skills'>Skill<span style={{color: 'white', backgroundColor: '#2D3047', borderRadius: 4, padding: 3, margin: 3}}>s</span>
      <div className="skills-array">
        <ul className="languages">
          <li className="list-title"><BiCodeAlt />Languages</li>
          <li><SiJavascript /> Javascript</li>
          <li><SiTypescript /> Typescript</li>
          <li><FaHtml5 /> HTML5</li>
          <li><IoLogoCss3 /> CSS3</li>
          <li><SiPython /> Python</li>
          <li><SiCplusplus /> C++</li>
        </ul>
        <ul className="frameworks-databases">
          <li className="list-title"><FaDatabase />Frameworks/Databases</li>
          <li><SiReact /> React.js</li>
          <li><FaNodeJs /> Node.js/Express.js</li>
          <li><SiMongodb /> MongoDB/Mongoose</li>
          <li><FaBootstrap /> Bootstrap</li>
          <li><SiJest /> Jest</li>
        </ul>
        <ul className="tools">
          <li className="list-title"><FaTools />Tools</li>
          <li><FaGitAlt /> Git</li>
          <li><SiWebpack /> Webpack</li>
          <li>VS Code</li>
          <li>Linux</li>
        </ul>
        <ul className="creative-tools">
          <li className='list-title'><SiLivejournal />Creative Tools</li>
          <li><FaFigma /> Figma</li>
          <li><SiAdobepremierepro /> Premiere Pro</li>
          <li><SiAdobephotoshop /> Photoshop</li>
          <li>Final Cut Pro</li>
          <li>Pixelmator Pro</li>
          <li>Paper</li>
          <li>Pencil</li>
        </ul>
      </div>
    </div>
  )
}