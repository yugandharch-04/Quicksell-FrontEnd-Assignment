import React from "react"
import "./header.css"
import DisplayDropdown from "../Dropdowns"

function Header({ grpg, setgrpg, ordg, setordg }) {
    return (
        <header>
            <DisplayDropdown
                grpg={grpg}
                setgrpg={setgrpg}
                ordg={ordg}
                setordg={setordg}
            />
        </header>
    )
}

export default Header
