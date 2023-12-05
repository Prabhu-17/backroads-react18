import logo from '../images/logo.svg'
import { pagelinks } from './data'
import { sociallinks } from './data'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pagelinks.map((link)=>{
            return (
              <li id={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {sociallinks.map((link)=>{
            return (
              <a
                id={link.id}
                href={link.href}
               
                className="nav-icon"
              >
                <i className={link.icon}></i>
              </a>
            )
          })}
          
        </ul>
      </div>
    </nav>
  )
}