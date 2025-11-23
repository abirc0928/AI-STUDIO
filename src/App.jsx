import RouteProvider from "./providers/RouteProvider"
import Pages from "./pages/Pages"
import ImageProvider from "./providers/ImageProvider"
import DownloadedProvider from "./providers/DownloadedProvider"
function App() {

  return (
    <div className="font-satoshi">
      <RouteProvider>
        <ImageProvider>
          <DownloadedProvider>
            <Pages />
          </DownloadedProvider>
        </ImageProvider>
      </RouteProvider>
    </div>
  )
}

export default App

