import React, { useContext, useState } from "react";
import DataBonus from "../../assets/api/DataBonus";
import DataInformations from "../../assets/api/DataInformation";
import DataTitles from "../../assets/api/DataTitle";
import DataTitleCats from "../../assets/api/DataTitleCat";
import DataTitleFoods from "../../assets/api/DataTitleFood";
import DataTitleInfos from "../../assets/api/DataTitleInfo";
import Banner from "./Banner";
import Bonus from "./Bonus";
import Carousel from "./Carousel";
import Cart from "./Cart";
import Image from "./Image";
import Information from "./Information";
import SeeMore from "./SeeMore";
import Title from "./Title";

import { ProductDetailContext } from "./store/Context";

const PageBonus = () => {
  const { ProductDog, ProductCat, ProductFood } =
    useContext(ProductDetailContext);

  const [limit, setlimit] = useState(4);

  const handleSeeMore = () => {
    console.log(ProductDog.length);
    if (limit > ProductDog.length) {
      alert("Tạm Thời Hết Hàng");
    } else {
      setlimit((pre) => pre + 4);
    }
  };

  return (
    <div>
      <Carousel />
      <div className="container-fluid" id="bonus">
        <div className="container">
          <div className="row">
            {DataBonus.BonusData.map((listBonus) => (
              <Bonus
                key={listBonus.id}
                title={listBonus.title}
                img={listBonus.image}
                des={listBonus.des}
              />
            ))}
          </div>
        </div>
      </div>
      {DataTitles.DataTitle.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {Array.isArray(ProductDog)?ProductDog.slice(0, limit).map((listdog) => (
            <Cart
              key={listdog._id}
              productid={listdog._id}
              image={listdog.image}
              category={listdog.category}
              title={listdog.title}
              price={listdog.price}
            />
          )):null}
        </div>
      </div>
      <SeeMore onClick={handleSeeMore} />
      <Image />
      {DataTitleCats.DataTitleCat.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {Array.isArray(ProductCat)?ProductCat.map((listcat) => (
            <Cart
              key={listcat._id}
              productid={listcat._id}
              image={listcat.image}
              category={listcat.category}
              title={listcat.title}
              price={listcat.price}
            />
          )):null}
        </div>
      </div>
      <SeeMore />
      <Banner />
      {DataTitleFoods.DataTitleFood.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {Array.isArray(ProductFood)?ProductFood.map((listfood) => (
            <Cart
              key={listfood._id}
              productid={listfood._id}
              image={listfood.image}
              category={listfood.category}
              title={listfood.title}
              price={listfood.price}
            />
          )):null}
        </div>
      </div>
      <SeeMore />
      {DataTitleInfos.DataTitleInfo.map((listTitle) => (
        <Title key={listTitle.id} title={listTitle.title} />
      ))}
      <div className="container">
        <div className="row">
          {Array.isArray(ProductFood)?DataInformations.DataInformation.map((listInfor) => (
            <Information
              key={listInfor.id}
              image={listInfor.image}
              title={listInfor.title}
              des={listInfor.des}
            />
          )):null}
        </div>
      </div>
      <SeeMore />
    </div>
  );
};

export default PageBonus;
