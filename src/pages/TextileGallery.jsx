import {Content, ImageGallery} from "../components/layout.jsx"
import {textileArt} from "../components/myImages.jsx"

export default function TextileGallery() {
  return (
    <>
    {/* <Content contentTitle="Textile Arts">
        These are things I've made over time!
    </Content> */}
    <Content contentTitle="Textile Arts">
        <ImageGallery images={textileArt}/>
    </Content>
    </>
  )
}

export const Head = () => <title>Simone Hamby</title>
