import './navbar.css';

function NavBar() {

  function handleLinkTouch(e: any) {
    if (e.target.textContent === "Home") {
      // @ts-ignore: Object is possibly 'null'.
      document
        .querySelector(".heroes")
        .scrollIntoView({behavior:"smooth"});
    } else if(e.target.textContent === "About") {
      // @ts-ignore: Object is possibly 'null'.
      document
        .querySelector(".whoami")
        .scrollIntoView({behavior:"smooth"}); 
    } else if (e.target.textContent === "Skills"){
      // @ts-ignore: Object is possibly 'null'.
      document
        .querySelector(".skills")
        .scrollIntoView({behavior:"smooth"});
    } else if (e.target.textContent === "Projects"){
      // @ts-ignore: Object is possibly 'null'.
      document
        .querySelector(".projects")
        .scrollIntoView({behavior:"smooth"});
    } else if (e.target.textContent === "Resume"){
      // @ts-ignore: Object is possibly 'null'.
      document
        .querySelector(".projects")
        .scrollIntoView({behavior:"smooth"});
    } else if (e.target.textContent === "Contact"){
      // @ts-ignore: Object is possibly 'null'.
      document
        .querySelector(".whoami")
        .scrollIntoView({behavior:"smooth"});
    }
  }
  
    return (
    <div id="nav-group">
      <button className="nav-item" onClick={handleLinkTouch}>Home</button>
      <button className="nav-item" onClick={handleLinkTouch}>About</button>
      <button className="nav-item" onClick={handleLinkTouch}>Skills</button>
      <button className="nav-item" onClick={handleLinkTouch}>Projects</button>
      <button className="nav-item" onClick={handleLinkTouch}>Resume</button>
      <button className="nav-item" onClick={handleLinkTouch}>Contact</button>
    </div>
  )
}
export default NavBar;
