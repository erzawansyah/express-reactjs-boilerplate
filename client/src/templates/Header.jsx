import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="py-2 text-white bg-teal-600">
            <div className="container grid grid-cols-6">
                <div className="col-span-4">
                    <h1 className="text-2xl font-bold uppercase">LOGO</h1>
                </div>

                <div className="col-span-2 ">
                    <ul className="flex items-center justify-end space-x-4">
                        <Link to="/">
                            <li className="py-0.5 px-3.5 border cursor-pointer hover:bg-teal-700">
                                Home
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className="py-0.5 px-3.5 border cursor-pointer hover:bg-teal-700">
                                About
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li className="py-0.5 px-3.5 border cursor-pointer hover:bg-teal-700">
                                Contact
                        </li>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}
