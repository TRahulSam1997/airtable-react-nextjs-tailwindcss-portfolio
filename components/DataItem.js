import React from 'react'

export default function DataItem({ dataItem }) {
    return (
            <div>
                <div className="m-auto px-4 py-8 max-w-xl">
                    <div className="bg-white shadow-2xl" >
                        <div>
                            <img src={dataItem.fields.image} />
                        </div>
                        <div className="px-4 py-2 mt-2 bg-white">
                            <h2 className="font-bold text-2xl text-gray-800">{dataItem.fields.title}</h2>
                                <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                                {dataItem.fields.description}
                                </p>
                            <div className="user flex items-center -ml-3 mt-8 mb-4">
                                <div className="user-logo">
                                    <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow" src="" alt="avatar" />
                                </div>
                                    <a href="https://twitter.com/trsam97" target="_blank" className="text-gray-500">@tsam97</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
