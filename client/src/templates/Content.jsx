import React from 'react'

const Content = (props) => {
    return (
        <main className="flex-grow overflow-y-auto transition-all bg-blueGray-100 dark:bg-blueGray-800">
            <div className="container min-h-full py-6">
                {props.children}
            </div>
        </main>
    )
}

export default Content
