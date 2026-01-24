import './caseStudies.css';
import DataSet from '../data/pages/case-studies.json';
import Button from '../components/common/Button/Button';

const CaseStudies = function () {
    return (
        <div className="case-studies-page">
            <div className="case-studies-hero">
                <div className="eyebrow">
                    Case Studies
                </div>
                <div className="page-title">
                    Systems design, scale, and resilience
                </div>
                <div className="page-subtitle">
                    A curated set of deep dives on platform decisions, reliability wins, and the human impact behind the tech.
                </div>
            </div>

            <div className="case-studies-list">
                {DataSet['case-studies-list'].map((caseStudy, index) => (
                    <div key={index} className="case-study-card">
                        <div className="pill">
                            {caseStudy.status}
                        </div>
                        <div className="case-study-title">
                            {caseStudy.title}
                        </div>
                        <div className="case-study-description">
                            {caseStudy.description}
                        </div>
                        <div className="case-study-tags">
                            {caseStudy.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="case-study-tag pill">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="case-study-meta">

                            <div className="case-study-role">
                                <strong>Role</strong> {caseStudy.role}
                            </div>
                            <div className="case-study-focus">
                                <strong>Focus</strong> {caseStudy.focus}
                            </div>
                        </div>
                        <div className="case-study-button">
                            <Button type={caseStudy.cta === "Read Case Study" ? "primary" : "secondary"} to="../ingestion-case-study" name={caseStudy.cta} />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CaseStudies;