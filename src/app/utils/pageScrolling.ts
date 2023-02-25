export const lockScrolling = (): void => {
    const BODY_ELEMENT: HTMLBodyElement | null = document.querySelector('body');
   
    if (BODY_ELEMENT !== null) {
        window.scrollTo({ top: 0 });
        BODY_ELEMENT.style.overflowY = 'hidden';
    }
}

export const unlockScrolling = (): void => {
    const BODY_ELEMENT: HTMLBodyElement | null = document.querySelector('body');

    if (BODY_ELEMENT !== null) {
        BODY_ELEMENT.style.overflowY = 'scroll';
    }
}
