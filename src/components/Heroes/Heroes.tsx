import './heroes.css';
// import imposter from './copypasta.jpg';

export default function Heroes() {  
  return (
    <div className="heroes">
      {/* <img src={imposter} alt="img" className="copy" /> */}
      <div className='btns-list'>
        <a className="btns" href="https://github.com/will-flores1" target="_blank" rel="noreferrer">Resume</a>
        <a className="btns" href="https://github.com/will-flores1" target="_blank" rel="noreferrer">Project</a>
        <a className="btns" href="https://github.com/will-flores1" target="_blank" rel="noreferrer">Github</a>
        <a className="btns" href="https://www.youtube.com/c/WillFlores1" target="_blank" rel="noreferrer">Youtube</a>
      </div>
    </div>
  )
}