import { useState } from 'react';

import { ThreeDotsMenu } from '../../components/ThreeDotsMenu';

import './ApplicantRowItem.css';

export const ApplicantRowItem = ({ applicantIndex, applicantData, openApplicantModal, resetStatus }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { name, picture, status } = applicantData;
    const fullName = !!name ?
        name.title + '. ' + name.first + ' ' + name.last:
        'No name provided';

    const viewDetailsModal = () => {
        setIsMenuOpen(false);
        openApplicantModal(applicantIndex);
    }

    const resetStatusAndClose = () => {
        setIsMenuOpen(false);
        resetStatus(applicantIndex);
    }

    return (
        <div className="rowContainer">
            <div className="rowDetails">
                <div className="nameContainer">
                    <img className="thumbnailImage" src={picture && picture.thumbnail} alt="Applicant" />
                    <p className="nameInfo">{fullName}</p>
                </div>
                <div className="statusContainer">
                    <span>{status}</span>
                </div>
            </div>
            <ThreeDotsMenu
                isOpen={isMenuOpen}
                openOrClose={() => setIsMenuOpen(!isMenuOpen)}
                menuItems={[
                    <button className="dropdownOption" onClick={() => viewDetailsModal()}>
                        View details
                    </button>,
                    <button className="dropdownOption" onClick={() => resetStatusAndClose(applicantIndex)}>
                        Undo decision
                    </button>,
                ]}
            />
        </div>
    );
}
