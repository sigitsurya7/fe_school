import { useState } from "react"
import { handleLogin } from "../../config/middleware/services/auth/auth"
import { GiKoala } from "react-icons/gi";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { access_token } from "../../config/middleware/hooks/authConfig";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const [ showPassword, setShowPassword ] = useState(false)

    function visiblePassword(){
        setShowPassword(!showPassword)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await handleLogin(state, (handleResult) => {
                window.location.reload()
            })
        } catch (error) {
            console.error(error)
        }
    }

    if((access_token())){
        return <Navigate to="/" />
    }

    return(
        <div className="w-full lg:w-96 h-[26rem] flex flex-col gap-4 bg-base-100 rounded-md p-8 capitalize">
            <div className="flex flex-col gap-1 items-center justify-center">
                <GiKoala className="text-5xl" />
                <h1 className="font-semibold text-3xl">Masuk</h1>
                <span className="text-sm font-sans text-center">Harap masukan Username dan Password anda</span>
            </div>
            <form className="flex flex-col gap-1">
                <div className="w-full">
                    <input type="text" name="username" placeholder="Username" className="input input-primary w-full" value={state.username} onChange={handleInputChange} />
                </div>
                <div className="w-full">
                    <div className='relative'>
                        <input type={showPassword ? 'text' : 'password'} autoComplete='password' id='password' name='password' value={state.password} onChange={handleInputChange} className='input input-primary w-full' placeholder='Password' />
                        <div className='absolute inset-y-0 right-0 pl-3 items-center flex p-4 cursor-pointer' onClick={visiblePassword} >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                        <span className="label-text ml-2">Ingatkan saya</span>
                    </label>
                </div>

                <button onClick={handleSubmit} type="submit" className="btn btn-primary w-full uppercase" >submit</button>
            </form>

            <Link to={'/auth/recovery'} className="text-center text-sm text-blue-400 underline underline-offset-2 cursor-pointer">lupa password ?</Link>
        </div>
    )
}

export default Login