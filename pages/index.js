import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InventoryTable from '../components/inventory-table'

export default function Home() {
  return (<div>
    <h1>Welcome</h1>
    <InventoryTable name='Test'></InventoryTable>
    </div>
  )
}