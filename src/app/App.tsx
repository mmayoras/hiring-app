import { useLocalStorage } from './hooks/useLocalStorage';
import { Applicant } from './models/Applicant';
import { ApplicantListPage } from './pages/ApplicantListPage/ApplicantListPage';
import { getNewApplicant } from './utils/api';

import './App.css';

function App() {
  const [applicantsList, setApplicantsList] = useLocalStorage('applicants', []);

  const getAndSetNewApplicant = async () => {
    let newApplicant: Applicant | null = await getNewApplicant();

    if (newApplicant !== null) {
      newApplicant.status = 'New';
      newApplicant.notes = [];
    }

    setApplicantsList([...applicantsList, newApplicant]);
  }

  return (
    <div className="app">
      <div className="pageBanner">
          <h1 className="pageHeader">Applicants</h1>
          <button className="getNewButton" onClick={getAndSetNewApplicant}>
              Get new applicant
          </button>
      </div>
      <ApplicantListPage applicantsList={applicantsList} setApplicantsList={setApplicantsList} />
    </div>
  );
}

export default App;
