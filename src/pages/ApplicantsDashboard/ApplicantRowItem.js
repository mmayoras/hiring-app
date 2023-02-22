import './ApplicantRowItem.css';

export const ApplicantRowItem = ({ applicantData, openApplicantModal }) => {
    const { name, picture, status } = applicantData;
    const fullName = !!name ?
        name.title + '. ' + name.first + ' ' + name.last:
        'No name provided';

    return (
        <div className="rowContainer">
            <div className="rowDetails">
                <div className="nameContainer">
                    <img className="thumbnailImage" src={picture && picture.thumbnail} alt="Applicant Photo" />
                    <p className="nameInfo">{fullName}</p>
                </div>
                <div className="statusContainer">
                    <span>{status}</span>
                </div>
            </div>
            <button
                className="viewDetailsButton"
                onClick={() => openApplicantModal(true)}
            >
                View details
            </button>
        </div>
    );
}
