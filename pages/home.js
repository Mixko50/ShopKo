import { Fragment } from "react"
import Nav from '../components/Layout/Nav'
import Styles from '../styles/home'
import { CategoryItem } from "../components/category/CategoryItem";
import { AdvertiseBox } from "../components/advertise/AdvertiseBox";
import { ProductItems } from '../components/ProductItems/ProductItems';


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

const productItems = [{ id: 1, title: "Something that you must but. I don't know why but you must buy it", price: 599, sold: 100 },
{ id: 2, title: "Something that you must but. I don't know why but you must buy it", price: 234, sold: 34 },
{ id: 3, title: "Something that you must but. I don't know why but you must buy it", price: 324, sold: 65 },
{ id: 4, title: "Something that you must but. I don't know why but you must buy it", price: 222, sold: 100000 },
{ id: 5, title: "Something that you must but. I don't know why but you must buy it", price: 12, sold: 14 },
{ id: 6, title: "Something that you must but. I don't know why but you must buy it", price: 32, sold: 423 },]

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
                        <div className="categories-box">
                            {categoryItems.map((item) => <CategoryItem key={item.id} title={item.title} />)}
                        </div>
                    </div>
                    <div className="products-box">
                        {productItems.map((item) => <ProductItems key={item.title} title={item.title} price={item.price} sold={item.sold} />)}
                    </div>
                </div>
            </section>
            <style jsx>{Styles}</style>
        </Fragment>
    )
}

export default Home