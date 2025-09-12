import {Content, ImageGallery} from "../components/layout.jsx"
import {animations2d} from "../components/myImages.jsx"

export default function AnimationGallery() {
  return (
        <Content contentTitle="Animations">
          <ImageGallery images={animations2d} />
        </Content>
  )
}

export const Head = () => <title>Simone Hamby</title>
