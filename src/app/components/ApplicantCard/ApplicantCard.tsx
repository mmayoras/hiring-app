import { Applicant } from '../../models/Applicant';
import { formatFullName } from '../../utils/dataFormatters';

import xMark from '../../../assets/x-mark-circle.png';
import zoomIcon from '../../../assets/zoom.png';

import './ApplicantCard.css';

interface ApplicantCardProps {
    applicantIndex: number;
    applicantData: Applicant;
    openApplicantModal: (currentIndex: number) => void;
    resetStatus: (currentIndex: number) => void;
}

export const ApplicantCard: React.FC<ApplicantCardProps> = ({
    applicantIndex,
    applicantData,
    openApplicantModal,
    resetStatus,
}) => {
    const { name, picture, status } = applicantData;
    const fullName = !!name ? formatFullName(name.title, name.first, name.last)
        : 'No name provided';

    const viewDetailsModal = () => {
        openApplicantModal(applicantIndex);
    }

    const resetStatusAndClose = () => {
        resetStatus(applicantIndex);
    }

    return (
        <div className="applicantCard">
            <input
                className="zoomIcon"
                type="image"
                src={zoomIcon}
                onClick={() => viewDetailsModal()}
                alt="View details icon"
            />
            <img className="thumbnailImage" src={picture && picture.medium} alt="Applicant thumbnail" />
            <h3 className="nameInfo">{fullName}</h3>
            <div className="statusContainer">  
                <div className={`pillContainer ${status.toLowerCase()}`}>{status}</div>
                {status !== 'New' &&
                    <input
                        className="resetStatusIcon"
                        type="image"
                        src={xMark}
                        onClick={() => resetStatusAndClose()}
                        alt="Reset status icon"
                    />
                }
            </div>
        </div>
    );
}
