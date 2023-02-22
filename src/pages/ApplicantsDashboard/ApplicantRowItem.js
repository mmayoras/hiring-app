export const ApplicantRowItem = ({ applicantData }) => {
    const { name } = applicantData;
    const fullName = !!name ?
        name.title + ' ' + name.first + ' ' + name.last :
        'No name provided';

    return (
        <div className="applicantRowContainer">
            <p className="applicantName">{fullName}</p>
        </div>
    );
}