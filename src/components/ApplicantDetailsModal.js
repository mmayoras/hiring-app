import './ApplicantDetailsModal.css';

export const ApplicantDetailsModal = ({ applicantDetails, close, submit }) => {
    const { name, picture } = applicantDetails;
    const fullName = !!name ?
        name.title + '. ' + name.first + ' ' + name.last:
        'No name provided';

    return (
        <div className="modal">
            <div className="detailsContainer">
                <button className="closeButton" onClick={() => close(false)}>X</button>
                <div className="applicantDetails">
                    <p>{fullName}</p>
                    <img src={picture} alt="Applicant Photo" />
                </div>
                <div className="actionButtons">
                    <button onClick={() => submit(false)}>Deny</button>
                    <button onClick={() => submit(true)}>Approve</button>
                </div>
            </div>
        </div>
    );
}