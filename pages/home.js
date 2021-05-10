import { Fragment, useState, useEffect, useRef } from "react";
import Nav from "../components/Layout/Nav";
import Styles from "../styles/home";
import { CategoryItem } from "../components/category/CategoryItem";
import { AdvertiseBox } from "../components/advertise/AdvertiseBox";
import { ProductItems } from "../components/ProductItems/ProductItems";
import axios from "../utils/axios";
import { CircularProgress, createStyles, makeStyles } from "@material-ui/core";
import { SpeedDials } from "../components/forum/SpeedDial";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ProductBox = () => {
    const [data, setData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (router.query.search) {
            try {
                console.log(router.query.search);
                axios
                    .get(`/home/product/search?search=${router.query.search}`)
                    .then((fetchedData) => setData(fetchedData.data.product));
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        } else {
            onFetchData();
        }
    }, [router.query.search]);

    const onFetchData = async () => {
        try {
            const fetchedData = await axios.post("/home/product");
            setData(fetchedData.data.product);
        } catch (err) {
            console.log(err);
        }
    };

    return !data ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
        </div>
    ) : (
        <Fragment>
            <div className="products-box">
                {data.map((item) => (
                    <ProductItems
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        sold={item.sold}
                        image={item.img}
                        id={item.id}
                    />
                ))}
            </div>
            <style jsx>{Styles}</style>
        </Fragment>
    );
};

const Home = () => {
    const [categories, setCategories] = useState([]);

    const nav = useRef(null);

    useEffect(() => {
        categoriesData();
    }, []);

    const categoriesData = async () => {
        try {
            const categoriesAx = await axios.get("/home/categories");
            setCategories(categoriesAx.data.information);
        } catch (error) {
            console.log(error);
        }
    };
    //fahsion fashion
    return (
        <Fragment>
            <Nav ref={nav} />
            <section>
                <div className="home-bigbox">
                    <AdvertiseBox />
                    <div className="category">
                        <div className="title">
                            <h1>Categories</h1>
                        </div>
                        <div className="categories-box">
                            {categories.map((item) => (
                                <CategoryItem
                                    key={item.id}
                                    title={item.name}
                                    id={item.id}
                                />
                            ))}
                        </div>
                    </div>
                    <ProductBox />
                    <SpeedDials />
                </div>
            </section>
            <style jsx>{Styles}</style>
        </Fragment>
    );
};

export default Home;
