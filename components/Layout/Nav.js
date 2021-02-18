import { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons"
// import { Dropdown } from "semantic-ui-react"
// import 'semantic-ui-css/semantic.min.css'
import Link from 'next/link'



const Nav = () => {
    return (
        <Fragment>
            <nav>
                <div className="nav-box">
                    <div className="logo">
                        <img src="/logo.svg"></img>
                        <h1>ShopKo</h1>
                    </div>
                    <div className="search">
                        <input placeholder="Search"></input>
                        <a href="#"><FontAwesomeIcon icon={faSearch} color="rgb(218,90,71)" /></a>
                    </div>
                    <div className="status">
                        <p><Link href="/">Login</Link> / <Link href="#">SignUp</Link></p>
                        <Link href="/"><FontAwesomeIcon icon={faUserCircle} color="black" size="2x" /></Link>
                        {/* <Dropdown >
                            <Dropdown.Menu>
                                <Dropdown.Item icon='folder' text='Account Setting' />
                                <Dropdown.Item icon='trash' text='My Order' />
                                <Dropdown.Divider />
                                <Dropdown.Item text='Sign Out' />
                            </Dropdown.Menu>
                        </Dropdown> */}
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
                    width: 45px
                }

                .logo > h1 {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    margin-left: 20px;
                    margin-top: 0;

                }

                .status {
                    display: flex;
                    align-items: center;
                }

                .status > p {
                    display: none;
                }

                . status > a {
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
                    border : 3px rgb(236,179,77) solid;
                }

            `} </style>
        </Fragment >
    )
}

export default Nav
