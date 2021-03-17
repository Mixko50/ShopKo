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
                            <div className="free-shipping-1">

                            </div>
                            <div className="free-shipping-2">

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
                                <Link href="/categories/fahsion"><a><img src="/img/categories/fahsion.svg" width={50} ></img></a></Link>
                                <p><Link href="/categories/fahsion">Fahsion</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/computers"><a><img src="/img/categories/computer.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/computers">Computers</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/furnitures"><a><img src="/img/categories/furniture.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/furnitures">Furnitures</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/sports"><a><img src="/img/categories/sports.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/sports">Sports</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/bags"><a><img src="/img/categories/bag.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/bags">Bags</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/stationaries"><a><img src="/img/categories/stationery.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/stationaries">Stationeries</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/baby"><a><img src="/img/categories/baby.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/baby">Baby</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/pets"><a><img src="/img/categories/pet.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/pets">Pets</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/foods"><a><img src="/img/categories/food.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/foods">Foods</Link></p>
                            </div>
                            <div className="categories">
                                <Link href="/categories/cosmetics"><a><img src="/img/categories/cosmetics.svg" width={50}></img></a></Link>
                                <p><Link href="/categories/cosmetics">Cosmetics</Link></p>
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