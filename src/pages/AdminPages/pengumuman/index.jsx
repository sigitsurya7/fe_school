import { useEffect, useState } from "react"
import Table from "../../../component/table/table"
import { get } from "../../../config/middleware/hooks/gateway"
import Modal from "../../../component/modal/modal"
import { AddPengumuman } from "../../../config/middleware/services/master/pengumumanServices"
import { BiPencil, BiTrash } from "react-icons/bi"

const Pengumuman = () => {

    const formPengumuman = {
        judul: '',
        isi: '',
        to: ''
    }

    const [ data, setData ] = useState([])
    const [ opsi, setOption ] = useState([])
    const [isModalOpen, setIsModalOpen] = useState({
        addPengumuman: false,
        editActivity: false
    })
    const [form, setForm] = useState(formPengumuman)

    function fetchData(page, itemPage) {
        let idPage = page ? page : 1
        let perpage = itemPage ? itemPage : 10
        get(`pengumuman?page=${idPage}&per_page=${perpage}`).then((response) => {
           setData(response.data)
        }).catch((error) => {
            console.error('Error fetching data:', error)
        });
    }
    
    function option() {
        get('role/option').then((response) => {
            setOption(response.data)
        }).catch((error) => {
            console.error('Error fetching options:', error);
        });
    }
    
    useEffect(() => {
        fetchData()
        option()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await AddPengumuman(form, (handleResult) => {
                if(handleResult == 'success'){
                    fetchData()
                    setIsModalOpen({addPengumuman: false})
                }else{
                    console.log('user biasa')
                }
            })
        } catch (error) {
            console.error(error)
        }
    } 

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const openModal = () => {
        setForm(formPengumuman)
        setIsModalOpen({addPengumuman: true})
    }

    const closeModal = () => {
        setIsModalOpen({addPengumuman: false})
    }

    const renderTable = (item, index) => {
        return (
            <>
                <td className="capitalize">{index + 1}</td>
                <td className="capitalize">{item.judul_pengumuman}</td>
                <td className="">{item.isi_pengumuman}</td>
                <td className="capitalize">{item.to_pengumuman}</td>
                <td className="capitalize">{item.pembuat}</td>
                <td>
                    <div className="flex gap-2">
                        <div className="btn btn-sm btn-warning">
                            <BiPencil />
                        </div>
                        <div className="btn btn-sm btn-error">
                            <BiTrash />
                        </div>
                    </div>
                </td>
            </>
        )
    }

    return(
        <>
            <Table
                tableName={'Pengumuman'}
                thead={['No', 'judul', 'isi', 'untuk', 'pembuat', 'action']}
                button={['tambah data']}
                funcButton={[openModal, ]}
                color={['primary']}
                data={data}
                fetch={fetchData}
            >
                {renderTable}
            </Table>

            <Modal title={"Pengumuman"} isOpen={isModalOpen.addPengumuman} onClose={closeModal} button={'simpan'} funcButton={handleSubmit}>
                <div className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-2 gap-2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Judul Pengumuman</span>
                            </div>
                            <input type="text" placeholder="Judul Pengumuman" className="input input-primary" name="judul" value={form.judul} onChange={handleInputChange} />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Penerima </span>
                            </div>
                            <select name="to" defaultValue={form.to} value={form.to} onChange={handleInputChange} id="" className="select select-primary capitalize">
                                <option value="#" selected>-- Pilih Penerima --</option>
                                <option value="all">Semua</option>
                                {opsi.map((opt, index) => {
                                    if(opt.code_name != 'admin'){
                                        return(
                                            <option value={opt.code_name}>{opt.role_name}</option>
                                        )
                                    }
                                })}
                            </select>
                        </label>
                        <label className="form-control col-span-2">
                            <div className="label">
                                <span className="label-text">Isi Pengumuman</span>
                            </div>
                            <textarea type="text" placeholder="Isi Pengumuman" className="textarea textarea-primary" name="isi" value={form.isi} onChange={handleInputChange} />
                        </label>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Pengumuman