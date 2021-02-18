import { Fragment } from "react"
import Nav from '../components/Layout/Nav'
import Styles from '../styles/home'
import Link from 'next/link'

const Home = () => {

    return (
        <Fragment>
            <Nav />
            <section>
                <div className="home-bigbox">
                    <div className="ads-box">
                        <div className="free-shipping-promotion-box">
                            <div className="free-shipping">

                            </div>
                            <div className="free-shipping">

                            </div>
                        </div>
                        <div className="free-shipping-promotion-box">
                            <div className="promotion">

                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <div className="title">
                            <h1>Categories</h1>
                        </div>
                        <div className="categories-box">
                            <div className="categories">
                                <Link href="/categories/fahsion"><img src="/img/categories/fahsion.svg" width={50} ></img></Link>
                                <p><Link href="/categories/fahsion">Fahsion</Link></p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/computer.svg" width={50}></img></a>
                                <p>Computers</p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/furniture.svg" width={50}></img></a>
                                <p><a href="#">Furnitures</a></p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/sports.svg" width={50}></img></a>
                                <p><a href="#">Sports</a></p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/bag.svg" width={50}></img></a>
                                <p><a href="#">Bags</a></p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/stationery.svg" width={50}></img></a>
                                <p><a href="#">Stationeries</a></p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/baby.svg" width={50}></img></a>
                                <p><a href="#">Baby</a></p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/pet.svg" width={50}></img></a>
                                <p><a href="#">Pets</a></p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/food.svg" width={50}></img></a>
                                <p><a href="#">Foods</a></p>
                            </div>
                            <div className="categories">
                                <a href="#"><img src="/img/categories/cosmetics.svg" width={50}></img></a>
                                <p><a href="#">Cosmetics</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="products-box">
                        <div className="products">
                            <div className="product-pictures"></div>
                            <p id="details">Detail weoi tjio thewiht weioht weiohtweiph peiw</p>
                            <h3 id="price">$40000</h3>
                            <div className="sold-box">
                                <h5 id="sold">sold : 500</h5>
                            </div>
                        </div>
                        <div className="products">
                            <div className="product-pictures"></div>
                            <p id="details">Detail weoi tjio thewiht weioht weiohtweiph peiw</p>
                            <h3 id="price">$40000</h3>
                            <div className="sold-box">
                                <h5 id="sold">sold : 500</h5>
                            </div>
                        </div>
                        <div className="products">
                            <div className="product-pictures"></div>
                            <p id="details">Detail weoi tjio thewiht weioht weiohtweiph peiw</p>
                            <h3 id="price">$40000</h3>
                            <div className="sold-box">
                                <h5 id="sold">sold : 500</h5>
                            </div>
                        </div>
                        <div className="products">
                            <div className="product-pictures"></div>
                            <p id="details">Detail weoi tjio thewiht weioht weiohtweiph peiw</p>
                            <h3 id="price">$40000</h3>
                            <div className="sold-box">
                                <h5 id="sold">sold : 500</h5>
                            </div>
                        </div>
                        <div className="products">
                            <div className="product-pictures"></div>
                            <p id="details">Detail weoi tjio thewiht weioht weiohtweiph peiw</p>
                            <h3 id="price">$40000</h3>
                            <div className="sold-box">
                                <h5 id="sold">sold : 500</h5>
                            </div>
                        </div>
                        <div className="products">
                            <div className="product-pictures"></div>
                            <p id="details">Detail weoi tjio thewiht weioht weiohtweiph peiw</p>
                            <h3 id="price">$40000</h3>
                            <div className="sold-box">
                                <h5 id="sold">sold : 500</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{Styles}</style>
        </Fragment>
    )
}

export default Home