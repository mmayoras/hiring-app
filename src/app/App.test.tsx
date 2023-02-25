import { waitFor, render, screen, fireEvent } from '@testing-library/react';

import App from './App';
import { EMPTY_STATE_COPY } from './constants/appConstants';
import { emptyApplicant } from './models/Applicant';
import * as api from './utils/api';

describe('App', () => {
  beforeEach(() => render(<App />));

  it('renders page header text', () => {
    const pageHeaderText: HTMLElement = screen.getByText('Applicants');
    expect(pageHeaderText).toBeInTheDocument();
  });

  it('renders page CTA button for getting new applicant', () => {
    const mainCTAButtonText: HTMLElement = screen.getByText('Get new applicant');
    expect(mainCTAButtonText).toBeInTheDocument();
  });

  it('should show new applicant after CTA button click', async () => {
    const getApplicantSpy = jest.spyOn(api, 'getNewApplicant')
      .mockReturnValue(Promise.resolve(emptyApplicant));

    const mainCTAButton: HTMLElement = await screen.getByText('Get new applicant');
    const emptyStateElementBeforeClick: HTMLElement = await screen.getByText(EMPTY_STATE_COPY);
    let applicantElementAfterClick: HTMLElement | null = null;
    
    expect(emptyStateElementBeforeClick).toBeInTheDocument();

    fireEvent.click(mainCTAButton);
    await waitFor(() => {
      applicantElementAfterClick = screen.getByAltText('Applicant thumbnail');
    });

    expect(getApplicantSpy).toHaveBeenCalled();
    expect(applicantElementAfterClick).toBeTruthy();
  });
});
