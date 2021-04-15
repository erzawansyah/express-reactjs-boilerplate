import React from 'react'
import Content from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = props => {
    return (
        <div className="flex flex-col h-screen bg-blueGray-100">
            <Header />
            <Content>
                {props.children}
            </Content>
            <Footer />
        </div>
    )
}
