import { lockScrolling, unlockScrolling } from '../pageScrolling';

describe('pageScrolling', () => {
    describe('lockScrolling', () => {
        window.scrollTo = jest.fn();

        it('page scrolling should be locked', () => {
            const parser = new DOMParser();
            const dom = parser.parseFromString('<body style="overflowY: scroll" />', 'text/html');

            const spyQuerySelect = jest.spyOn(document, 'querySelector');
            spyQuerySelect.mockImplementation((selector: string) =>
                dom.querySelector(selector)
            );

            lockScrolling();

            expect(spyQuerySelect).toHaveBeenCalled();
            expect(dom.body?.style.overflowY === 'hidden').toBeTruthy();
        });

        it('body not found and scroll lock property not set', () => {
            const spyQuerySelect = jest.spyOn(document, 'querySelector');
            spyQuerySelect.mockImplementation((selector: string) => null);

            lockScrolling();

            expect(spyQuerySelect).toHaveBeenCalled();
            expect(document.body?.style.overflowY).toBeFalsy();
        });
    });

    describe('unlockScrolling', () => {
        it('page scrolling should be locked', () => {
            const parser = new DOMParser();
            const dom = parser.parseFromString('<body style="overflowY: hidden" />', 'text/html');

            const spyQuerySelect = jest.spyOn(document, 'querySelector');
            spyQuerySelect.mockImplementation((selector: string) =>
                dom.querySelector(selector)
            );

            unlockScrolling();

            expect(spyQuerySelect).toHaveBeenCalled();
            expect(dom.body?.style.overflowY === 'scroll').toBeTruthy();
        });

        it('body not found and scroll lock property not set', () => {
            const spyQuerySelect = jest.spyOn(document, 'querySelector');
            spyQuerySelect.mockImplementation((selector: string) => null);

            unlockScrolling();

            expect(spyQuerySelect).toHaveBeenCalled();
            expect(document.body?.style.overflowY).toBeFalsy();
        });
    });
});
