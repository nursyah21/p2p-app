import { ReactNode } from "react"

type Props = {
    column: string[],
    rows: ReactNode
}

export const Table = ({ column, rows }: Props) => {
    return <div className="overflow-x-auto my-4">
        <table className="table">
            <thead>
                <tr className="bg-slate-100">
                    {column.map(e => <th key={e}>{e}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
}