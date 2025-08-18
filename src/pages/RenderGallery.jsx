import {Content, ImageGallery} from "../components/layout.jsx"
import {renders} from "../components/myImages.jsx"

export default function RenderGallery() {
  return (
        <Content contentTitle="3D Models">
          <ImageGallery images={renders}/>
        </Content>
  )
}

export const Head = () => <title>Simone Hamby</title>