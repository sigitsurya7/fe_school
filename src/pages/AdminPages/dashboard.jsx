import {BiGroup, BiSpeaker, BiUser, BiUserCheck} from 'react-icons/bi'
import { Greeting } from '../../config/middleware/hooks/greeting'

const Dashboard = () => {
    var nama = localStorage.getItem('fullname')
    var greeting = Greeting()
    return(
        <>
            <span className='text-xl font-semibold capitalize'>{greeting} {nama}</span>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex justify-between items-center cursor-pointer bg-primary p-4 rounded-md">
                    <div className="flex flex-col">
                        <span className="font-semibold">Rombel</span>
                        <h1 className="text-2xl font-semibold">17</h1>
                    </div>

                    <div className='lg:block hidden'>
                        <BiGroup className='text-3xl' />
                    </div>
                </div>
                <div className="flex justify-between items-center cursor-pointer bg-secondary p-4 rounded-md">
                    <div className="flex flex-col">
                        <span className="font-semibold">Siswa</span>
                        <h1 className="text-2xl font-semibold">917</h1>
                    </div>

                    <div className='lg:block hidden'>
                        <BiUser className='text-3xl' />
                    </div>
                </div>
                <div className="flex justify-between items-center cursor-pointer bg-primary p-4 rounded-md">
                    <div className="flex flex-col">
                        <span className="font-semibold">Guru</span>
                        <h1 className="text-2xl font-semibold">27</h1>
                    </div>

                    <div className='lg:block hidden'>
                        <BiUser className='text-3xl' />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 my-4">
                {/* Pengumuman */}
                <div className="bg-base-100 h-max flex flex-col gap-4 rounded-md p-4 col-span-4 lg:col-span-4">
                    <span className='text-2xl font-semibold'>Pengumuman</span>
                    <div className='flex justify-between my-4 items-center gap-4'>
                        <div className='flex gap-4 items-center'>
                            <div className="p-4 flex bg-base-200 justify-center items-center rounded-full">
                                <BiSpeaker className='text-xl' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <span className='font-semibold text-xl'>
                                    Libur
                                </span>
                                <article className='text-wrap'>
                                    Berhubung di tanggal 14 ada pemilihan presiden maka dengan itu kegiatan belajar di liburkan, dan gunakan hak suaranya bagi yang memilih
                                </article>
                            </div>
                        </div>

                        <div className='flex flex-col text-right'>
                            <span className='font-semibold'>Admin</span>
                            <span className='font-normal text-sm whitespace-nowrap'>12 Februari 2024</span>
                        </div>
                    </div>
                </div>

                {/* Presensi */}
                <div className="flex flex-col gap-4 bg-base-100 h-max rounded-md p-4 col-span-4 lg:col-span-2">
                    <span className='text-2xl font-semibold'>Presensi</span>

                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <div className='flex gap-4 items-center'>
                                <div className="w-10 h-10 flex bg-base-200 justify-center items-center rounded-full">
                                    <BiUserCheck className='text-xl' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='font-semibold'>
                                        Dwi Ardiyansyah
                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col text-right'>
                                <span className='font-semibold'>Jam</span>
                                <span className='font-mono text-sm'>06:48</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-4 items-center'>
                                <div className="w-10 h-10 flex bg-base-200 justify-center items-center rounded-full">
                                    <BiUserCheck className='text-xl' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='font-semibold'>
                                        Rudi Alhadi
                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col text-right'>
                                <span className='font-semibold'>Jam</span>
                                <span className='font-mono text-sm'>06:40</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-4 items-center'>
                                <div className="w-10 h-10 flex bg-base-200 justify-center items-center rounded-full">
                                    <BiUserCheck className='text-xl' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='font-semibold'>
                                        Angel Alysca
                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col text-right'>
                                <span className='font-semibold'>Jam</span>
                                <span className='font-mono text-sm'>06:30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard