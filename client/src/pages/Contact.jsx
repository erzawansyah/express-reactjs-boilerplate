import React from 'react'

export const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }

    return (
        <div className="h-full">
            <div className="grid h-full grid-cols-6 gap-6 md:grid-cols-12 place-content-center">

                {/* Area full */}
                <h1 className="col-span-6 -mb-6 text-4xl font-bold text-center md:col-span-12 dark:text-blueGray-100">
                    Isi Formulir di Bawah Ini
                </h1>
                <div className="col-span-6 text-center md:col-span-12 dark:text-blueGray-300">
                    Bagian ini rencanyanya diisi formulir yang dibuat pakai <pre className="inline align-middle">react-hook-form</pre>. Sekalian sebagai contoh penggunaan express js.
                </div>

                <form action="#" method="post" className="grid grid-cols-8 col-span-6 col-start-4 gap-6 p-8 bg-white rounded shadow-md" onSubmit={handleSubmit}>
                    <div className='col-span-8'>
                        <h3 className="mb-2 text-2xl font-semibold text-center uppercase">Fill in this form</h3>
                        <hr />
                    </div>
                    <label
                        htmlFor="fullname"
                        className="hidden block ml-2 italic text-gray-700 text-2xs"
                    >
                        Full Name
                    </label>
                    <input
                        className="col-span-4 px-2 py-1 border rounded-md focus:ring-2 focus:ring-teal-600 bg-blueGray-100 focus:bg-transparent border-blueGray-300"
                        type="text" name="fullname" id="fullname" placeholder="Full Name" />
                    <label
                        htmlFor="fullname"
                        className="hidden block ml-2 italic text-gray-700 text-2xs"
                    >
                        Full Name
                    </label>
                    <input
                        className="col-span-4 px-2 py-1 border rounded-md focus:ring-2 focus:ring-teal-600 bg-blueGray-100 focus:bg-transparent border-blueGray-300"
                        type="text" name="fullname" id="fullname" placeholder="Full Name" />
                    <label
                        htmlFor="fullname"
                        className="hidden block ml-2 italic text-gray-700 text-2xs"
                    >
                        Full Name
                    </label>
                    <input
                        className="col-span-4 px-2 py-1 border rounded-md focus:ring-2 focus:ring-teal-600 bg-blueGray-100 focus:bg-transparent border-blueGray-300"
                        type="text" name="fullname" id="fullname" placeholder="Full Name" />
                    <label
                        htmlFor="fullname"
                        className="hidden block ml-2 italic text-gray-700 text-2xs"
                    >
                        Full Name
                    </label>
                    <input
                        className="col-span-4 px-2 py-1 border rounded-md focus:ring-2 focus:ring-teal-600 bg-blueGray-100 focus:bg-transparent border-blueGray-300"
                        type="text" name="fullname" id="fullname" placeholder="Full Name" />
                    <label
                        htmlFor="fullname"
                        className="hidden block ml-2 italic text-gray-700 text-2xs"
                    >
                        Full Name
                    </label>
                    <input
                        className="col-span-4 px-2 py-1 border rounded-md focus:ring-2 focus:ring-teal-600 bg-blueGray-100 focus:bg-transparent border-blueGray-300"
                        type="text" name="fullname" id="fullname" placeholder="Full Name" />                   <label
                            htmlFor="fullname"
                            className="hidden block ml-2 italic text-gray-700 text-2xs"
                        >
                        Full Name
                    </label>
                    <input
                        className="col-span-4 px-2 py-1 border rounded-md focus:ring-2 focus:ring-teal-600 bg-blueGray-100 focus:bg-transparent border-blueGray-300"
                        type="text" name="fullname" id="fullname" placeholder="Full Name" />                   <label
                            htmlFor="fullname"
                            className="hidden block ml-2 italic text-gray-700 text-2xs"
                        >
                        Full Name
                    </label>
                    <input
                        className="col-span-4 px-2 py-1 border rounded-md focus:ring-2 focus:ring-teal-600 bg-blueGray-100 focus:bg-transparent border-blueGray-300"
                        type="text" name="fullname" id="fullname" placeholder="Full Name" />                   <label
                            htmlFor="fullname"
                            className="hidden block ml-2 italic text-gray-700 text-2xs"
                        >
                        Full Name
                    </label>
                    <input
                        className="col-span-4 px-2 py-1 border rounded-md focus:ring-2 focus:ring-teal-600 bg-blueGray-100 focus:bg-transparent border-blueGray-300"
                        type="text" name="fullname" id="fullname" placeholder="Full Name" />

                        <input type="submit" value="REGISTER" className="col-span-8 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 active:bg-teal-700 hover:shadow-md active:shadow-sm"/>
                </form>

            </div>
        </div>
    )
}
