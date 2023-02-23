import { useState } from 'react';

import { ThreeDotsMenu } from '../../components/ThreeDotsMenu';

import './ApplicantRowItem.css';

export const ApplicantRowItem = ({ applicantIndex, applicantData, openApplicantModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { name, picture, status } = applicantData;
    const fullName = !!name ?
        name.title + '. ' + name.first + ' ' + name.last:
        'No name provided';

    const viewDetailsModal = () => {
        setIsMenuOpen(false);
        openApplicantModal(applicantIndex);
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
                    <button className="dropdownOption" onClick={() => console.log('Resetting applicant status')}>
                        Reset status
                    </button>,
                    // <button className="dropdownOption" onClick={() => updateMetricAndClose('motor-rpm')}>Motor RPM</button>,
                ]}
            />
        </div>
    );
}
