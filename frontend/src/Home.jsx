import "./Home.css"
import { Link } from "react-router-dom"
import { TodoDate } from "./projects/todo/TodoDate"
import Logout from "./log/Logout"

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
                    <Logout />
                    
                </div>

            </nav>
            <section className="aboutapp_class">

                <div>
                    <h1>MindMaze</h1>
                    <p>The Mindmaze project is a single-page web application designed to enhance productivity and learning through an intuitive interface. It offers key features like task management via ToDo lists, interactive quizzes for knowledge assessment, and structured online courses. Built using modern technologies such as ReactJS for the frontend, Node.js for the backend, and MySQL and MongoDB for database management, the application ensures seamless performance and scalability. The platform prioritizes user experience, enabling easy navigation and quick responses. Mindmaze aims to empower users by combining education and organization, making it an ideal tool for individuals seeking efficiency and self-improvement.</p>
                </div>
            </section>
            
            <section className="aboutapp_class">

                <div>
                    <h2>Take Quizes Below</h2>
                    <hr />
                    <p>Dive into the fascinating world of computer science with our exciting range of courses! From decoding algorithms to mastering web development, we’ve got something for every tech enthusiast. Want to crack the mysteries of databases or untangle the web of networks? Or maybe you're ready to conquer the AI frontier? Whatever your interest, we’ve packed our courses with knowledge bombs and interactive quizzes to keep you sharp and entertained. Don’t just learn—level up! Test your skills below, but beware, these quizzes are so addictive, even your CPU might ask for a break. Ready? Let’s turn that curiosity into code!</p>
                    
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
            <section className="aboutapp_class">
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