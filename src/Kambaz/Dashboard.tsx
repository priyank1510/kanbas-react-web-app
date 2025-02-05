import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/kambaz/Courses/1234/Home">
                                <img src="/images/React.png" width="100%" height={160} alt="React JS" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS1234.MERGED.202510
                                        102510_2 Spring 2025 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/kambaz/Courses/5010/Home">
                                <img src="/images/pdp.jpeg" height={160} alt="Node JS" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                    CS5010 PDP
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5010.MERGED.202510
                                        302510_1 Spring 2025 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/kambaz/Courses/5100/Home">
                                <img src="/images/ai.jpeg" width="100%" height={160} alt="Express" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                    CS5100 AI 
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5100.MERGED.202510
                                        702510_2 Spring 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/kambaz/Courses/4567/Home">
                                <img src="/images/usml.jpeg" width="100%" height={160} alt="MongoDB" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                    DS5660 Unsupervised ML
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        DS5660.MERGED.202510
                                        202510_2 Spring 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/kambaz/Courses/5800/Home">
                                <img src="/images/dbms.jpeg" height={160} alt="HTML" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5800 DBMS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5678.MERGED.202510
                                        302410_1 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/kambaz/Courses/5600/Home">
                                <img src="/images/python.jpeg" width="100%" height={160} alt="CSS" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                       CS5600 Python
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS6789.MERGED.202510
                                        222510_2 Fall 2024 Full Term
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/kambaz/Courses/6120/Home">
                                <img src="/images/nlp.jpeg" width="100%" height={160} alt="JavaScript" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                            CS6120 NLP
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS6120.MERGED.202510
                                        412510_1 Summer 2025 Full Term
                                    </p>
                                    <button className="btn btn-primary" > Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}