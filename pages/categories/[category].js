import Styles from "../../styles/home";
import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import Nav from "../../components/Layout/Nav";
import axios from "../../utils/axios";
import { ProductItems } from "../../components/ProductItems/ProductItems";
import { SpeedDials } from "../../components/forum/SpeedDial";
import Checkbox from "@material-ui/core/Checkbox";

const Index = () => {
    const router = useRouter();
    const { category } = router.query;

    const [data, setData] = useState([]);

    useEffect(() => {
        onFetchData();
    }, [category]);

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const onFetchData = async () => {
        try {
            console.log("test");
            const fetchedData = await axios.get(
                `/categories/categoryproduct?category=${
                    category ? category : "bags"
                }`
            );
            setData(fetchedData.data.information);
            // console.log(NameMapping[category].toLowerCase());
            // const fetchedData = await axios.get(
            //     `https://apmix.mixko.ml/${NameMapping[
            //         category
            //     ].toLowerCase()}.json`
            // );
            // setData(fetchedData.data);
        } catch (err) {
            console.log("Error");
            console.log(err);
        }
    };

    return (
        <Fragment>
            <Nav />
            <section>
                <div className="page-box">
                    <div className="category-title">
                        <h1>
                            {category == null
                                ? category
                                : category.substring(0, 1).toUpperCase() +
                                  category.substring(1)}
                        </h1>
                    </div>
                    <div className="filter-box">
                        <div className="filter-title">
                            <h1>Sort by</h1>
                        </div>
                        <div className="filter-sort-box">
                            <div className="sortby-price">
                                <p>Price : </p>
                                <input placeholder="min" type="number" />
                                <p>-</p>
                                <input placeholder="max" type="number" />
                                <p>|</p>
                            </div>
                            <div className="sortby-recommend">
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{
                                        "aria-label": "primary checkbox",
                                    }}
                                />
                                <p>Recommend</p>
                            </div>
                        </div>
                    </div>
                    <div className="products-box">
                        {data.map((item) => (
                            <ProductItems
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                sold={item.sold}
                                image={item.image}
                                id={item.id}
                            />
                        ))}
                    </div>
                </div>
                <SpeedDials />
            </section>
            <style jsx>{Styles}</style>
        </Fragment>
    );
};

export default Index;
