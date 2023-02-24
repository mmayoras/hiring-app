const BODY_ELEMENT: HTMLBodyElement | null = document.querySelector('body');

export const lockScrolling = (): void => {        
    if (BODY_ELEMENT !== null) {
        BODY_ELEMENT.style.overflowY = 'hidden';
    }
}

export const unlockScrolling = (): void => {
    if (BODY_ELEMENT !== null) {
        BODY_ELEMENT.style.overflowY = 'scroll';
    }
}
