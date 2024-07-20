import './style.css'

import { DropDownMore } from "../dropdown/more"
import { DropDownLess } from "../dropdown/less"
import { useState } from "react"
import { Inputs } from './inputs'

export const PersonalDetailsCard = () => {
    const [viewMore, setViewMore] = useState(true)

    const updateViewMore = (bool) => {
        setViewMore(bool);
    }

    return (
        <div className="container_card">
            <div className="wrapper_card">
                <h3 className="title_card">Personal Details</h3>
                {!viewMore ? <DropDownMore updateViewMore={updateViewMore} /> : <DropDownLess updateViewMore={updateViewMore} />}
            </div>

            {viewMore && <Inputs />}
        </div>
    )
}