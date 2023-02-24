import { formatFullName } from '../../utils/dataFormatters';
import xMark from '../../../assets/x-mark-circle.png';
import zoomIcon from '../../../assets/zoom.png';

import './ApplicantCard.css';

export const ApplicantCard = ({
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
            <img className="zoomIcon" src={zoomIcon} onClick={() => viewDetailsModal()} alt="View Details Icon" />
            <img className="thumbnailImage" src={picture && picture.medium} alt="Applicant" />
            <h3 className="nameInfo">{fullName}</h3>
            <div className="statusContainer">  
                <div className={`pillContainer ${status.toLowerCase()}`}>{status}</div>
                {status !== 'New' &&
                    <img
                        className="resetStatusIcon"
                        src={xMark} onClick={() => resetStatusAndClose(applicantIndex)}
                        alt="Reset Status Icon"
                    />
                }
            </div>
        </div>
    );
}
