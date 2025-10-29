import { NavLink } from "react-router-dom"

const NavBarLink = () => {
    return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <NavLink
        to="/home"
        className={({ isActive }) =>
            isActive
            ? "nav-link active fw-semibold"
            : "nav-link fw-semibold"
        }
        >
        Home
        </NavLink>
    </li>

    <li className="nav-item">
        <NavLink
        to="/"
        className={({ isActive }) =>
            isActive
            ? "nav-link active fw-semibold"
            : "nav-link fw-semibold"
        }
        >
        Shop
        </NavLink>
    </li>

    <li className="nav-item">
        <NavLink
        to="/About"
        className={({ isActive }) =>
            isActive
            ? "nav-link active fw-semibold"
            : "nav-link fw-semibold"
        }
        >
        About
        </NavLink>
    </li>

    <li className="nav-item">
        <NavLink
        to="/contact"
        className={({ isActive }) =>
            isActive
            ? "nav-link active fw-semibold"
            : "nav-link fw-semibold"
        }
        >
        Contact
        </NavLink>
    </li>
    </ul>
)
}

export default NavBarLink
