import { useState } from 'react';

import { formatFullName, formatPhoneNumber } from '../../utils/dataFormatters';

import './ApplicantDetailsModal.css';

export const ApplicantDetailsModal = ({ applicantDetails, close, submit }) => {
    const [currentNoteValue, setCurrentNoteValue] = useState('');
    const { name, picture, notes, cell, email, dob } = applicantDetails;
    const { age } = dob;
    const fullName = !!name ?
        formatFullName(name.title, name.first, name.last)
        : 'No name provided';
    const cleanPhoneNumber = formatPhoneNumber(cell);

    return (
        <div className="modal">
            <div className="detailsContainer">
                <button className="closeButton" onClick={() => close(false)}>X</button>
                <div className="applicantHeader">
                    <img className="mediumImage" src={picture && picture.medium} alt="Applicant" />
                    <h1 className="leftMargin">{fullName}</h1>
                </div>
                <div className="applicantDetails">
                    <div className="extraInfo">
                        <h3 className="infoFieldHeader noMargin">Email:</h3>
                        <p className="noMargin">{email}</p>
                    </div>
                    <div className="extraInfo">
                        <h3 className="infoFieldHeader noMargin">Phone:</h3>
                        <p className="noMargin">{cleanPhoneNumber}</p>
                    </div>
                    <div className="extraInfo">
                        <h3 className="infoFieldHeader noMargin">Age:</h3>
                        <p className="noMargin">{age}</p>
                    </div>
                </div>
                <div className="decisionForm">
                    <div className="notesContainer">
                        <h3 className="bottomMargin">Decision notes (optional):</h3>
                        <textarea
                            className="note"
                            value={currentNoteValue}
                            onChange={(event) => setCurrentNoteValue(event.target.value)}
                        />
                    </div>
                </div>
                {notes.length > 0 && <h3 className="noMargin">Historical notes log:</h3>}
                <div className="notesLogContainer">
                    {notes.length > 0 && notes.map((note, noteIdx) => (
                        <textarea key={noteIdx} className="note" value={note} disabled={true} />
                    ))}
                </div>
                <div className="actionButtons">
                    <button className="submit reject" onClick={() => submit(false, currentNoteValue)}>Reject</button>
                    <button className="submit approve" onClick={() => submit(true, currentNoteValue)}>Approve</button>
                </div>
            </div>
        </div>
    );
}