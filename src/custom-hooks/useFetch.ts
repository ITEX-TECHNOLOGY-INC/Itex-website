

import React, { useState, useEffect } from 'react'



const useFetch = (url: string) => {

    const [result, setResult] = useState()
    const [active, setLoading] = useState<Boolean>(true)

    useEffect(() => {

        const fetchData = async () => {

            try {

                const data = await fetch(url)

                const datajson = await data.json()

                setResult(datajson)

                setLoading(false)

            } catch (error) {
                setResult(error)
            }


        }

        fetchData();


    }, [url])

    return [result]

}

export default useFetch
