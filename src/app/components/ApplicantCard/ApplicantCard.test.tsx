import { render } from '@testing-library/react';

import { ApplicantCard } from './ApplicantCard';
import { emptyApplicant } from '../../models/Applicant';

describe('ApplicantCard', () => {
    it('renders', () => {
        render(
            <ApplicantCard
                applicantIndex={0}
                applicantData={emptyApplicant}
                openApplicantModal={jest.fn()}
                resetStatus={jest.fn()}
            />
        );
    });
});
