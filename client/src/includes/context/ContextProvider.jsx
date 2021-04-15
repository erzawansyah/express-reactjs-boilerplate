import React from 'react'
import { UIProvider } from './UI'

const ContextProvider = (props) => {

    return (
        <UIProvider>
            {props.children}
        </UIProvider>
    )
}

export default ContextProvider
