import { render, screen } from '@testing-library/react';

import { ApplicantDetailsModal } from './ApplicantDetailsModal';
import {
    emptyApplicant,
    testApprovedApplicant,
    testRejectedApplicant,
} from '../../models/Applicant';

describe('ApplicantDetailsModal', () => {
    describe('renders', () => {
        it('renders details modal with applicant medium image', () => {
            render(
                <ApplicantDetailsModal
                    applicantIndex={0}
                    applicantData={emptyApplicant}
                    submit={jest.fn()}
                    close={jest.fn()}
                    resetStatus={jest.fn()}
                />
            );

            expect(screen.getByAltText('Applicant medium')).toBeInTheDocument();
        });

        it('new candidate renders approve and reject buttons', () => {
            render(
                <ApplicantDetailsModal
                    applicantIndex={0}
                    applicantData={emptyApplicant}
                    submit={jest.fn()}
                    close={jest.fn()}
                    resetStatus={jest.fn()}
                />
            );

            const approveCTA = screen.getByText('Approve');
            const rejectCTA = screen.getByText('Reject');

            expect(approveCTA).toBeInTheDocument();
            expect(rejectCTA).toBeInTheDocument();
        });

        it('approved candidate renders reset and reject buttons', () => {
            render(
                <ApplicantDetailsModal
                    applicantIndex={0}
                    applicantData={testApprovedApplicant}
                    submit={jest.fn()}
                    close={jest.fn()}
                    resetStatus={jest.fn()}
                />
            );

            const approveCTA = screen.getByText('Reset');
            const rejectCTA = screen.getByText('Reject');

            expect(approveCTA).toBeInTheDocument();
            expect(rejectCTA).toBeInTheDocument();
        });

        it('rejected candidate renders reset and approve buttons', () => {
            render(
                <ApplicantDetailsModal
                    applicantIndex={0}
                    applicantData={testRejectedApplicant}
                    submit={jest.fn()}
                    close={jest.fn()}
                    resetStatus={jest.fn()}
                />
            );

            const approveCTA = screen.getByText('Reset');
            const rejectCTA = screen.getByText('Approve');

            expect(approveCTA).toBeInTheDocument();
            expect(rejectCTA).toBeInTheDocument();
        });
    });
});
