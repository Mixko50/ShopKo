import { Fragment, useState, useEffect } from "react";
import Nav from "../components/Layout/Nav";
import Styles from "../styles/home";
import { CategoryItem } from "../components/category/CategoryItem";
import { AdvertiseBox } from "../components/advertise/AdvertiseBox";
import { ProductItems } from "../components/ProductItems/ProductItems";
import axios from "../utils/axios";
import { CircularProgress, createStyles, makeStyles } from "@material-ui/core";
import { SpeedDials } from "../components/forum/SpeedDial";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const categoryItems = [
    {
        id: "fashion1",
        title: "Fashion",
    },
    { id: "computer2", title: "Computers" },
    { id: "furniture3", title: "Furnitures" },
    { id: "sports4", title: "Sports" },
    { id: "bags5", title: "Bags" },
    { id: "stationaries6", title: "Stationaries" },
    { id: "pet7", title: "Pets" },
    { id: "foods8", title: "Foods" },
    { id: "cosmetics9", title: "Cosmetics" },
    { id: "others10", title: "Others" },
];

const ProductBox = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        onFetchData();
    }, []);

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

    useEffect(() => {
        categoriesData();
    }, []);

    const categoriesData = async () => {
        try {
            const categoriesAx = await axios.get("/home/categories");
            setCategories(categoriesAx.data.information);
            console.log(categoriesAx.data);
        } catch (error) {
            console.log(error);
        }
    };

    //fahsion fashion
    return (
        <Fragment>
            <Nav />
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
