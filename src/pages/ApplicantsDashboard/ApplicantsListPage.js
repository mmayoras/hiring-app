import { useState } from 'react';

import { ApplicantRowItem } from './ApplicantRowItem';
import { ApplicantDetailsModal } from '../../components/ApplicantDetailsModal';

import './ApplicantListPage.css';

export const ApplicantsListPage = ({ applicantsList, setApplicantsList }) => {
    const [showApplicantModal, setShowApplicantModal] = useState(false);
    const [currentApplicantIndex, setCurrentApplicantIndex] = useState(0);

    const approveOrRejectApplicantAndClose = (isApproved) => {
        const newApplicantList = applicantsList.slice();
        newApplicantList[currentApplicantIndex].status = isApproved ? 'Approved' : 'Rejected';
        setApplicantsList(newApplicantList);
        setShowApplicantModal(false);
    }

    return (
        <div className="pageContainer">
            {showApplicantModal &&
                <ApplicantDetailsModal
                    applicantDetails={applicantsList[currentApplicantIndex]}
                    close={setShowApplicantModal}
                    submit={approveOrRejectApplicantAndClose}
                />
            }
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
                            setActiveApplicant={setCurrentApplicantIndex}
                        />
                    )) :
                    <p className="emptyStateText">Currently no applicants. Click "Get new applicant" above to get more</p>
                }
            </div>
        </div>
    );
}