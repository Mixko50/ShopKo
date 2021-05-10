import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faAppleAlt,
    faCartPlus,
    faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProfileContext } from "../../context/profileContext";

export const ProductBuyButton = ({ addToCart, id, quantity }) => {
    const router = useRouter();
    const profileContext = useContext(ProfileContext);
    const profile = profileContext.profile;

    return (
        <div>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#f8f4e1",
                    width: "200px",
                    height: "60px",
                    margin: "20px",
                    borderRadius: "15px",
                }}
                onClick={() => {
                    if (profile.isLoggedIn) {
                        addToCart();
                    } else {
                        router.push("/login");
                    }
                }}
            >
                <FontAwesomeIcon
                    icon={faCartPlus}
                    size="2x"
                    style={{ marginRight: "10px" }}
                />
                <p>Add to cart</p>
            </Button>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#f6dfeb",
                    width: "200px",
                    height: "60px",
                    margin: "20px",
                    borderRadius: "15px",
                }}
                onClick={async () => {
                    if (profile.isLoggedIn) {
                        router.push({
                            pathname: "/checkoutone",
                            query: { id: id, quantity: await quantity() },
                        });
                    } else {
                        router.push("/login");
                    }
                }}
            >
                <FontAwesomeIcon
                    icon={faShoppingBag}
                    size="2x"
                    style={{ marginRight: "10px" }}
                />
                <p>Buy now</p>
            </Button>
        </div>
    );
};
