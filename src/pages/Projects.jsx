import './projects.css';

const Projects = () => {
    return <div className="project-page">
        <div className="section-header">
            <div className="eyebrow">
                PROJECTS
            </div>
            <div className="sub-heading">
                Selected projects and systems I've led
            </div>
        </div>

        <div className="two-col-grid">
            <div className="project-card">
                <div className="project-title">
                    Enterprise Customer Engineering Platform (Vymo)
                </div>
                <div className="project-summary">
                    Built and scaled customer engineering systems supporting multiple enterprise insurance and lending channels, improving delivery predictability and production stability at scale.                </div>
                <div className="project-role">
                    Role: Engineering Manager | Team Size: 22
                </div>
                <div className="project-tech-stack">
                    Tech Context: Node.js, Kafka, MongoDB, MySQL, React, Bitbucket, Jira
                </div>
                <div className="project-responsibilities">
                    <strong>
                        What I led
                    </strong>
                    <ul>
                        <li>
                            Built and scaled two engineering teams from scratch, owning hiring, onboarding, and delivery governance                        </li>
                        <li>Reduced P0/P1 incidents from ~15/month to ~4/month through system stabilization and ownership clarity</li>
                        <li>Partnered with Product, Platform, QA, and Solutions teams to deliver predictable enterprise releases</li>
                    </ul>
                </div>
                <div className="project-cta">
                    View Details ->
                </div>
            </div>
            <div className="project-card">
                <div className="project-title">
                    Multi-Phase Enterprise Launches for BFSI Clients
                </div>
                <div className="project-summary">
                    Led complex, multi-phase enterprise launches for large BFSI clients, ensuring delivery predictability, post-go-live stability, and minimal production escalations.
                </div>
                <div className="project-role">
                    Role: Engineering Manager | Team Size: 10
                </div>
                <div className="project-tech-stack">
                    Tech Context: Node.js, Kafka, MongoDB, MySQL, React, Bitbucket, Jira
                </div>
                <div className="project-responsibilities">
                    <strong>
                        What I led
                    </strong>
                    <ul>
                        <li>
                            Delivered enterprise launches for clients including SBI Life, Axis Bank, Aditya Birla Capital, Bandhan Bank, and Kotak Life
                        </li>
                        <li>
                            Coordinated cross-functional execution across engineering, QA, product, and client stakeholders
                        </li>
                        <li>
                            Established post-go-live monitoring and stabilization practices to reduce war-room escalations
                        </li>
                    </ul>
                </div>
                <div className="project-cta">
                    View Details ->
                </div>
            </div>
            <div className="project-card">
                <div className="project-title">
                    Production Stability & Incident Reduction Program
                </div>
                <div className="project-summary">
                    Stabilized production systems and significantly reduced critical incidents by driving ownership clarity, monitoring, and structured incident management.
                </div>
                <div className="project-role">
                    Role: Engineering Manager | Team Size: 10
                </div>
                <div className="project-tech-stack">
                    Kafka, Node.js, MongoDB, Monitoring & Alerting, RCA workflows
                </div>
                <div className="project-responsibilities">
                    <strong>
                        What I led
                    </strong>
                    <ul>
                        <li>
                            Introduced structured incident management for P0/P1 issues with clear ownership and RCA processes
                        </li>
                        <li>
                            Reduced monthly critical incidents by ~65% within months
                        </li>
                        <li>
                            Cleared 60+ critical backlog CRs by forming a rapid-response sub-team                        </li>
                        <li>
                            Improved system reliability and stakeholder confidence through predictable response patterns
                        </li>
                    </ul>
                </div>
                <div className="project-cta">
                    View Details ->
                </div>
            </div>
            <div className="project-card">
                <div className="project-title">
                    Insurance Platform Modernization (Majesco)
                </div>
                <div className="project-summary">
                    Modernized a legacy insurance product by migrating from Flex-based architecture to HTML5, enabling long-term maintainability and broader enterprise adoption.
                </div>
                <div className="project-role">
                    Role: Lead Engineer | Team Size: 8
                </div>
                <div className="project-tech-stack">
                    Tech Context: HTML5, SCSS, Java, Spring, Oracle, Event-driven UI architecture
                </div>
                <div className="project-responsibilities">
                    <strong>
                        What I led
                    </strong>
                    <ul>
                        <li>
                            Designed and delivered complex UI workflows for Billing and Claims modules
                        </li>
                        <li>
                            Led migration strategy from Flex to HTML5, reducing long-term technical risk
                        </li>
                        <li>
                            Established quality practices resulting in minimal production issues across enterprise deployments
                        </li>
                        <li>
                            Mentored engineers on event-driven design and modular UI architecture
                        </li>
                    </ul>
                </div>
                <div className="project-cta">
                    View Details ->
                </div>
            </div>
        </div>
    </div>;
}

export default Projects;