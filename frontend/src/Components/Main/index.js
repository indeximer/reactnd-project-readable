import React from 'react'
import Menu from './Menu'

const Main = (props) => {
    return(
        <main>
            <Menu activeMenu={props.activeMenu} />
            {props.children}
        </main>    
    )
}

export default Main