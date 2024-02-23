import Swal from "sweetalert2"
import { post } from "../../hooks/gateway"

export const AddPengumuman = async ( form, handleResult ) => {
    try{
        const formdata = new FormData()
        formdata.append('judul_pengumuman', form.judul)
        formdata.append('isi_pengumuman', form.isi)
        formdata.append('to_pengumuman', form.to)
        
        const response = await post('pengumuman', formdata)

        console.log(response);

        if(response.status){
            Swal.fire({
                icon: 'success',
                title: 'Pengumuman Berhasil di buat',
                text: 'Sukses Menambahkan Data',
                showConfirmButton: false,
                timer: 3000
            }).then(() => {
                handleResult('success')
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Pengumuman Gagal di buat',
                text: 'Gagal Menambahkan Data',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Ada kesalahan!',
            text: 'Gagal Menambahkan Data',
            showConfirmButton: false,
            timer: 3000
        })
    }
}