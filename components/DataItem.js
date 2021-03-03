import React from 'react'

export default function DataItem({ dataItem }) {
    return (
        <div>
            <p>{dataItem.fields.description}</p>
        </div>
    )
}
