export const ApplicantDetailsModal = ({ applicantDetails }) => {
    const { name, picture } = applicantDetails;
    const fullName = !!name ?
        name.title + '. ' + name.first + ' ' + name.last:
        'No name provided';

    return (
        <div className="modal">
            <div className="detailsContainer">
                <div className="applicantDetails">
                    <p>{fullName}</p>
                    <img src={picture} alt="Applicant Photo" />
                </div>
                <div className="actionButtons">
                    <button>Approve</button>
                    <button>Deny</button>
                </div>
            </div>
        </div>
    );
}