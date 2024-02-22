import React, { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./element/navbar"
import Sidebar from "./element/sidebar"
import SideBar from "./element/sidebar"

const AdminLayout = ({ role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  useEffect(() => {
    if (sidebarOpen) {
      const closeSidebarOnOutsideClick = (event) => {
        const sidebar = document.getElementById("default-sidebar")
        const toggleButton = document.getElementById("sidebar-toggle-button")

        if (
          sidebar &&
          !sidebar.contains(event.target) &&
          toggleButton &&
          !toggleButton.contains(event.target)
        ) {
          setSidebarOpen(false)
        }
      }

      document.addEventListener("click", closeSidebarOnOutsideClick)

      return () => {
        document.removeEventListener("click", closeSidebarOnOutsideClick)
      }
    }
  }, [sidebarOpen])

  return (
    <>
      <div className={`flex bg-base-100`}>
        <SideBar open={sidebarOpen} />
        <div className="lg:pl-64 flex flex-col w-full">
          <div className="sticky bg-base-200 top-0 z-20">
            <Navbar toggleSidebar={toggleSidebar} />
          </div>
          <div className={`min-h-screen bg-base-200 p-4 ${sidebarOpen ? "overflow-hidden" : ""}`}>
            {/* BreadCumb */}
            <Outlet />
          </div>
          <div className="sticky bottom-0 z-20 bg-blue-200">
            {/* asu */}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLayout