import { BiNote } from "react-icons/bi"

export const Kesiswaan = [
    {
        module: true,
        moduleName: 'Kesiswaan'
    }
]

export const LaporanSiswa = {
    name: 'Laporan Siswa',
    icon: <BiNote />,
    parent: true,
    children: [
        {
            name: "Data Prestasi",
            path: '/master/activity',
            element: '',
        },
        {
            name: "Data Pelanggaran",
            path: '/master/departement',
            element: ''
        }
    ]
}