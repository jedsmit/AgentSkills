import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';

const Navbar = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);


    //logout handler
    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }

    const unauthenticatedNavBar = () => {
        return (
            <>
                <link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </link>
                <link to="/login">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </link>
                <link to="/register">
                    <li className="nav-item nav-link">
                        Register
                     </li>
                </link>
            </>
        )
    }
    const authenticatedNavBar = () => {
        return (
            <>
                <link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </link>
                <link to="/notes">
                    <li className="nav-item nav-link">
                        Notes
                    </li>
                </link>

                {/* only render Admin if user is admin */}
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                            <li className="nav-item nav-link">
                                Admin
                        </li>
                        </Link> : null
                }
                <button type="button" className="btn btn-link nav-item nav-link" onClick={onClickLogoutHandler}>
                    Logout
                </button>
            </>
        )
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to='/'>
                <div className="navbar-brand">Poop</div>
            </Link>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>

        </nav>
    )
}
export default Navbar;

