import React from "react"
import { Outlet } from "react-router-dom"
import banner from '../../../assets/img/4016906.jpg'

const AuthLayout = () => {
    return(
        <React.Fragment>
            <div className="w-screen h-screen flex justify-center items-center bg-base-200 p-4">
                <div className="flex p-4 rounded-md">
                    <div className='w-96 bg-center rounded-tl-md rounded-bl-md sm:hidden lg:block bg-cover' style={{ backgroundImage: `url(${banner})` }} />
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
}

export default AuthLayout