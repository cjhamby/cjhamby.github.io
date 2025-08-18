/* 
    i put navigation elements on a separate page
    to make it a little more organized if i update the links in the future
*/

import { homeImages } from "./myImages"
export const siteName="Simone Hamby"
import { Link } from "react-router";
import { Menu } from "@base-ui-components/react/menu";


const sites = new Map();
sites.set("digital", "digital_gallery");
sites.set("renders", "renders");
sites.set("animation", "animation");
sites.set("about", "about");
sites.set("textile", "textiles")
sites.set("github", "https://www.github.com/cjhamby");


// site name at top of screen, links to homepage
function TitleLink () {
    return (
        <div className="basis-full lg:basis-1/2 text-center lg:text-start grow">
                <Link to="/" className=" text-stone-100 hover:text-cyan-200 text-4xl title_font">{siteName}</Link>
            </div>
    )
}

export default function HeaderNav () {
    return (
        <>
        <TitleLink/>
        <LinkButtons/>
        </>
    )
}

// links at bottom of page
export function FooterNav () {
    return (
        <div className="basis-1/2 grow">
            <Link to="/" className=" text-stone-100 hover:text-cyan-200">Return to Home</Link>
        </div>
    )
}

// style for links on the navbar
const linkStyle="h-10 w-30 bg-rose-900 text-stone-100 hover:bg-rose-500 content-center rounded-md flex-none title_font";


// navbar link buttons
function LinkButtons() {    
    return(
        <div className="flex flex-wrap grow gap-4 text-lg justify-center lg:justify-end mt-5 lg:mt-0 text-center items-center">
        <ArtMenu />
        <Link className={linkStyle} to={sites.get("about")}>About</Link>
        <SocialMenu />
        </div>
    )
}


// dropdown "art" menu in the navbar 
function ArtMenu() {
    // style for items in the dropdown
    const dropdownStyle="w-30 h-10 p-2 bg-rose-200 text-black hover:bg-rose-500";
    
    return(
        <Menu.Root>
            <Menu.Trigger>
                <div className={linkStyle}>Art</div>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner sideOffset={0}>
                    <Menu.Popup>
                        <Link to={sites.get("digital")}><Menu.Item className={dropdownStyle}>Digital</Menu.Item></Link>
                        <Link to={sites.get("renders")}><Menu.Item className={dropdownStyle}>3D Models</Menu.Item></Link>
                        <Link to={sites.get("animation")}><Menu.Item className={dropdownStyle}>Animation</Menu.Item></Link>
                        <Link to={sites.get("textile")}><Menu.Item className={dropdownStyle}>Textile Art</Menu.Item></Link>
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>       
    )
}


function SocialMenu() {
    // style for items in the dropdown
    const dropdownStyle="w-30 h-10 p-2 bg-rose-200 text-black hover:bg-rose-500";
    
    return(
        <Menu.Root>
            <Menu.Trigger>
                <div className={linkStyle}>Social</div>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner sideOffset={0}>
                    <Menu.Popup>
                        <Link to={sites.get("github")}><Menu.Item className={dropdownStyle}>Github</Menu.Item></Link>
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>       
    )
}






// homepage link cards
export function LinkCards () {
    
    // flex details, i.e. how wide the cards are at various screen widths
    const tempClass="basis-full grow border-red-500 lg:basis-1/2 2xl:basis-1/4 overflow-hidden";
    
    return(
        <div className="flex flex-wrap">
            <div className={tempClass}><LinkCard image={homeImages.get("digital_card")} myRef={sites.get("digital")} title="Digital Art"/> </div>
            <div className={tempClass}><LinkCard image={homeImages.get("textile_card")} myRef={sites.get("textile")} title="Textile Art"/> </div>
            <div className={tempClass}><LinkCard image={homeImages.get("render_card")}  myRef={sites.get("renders")} title="3D Models"/> </div>
            <div className={tempClass}><LinkCard image={homeImages.get("anim_card")}    myRef={sites.get("animation")} title="Animation"/> </div>
        </div>
    )
}



// cards displayed on the index page
// with links to other parts of the site
function LinkCard({image, title, myRef}) {
    return(
            <Link to={myRef}>
                <div className="p-2 w-full text-black text-center hover:bg-rose-200">
                    <div className="text-lg title_font">{title}</div>
                    <div className="h-max-70 lg:h-70">
                        <img className="w-full h-full object-cover" title={image.title} src={image.src} alt={image.description?image.description:"cardimage"} />
                    </div>
                </div>
            </Link>
    )
}
