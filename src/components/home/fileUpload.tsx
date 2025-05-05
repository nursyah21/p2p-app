import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { db, FileDB } from "../../db"
import { usePeer } from "../../hooks/usePeer"

type Props = {
    onFileUpload: () => void
}

export const FileUpload = ({ onFileUpload }: Props) => {
    const { id } = usePeer()

    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            if (!id) return
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = (event) => {
                if (!event.target || event.target.result === null) return;
                const blob = new Blob([event.target.result], { type: file.type });

                const data: FileDB = {
                    name: file.name,
                    type: file.type,
                    blob: blob,
                    size: file.size,
                    uploader: id
                }
                db.then(_ => {
                    _.put('files', data)
                }).then(() => {
                    onFileUpload()
                })
            }

            reader.readAsArrayBuffer(file)
        })

    }, [id, onFileUpload])

    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return <>
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="btn w-full">Upload Files</p>
        </div>
    </>
}