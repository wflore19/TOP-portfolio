import './profile.css';
import pp from './profile-picture.jpg';
import NavBar from '../NavBar/NavBar'

export default function Profile() {
  return (
    <div id="profile">
      <img src={pp} />
      <div className="name">Wilfredo Flores</div>
      <div className='title'>Fullstack Developer</div>
      <NavBar />
    </div>
  )
}