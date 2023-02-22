import { useState } from 'react';

import { ApplicantRowItem } from './ApplicantRowItem';
import { ApplicantDetailsModal } from '../../components/ApplicantDetailsModal';

import './ApplicantListPage.css';

export const ApplicantsListPage = ({ applicantsList }) => {
    const [showApplicantModal, setShowApplicantModal] = useState(false);
    const [currentApplicant, setCurrentApplicant] = useState(0);

    return (
        <div className="pageContainer">
            {showApplicantModal && <ApplicantDetailsModal applicantDetails={applicantsList[currentApplicant]} />}
            <div className="tableContainer">
                <div className="tableHeader">
                    <p className="columnTitle">Name</p>
                    <p className="columnTitle">Status</p>
                </div>
                <hr className="tableBreak" />
                {applicantsList.length > 0 ? 
                    applicantsList.map((applicant, applicantIdx) => (
                        <ApplicantRowItem
                            key={applicantIdx}
                            applicantData={applicant}
                            openApplicantModal={setShowApplicantModal}
                            setActiveApplicant={setCurrentApplicant}
                        />
                    )) :
                    <p className="emptyStateText">Currently no applicants. Click "Get new applicant" above to get more</p>
                }
            </div>
        </div>
    );
}