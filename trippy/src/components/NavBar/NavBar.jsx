import './NavBar.css'
import { Link, NavLink } from 'react-router'

const NavBar = ({ logo, items, btn }) => {
    return (
        <div>
            <nav>
                <h1> {logo} </h1>
                <div>
                    <ul>
                        {items?.map((item, index) => {
                            return (
                                <li key={index}> <NavLink to={item?.url} className={({ isActive }) => isActive ? "active" : ""}> {item?.icon}{item?.content} </NavLink></li>)
                        })}
                    </ul>
                    <Link to="/sign" >
                        <button> {btn}  </button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
// 
export default NavBar
