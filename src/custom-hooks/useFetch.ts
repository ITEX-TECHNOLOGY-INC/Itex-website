

import React, { useState, useEffect } from 'react'

const useFetch = (url: string) => {

    const [result, setResult] = useState({})

    useEffect(() => {

        const fetchData = async () => {

            try {

                const data = await fetch(url)

                const datajson = await data.json()

                setResult(datajson)

            } catch (error) {
                setResult(error)
            }


        }

        fetchData();


    }, [url])

return [result]

}

export default useFetch
