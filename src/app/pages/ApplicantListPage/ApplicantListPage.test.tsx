import { render } from '@testing-library/react';

import { ApplicantListPage } from './ApplicantListPage';

describe('ApplicantListPage', () => {
    it('renders', () => {
        render(<ApplicantListPage applicantsList={[]} setApplicantsList={jest.fn()} />);
    });
});
