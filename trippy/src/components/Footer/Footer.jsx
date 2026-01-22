import { Link } from "react-router"
import "./Footer.css"
const Footer = ({ title, describtion, icons, details }) => {
  return (
    <div className="Footer">
      <div className="up">
        <div>
          <h4> {title} </h4>
          <p> {describtion} </p>
        </div>
        <div>
          {icons?.map((icon, index) => {
            return (
              <a key={index}>  <i>{icon?.icon}</i>  </a>
            )
          })}
        </div>
      </div>
      <div className="down">
        {details?.map((list, index2) => (
          <div key={index2}>
            <h4>{list.subtitle}</h4>
            <ul>
              {list.detail?.map((link, index3) => (
                <li key={index3}> <Link to={link?.url || '#'}>{link.linkItem}</Link> </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Footer
