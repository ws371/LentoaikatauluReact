import {Link, Outlet} from "react-router-dom";
function Layout() {
    return (
        <div>
            <nav className="navbar">
                <Link to="/">Kotisivu</Link>
                <Link to="/InFlightsPage">Saapuvat lennot</Link>
                <Link to="/OutFlightsPage">Lähtevät lennot</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}
export default Layout;