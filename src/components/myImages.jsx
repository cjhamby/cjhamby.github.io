/*
    images are too complicated in react

    basically, 
    src/ is a development folder
    images in src/images get bundled with the other stuff by webpack
    
    the generated site public/ can't reference src/images

    you could put them in public/images
    but create-react-app recommends doing it this silly way
    the imported "nov26" is the link to the pic
    */
import portrait from "../assets/portrait.jpg"

// JPG format
//import digital from "../images/digital/digital.jpg"
import digital1 from "../assets/digital/digital1.jpg"
import digital2 from "../assets/digital/digital2.jpg"
import digital3 from "../assets/digital/digital3.jpg"
import digital4 from "../assets/digital/digital4.jpg"
import digital5 from "../assets/digital/digital5.jpg"
import digital6 from "../assets/digital/digital6.jpg"
import digital7 from "../assets/digital/digital7.jpg"
import digital8 from "../assets/digital/digital8.jpg"
import digital9 from "../assets/digital/digital9.jpg"
import digital10 from "../assets/digital/digital10.jpg"
import digital11 from "../assets/digital/digital11.jpg"
import digital12 from "../assets/digital/digital12.jpg"
import digital13 from "../assets/digital/digital13.jpg"
import digital14 from "../assets/digital/digital14.jpg"
import digital14_2 from "../assets/digital/digital14_2.png"
import digital15 from "../assets/digital/digital15.jpg"
import digital16 from "../assets/digital/digital16.jpg"
import digital17 from "../assets/digital/digital17.jpg"
import digital18 from "../assets/digital/digital18.jpg"
// PNG format
// //import digital from "./images/digital/digital.png"
import digital19 from "../assets/digital/digital19.png"
import digital20 from "../assets/digital/digital20.png"
import digital21 from "../assets/digital/digital21.png"
import digital22 from "../assets/digital/digital22.png"
import digital23 from "../assets/digital/digital23.png"
import digital24 from "../assets/digital/digital24.png"
import digital25 from "../assets/digital/digital25.png"
import digital26 from "../assets/digital/digital26.png"

//import from "../images/renders/render.png"
import render1 from "../assets/renders/render1.png"
import render2 from "../assets/renders/render2.png"
import render3 from "../assets/renders/render3.png"
import render4 from "../assets/renders/render4.png"
import render5 from "../assets/renders/render5.png"
import render6 from "../assets/renders/render6.png"
import render7 from "../assets/renders/render7.png"
import render8 from "../assets/renders/render8.png"
import render9 from "../assets/renders/render9.png"

//import anim from "./animation/anim.mp4"
import anim3d_1 from "../assets/animation3d/anim3d_1.mp4"
import anim3d_2 from "../assets/animation3d/anim3d_2.mp4"
import anim3d_3 from "../assets/animation3d/anim3d_3.mp4"
import anim3d_4 from "../assets/animation3d/anim3d_4.mp4"
import anim3d_5 from "../assets/animation3d/anim3d_5.mp4"
import anim3d_6 from "../assets/animation3d/anim3d_6.mp4"

import anim1 from "../assets/animation2d/anim1.gif"
import anim1b from "../assets/animation2d/anim1b.gif"
import anim2 from "../assets/animation2d/anim2.gif"
import anim3 from "../assets/animation2d/anim3.gif"
import anim4 from "../assets/animation2d/anim4.gif"
import anim5 from "../assets/animation2d/anim5.gif"
import anim6 from "../assets/animation2d/anim6.gif"
import anim7 from "../assets/animation2d/anim7.gif"
import anim8 from "../assets/animation2d/anim8.gif"
import anim9 from "../assets/animation2d/anim9.gif"
import anim10 from "../assets/animation2d/anim10.gif"



import crochet1 from "../assets/textile/crochet1.jpg"
import crochet2 from "../assets/textile/crochet2.jpg"
import crochet3 from "../assets/textile/crochet3.jpg"
import weave1 from "../assets/textile/weave1.jpg"
import weave2 from "../assets/textile/weave2.jpg"
import weave3 from "../assets/textile/weave3.jpg"
import weave4 from "../assets/textile/weave4.jpg"
import macrame1 from "../assets/textile/macrame1.jpg"


// images used for links on the homepage
// todo: give them meaningful names
export const homeImages = new Map();
homeImages.set("digital_card", {src: digital23,  title:"digital_card", description:"photo"});
homeImages.set("render_card",  {src: render2,    title:"render_card", description:"photo"});
homeImages.set("anim_card",    {src: anim1b,      title:"anim_card", description:"photo"});
homeImages.set("textile_card", {src: weave1,      title:"textile_card", description:"photo"});
homeImages.set("about_card",   {src: digital14_2,title:"about_card", description:"photo"});

const digitalArt = [
    // {src: nov26, title:"nov26.jpg", description:"photo"},
    // {src: nov262, title:"nov262.jpg", description:"photo"}
    //{src:digital6, title:"digital6", description:"digital art"},
    //{src:digital7, title:"digital7", description:"digital art"},
    //{src:digital8, title:"digital8", description:"digital art"},
    {src:digital1, id:"digital1", title:"digital1", description:"digital art"},
    {src:digital2, id:"digital2", title:"digital2", description:"digital art"},
    {src:digital3, id:"digital3", title:"digital3", description:"digital art"},
    {src:digital5, id:"digital5", title:"digital5", description:"digital art"},
    {src:digital9, id:"digital9", title:"digital9", description:"digital art"},
    {src:digital10, id:"digital10", title:"digital10", description:"digital art"},
    {src:digital11, id:"digital11", title:"digital11", description:"digital art"},
    {src:digital12, id:"digital12", title:"digital12", description:"digital art"},
    {src:digital4, title:"digital4", description:"digital art"},
    //{src:digital13, id:"digital13", title:"digital13", description:"digital art"},
    //{src:digital17, id:"digital17", title:"digital17", description:"digital art"},
    {src:digital14, id:"digital14", title:"digital14", description:"digital art"},
    {src:digital15, id:"digital15", title:"digital15", description:"digital art"},
    {src:digital16, id:"digital16", title:"digital16", description:"digital art"},
    {src:digital18, id:"digital18", title:"digital18", description:"digital art"},
    {src:digital19, id:"digital19", title:"digital19", description:"digital art"},
    {src:digital20, id:"digital20", title:"digital20", description:"digital art"},
    {src:digital21, id:"digital21", title:"digital21", description:"digital art"},
    {src:digital22, id:"digital22", title:"digital22", description:"digital art"},
    {src:digital23, id:"digital23", title:"digital23", description:"digital art"},
    {src:digital24, id:"digital24", title:"digital24", description:"digital art"},
    {src:digital25, id:"digital25", title:"digital25", description:"digital art"},
    {src:digital26, id:"digital26", title:"digital26", description:"digital art"}
];


export const renders = [
    {src:render1, id:"render1", title:"render1", description:"3D Model"},
    {src:render2, id:"render2", title:"render2", description:"3D Model"},
    {src:render3, id:"render3", title:"render3", description:"3D Model"},
    {src:render4, id:"render4", title:"render4", description:"3D Model"},
    {src:render5, id:"render5", title:"render5", description:"3D Model"},
    {src:render6, id:"render6", title:"render6", description:"3D Model"},
    {src:render7, id:"render7", title:"render7", description:"3D Model"},
    {src:render8, id:"render8", title:"render8", description:"3D Model"},
    {src:render9, id:"render9", title:"render9", description:"3D Model"}

]

export const animations2d = [
    {src:anim8, id:"anim8", title:"blooming flower", description:"animation"},
    {src:anim2, id:"anim2", title:"kettle", description:"animation"},
    {src:anim10, id:"anim10", title:"lavalamp", description:"animation"},
    {src:anim6, id:"anim6", title:"walking square", description:"animation"},
    {src:anim4, id:"anim4", title:"rolling square", description:"animation"},
    {src:anim7, id:"anim7", title:"spinning cube", description:"animation"},
    {src:anim5, id:"anim5", title:"jumping square", description:"animation"},
    {src:anim9, id:"anim9", title:"callie", description:"animation"},
    {src:anim1, id:"anim1", title:"sharkfountain", description:"animation"},
    {src:anim3, id:"anim3", title:"fire", description:"animation"},
]

export const animations3d = [
    {src:anim3d_1, id:"anim1", title:"anim1", description:"animation"},
    {src:anim3d_2, id:"anim2", title:"anim2", description:"animation"},
    {src:anim3d_3, id:"anim3", title:"anim3", description:"animation"},
    {src:anim3d_4, id:"anim4", title:"anim4", description:"animation"},
    {src:anim3d_5, id:"anim5", title:"anim5", description:"animation"},
    {src:anim3d_6, id:"anim6", title:"anim6", description:"animation"}
]

export const textileArt = [
    {src:crochet1, id:"crochet1", title:"crochet1", description:"textile art"},
    {src:crochet2, id:"crochet2", title:"crochet2", description:"textile art"},
    {src:crochet3, id:"crochet3", title:"crochet3", description:"textile art"},
    {src:weave1, id:"weave1", title:"weave1", description:"textile art"},
    {src:weave2, id:"weave2", title:"weave2", description:"textile art"},
    {src:weave3, id:"weave3", title:"weave3", description:"textile art"},
    {src:weave4, id:"weave4", title:"weave4", description:"textile art"},
    {src:macrame1, id:"macrame1", title:"macrame1", description:"textile art"}
]

export default digitalArt