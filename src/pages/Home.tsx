import { QRCodeSVG } from "qrcode.react"
import { InputID } from "../components/home/inputid"
import { ScanQR } from "../components/home/scanqr"
import { usePeer } from "../hooks/usePeer"



export const Home = () => {
    const { id, friendId, setFriendId } = usePeer()

    if (!id) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    return <>
        <div className="container mx-auto max-w-7xl">
            <div className="m-4">
                <h2 className="text-2xl font-bold mb-4">p2p file</h2>

                id: {id} <br />
                scan this qr to add friend <br />
                <QRCodeSVG value={id} />

                <div className="flex gap-x-2">
                    <ScanQR setResult={setFriendId} />
                    <InputID setResult={setFriendId} />
                </div>

                friend id: {friendId} <br />

                <button className="btn">Upload</button> <br />
                feature upload file <br />
                feature to show list all download and upload file <br />
                all id and file or upload will be saved in indexeddb <br />
            </div>
        </div>
    </>
}
