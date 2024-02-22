import Swal from "sweetalert2"
import { post } from "../../hooks/gateway"

export const handleLogin = async ( login, handleResult ) => {
    try {
        const formdata = new FormData()
        formdata.append('username', login.username)
        formdata.append('password', login.password)
    
        const response = await post('auth/login', formdata)
    
        if(response.status){

          const {nama, role, is_active, email, id, access_token} = response.data

          if(is_active === '1'){
              localStorage.setItem('fullname', nama)
              localStorage.setItem('token', access_token)
              localStorage.setItem('role', role)
              localStorage.setItem('email', email)
              localStorage.setItem('id', id)
              localStorage.setItem('theme', 'cupcake')
              localStorage.setItem('isLoggedIn', 'true')

              Swal.fire({
                icon: 'success',
                title: 'Login Berhasil!',
                text: 'Login Berhasil, Anda akan di arahkan ke halaman utama',
                showConfirmButton: false,
                timer: 3000,
              }).then(() => {
                handleResult(role)
              })
          }else{
            Swal.fire({
                icon: 'error',
                title: 'Login Error',
                text: 'Your Account is Disabled',
                showConfirmButton: false,
                timer: 3000
            })
          }
    
        }
    
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: "Nama Pengguna atau kata sandi salah",
          timer: 3000,
          showConfirmButton: false
        })
      }
}

export const handleRecovery = async ( login, handleResult ) => {
    try {
        const formdata = new FormData()
        formdata.append('username', login.username)
        formdata.append('password', login.password)
    
        const response = await post('auth/recovery', formdata)
        if(login.code){
          Swal.fire({
            icon: 'success',
            title: 'Update Berhasil!',
            text: 'Password berhasil dirubah',
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            handleResult('ok')
          })
        }else{
          if(response.status){
            handleResult(response.data)
          }
        }
    
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: "Nama Pengguna atau kata sandi salah",
          timer: 3000,
          showConfirmButton: false
        })
      }
}

export const handleLogout = async (handleResult) => {
  try{
    Swal.fire({
        icon: 'success',
        title: 'Berhasil Keluar',
        text: 'Anda akan di arahkan ke halaman login',
        showConfirmButton: false,
        timer: 3000
    }).then(() => {
        localStorage.clear()
        handleResult('success')
    })
  }catch(error){
    console.log(error);
  }
}

export const isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
}