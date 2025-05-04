import { useState } from "react"
import { PeerConnection } from "../libs/peer"

export const useStartSession = () => {
    const [id, setId] = useState("")
    
    
    PeerConnection.startPeerSession().then(id=>setId(id))
    // const startPeer = async () => {
    //     const _id = await PeerConnection.startPeerSession()
    //     setId(_id)
    //     // PeerConnection.onIncomingConnection((conn) => {
    //     //     const peerId = conn.peer
    //     //     message.info("Incoming connection: " + peerId)
    //     //     dispatch(addConnectionList(peerId))
    //     //     PeerConnection.onConnectionDisconnected(peerId, () => {
    //     //         message.info("Connection closed: " + peerId)
    //     //         dispatch(removeConnectionList(peerId))
    //     //     })
    //     //     PeerConnection.onConnectionReceiveData(peerId, (file) => {
    //     //         message.info("Receiving file " + file.fileName + " from " + peerId)
    //     //         if (file.dataType === DataType.FILE) {
    //     //             download(file.file || '', file.fileName || "fileName", file.fileType)
    //     //         }
    //     //     })
    //     // })
    // }
   console.log('run')

    return {id}
}