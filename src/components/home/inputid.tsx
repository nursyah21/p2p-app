import { useRef } from "react";
import { $ } from "../../libs/documentId";

interface TInputID {
    setResult: (value: string) => void
}

export const InputID = ({ setResult }: TInputID) => {
    const closeBtn = useRef<HTMLButtonElement>(null)

    return <>
        <button className="btn my-4" onClick={() => { $("inputid").showModal() }}>Input ID</button> <br />

        <dialog id="inputid" className="modal">
            <div className="modal-box text-center items-center flex justify-center flex-col">
                <h3 className="font-bold text-lg mb-4">Input ID your friend</h3>
                <div className="flex flex-col text-left">
                    <fieldset className="fieldset">
                        <input name="email"  onChange={e=>setResult(e.target.value)} type="text" className="w-full input" placeholder="ID" required />
                    </fieldset>
                    <button className="btn" onClick={()=>closeBtn.current?.click()}>Submit</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button ref={closeBtn} >Close</button>
            </form>
        </dialog>
    </>
} 