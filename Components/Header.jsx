import image from '../images/Designer.png'

const Header = () => (
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
    </ul>
  </div>
  </div>
)

export {Header}