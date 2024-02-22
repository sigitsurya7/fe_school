import { BiCheck } from "react-icons/bi";

export const Presensi = [
    {
        module: true,
        moduleName: 'Absensi Online'
    }
]

export const PresensiSiswa = {
    name: 'Presensi Siswa',
    icon: <BiCheck />,
    parent: true,
    children: [
        {
            name: "Data Kartu Siswa",
            path: '/master/activity',
            element: '',
        },
        {
            name: "Absensi Harian",
            path: '/master/departement',
            element: ''
        },
        {
            name: "Rekap Data Siswa",
            path: '/master/klasifikasi',
            element: ''
        }
    ]
}

export const PresensiGuru = {
    name: 'Presensi Guru',
    icon: <BiCheck />,
    parent: true,
    children: [
        {
            name: "Data Kartu Guru",
            path: '/master/activity',
            element: '',
        },
        {
            name: "Absensi Harian",
            path: '/master/departement',
            element: ''
        },
        {
            name: "Rekap Data Guru",
            path: '/master/klasifikasi',
            element: ''
        }
    ]
}