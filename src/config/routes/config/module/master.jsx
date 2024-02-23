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
                path: '/master/level',
                element: '',
            },
            {
                name: "Kelas",
                path: '/master/kelas',
                element: ''
            },
            {
                name: "Jurusan",
                path: '/master/jurusan',
                element: ''
            },
            {
                name: "Ruang",
                path: '/master/ruang',
                element: ''
            },
            {
                name: "Mata Pelajaran",
                path: '/master/mata_pelajaran',
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
                path: '/master/daftar_siswa',
                element: '',
            },
            {
                name: "Daftar Guru",
                path: '/master/daftar_guru',
                element: ''
            }
        ]
    }
]