import { Fragment, useState, useEffect } from "react"
import Nav from '../components/Layout/Nav'
import Styles from '../styles/home'
import { CategoryItem } from "../components/category/CategoryItem";
import { AdvertiseBox } from "../components/advertise/AdvertiseBox";
import { ProductItems } from '../components/ProductItems/ProductItems';
import axios from 'axios';
import { CircularProgress, createStyles, makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const categoryItems = [{
    id: 'fashion1',
    title: 'Fashion',
},
{ id: 'computer2', title: 'Computers' },
{ id: 'furniture3', title: 'Furnitures' },
{ id: 'sports4', title: 'Sports' },
{ id: 'bags5', title: 'Bags' },
{ id: 'stationaries6', title: 'Stationaries' },
{ id: 'pet7', title: 'Pets' },
{ id: 'foods8', title: 'Foods' },
{ id: 'cosmetics9', title: 'Cosmetics' }];


const ProductBox = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        onFetchData()
    }, [])

    const onFetchData = async () => {
        try {
            const fetchedData = await axios.get("https://apmix.mixko.ml/cosmetics.json")
            setData(fetchedData.data);
        } catch (err) {
            console.log(err)
        }

    }

    return !data ? <div style={{ display: "flex", justifyContent: "center" }}><CircularProgress /></div> :
        <Fragment>
            <div className="products-box">
                {data.map((item) => <ProductItems key={item.id} title={item.data.title} price={item.data.price} sold={item.data.sold} image={item.img[0]} id={item.id} />)}
            </div>
            <style jsx>{Styles}</style>
        </Fragment>

};


const Home = () => {
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
                        <div className="categories-box" >
                            {categoryItems.map((item) => <CategoryItem key={item.id} title={item.title} />)}
                        </div>
                    </div>
                    <ProductBox />
                </div>
            </section>
            <style jsx>{Styles}</style>
        </Fragment>
    )
}


export default Home