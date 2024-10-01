import { Link } from "react-router-dom"

export default function Home() {
    return (
        <section>
            <div className="home">
                <div className="profile">
                    <div className="logo">
                        &#9812;
                    </div>
                    <div className="title">
                        Software Developer
                    </div>
                    <div className="subtitle">
                        Web | Desktop | Mobile
                    </div>
                    <hr />
                    <div className="author">
                        Banele Victor Mayisela
                        <br />
                        Full-Stack Developer
                    </div>
                </div>
                <div className="btn">
                    <Link to={"/about"} className="btn-info">
                        About Me
                    </Link>
                </div>
            </div>
        </section>
    )
}