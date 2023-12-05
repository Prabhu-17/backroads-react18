import { pagelinks,sociallinks } from "./data"

export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pagelinks.map((page)=>{
          const{href,id,text}=page
          return(
            
        <li key={id}>
          <a href={href} className="footer-link">
            {text}
          </a>
        </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {sociallinks.map((social)=>{
          const{id,href,icon}=social
          return(

        <li key={id}>
          <a
            href={href}
            
            className="footer-icon"
          >
            <i className={icon}></i>
          </a>
        </li>
          )
        })}
      
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}