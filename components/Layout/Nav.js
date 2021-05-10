import {
    Fragment,
    useContext,
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faShoppingCart,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../forum/Dropdown";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import { ProfileContext } from "../../context/profileContext";
import Styled from "../../styles/Layout/Nav";
import axios from "../../utils/axios";
import { useRouter } from "next/router";

const Nav = forwardRef((props, ref) => {
    const profileContext = useContext(ProfileContext);
    const profile = profileContext.profile;
    const router = useRouter();

    const [data, setData] = useState({});
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchedData();
    }, []);

    const fetchedData = async () => {
        try {
            const fetchData = await axios.get(`/cart/details`);
            setData(fetchData.data);
        } catch (error) {
            console.log(error);
        }
    };

    useImperativeHandle(ref, () => ({
        getSearch: () => {
            return search;
        },
    }));

    return (
        <Fragment>
            <nav>
                <div className="nav-box">
                    <div className="logo">
                        <Link href="/home">
                            <img src="/logo.svg"></img>
                        </Link>
                        <Link href="/home">
                            <h1>ShopKo</h1>
                        </Link>
                    </div>
                    <div className="search">
                        <input
                            placeholder="Search"
                            onChange={(ev) => setSearch(ev.target.value)}
                            onKeyPress={(ev) => {
                                if (ev.key == "Enter") {
                                    router.push({
                                        pathname: "/home",
                                        query: { search: search },
                                    });
                                }
                            }}
                        ></input>

                        <FontAwesomeIcon
                            icon={faSearch}
                            color="#ea5e76"
                            onClick={() => {
                                router.push({
                                    pathname: "/home",
                                    query: { search: search },
                                });
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                    <div className="status">
                        {!profile.isLoggedIn ? (
                            <p>
                                <Link href="/login">Login</Link> /{" "}
                                <Link href="/signup">SignUp</Link>
                            </p>
                        ) : (
                            <>
                                <div>
                                    <Badge
                                        style={{ margin: "0px 25px " }}
                                        badgeContent={data.productInCart}
                                        color="secondary"
                                    >
                                        <Link href="/cart">
                                            <FontAwesomeIcon
                                                icon={faShoppingCart}
                                                style={{
                                                    cursor: "pointer",
                                                    width: "25px",
                                                    height: "25px",
                                                }}
                                            />
                                        </Link>
                                    </Badge>
                                </div>
                                <Link href="/account/profile">
                                    <div
                                        className="profile-pic"
                                        style={{
                                            backgroundImage: `url(${profile.profilepic})`,
                                        }}
                                    ></div>
                                </Link>
                                <Dropdown />
                            </>
                        )}
                        {/* <Link href="/"><FontAwesomeIcon icon={faUserCircle} color="black" size="2x" /></Link> */}
                    </div>
                </div>
            </nav>
            <style jsx>{Styled}</style>
        </Fragment>
    );
});

export default Nav;
