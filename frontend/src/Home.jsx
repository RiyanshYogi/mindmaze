import "./Home.css"
import { Link } from "react-router-dom"
import { TodoDate } from "./projects/todo/TodoDate"

export const Home = () => {
    return (
        <>
            <nav id="Home">
                <div className="title_class">
                    <h1>MindMaze</h1>
                </div>

                <div className="clock_class">
                    <TodoDate />
                </div>

                <div className="navigation_class">
                    <Link to='/todo' >
                        Todo
                    </Link>
                    <a href="#Home">Home</a>
                    <a href="#Courses">Courses</a>
                    <a href="#features">features</a>
                </div>

            </nav>
            <section className="about_class">

                <div>
                    <h2>MindMaze</h2>
                    <p>Hello there, Im about to tell you , this is most amazing website you can think of, its best thats what I can
                        say all.</p>
                    <p>Here we provide quizes for the different courses in computer science</p>
                </div>
            </section>

            <section id="Courses" className="course_class">

                <div>
                    <Link to="/computer">
                        <img src="/images/computer.png" alt="computer image" />
                    </Link>

                    <Link to="/computer" className="taketest_class">
                        Computer Test
                    </Link>
                </div>

                <div>
                    <Link to="/cn">
                        <img src="/images/cn.png" alt="CN image" />
                    </Link>

                    <Link to="/cn" className="taketest_class">
                        CN Test
                    </Link>

                </div>

                <div>
                    <Link to="/database">
                        <img src="/images/database.png" alt="some image" />
                    </Link>
                    <Link to="/database" className="taketest_class">
                        Database Test
                    </Link>
                </div>

                <div>
                    <Link to="/dsa">
                        <img src="/images/dsa.png" alt="some image" />
                    </Link>

                    <Link to="/dsa" className="taketest_class">
                        DSA Test
                    </Link>
                </div>

                <div>
                    <Link to="/os">
                        <img src="/images/os.png" alt="some image" />
                    </Link>

                    <Link to="/os" className="taketest_class">
                        OS Test
                    </Link>
                </div>

                <div>
                    <Link to="/corejava">
                        <img src="/images/os.png" alt="corejava image" />
                    </Link>

                    <Link to="/corejava" className="taketest_class">
                        Core Java Test
                    </Link>
                </div>

            </section>
            <section id="features" className="aboutapp_class">
                <div>
                    <h2>Key features</h2>
                    <hr />
                    <ul>
                        <li>Engaging Quiz Interface: Users can take multiple quizzes on various topics such as science, history,
                            technology, and more.</li>
                        <li>Real-Time Results: Instant feedback and results at the end of the quiz help users learn from their mistakes
                            and improve.</li>
                        <li>Categories and Difficulty Levels: Choose from different categories and difficulty levels to challenge
                            yourself based on your interests and skill level.</li>
                        <li>Timer: A countdown timer keeps you on track, making each quiz session more exciting and engaging.</li>
                    </ul>
                </div>

            </section>

            <footer className="footer_class" >

                <div>
                    <p>&copy; 2024 MindMaze. All rights reserved.</p>
                </div>

            </footer>
        </>
    )
}