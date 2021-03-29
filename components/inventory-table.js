
import styles from '../styles/Home.module.css'
export default function InventoryTable({headings, rows}) {
    return (
        <div>
            <table>
                <TableHead headings={headings}></TableHead>
                <TableRows rows={rows}></TableRows>
            </table>
        </div>
    )
  }

function TableRow({Item}) {
    return(
        <tr></tr>
    )
}