import { QRCodeSVG } from "qrcode.react"
import { InputID } from "../components/home/inputid"
import { ScanQR } from "../components/home/scanqr"
import { usePeer } from "../hooks/usePeer"
import { FileUpload } from "../components/home/fileUpload"
import { useEffect, useState } from "react"
import { db, FileDB } from "../db"
import { Table } from "../components/table"
import { TrashIcon } from "../assets/trashIcon"
import { DownloadIcon } from "../assets/downloadIcon"
import { SendIcon } from "../assets/sendIcon"



export const Home = () => {
    const { id, friendId, setFriendId } = usePeer()
    const [files, setFiles] = useState<FileDB[]>()

    const fetchFiles = () => db.then(_ => {
        _.getAll("files").then(e => setFiles(e))
    });

    useEffect(() => {
        fetchFiles()
    }, [])

    if (!id) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    console.log({ friendId })
    console.log({ files })

    const handleDownload = (blob: Blob, name:string) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      };

    return <>
        <div className="container mx-auto max-w-7xl">
            <div className="m-4">
                <h2 className="text-2xl font-bold mb-4">p2p file</h2>

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
                        <td>{(_.size / (1024 * 1024)).toFixed(2) + 'mb'}</td>
                        <td className="flex gap-x-4">
                            <button onClick={()=>handleDownload(_.blob, _.name)} className="text-blue-500 hover:text-blue-800"><DownloadIcon /></button>
                            <button className="text-green-500 hover:text-green-800"><SendIcon /></button>
                            <button className="text-red-500 hover:text-red-800"><TrashIcon /></button>
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
