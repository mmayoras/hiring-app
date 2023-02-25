import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { ApplicantListPage } from './ApplicantListPage';
import { EMPTY_STATE_COPY } from '../../constants/appConstants';
import {
    Applicant,
    testApprovedApplicant,
    testRejectedApplicant,
} from '../../models/Applicant';

const setupTestApplicantList = (desiredNumApplicants: number, isApproved: boolean): Applicant[] => {
    const applicantList: Applicant[] = [];
    const applicantToPush: Applicant = isApproved ?
        testApprovedApplicant : testRejectedApplicant;

    for (let i = 0; i < desiredNumApplicants; i++) {
        applicantList.push(applicantToPush);
    }

    return applicantList;
}

describe('ApplicantListPage', () => {
    describe('renders properly', () => {
        it('renders with one applicant', () => {
            render(
                <ApplicantListPage
                    applicantsList={setupTestApplicantList(1, true)}
                    setApplicantsList={jest.fn()}
                />
            );

            expect(screen.queryByText(EMPTY_STATE_COPY)).not.toBeInTheDocument();
            expect(screen.getAllByAltText('Applicant thumbnail').length).toEqual(1);
        });

        it('renders correctly with multiple applicants', () => {
            render(
                <ApplicantListPage
                    applicantsList={setupTestApplicantList(20, true)}
                    setApplicantsList={jest.fn()}
                />
            );
            
            expect(screen.getAllByAltText('Applicant thumbnail').length).toEqual(20);
        });
    });

    describe('opens and closes applicant details modal', () => {
        beforeEach(() =>
            render(
                <ApplicantListPage
                    applicantsList={setupTestApplicantList(1, true)}
                    setApplicantsList={jest.fn()}
                />
            )
        );

        beforeAll(() => window.scrollTo = jest.fn());

        it('opens modal and closes modal', () => {
            // Opens modal
            const openModalIconCTA = screen.getByAltText('View details icon');

            expect(screen.queryByAltText('Applicant medium')).not.toBeInTheDocument();

            fireEvent.click(openModalIconCTA);
            // waitFor(() => screen.getByAltText('Applicant medium'));

            expect(screen.getByAltText('Applicant medium')).toBeInTheDocument();

            // Closes modal
            const closeModalButtonCTA = screen.getByText('X');

            fireEvent.click(closeModalButtonCTA);
            waitFor(() => expect(screen.queryByAltText('Applicant medium')).not.toBeInTheDocument());

            expect(screen.queryByText('X')).not.toBeInTheDocument();
        });
    });
});
