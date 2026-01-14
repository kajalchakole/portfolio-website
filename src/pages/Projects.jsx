import './projects.css';
import VymoMedia from '../assets/vymo.png';

const Projects = () => {
    return <div className="project-page">
        <section className="projects-section">
            <h2 className="projects-title">Work</h2>

            <div className="project-minimal">
                <div className="project-details">

                    <p className="project-statement">
                        Built and scaled an enterprise customer engineering platform
                        supporting high-volume BFSI workflows.
                    </p>
                    <div className="project-meta">

                        <div className="project-role">
                            <strong>Role</strong> <br />
                            Engineering Manager
                        </div>

                        <div className="project-timeline">
                            <strong>Timeline</strong> <br />
                            Aug'2022 - Jan'2026
                        </div>
                    </div>


                    <div className="project-link">
                        View Project →
                    </div>
                </div>
                <div className="project-media">
                    <img src={VymoMedia} alt="" srcset="" />
                </div>
            </div>
        </section>

    </div>;
}

export default Projects;