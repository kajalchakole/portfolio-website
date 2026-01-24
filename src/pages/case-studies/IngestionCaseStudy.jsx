import './ingestionCaseStudy.css';

const IngestionCaseStudy = () => {
    return (
        <div className="case-studies-page">
            <div className="case-study-hero">
                <div className="eyebrow">
                    Case Study
                </div>
                <div className="page-title">
                    Designing a Safe Bulk Ingestion System for Enterprise Clients
                </div>
                <div className="page-subtitle">
                    Reframed a record-level API into a job-based ingestion pipeline with back-pressure, idempotency, and observable progress for banking integrations operating at machine scale.
                </div>
            </div>
            <hr />
            <div className="case-study-meta">
                <div className="case-study-role">
                    <strong>Role</strong> Engineering Manager
                </div>
                <div className="case-study-domain">
                    <strong>Domain</strong> API design, scalability, reliability, platform ownership
                </div>
                <div className="case-study-focus">
                    <strong>Focus</strong> Enterprise SaaS, Banking Integrations
                </div>
            </div>
            <hr />
        </div>
    );
}

export default IngestionCaseStudy;