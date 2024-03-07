import React from 'react'

export const NavBar = () => {
    return (
        <ul style={{
            position:'absolute',
            bottom:0,
            display:'flex',
            justifyItems:'space-evenly '
        }}>
            <li><a href='/'>Ex1</a></li>
            <li><a href='/Ex2'>Ex2</a></li>
            <li><a href='/Ex3'>Ex3</a></li>
            <li><a href='/Ex4'>Ex4</a></li>
            <li><a href='/Ex5'>Ex5</a></li>
        </ul>
    )
}
