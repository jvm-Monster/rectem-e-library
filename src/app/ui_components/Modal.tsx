'use client';
import React, {ReactNode} from "react";

interface  ModalContent{
    imageSrc:string,
    children:ReactNode,
    text:string,
    buttonColor:string
}
export const Modal : React.FC<ModalContent>= ({imageSrc,children,buttonColor,text}) => {
    const modalRef:React.RefObject<HTMLDialogElement>  = React.useRef(null);
    const openDialog=()=>{
        if(modalRef.current){
            modalRef.current.showModal();
        }
    }

    const closeDialog=()=>{
        if(modalRef.current){
            modalRef.current.close();
        }
    }
    return (
        <>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className={buttonColor} onClick={openDialog}>{text}</button>
            <dialog id="my_modal_5" className="modal" ref={modalRef}>
                <div className="modal-box max-w-5xl  ">

                    <div className={"flex justify-between justify-self-center p-10 space-x-20"}>
                        <div className={"container  "}>
                            <img src={imageSrc} className={"rounded-2xl"}/>
                        </div>
                        <div className={"space-y-10 self-center"}>
                        <h1 className={"text-4xl font-bold"}>Welcome Rectem E-Library</h1>
                            {children}
                        </div>
                    </div>
                    <div className="modal-action">
                        {/*<form method="dialog">
                             if there is a button, it will close the modal
                            <button className="btn" onClick={closeDialog}>Close</button>
                        </form>*/}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeDialog}>✕</button>
                    </div>
                </div>
            </dialog>
        </>
    );
};