import * as React from "react"
import { Menu } from "@base-ui-components/react/menu"

function SizeIndicator(){
    return(
        <div className="xs:bg-yellow-100 sm:bg-yellow-500 md:bg-amber-500 lg:bg-orange-500 xl:bg-red-500 2xl:bg-rose-500 3xl:bg-purple-500">
            Size Indicator
            {/* <div className="hidden sm:visible md:hidden">large</div>
            <div className="hidden sm:visible md:hidden">xl</div>
            <div className="hidden sm:visible md:hidden">2xl</div>
            <div className="hidden sm:visible md:hidden">3xl?</div> */}


        </div>
    )
}



function LinkDropDown() {
        return(
            <div>
                <Menu.Root>
                    <Menu.Trigger>
                        Trigger
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={0}>
                            <Menu.Popup>
                                <Menu.Item>MenuItem1</Menu.Item>
                                <Menu.Item>MenuItem2</Menu.Item>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

            </div>
        )
        
}


export function DevHeader(){
    return(
        <div>
            <div>
            Dev Header
            </div>
            <div>
            <LinkDropDown />
            </div>
        </div>
    )
}

export default function DevFooter(){
    return(
        <div>
            Dev Footer
            <SizeIndicator/>
        </div>
    )
}