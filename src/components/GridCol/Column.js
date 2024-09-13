import React, { useMemo } from "react"
import Card from "../Card"
import "./column.css"
import dots from "./3dot.svg"
import add from "./add.svg"
import { getPriorityIcon, getStatusIcon } from "../../utils/helper"
import UserIcon from "../ProfilePic"

function Column({ tickets, grpg, groupBy, userIdToData }) {
    const title = useMemo(() => {
        if (grpg === "status") return groupBy
        if (grpg === "priority") return groupBy
        if (grpg === "user") return userIdToData[groupBy].name
    }, [grpg, groupBy])

    const icon = useMemo(() => {
        if (grpg === "status") return getStatusIcon(groupBy)
        if (grpg === "priority") return getPriorityIcon(groupBy)
        if (grpg === "user")
            return (
                <UserIcon
                    name={userIdToData[groupBy].name}
                    available={userIdToData[groupBy].available}
                />
            )
    }, [grpg, groupBy])

    return (
        <div className="column">
            <div className="column-header">
                <div className="column-header-left-container">
                    {icon}
                    <div className="column-title">
                        {title}
                        <span className="count">{tickets.length}</span>
                    </div>
                </div>
                <div className="column-header-right-container">
                    <img src={add} alt="" srcset="" />
                    <img src={dots} alt="" srcset="" />
                </div>
            </div>
            <div className="cards-container">
                {tickets.map(ticket => (
                    <Card
                        key={ticket.id}
                        ticket={ticket}
                        userInfo={userIdToData[ticket.userId]}
                        hideStatusIcon={grpg === "status"}
                        hideProfileIcon={grpg === "user"}
                    />
                ))}
            </div>
        </div>
    )
}

export default Column
