import {useState} from 'react'
import image from '../images/Designer.png'

const Header = () => { 
  let btn_name = 'Log in'
  let [btn, set_btn] = useState(btn_name)

  const onclick = async () => {
    btn == btn_name ? set_btn('Logout') : set_btn(btn_name)
  }
  return (
    <div className="header">
      <div className="logo_section">
        <img src={image} alt="logo" />
      </div>
      <div className="menu">
        <ul className="nav-item">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login_btn" onClick={onclick}>{btn}</button>
        </ul>
      </div>
    </div>
  )
}

export {Header}