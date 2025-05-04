import { useRef, useState } from "react";
import { $ } from "../../libs/documentId";
import { Scanner } from '@yudiel/react-qr-scanner'


interface TScanQR {
    setResult: (value: string) => void
}

export const ScanQR = ({ setResult }: TScanQR) => {
    const [stream, setStream] = useState(false)
    const closeBtn = useRef<HTMLButtonElement>(null)

    return <>
        <button className="btn my-4" onClick={() => { $("scanqr").showModal(); setStream(true) }}>Scan QR</button> <br />

        <dialog id="scanqr" className="modal">
            <div className="modal-box text-center items-center flex justify-center flex-col">
                <h3 className="font-bold text-lg mb-4">Scan QR</h3>
                <div className="max-w-xs">
                    <Scanner sound={false} components={{onOff: false, zoom: false }} formats={['qr_code']} paused={!stream} onScan={(result) => { 
                        setResult(result[0].rawValue); setStream(false); closeBtn.current?.click()
                    }} />
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button ref={closeBtn} onClick={() => setStream(false)}>Close</button>
            </form>
        </dialog>
    </>
} 