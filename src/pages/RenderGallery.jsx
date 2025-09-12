import {Content, ImageGallery, VideoGallery} from "../components/layout.jsx"
import {renders, animations3d} from "../components/myImages.jsx"

export default function RenderGallery() {
  return (
    <>
        <Content contentTitle="3D Models">
          <Content contentTitle="Renders">
            <ImageGallery images={renders} fill="1"/>
          </Content>
          <Content contentTitle="Animations">
            <VideoGallery videos={animations3d}/>
          </Content>
        </Content>
    </>
  )
}

export const Head = () => <title>Simone Hamby</title>