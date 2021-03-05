import React from 'react'

export default function DataItem({ dataItem }) {
    return (
        <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-x">
            <section className="bg-gray-800 pattern py-20">
                  <div className="max-w-5xl px-6 mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-white">{dataItem.fields.title}</h2>

                    <div className="flex items-center justify-center mt-10">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img className="object-cover h-8" src={dataItem.fields.image} alt="" />
                            </div>

                            <a href="#" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">{dataItem.fields.description}</p>

                                    <span className="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
            </section>
        </li>
    )
}
