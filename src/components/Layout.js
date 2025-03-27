import {Link, Outlet} from "react-router-dom";
function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Kotisivu</Link>
                    </li>
                    <li>
                        <Link to="/InFlightsPage">Saapuvat lennot</Link>
                    </li>
                    <li>
                        <Link to="/OutFlightsPage">Lähtevät lennot</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}
export default Layout;