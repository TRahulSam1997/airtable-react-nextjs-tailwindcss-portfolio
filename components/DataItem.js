import React from 'react'

export default function DataItem({ dataItem }) {
    return (
            <div>
                <div className="m-auto mt-10 py-3">
                    <div className="bg-white shadow-2xl" >
                        <div>
                            <img src={dataItem.fields.image} />
                        </div>
                        <div className="px-4 py-2 mt-2 bg-white">
                            <h2 className="font-bold text-2xl text-gray-800">{dataItem.fields.title}</h2>
                                <p className="sm:text-sm text-xs text-gray-700 px-1 mr-1 my-3">{dataItem.fields.description}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
