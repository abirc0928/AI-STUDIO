import React, { useContext, useEffect } from 'react'
import ImageGenaratePage from './ImageGenaratePage'
import DownloadedPage from './DownloadedPage'
import { RouteContext } from '../context'

const Pages = () => {
    const { route } = useContext(RouteContext)
    if (route === "create-img") {
        return <ImageGenaratePage />
    } else if (route === "downloaded-img") {
        return <DownloadedPage />
    }
}

export default Pages
