import {Content, ImageGallery} from "../components/layout.jsx"
import digitalArt from "../components/myImages.jsx"

export default function DigitalGallery() {
  return (
        <Content contentTitle="Digital Art">
          <ImageGallery images={digitalArt} fill="1"/>
        </Content>
  )
}

export const Head = () => <title>Simone Hamby</title>
