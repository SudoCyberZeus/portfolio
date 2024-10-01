import { json, Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function About() {
    
    useEffect(() => {
        fetchTech();
    }, [])
    const [tech, setTech] = useState([]);

    const fetchTech = async () => {
        try {
            const meTech = {
                html: 90,
                css: 92,
                js: 85,
                react: 75,
                angular: 60,
                php: 83,
                django: 75,
                python: 70,
                asp: 65
            };
            setTech(meTech);
            let prog = document.querySelectorAll(".tech-bar");
            let num = 0;
            console.log(tech[0]);
            prog.forEach(pro => {
                let ki = pro.id; 
                console.log(tech[ki]);
                pro.style.width = tech[ki] + '%';
                pro.style.transitionDuration = '2s';
                pro.style.opacity = 1;
                num += 1;
            });
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <section>
            <div className="about">
                <div className="info">
                    <div className="title">
                        About Me
                    </div>
                    <div className="author">
                        Banele Victor Mayisela
                        <br />
                        Full-Stack Developer
                    </div>
                    <hr />
                    <div className="story">
                        <p>
                            Freelance Software Developer with over 7+ years of experience creating Web Applications. Fluent in HTML, CSS, JS, React, PHP, and Python programming and scripting languages. Possess practical educational and working experience in Agile Development. Constantly improving skills using online short caurses, bootcamps, and personal research.
                        </p>
                        <p>
                            Creating beautifull, purpose drivern software assets that are easy to use. I very mich enjoy creating custom applications from scratch, building something new and tailer made to the specific needs of all stakeholders. My work covers everything from Fact Finding all the way to App Deployment.
                        </p>
                    </div>
                </div>
                <div className="tech">
                    <div className="author">
                        Front-End Design
                    </div>
                    <div className="tech-bars">
                        <div className="tech-bar" id="html">
                            HTML <span className="score">{tech.html}</span>%
                        </div>
                        <div className="tech-bar" id="css">
                            <span id="CSS">CSS {tech.css}%</span>
                        </div>
                        <div className="tech-bar" id="js">
                            <span id="js">JS {tech.js}%</span>
                        </div>
                        <div className="tech-bar" id="react">
                            <span id="react">React {tech.react}%</span>
                        </div>
                        <div className="tech-bar" id="angular">
                            <span id="Angular">Angular {tech.angular}%</span>
                        </div>
                    </div>
                    <div className="author">
                        Back-End Development
                    </div>
                    <div className="tech-bars">
                        <div className="tech-bar" id="php">
                            <span id="php">PHP {tech.php}%</span>
                        </div>
                        <div className="tech-bar" id="django">
                            <span id="django">Django {tech.django}%</span>
                        </div>
                        <div className="tech-bar" id="python">
                            <span id="python">Python {tech.python}%</span>
                        </div>
                        <div className="tech-bar" id="asp">
                            <span id="asp">Asp  {tech.asp}%</span>
                        </div>
                    </div>
                    <div className="btn">
                        <Link to={"/about"} className="btn-info">
                            My Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

