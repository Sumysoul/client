import React, { useRef, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

function Dialog({ isActive, setIsActive, children }: any) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const closeHandler = () => {
            setIsActive(false);
        };

        const clickHandler = (e: any) => {
            const dialogElement = e.currentTarget;
            const dialogDimensions = dialogElement.getBoundingClientRect();
            const isClickOutside = e.clientX < dialogDimensions.left
                || e.clientX > dialogDimensions.right
                || e.clientY < dialogDimensions.top
                || e.clientY > dialogDimensions.bottom;

            isClickOutside && dialogElement.close();
        };

        const dialogElement = dialogRef.current;

        if (dialogElement?.open && !isActive) {
            dialogElement?.close();
        } else if (!dialogElement?.open && isActive) {
            dialogElement?.showModal();
        }

        // @ts-ignore
        dialogElement.addEventListener('close', closeHandler);
        // @ts-ignore
        dialogElement.addEventListener('click', clickHandler);

        return () => {
            // @ts-ignore
            dialogElement.removeEventListener('close', closeHandler);
            // @ts-ignore
            dialogElement.removeEventListener('click', clickHandler);
        };
    }, [isActive, setIsActive]);

    return (
        <dialog
            className="bg-transparent outline-0 backdrop:bg-neutral-800 backdrop:opacity-60"
            ref={dialogRef}
        >
            <div className="w-full h-full bg-white p-8 overflow-hidden rounded-xl">
                <button
                    className="absolute top-0 right-0 text-black p-6 text-2xl hover:text-gray-500"
                    type="button"
                    onClick={() => { setIsActive(false); }}
                    title="close"
                >
                    <CgClose />
                </button>

                {children}
            </div>
        </dialog>
    );
}

export default Dialog;
