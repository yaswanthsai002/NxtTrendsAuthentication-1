import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="navbar">
      <div className="website-logo-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
      </div>
      <ul className="lg-nav-items-list">
        <Link className="nav-link lg" to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link className="nav-link lg" to="/products">
          <li className="nav-item">Products</li>
        </Link>
        <Link className="nav-link lg" to="/cart">
          <li className="nav-item">Cart</li>
        </Link>
        <Link className="nav-link lg" to="/login">
          <button type="button" className="lg-logout-btn">
            Logout
          </button>
          <button type="button" className="md-logout-btn">
            <img
              className="logout-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
            />
          </button>
        </Link>
      </ul>
    </nav>
    <ul className="sm-nav-items-list">
      <Link className="nav-link sm" to="/">
        <li className="nav-item">
          <img
            className="home-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </li>
      </Link>
      <Link className="nav-link sm" to="/products">
        <li className="nav-item">
          <img
            className="products-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </li>
      </Link>
      <Link className="nav-link sm" to="/cart">
        <li className="nav-item">
          <img
            className="cart-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </li>
      </Link>
    </ul>
  </>
)

export default Header
