import { useState } from 'react';

import { ApplicantCard } from '../../components/ApplicantCard/ApplicantCard';
import { ApplicantDetailsModal } from '../../components/ApplicantDetailsModal/ApplicantDetailsModal';

import './ApplicantListPage.css';

export const ApplicantListPage = ({ applicantsList, setApplicantsList }) => {
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
        closeDetailsModal();
    }

    const openDetailsModal = (newCurrentIndex) => {
        document.querySelector('body').style.overflowY = 'hidden';
        setCurrentApplicantIndex(newCurrentIndex);
        setShowApplicantModal(true);
    }

    const closeDetailsModal = () => {
        document.querySelector('body').style.overflowY = 'scroll';
        setShowApplicantModal(false);
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
                    close={closeDetailsModal}
                    submit={approveOrRejectApplicantAndClose}
                />
            }
            <div className="listContainer">
                {applicantsList.length > 0 ? 
                    applicantsList.map((applicant, applicantIdx) => {
                        return (
                            <ApplicantCard
                                key={applicantIdx}
                                applicantIndex={applicantIdx}
                                applicantData={applicant}
                                openApplicantModal={openDetailsModal}
                                resetStatus={resetApplicantStatus}
                            />
                        );
                    }) :
                    <p className="emptyStateText">
                        Currently no applicants. Click "Get new applicant" above to get more
                    </p>
                }
            </div>
        </div>
    );
}