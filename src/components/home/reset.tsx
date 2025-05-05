import { useRef } from "react"
import { $ } from "../../libs/documentId"
import { formatSize } from "../../libs/formatSize"

type Props = {
    size: number,
    reset: ()=>void
}

export const Reset = ({ size, reset }: Props) => {

    const closeBtn = useRef<HTMLButtonElement>(null)

    return <div className="flex flex-col">
        <button className="btn  bg-red-500 text-white" onClick={() => $("modalReset").showModal()}>Reset</button>
        <span className="text-slate-600 text-sm text-center">
            {formatSize(size)}
        </span>

        <dialog id="modalReset" className="modal">
            <div className="modal-box  text-center items-center flex justify-center flex-col">
                <h3 className="font-bold text-lg mb-4">All your data will be reset</h3>
                <div className="flex flex-col text-left w-full">

                    <button className="btn bg-red-600 text-white hover:bg-red-400" onClick={() => {
                        reset()
                        closeBtn.current?.click()
                    }}>Yes</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button ref={closeBtn}>Close</button>
            </form>
        </dialog>
    </div>
}