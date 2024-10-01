import { Outlet, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <header>
                <div className="brand">
                    <Link to="/"> <span>&#9812;</span>: CyberZeus</Link>
                </div>
                <div className="menu">
                    <div className="container" id="check" onClick={toggleNav}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </header>
            <nav className="hide">
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleNav}>Home</Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={toggleNav}>Services</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={toggleNav}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleNav}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={toggleNav}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>By CyberZeus</p>
            </footer>
        </>
    )
}

function toggleNav() {
    let siteNav = document.querySelector("nav");
    let togg = document.getElementById("check");

    togg.classList.toggle("change");

    if(siteNav.classList == 'hide') {
        siteNav.style.opacity = 1;
        siteNav.classList.remove('hide');
        siteNav.classList.add('show');
    } else {
        siteNav.style.opacity = 0;
        siteNav.classList.remove('show');
        siteNav.classList.add('hide');
    }
    
}