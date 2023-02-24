import { useState } from 'react';

import { useLocalStorage } from './hooks/useLocalStorage';
import { ApplicantsListPage } from './app/pages/ApplicantListPage/ApplicantListPage';
import { getNewApplicant } from './utils/api';

import './App.css';

function App() {
  const [applicantsList, setApplicantsList] = useLocalStorage('applicants', []);

  const getAndSetNewApplicant = async () => {
    let newApplicant = await getNewApplicant();
    newApplicant = {
      ...newApplicant,
      status: 'New',
      notes: [],
    }

    !!newApplicant && setApplicantsList([
        ...applicantsList,
        newApplicant,
    ]);
  }

  return (
    <div className="app">
      <div className="pageBanner">
          <h1 className="pageHeader">Applicants</h1>
          <button className="getNewButton" onClick={getAndSetNewApplicant}>
              Get new applicant
          </button>
      </div>
      <ApplicantsListPage applicantsList={applicantsList} setApplicantsList={setApplicantsList} />
    </div>
  );
}

export default App;
