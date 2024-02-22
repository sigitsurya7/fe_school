import { BiData, BiUser } from "react-icons/bi";

export const Master = [
    {
        module: true,
        moduleName: 'Data Master'
    },
    {
        name: 'Master Data',
        icon: <BiData />,
        parent: true,
        children: [
            {
                name: "Level",
                path: '/master/activity',
                element: '',
            },
            {
                name: "Kelas",
                path: '/master/departement',
                element: ''
            },
            {
                name: "Jurusan",
                path: '/master/klasifikasi',
                element: ''
            },
            {
                name: "Ruang",
                path: '/master/rank_bahaya',
                element: ''
            },
            {
                name: "Mata Pelajaran",
                path: '/master/rank_bahaya',
                element: ''
            }
        ]
    },
    {
        name: 'Master User',
        icon: <BiUser />,
        parent: true,
        children: [
            {
                name: "Daftar Siswa",
                path: '/master/activity',
                element: '',
            },
            {
                name: "Daftar Guru",
                path: '/master/departement',
                element: ''
            }
        ]
    }
]