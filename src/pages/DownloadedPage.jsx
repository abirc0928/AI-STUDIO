import React, { useContext } from 'react'
import Header from '../components/Header'
import Glow from '../components/Glow'
import ImageGrid from '../components/ImageGrid'
import { DownloadContext } from '../context'

const DownloadedPage = () => {
  const { downloadedImages } = useContext(DownloadContext)

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      <Header></Header>
      <Glow></Glow>
      <main className="relative z-10">
        <h2 className="text-4xl font-bold mb-8">Downloaded <span class="text-2xl">👋</span></h2>
        <ImageGrid images={downloadedImages} emptyMessage="No images downloaded yet." />
      </main>
    </div>
  )
}

export default DownloadedPage
