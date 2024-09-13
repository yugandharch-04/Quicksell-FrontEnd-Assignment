import hp from "./img/high-prior.svg"
import mp from "./img/med-prior.svg"
import lp from "./img/low-prior.svg"
import np from "./img/No-priority.svg"
import upc from "./img/upc.svg"
import upg from "./img/upg.svg"
import Backlog from "./img/Backlog.svg"
import Cancelled from "./img/Cancelled.svg"
import Done from "./img/Done.svg"
import Todo from "./img/To-do.svg"
import inp from "./img/in-progress.svg"

export const getPriorityIcon = priority => {
    switch (priority) {
        case "Urgent":
            return <img src={upc} alt="" srcset="" />
        case "High":
            return <img src={hp} alt="" srcset="" />
        case "Medium":
            return <img src={mp} alt="" srcset="" />
        case "Low":
            return <img src={lp} alt="" srcset="" />
        case "No priority":
            return <img src={np} alt="" srcset="" />
        default:
            return <img src={upg} alt="" srcset="" />
    }
}

export const getStatusIcon = priority => {
    switch (priority) {
        case "Backlog":
            return <img src={Backlog} alt="" srcset="" />
        case "Todo":
            return <img src={Todo} alt="" srcset="" />
        case "In progress":
            return <img src={inp} alt="" srcset="" />
        case "Done":
            return <img src={Done} alt="" srcset="" />
        case "Canceled":
            return <img src={Cancelled} alt="" srcset="" />
        default:
            return <img src={Cancelled} alt="" srcset="" />
    }
}
