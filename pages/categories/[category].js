import Styles from "../../styles/home";
import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import Nav from "../../components/Layout/Nav";
import NameMapping from "../../utils/categories.json";
import axios from "axios";
import { ProductItems } from "../../components/ProductItems/ProductItems";
import { SpeedDials } from "../../components/forum/SpeedDial";
import Checkbox from "@material-ui/core/Checkbox";

//axios

const Index = () => {
    const router = useRouter();
    const { category } = router.query;

    const [data, setData] = useState([]);

    useEffect(() => {
        onFetchData();
    }, [NameMapping[category]]);

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const onFetchData = async () => {
        try {
            console.log(NameMapping[category].toLowerCase());
            console.log(
                `https://apmix.mixko.ml/${NameMapping[
                    category
                ].toLowerCase()}.json`
            );
            const fetchedData = await axios.get(
                `https://apmix.mixko.ml/${NameMapping[
                    category
                ].toLowerCase()}.json`
            );
            setData(fetchedData.data);
            // console.log(fetchedData.data[0].id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Fragment>
            <Nav />
            <section>
                <div className="page-box">
                    <div className="category-title">
                        <h1>{NameMapping[category]}</h1>
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
                                title={item.data.title}
                                price={item.data.price}
                                sold={item.data.sold}
                                image={item.img[0]}
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
