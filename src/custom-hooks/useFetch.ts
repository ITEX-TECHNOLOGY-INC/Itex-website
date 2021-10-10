

import { useState, useEffect } from 'react'



const useFetch = (url: string,{}) => {

    const [result, setResult] = useState({})
    const [loading, setLoading] = useState<Boolean>(true)
    const [error,setError]=useState<unknown>(false)

    useEffect(() => {

        const fetchData = async () => {

            try {

                const data = await fetch(url)

                const d = await data.json()

                setResult(d)

                setLoading(false)

            } catch (error) {
                setError(error)
            }


        }

        fetchData();


    }, [url])

    return {result,loading,error}

}

export default useFetch
