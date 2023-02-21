import { ApplicantDetailsModal } from '../components/ApplicantDetailsModal';

export const ApplicantsListPage = () => {
    return (
        <div className="pageContainer">
            <div className="pageBanner">
                <h1 className="pageHeader">Applicants</h1>
                <button className="getNewButton" onClick={() => console.log('Retrieved new candidate...')}>
                    Get new applicant
                </button>
            </div>
            <ApplicantDetailsModal />
        </div>
    );
}