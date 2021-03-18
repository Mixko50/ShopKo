import css from 'styled-jsx/css'

export default css`
    section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-bigbox {
  margin-top: 70px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.ads-box {
  display: flex;
  width: 100%;
  background-color: #f7f6e7;
  padding: 20px
}

.free-shipping-promotion-box {
  flex: 1;
  height: 370px;
  /* // background-color: black; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.free-shipping-1, .free-shipping-2 {
  width: 95%;
  height: 45%;
  background-color: pink;
  border-radius: 30px;
}

.free-shipping-1 {
  background-image: url(img/promotion/airpodspro.png);
  background-size: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
}

.free-shipping-2{
  background-image: url(img/promotion/watch.jpeg);
  background-size: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
}

.promotion {
  width: 95%;
  height: 95%;
  background-color: orange;
  border-radius: 30px;
  background-image: url(/img/promotion/appleone.png);
  background-size: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(250,250, 250);
}

.category {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 20px;
  width: 100%;
  height: 190px;
  background-color: #f4f9f9;
}

.title {
     border-top-left-radius: 20px;
     border-top-right-radius: 20px;
  padding: 10px;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
}

.categories-box {

  width: 100%;
  height: 70%;
  /* background-color: pink; */
  display: flex;
  overflow: scroll;
}

.categories {
  min-width: 150px;
  height: 100%;
  /* // background-color: yellow; */
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-left: none;
}

.categories > p {
  text-decoration: none;
  color: black;
}

.categories:nth-child(1) {
  border-left: 1px black solid;
}

.categories > p {
  margin-top: -30%;
}

.products-box {
  max-width: 1200px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-row-gap: 16px;
  justify-items: center;
  justify-content: center;


}

.products {
  width: 185px;
  height: 300px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 2px 10px #dddddd;
  padding: 15px;
  display: inline-block;
  transition: .4s;
  cursor: pointer;
  margin: 5px;
}

.products:hover {
  transform: translateY(-3px);
}

.product-pictures {
  width: 100%;
  height: 60%;
  background-color: black;
  border-radius: 20px;
  margin-bottom: 10px;
}

.product > p {
  width: 100%;
}

#details {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

#price {
  color: orange;
  margin-top: 10px;
}

.sold-box {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  top: 22px;
}

@media only screen and (max-width: 768px) {
  .ads-box {
    flex-direction: column;
  }
}`;