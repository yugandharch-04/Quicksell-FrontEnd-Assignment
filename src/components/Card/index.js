import React from "react"
import "./card.css"
import UserIcon from "../ProfilePic"
import dots from "./3dot.svg"
import { getStatusIcon } from "../../utils/helper"

function Card({ ticket, userInfo, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className="card">
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {hideProfileIcon ? null : (
          <UserIcon name={userInfo.name} available={userInfo.available} />
        )}
      </div>
      <div className="middle-container">
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="bottom-container">
        <div className="more-icon-container">
          <img src={dots} alt="" srcset="" />
        </div>
        {ticket.tag.map(t => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
