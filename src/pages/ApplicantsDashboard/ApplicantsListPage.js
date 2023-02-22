import { useState } from 'react';

import { ApplicantRowItem } from './ApplicantRowItem';
import { ApplicantDetailsModal } from '../../components/ApplicantDetailsModal';
import { getNewApplicant } from '../../utils/api';

export const ApplicantsListPage = () => {
    const [showApplicantModal, setShowApplicantModal] = useState(false);
    const [applicantsList, setApplicantsList] = useState([]);

    const getAndSetNewApplicant = async () => {
        const newApplicant = await getNewApplicant();

        !!newApplicant && setApplicantsList([
            ...applicantsList,
            newApplicant,
        ]);
    }

    return (
        <div className="pageContainer">
            {showApplicantModal && <ApplicantDetailsModal applicantsList={applicantsList} />}
            <div className="pageBanner">
                <h1 className="pageHeader">Applicants</h1>
                <button className="getNewButton" onClick={getAndSetNewApplicant}>
                    Get new applicant
                </button>
            </div>
            {applicantsList.map((applicant, applicantIdx) => (
                <ApplicantRowItem key={applicantIdx} applicantData={applicant} />
            ))}
        </div>
    );
}