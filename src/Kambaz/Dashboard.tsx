import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <table>
                <tbody>
                    <tr>
                        <td className="wd-dashboard-course">
                            <img src="/images/React.png" width={200} alt="React JS"/>
                            <div>
                                <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/1234/Home">
                                    CS1234 React JS
                                </Link>
                                <p className="wd-dashboard-course-title">
                                    Learn about React JS
                                </p>
                                <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
                            </div>
                        </td>
                        <td className="wd-dashboard-course">
                            <img src="/images/pdp.jpeg" width={200} alt="pdp" />
                            <div>
                                <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5010/Home">
                                    CS5010 Programming Design paradigms
                                </Link>
                                <p className="wd-dashboard-course-title">
                                    Learn about Programming Design paradigms
                                </p>
                                <Link to="/Kambaz/Courses/5010/Home"> Go </Link>
                            </div>
                        </td>
                        <td className="wd-dashboard-course">
                            <img src="/images/ai.jpeg" width={200} alt="ai"/>
                            <div>
                                <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5100/Home">
                                    CS5100 Artificial Intelligence 
                                </Link>
                                <p className="wd-dashboard-course-title">
                                    Learn about Artificial Intelligence
                                </p>
                                <Link to="/Kambaz/Courses/5100/Home"> Go </Link>
                            </div>
                        </td>
                        <td className="wd-dashboard-course">
                            <img src="/images/usml.jpeg" width={200} alt="unsupervised"/>
                            <div>
                                <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5660/Home">
                                    DS5660 Unsupervised Machine Learning 
                                </Link>
                                <p className="wd-dashboard-course-title">
                                    Learn about Unsupervised Machine Learning
                                </p>
                                <Link to="/Kambaz/Courses/5660/Home"> Go </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="wd-dashboard-course">
                            <img src="/images/dbms.jpeg" width={200} alt="dbms"/>
                            <div>
                                <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5800/Home">
                                    CS5800 Database Management Systems 
                                </Link>
                                <p className="wd-dashboard-course-title">
                                    Learn about Database Management Systems
                                </p>
                                <Link to="/Kambaz/Courses/5800/Home"> Go </Link>
                            </div>
                        </td>
                        <td className="wd-dashboard-course">
                            <img src="/images/python.jpeg" width={200} alt="Python"/>
                            <div>
                                <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5600/Home">
                                    CS5600 Python
                                </Link>
                                <p className="wd-dashboard-course-title">
                                    Learn about Python
                                </p>
                                <Link to="/Kambaz/Courses/5600/Home"> Go </Link>
                            </div>
                        </td>
                        <td className="wd-dashboard-course">
                            <img src="/images/nlp.jpeg" width={200} alt="nlp"/>
                            <div>
                                <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/6120/Home">
                                    CS6120 NLP
                                </Link>
                                <p className="wd-dashboard-course-title">
                                    Learn about NLP
                                </p>
                                <Link to="/Kambaz/Courses/6120/Home"> Go </Link>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}
