import * as React from "react"
import Layout, {Content, VideoGallery} from "../components/layout.jsx"
import {animations} from "../components/myImages.jsx"

export default function AnimationGallery() {
  return (
        <Content contentTitle="Animations">
          <VideoGallery videos={animations}/>
        </Content>
  )
}

export const Head = () => <title>Simone Hamby</title>
