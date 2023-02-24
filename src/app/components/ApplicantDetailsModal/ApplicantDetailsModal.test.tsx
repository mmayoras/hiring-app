import { render } from '@testing-library/react';

import { ApplicantDetailsModal } from './ApplicantDetailsModal';
import { emptyApplicant } from '../../models/Applicant';

describe('ApplicantDetailsModal', () => {
    it('renders', () => {
        render(
            <ApplicantDetailsModal
                applicantDetails={emptyApplicant}
                submit={jest.fn()}
                close={jest.fn()}
            />
        );
    });
});
