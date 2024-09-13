import React, { useCallback, useEffect, useRef, useState } from "react"
import "./displayDropdown.css"
import down from "./down.svg"
import Disp from "./Display.svg"

function DisplayDropdown({ grpg, setgrpg, ordg, setordg }) {
  const [displayed, setdisplayed] = useState(false)
  const componentRef = useRef(null)


  useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  })
  const openDropdown = useCallback(() => {
    setdisplayed(true)
  }, [])

  const handleClickOutside = useCallback(event => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setdisplayed(false)
    }
  }, [])

  const ongrpgChange = useCallback(e => setgrpg(e.target.value), [])
  const onordgChange = useCallback(e => setordg(e.target.value), [])

  return (
    <div className="display-dropdown" ref={componentRef}>
      <div className="dropdown-label-container" onClick={openDropdown}>
        <img src={Disp} alt="" srcset="" />
        <div className="dropdown-label">Display</div>
        <img src={down} alt="" srcset="" />
      </div>
      <div className={`dropdown-content-container ${displayed && "displayed"}`}>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Grouping</div>
          <select
            name="grpg"
            id="grpg"
            value={grpg}
            onChange={ongrpgChange}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Ordering</div>
          <select
            name="ordg"
            id="ordg"
            value={ordg}
            onChange={onordgChange}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default DisplayDropdown
