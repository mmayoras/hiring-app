import { useState } from 'react';

import './ApplicantDetailsModal.css';

export const ApplicantDetailsModal = ({ applicantDetails, close, submit }) => {
    const [currentNoteValue, setCurrentNoteValue] = useState('');
    const { name, picture, notes } = applicantDetails;
    const fullName = !!name ?
        name.title + '. ' + name.first + ' ' + name.last:
        'No name provided';

    return (
        <div className="modal">
            <div className="detailsContainer">
                <button className="closeButton" onClick={() => close(false)}>X</button>
                <div className="applicantDetails">
                    <p>{fullName}</p>
                    <img className="mediumImage" src={picture && picture.medium} alt="Applicant" />
                </div>
                <div className="decisionForm">
                    <div className="notesContainer">
                        <p>Decision notes (optional)</p>
                        <textarea
                            className="note"
                            value={currentNoteValue}
                            placeholder="Why are you approving or rejecting?"
                            onChange={(event) => setCurrentNoteValue(event.target.value)}
                        />
                        {notes.length > 0 && <p>Notes log</p>}
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
        </div>
    );
}