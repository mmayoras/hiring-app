import { useState } from 'react';

import { ApplicantRowItem } from './ApplicantRowItem';
import { ApplicantDetailsModal } from '../../components/ApplicantDetailsModal';

import './ApplicantListPage.css';

export const ApplicantsListPage = ({ applicantsList, setApplicantsList }) => {
    const [showApplicantModal, setShowApplicantModal] = useState(false);
    const [currentApplicantIndex, setCurrentApplicantIndex] = useState(0);

    const approveOrRejectApplicantAndClose = (isApproved, optionalNote) => {
        const newApplicantList = applicantsList.slice();
        const newApplicantNotes = newApplicantList[currentApplicantIndex].notes.slice();

        if (optionalNote !== '') {
            newApplicantNotes.push(optionalNote);
        }

        newApplicantList[currentApplicantIndex] = {
            ...newApplicantList[currentApplicantIndex],
            status: isApproved ? 'Approved' : 'Rejected',
            notes: newApplicantNotes,
        };

        setApplicantsList(newApplicantList);
        setShowApplicantModal(false);
    }

    const openDetailsModal = (newCurrentIndex) => {
        setCurrentApplicantIndex(newCurrentIndex);
        setShowApplicantModal(true);
    }

    const resetApplicantStatus = (applicantIndex) => {
        const newApplicantList = applicantsList.slice();
        newApplicantList[applicantIndex].status = 'New';

        setApplicantsList(newApplicantList);
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
                        <div key={applicantIdx}>
                            <ApplicantRowItem
                                applicantIndex={applicantIdx}
                                applicantData={applicant}
                                openApplicantModal={openDetailsModal}
                                resetStatus={resetApplicantStatus}
                            />
                            <hr className="rowBreak" />
                        </div>
                    )) :
                    <p className="emptyStateText">
                        Currently no applicants. Click "Get new applicant" above to get more
                    </p>
                }
            </div>
        </div>
    );
}