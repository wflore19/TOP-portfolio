import './hamburger.css';

export default function Hamburger() {
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

  const hamburger = document.querySelector(".hamburger")!;
  const navMenu = document.querySelector(".nav-menu")!;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }));

  return (
    <nav className="navbar">
      <div className="nav-menu">
        <button className="nav-item" onClick={handleLinkTouch}>Home</button>
        <button className="nav-item" onClick={handleLinkTouch}>About</button>
        <button className="nav-item" onClick={handleLinkTouch}>Skills</button>
        <button className="nav-item" onClick={handleLinkTouch}>Projects</button>
        <button className="nav-item" onClick={handleLinkTouch}>Resume</button>
        <button className="nav-item" onClick={handleLinkTouch}>Contact</button>
      </div>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  )
}