// Icons
import { BiMessage, BiSolidDashboard, BiSpeaker } from "react-icons/bi"
import { getRole } from "../../middleware/hooks/authConfig"
import { Master } from "./module/master"
import Dashboard from "../../../pages/AdminPages/dashboard"
import { Presensi, PresensiGuru, PresensiSiswa } from "./module/presensi"
import { Kesiswaan, LaporanSiswa } from "./module/kesiswaan"
import Pengumuman from "../../../pages/AdminPages/pengumuman"
// Dashboar Page

// Module

const dashboardRoute = {
    name: 'Dashboard',
    path: '/',
    element: <Dashboard />,
    icon: <BiSolidDashboard />
}

const pengumuman = {
    name: 'Pengumuman',
    path: '/pengumuman',
    element: <Pengumuman />,
    icon: <BiSpeaker />
}

const role = getRole()

const Menu = () => {
    
    if (role === 'su') {
        return [dashboardRoute, pengumuman, ...Master, ...Presensi, PresensiSiswa, PresensiGuru, ...Kesiswaan, LaporanSiswa]
    } else if(role === 'production') {
        return [dashboardRoute]
    } else if(role === 'she'){
        return [dashboardRoute]
    }else{
        return [dashboardRoute]
    }
}

export const Routers = Menu()