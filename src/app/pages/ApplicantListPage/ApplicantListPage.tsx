import { useState } from 'react';

import { ApplicantCard } from '../../components/ApplicantCard/ApplicantCard';
import { ApplicantDetailsModal } from '../../components/ApplicantDetailsModal/ApplicantDetailsModal';
import { Applicant } from '../../models/Applicant';
import { lockScrolling, unlockScrolling } from '../../utils/pageScrolling';

import './ApplicantListPage.css';

interface ApplicantListPageProps {
    applicantsList: Applicant[];
    setApplicantsList: (applicants: Applicant[]) => void;
}

export const ApplicantListPage: React.FC<ApplicantListPageProps> = ({ applicantsList, setApplicantsList }) => {
    const [showApplicantModal, setShowApplicantModal] = useState<boolean>(false);
    const [currentApplicantIndex, setCurrentApplicantIndex] = useState<number>(0);

    const approveOrRejectApplicantAndClose = (isApproved: boolean, optionalNote: string) => {
        const newApplicantList: Applicant[] = applicantsList.slice();
        const newApplicantNotes: string[] = newApplicantList[currentApplicantIndex].notes.slice();

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

    const openDetailsModal = (newCurrentIndex: number) => {
        lockScrolling();
        setCurrentApplicantIndex(newCurrentIndex);
        setShowApplicantModal(true);
    }

    const closeDetailsModal = () => {
        unlockScrolling();
        setShowApplicantModal(false);
    }

    const resetApplicantStatus = (applicantIndex: number) => {
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