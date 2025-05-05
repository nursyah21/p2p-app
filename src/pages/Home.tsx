import { deleteDB } from "idb"
import { QRCodeSVG } from "qrcode.react"
import { useEffect, useState } from "react"
import { DownloadIcon } from "../assets/downloadIcon"
import { SendIcon } from "../assets/sendIcon"
import { TrashIcon } from "../assets/trashIcon"
import { FileUpload } from "../components/home/fileUpload"
import { InputID } from "../components/home/inputid"
import { Reset } from "../components/home/reset"
import { ScanQR } from "../components/home/scanqr"
import { Table } from "../components/table"
import { db, FileDB } from "../db"
import { usePeer } from "../hooks/usePeer"
import { formatSize } from "../libs/formatSize"

export const Home = () => {
    const { id, friendId, setFriendId } = usePeer()
    const [files, setFiles] = useState<FileDB[]>()
    const [size, setSize] = useState(0)

    const fetchFiles = () => db.then(_ => {
        _.getAll("files").then(e => setFiles(e))
    });

    useEffect(() => {
        fetchFiles()
    }, [])

    useEffect(() => {
        db.then(_ => {
            _.getAll('files').then(file =>
                setSize(file.reduce((acc, f) => acc + f.blob.size, 0))
            )
        })
    }, [files])

    const resetDb = async () => {
        deleteDB('db')
        window.location.reload()
    };

    if (!id) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    console.log({ friendId })

    const handleDownload = (blob: Blob, name: string) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleDelete = (id: string) => {
        db.then(_ =>
            _.delete('files', id).then(() => {
                fetchFiles();
            })
        );
    };


    return <>
        <div className="container mx-auto max-w-7xl">
            <div className="m-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">p2p file</h2>
                    <Reset size={size} reset={resetDb} />
                </div>

                id: {id} <br />
                <QRCodeSVG value={id} />

                <div className="flex gap-x-2">
                    <ScanQR setResult={setFriendId} />
                    <InputID setResult={setFriendId} />
                </div>

                <FileUpload onFileUpload={fetchFiles} />

                <Table column={['#', 'file', 'type', 'size', 'aksi']} rows={<>
                    {files?.map((_, idx) => <tr key={idx + 1} className="hover:bg-slate-200">
                        <td>{idx + 1}</td>
                        <td>{_.name.length > 20 ? _.name.slice(0, 20) + '...' : _.name}</td>
                        <td>{_.type.split('/')[0]}</td>
                        <td>{formatSize(_.size)}</td>
                        <td className="flex gap-x-4">
                            <button onClick={() => handleDownload(_.blob, _.name)} className="text-blue-500 hover:text-blue-800"><DownloadIcon /></button>
                            <button className="text-green-500 hover:text-green-800"><SendIcon /></button>
                            <button onClick={() => handleDelete(_.id)} className="text-red-500 hover:text-red-800"><TrashIcon /></button>
                        </td>
                    </tr>)}
                </>} />
                <div className="mt-12 text-center text-xs">
                    build by <a className="text-slate-600" href="https://github.com/nursyah21">@nursyah</a>
                </div>
            </div>
        </div>
    </>
}
