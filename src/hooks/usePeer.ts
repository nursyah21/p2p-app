import { useEffect, useState } from "react"
import { PeerConnection } from "../libs/peer"

export const usePeer = () => {
    const [id, setId] = useState("")
    const [friendId, setFriendId] = useState("")

    useEffect(() => {
        PeerConnection.startPeerSession().then(id => setId(id))
    }, [])

    return {id, friendId, setFriendId}
}