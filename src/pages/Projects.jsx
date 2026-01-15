import './projects.css';
import VymoMedia from '../assets/vymo.png';
import AARPMedia from '../assets/aarp.png';
import MajescoMedia from '../assets/majesco.png';

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
                        <div className="project-company">
                            <strong>Company</strong> <br />
                            Vymo
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

            <div className="project-minimal">
                <div className="project-details">
                    <p className="project-statement">
                        Led performance optimization initiatives for AARP (USA) targeting senior citizens user base.
                    </p>
                    <div className="project-meta">
                        <div className="project-role">
                            <strong>Role</strong> <br />
                            Technical Lead
                        </div>
                        <div className="project-company">
                            <strong>Company</strong> <br />
                            TA Digital
                        </div>
                        <div className="project-timeline">
                            <strong>Timeline</strong> <br />
                            Jun'2021 - Aug'2022
                        </div>
                    </div>
                    <div className="project-link">
                        View Project →
                    </div>
                </div>
                <div className="project-media">
                    <img src={AARPMedia} alt="" srcset="" />
                </div>
            </div>

            <div className="project-minimal">
                <div className="project-details">

                    <p className="project-statement">
                        Modernized a legacy insurance product by migrating from Flex-based architecture to HTML5, enabling long-term maintainability and broader enterprise adoption.

                    </p>
                    <div className="project-meta">
                        <div className="project-role">
                            <strong>Role</strong> <br />
                            Lead Engineer
                        </div>
                        <div className="project-company">
                            <strong>Company</strong> <br />
                            Majesco
                        </div>
                        <div className="project-timeline">
                            <strong>Timeline</strong> <br />
                            Nov'2014 - Jun'2021
                        </div>
                    </div>
                    <div className="project-link">
                        View Project →
                    </div>
                </div>
                <div className="project-media">
                    <img src={MajescoMedia} alt="" srcset="" />
                </div>
            </div>

        </section>

    </div>;
}

export default Projects;