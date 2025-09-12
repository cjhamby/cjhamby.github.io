import * as React from "react";
import '@fontsource/silkscreen';
import '@fontsource/handjet';
import HeaderNav, { FooterNav } from "./navigation.jsx";
import DevFooter, { DevHeader } from "./devTools.jsx";
import { Outlet } from "react-router";



// children: whatever is inside of the tags
// other props are explicitly named
// pageTitle: one for the entire page
// contentTitle:
export default function Layout(props) {
  return (
    <>
    <div id="page" className="root w-screen min-h-screen">
      <Header />
        <main>
          <div id="content_box" className="flex mt-60 lg:mt-30 mb-10 justify-center w-full m-auto p-4">
          <Outlet />
          </div>
        </main>
      <Footer />
    </div>
    </>
  );
}

function Header(props) {
  return (
    <header>
      <div id="Navbar" className="flex flex-wrap fixed top-0 left-0 w-full h-60 lg:h-30 p-10 border-b-1 border-b-gray-700 bg-rose-800">
        <HeaderNav />
      </div>           
      {/* <DevHeader /> */}
    </header>
  )
}

function Footer(props) {
  return (
    <footer>
      <div className="fixed bottom-0 left-0 w-full h-10 bg-rose-950 text-stone-100 flex px-2 title_font">
          <FooterNav />
          <div className="justify-end">Copyright Me, 2025</div>
      </div>
      {/* <DevFooter /> */}
    </footer>
  )
}

function PageTitle({ title }) {
  return (
    <div className="font-serif text-3xl text-gray-700 text-center p-8 title_font">
      {title}
    </div>
  );
}

// the blocks in which page content is displayed
export function Content(props) {
  const contentTitle = props.contentTitle ? props.contentTitle : "";
  const contentBody = props.children ? props.children : "please add content";

  return (
    <div id={props.contentTitle} className="p-4">
      <div className="text-lg title_font">{contentTitle}</div>
      <div className=" p-1 text-base">{contentBody}</div>
    </div>
  );
}

export function Content_FullWidth(props) {
  const contentTitle = props.contentTitle ? props.contentTitle : "";
  const contentBody = props.children ? props.children : "please add content";

  return (
    <div id={props.contentTitle} className="p-4 w-9/10">
      <div className="text-lg">{contentTitle}</div>
      <div className=" p-1 text-base">{contentBody}</div>
    </div>
  );
}




export function ImageGallery(props) {
  // if TRUE: image expands to fill the box (overlapping if necessary)
  // if FALSE: image shrinks to fit the box
  const fill = props.fill ? "object-cover " : "object-contain ";
  return (

    <div className="grid grid-cols-6 gap-6">
      {
        // create a thumbnail for each image
        props.images.map((image) => {
          return (
            <div className="h-60 p-2 border-1 border-rose-900 bg-neutral-50 col-span-6 md:col-span-3 xl:col-span-2">
              <a href={image.src}>
                <img
                  className={fill + "h-full w-full"}
                  loading="lazy"
                  src={image.src}
                  title={image.title ? image.title : "thumbnail"}
                  //alt={image.description ? image.description : "thumbnail"}
                />
              </a>
            </div>
          );
        })
      }
    </div>
  );
}

export function VideoGallery({ videos }) {
  return (
    <div className="grid grid-cols-6 gap-6">
      {videos.map((video) => {
        //   return(<div><VideoThumbnail video={video}/></div>)
        return (
          <div className="h-60 p-2 border-1 border-rose-900 bg-neutral-50 col-span-6 md:col-span-3 xl:col-span-2">
              <video class="h-full w-auto" controls>
                <source
                  src={video.src}
                  type="video/mp4"
                  title={video.title ? video.title : "thumbnail"}
                  alt={video.description ? video.description : "thumbnail"
                  }
                />
                Video Unsupported
              </video>
          </div>
        );
      })}
    </div>
  );
}