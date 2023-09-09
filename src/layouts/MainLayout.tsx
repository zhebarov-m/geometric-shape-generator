import { FC } from "react"
import styles from './index.module.scss'
import { Outlet } from "react-router-dom"
import TabsShape from "../components/GeometricShape"

const MainLayout:FC = () => {
  return (
    <div className={styles.mainBlock}>
        <TabsShape />
        <h1>CSS генератор геометрических фигур</h1>
        <Outlet />
    </div>
  )
}

export default MainLayout