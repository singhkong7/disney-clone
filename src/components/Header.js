import React from 'react'
import styled from "styled-components";
function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>Search</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>Originals</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>Movies</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>Series</span>
                </a>

            </NavMenu>
            <UserImg src=" " />
        </Nav>
    )
}

export default Header;
const Nav=styled.div`
    height:70px;
    background:black;
    display:flex;
`
const Logo=styled.img`
    width:80px;

`
const NavMenu=styled.div`
    display:flex;
    justify-content:space-around;

    a
    {
        display:flex;
        flex-direction:row;
        align-items:center;
        padding:0 12px;
        img
        {
            height:20px;
        }
        span
        {
            font-size:13px;
            letter-spacing:1.3px;
        }
    }
`
const UserImg=styled.img`
    
`


