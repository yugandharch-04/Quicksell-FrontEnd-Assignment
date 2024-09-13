import React, { useMemo } from "react"
import "./grid.css"
import Column from "../GridCol/Column"

function Grid({ gd, grpg, userIdToData }) {
    const keys = useMemo(() => Object.keys(gd), [gd])

    return (
        <div className="grid">
            {keys.map(k => (
                <Column
                    key={k}
                    tickets={gd[k]}
                    grpg={grpg}
                    groupBy={k}
                    userIdToData={userIdToData}
                />
            ))}
        </div>
    )
}

export default Grid
