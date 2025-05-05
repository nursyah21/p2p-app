import { useEffect, useState } from "react"
import { db } from "../db"
import { PeerConnection } from "../libs/peer"

export const usePeer = () => {
    const [id, setId] = useState("")
    const [friendId, setFriendId] = useState("")


    useEffect(() => {
        // Check if user ID already exists in the IndexedDB
        // if no ID is found, generate new peer ID using PeerConnection
        db.then(_ =>
            _.get('userId', 1).then(_id => {
                if (!_id) {
                    PeerConnection.startPeerSession().then(id => {
                        setId(id)
                        db.then(_ =>
                            _.put('userId', id, 1)
                        )
                    })
                } else {
                    setId(_id)
                }
            })
        )

    }, [])

    return { id, friendId, setFriendId }
}