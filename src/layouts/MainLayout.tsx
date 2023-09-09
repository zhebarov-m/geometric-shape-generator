import { FC } from "react"
import Navigation from "../components/Navigation"
import { Outlet } from "react-router-dom"

const MainLayout:FC = () => {
  return (
    <div>
        <Outlet />
        <Navigation />
    </div>
  )
}

export default MainLayout