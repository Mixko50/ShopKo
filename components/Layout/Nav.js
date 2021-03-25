import { Fragment, useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import Dropdown from '../forum/Dropdown'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { ProfileContext } from '../../context/profileContext'

const Nav = () => {

    const profileContext = useContext(ProfileContext)
    const profile = profileContext.profile;

    return (
        <Fragment>
            <nav>
                <div className="nav-box">
                    <div className="logo">
                        <Link href="/home"><img src="/logo.svg"></img></Link>
                        <Link href="/home"><h1>ShopKo</h1></Link>
                    </div>
                    <div className="search">
                        <input placeholder="Search"></input>
                        <a href="#"><FontAwesomeIcon icon={faSearch} color="#ea5e76" /></a>
                    </div>
                    <div className="status">
                        <div >
                            <Badge style={{ margin: '0px 25px ' }} badgeContent={35} color="secondary">
                                <Link href="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ cursor: "pointer", width: "25px", height: "25px" }} /></Link>
                            </Badge>
                        </div>
                        <p><Link href="/">Login</Link> / <Link href="#">SignUp</Link></p>
                        <Link href="/account/profile"><div className="profile-pic" style={{ backgroundImage: `url(${profile.profilepic})` }} ></div></Link>
                        {/* <Link href="/"><FontAwesomeIcon icon={faUserCircle} color="black" size="2x" /></Link> */}
                        <Dropdown />
                    </div>
                </div>
            </nav>
            <style jsx>{`
                nav{
                    z-index: 100;
                    position: fixed;
                    width: 100%;
                    height: 60px;
                    border-radius: 0px 0px 15px 15px;
                    background-color: #f6f5f5;
                    box-shadow: 0px 5px 10px #d3e0ea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .nav-box {
                    width:100%;
                    max-width: 1280px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .logo {
                    display: flex;
                    align-items: center;
                }

                .logo > img {
                    width: 45px;
                    cursor: pointer;
                }

                .logo > h1 {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    margin-left: 20px;
                    margin-top: 0;
                    cursor: pointer;

                }

                .status {
                    display: flex;
                    align-items: center;
                }

                .status > p {
                    display: none;
                }

                .status > a {
                    text-decoration: none;
                }

                .svg-inline--fa   {
                    color: black;
                    font-size: 30px
                }

                .search > input {
                    width: 30vw;
                    padding: 7px;
                    border-radius: 30px;
                    outline: none;
                    margin-right: 20px;
                    border : 3px #ea5e76 solid;
                }
                .profile-pic {
                    width: 31px;
                    height: 31px;
                    border-radius: 30px;
                    background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                cursor: pointer;
                }

            `} </style>
        </Fragment >
    )
}

export default Nav
