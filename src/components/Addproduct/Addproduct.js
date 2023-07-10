import React, { useState } from "react";
import "./Addproduct.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Filter9PlusIcon from "@mui/icons-material/Filter9Plus";
import ImageIcon from "@mui/icons-material/Image";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ColorLensIcon from "@mui/icons-material/ColorLens";
export default function Addproduct({fetchpro}) {
  const [producttitle, setproducttitle] = useState("");
  const [productprice, setproductprice] = useState("");
  const [productcount, setproductcount] = useState("");
  const [productimg, setproductimg] = useState("");
  const [productpopularity, setproductpopularity] = useState("");
  const [productsale, setproductsale] = useState("");
  const [productcolors, setproductcolors] = useState("");
  const productnewinfo = {
    title: producttitle,
    price: productprice,
    count: productcount,
    img: productimg,
    popularity: productpopularity,
    sale: productsale,
    colors: productcolors,
  };
  const submithandler = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productnewinfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
      fetchpro()
    setproducttitle("");
    setproductprice("");
    setproductcount("");
    setproductimg("");
    setproductpopularity("");
    setproductsale("");
    setproductcolors("");
  };
  return (
    <div className="addproduct-main">
      <h3>افزودن محصول جدید</h3>
      <form action="" className="addproduct-form">
        <div className="addproduct-group-div">
          <div className="addproduct-input-div">
            <DriveFileRenameOutlineIcon></DriveFileRenameOutlineIcon>
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              value={producttitle}
              onChange={(event) => setproducttitle(event.target.value)}
            />
          </div>
          <div className="addproduct-input-div">
            <AttachMoneyIcon></AttachMoneyIcon>
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              value={productprice}
              onChange={(event) => setproductprice(event.target.value)}
            />
          </div>
          <div className="addproduct-input-div">
            <Filter9PlusIcon></Filter9PlusIcon>
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              value={productcount}
              onChange={(event) => setproductcount(event.target.value)}
            />
          </div>
          <div className="addproduct-input-div">
            <ImageIcon></ImageIcon>
            <input
              type="text"
              placeholder="ادرس عکس محصول را بنویسید"
              value={productimg}
              onChange={(event) => setproductimg(event.target.value)}
            />
          </div>
          <div className="addproduct-input-div">
            <LoyaltyIcon></LoyaltyIcon>
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              value={productpopularity}
              onChange={(event) => setproductpopularity(event.target.value)}
            />
          </div>
          <div className="addproduct-input-div">
            <TrendingUpIcon></TrendingUpIcon>
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              value={productsale}
              onChange={(event) => setproductsale(event.target.value)}
            />
          </div>
          <div className="addproduct-input-div">
            <ColorLensIcon></ColorLensIcon>
            <input
              type="text"
              placeholder="رنگ بندی محصول را بنویسید"
              value={productcolors}
              onChange={(event) => setproductcolors(event.target.value)}
            />
          </div>
        </div>
        <button className="addproduct-btn" onClick={submithandler}>
          ثبت محصول جدید
        </button>
      </form>
    </div>
  );
}
