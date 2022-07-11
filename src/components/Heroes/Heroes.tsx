import './heroes.css';
import imposter from './copypasta.jpg';

export default function Heroes() {  
  return (
    <div className="heroes">
      <img src={imposter} alt="img" className="copy" />
      <div className='btns-list'>
        <a id='btns' href={''}>Resume</a>
        <a id='btns' href={''}>Project</a>
        <a id="btns" href="https://github.com/will-flores1" target="_blank" rel="noreferrer">Github</a>
        <a id="btns" href="https://www.youtube.com/c/WillFlores1" target="_blank" rel="noreferrer">Youtube</a>
      </div>
    </div>
  )
}