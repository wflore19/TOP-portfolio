import './heroes.css';
import imposter from './copypasta.png';

export default function Heroes() {
  return (
    <div className="heroes">
      <img src={imposter} alt="img" className="copy" />
      <div className='btns-list'>
        <button id='btns'>Resume</button>
        <button id='btns'>Projects</button>
        <button id='btns'>Github</button>
        <button id='btns'>Youtube</button>
      </div>
    </div>
  )
}