import './profile.css';
import pp from './profile-picture.png';
import NavBar from '../NavBar/NavBar'

export default function Profile() {
  return (
    <div id="profile">
      <img src={pp} alt="wilfredo" />
      <div className="name">Wilfredo Flores</div>
      <div className='title'>Fullstack Developer</div>
      <NavBar />
      <div className='cr'>© 2022 All rights reserved</div>
    </div>
  )
}