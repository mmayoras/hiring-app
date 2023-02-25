import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { ApplicantCard } from './ApplicantCard';
import {
    emptyApplicant,
    testApprovedApplicant,
    testRejectedApplicant, 
} from '../../models/Applicant';

describe('ApplicantCard', () => {
    describe('renders', () => {
        it('renders card with image thumbnail', () => {
            render(
                <ApplicantCard
                    applicantIndex={0}
                    applicantData={emptyApplicant}
                    openApplicantModal={jest.fn()}
                    resetStatus={jest.fn()}
                />
            );
    
            expect(screen.getByAltText('Applicant thumbnail')).toBeInTheDocument();
        });
    });

    describe('resetApplicationStatus', () => {
        it('resets applicant approved status', () => {
            const { rerender } = render(
                <ApplicantCard
                    applicantIndex={0}
                    applicantData={testApprovedApplicant}
                    openApplicantModal={jest.fn()}
                    resetStatus={jest.fn()}
                />
            );

            expect(screen.getByText('Approved')).toBeInTheDocument();
            expect(screen.getByAltText('Reset status icon')).toBeInTheDocument();

            rerender(
                <ApplicantCard
                    applicantIndex={0}
                    applicantData={emptyApplicant}
                    openApplicantModal={jest.fn()}
                    resetStatus={jest.fn()}
                />
            );

            expect(screen.getByText('New')).toBeInTheDocument();
            expect(screen.queryByAltText('Reset status icon')).not.toBeInTheDocument();
        });
        it('resets applicant rejected status', () => {
            render(
                <ApplicantCard
                    applicantIndex={0}
                    applicantData={testRejectedApplicant}
                    openApplicantModal={jest.fn()}
                    resetStatus={jest.fn()}
                />
            );
        });
    });
});
