import React from 'react'

export default function DataItem({ dataItem }) {
    return (
        <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-x">
            <p className="flex-1 text-gray-800">{dataItem.fields.description}</p>
        </li>
    )
}
