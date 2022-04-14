import React from 'react';
import {ProjectGallery} from "../components/ProjectGallery/ProjectGallery";
import {LoaderData} from "../components/LoaderData/LoaderData";

export const PageProjectGallery = () => {
    const [complexes, setComplexes] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(false)
    React.useEffect(() => {
        let timeout
        const getData = async () => {
            setIsFetching(true)
            try {
                let data = await fetch("data.json").then(res => res.json()).then(res => res)
                timeout = setTimeout(() => {
                    setComplexes(data)
                    setIsFetching(false)
                }, 500)
            } catch (e) {
                setIsFetching(false)
            }
        }
        getData()
        return () => {
            timeout && clearTimeout(timeout)
        }
    }, [])
    if (isFetching)
        return <LoaderData/>
    return <div className={"container"}>
        <ProjectGallery complexes={complexes}/>
    </div>
};