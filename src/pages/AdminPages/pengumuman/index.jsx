import { useEffect, useState } from "react"
import Table from "../../../component/table/table"
import { get } from "../../../config/middleware/hooks/gateway"

const Pengumuman = () => {

    const [ data, setData ] = useState([])

    function fetchData(){
        get('pengumuman/1').then((response)=>{
            console.log(response);
        })
    }

    useEffect(() => {
        fetchData()
      });

    return(
        <>
            <Table />
        </>
    )
}

export default Pengumuman