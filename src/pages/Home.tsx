import { QRCodeSVG } from "qrcode.react"
import { ScanQR } from "../components/home/scanqr"
import { usePeer } from "../hooks/usePeer"
import { InputID } from "../components/home/inputid"



export const Home = () => {
    const { id, friendId, setFriendId } = usePeer()


    if (!id) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    return <>
        <div className="container mx-auto max-w-7xl">
            <div className="m-4">
                <h2 className="text-2xl font-bold mb-4">p2p file</h2>
                {/* auto generate url p2p, <br /> */}
                {/* create qrcode from that, <br /> */}
                {/* feature to scanqr to add friend <br /> */}

                id: {id} <br />
                scan this qr to add friend <br />
                <QRCodeSVG value={id} />

                <div className="flex gap-x-2">
                    <ScanQR setResult={setFriendId} />
                    <InputID setResult={setFriendId} />
                </div>

                friend id: {friendId} <br />

                feature upload file <br />
                feature to show list all download and upload file <br />
                all id and file or upload will be saved in indexeddb <br />
            </div>
        </div>
    </>
}
