import "./Tableproduct.css";
import Deletemodal from "../Deletemodal/Deletemodal";
import React, { useState, useEffect } from "react";
import Infomodal from "../Infomodal/Infomodal";
import Editmodal from "../Editmodal/Editmodal";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Filter9PlusIcon from "@mui/icons-material/Filter9Plus";
import ImageIcon from "@mui/icons-material/Image";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Error from "../../components/Error/Error";
export default function Tableproduct({fetchpro,allproducts}) {
  const [isdelmodalshow, setisdelmodalshow] = useState(false);
  const [isinfomodalshow, setisinfomodalshow] = useState(false);
  const [iseditmodalshow, setiseditmodalshow] = useState(false);
  const [proid, setproid] = useState(null);
  const [proinfo, setproinfo] = useState({});

  const [producttitle, setproducttitle] = useState("");
  const [productprice, setproductprice] = useState("");
  const [productcount, setproductcount] = useState("");
  const [productimg, setproductimg] = useState("");
  const [productpopularity, setproductpopularity] = useState("");
  const [productsale, setproductsale] = useState("");
  const [productcolors, setproductcolors] = useState("");

  fetchpro()

  const yeshandler = () => {
    console.log(proid);
    fetch(`http://localhost:8000/api/products/${proid}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setisdelmodalshow(false);
        fetchpro();
      });
  };
  const nohandler = () => {
    setisdelmodalshow(false);
  };
  const closeinfomodalhandler = () => {
    setisinfomodalshow(false);
  };
  const closeeditmodal = () => {
    setiseditmodalshow(false);
  };
  const submiteditmodal = (event) => {
    event.preventDefault();
    const productnewinfo = {
      title: producttitle,
      price: productprice,
      count: productcount,
      img: productimg,
      popularity: productpopularity,
      sale: productsale,
      colors: productcolors,
    };
    fetch(`http://localhost:8000/api/products/${proid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productnewinfo),
    })
      .then((res) => res.json())
      .then((result) => {
        setiseditmodalshow(false);
        fetchpro();
      });
  };
  return (
    <>
      {allproducts.length ? (
        <div className="Tableproduct-div">
          <table className="Tableproduct-main">
            <thead className="Tableproduct-tr1">
              <tr>
                <th>عکس</th>
                <th>اسم</th>
                <th>قیمت</th>
                <th>موجودی</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="Tableproduct-tr2">
              {allproducts.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.img} alt="" className="Tableproduct-img" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price} تومان</td>
                    <td>{item.count}</td>
                    <td>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setisinfomodalshow(true);
                          setproinfo(item);
                        }}
                      >
                        جزئیات
                      </button>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setisdelmodalshow(true);
                          setproid(item.id);
                        }}
                      >
                        حذف
                      </button>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setiseditmodalshow(true);
                          setproid(item.id);
                          setproducttitle(item.title);
                          setproductprice(item.price);
                          setproductcount(item.count);
                          setproductimg(item.img);
                          setproductpopularity(item.popularity);
                          setproductsale(item.sale);
                          setproductcolors(item.colors);
                        }}
                      >
                        ویرایش
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {isdelmodalshow && (
            <Deletemodal yeshandler={yeshandler} nohandler={nohandler} title={'ایا از حذف اطمینان دارید؟'} />
          )}
          {isinfomodalshow && (
            <Infomodal closeinfomodalhandler={closeinfomodalhandler}>
              <table className="info-table">
                <thead>
                  <tr className="info-tr1">
                    <th>میزان فروش</th>
                    <th>میزان محبوبیت</th>
                    <th>تعداد رنگ های موجود</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="info-tr2">
                    <td>{proinfo.sale}</td>
                    <td>{proinfo.popularity} </td>
                    <td> {proinfo.colors}</td>
                  </tr>
                </tbody>
              </table>
            </Infomodal>
          )}
          {iseditmodalshow && (
            <Editmodal
              closeeditmodal={closeeditmodal}
              submiteditmodal={submiteditmodal}
            >
              <div className="addproduct-group-div">
                <div className="addproduct-input-div">
                  <DriveFileRenameOutlineIcon></DriveFileRenameOutlineIcon>
                  <input
                    type="text"
                    placeholder="اسم جدید محصول را بنویسید"
                    value={producttitle}
                    onChange={(event) => setproducttitle(event.target.value)}
                  />
                </div>
                <div className="addproduct-input-div">
                  <AttachMoneyIcon></AttachMoneyIcon>
                  <input
                    type="text"
                    placeholder="قیمت جدید محصول را بنویسید"
                    value={productprice}
                    onChange={(event) => setproductprice(event.target.value)}
                  />
                </div>
                <div className="addproduct-input-div">
                  <Filter9PlusIcon></Filter9PlusIcon>
                  <input
                    type="text"
                    placeholder="موجودی جدید محصول را بنویسید"
                    value={productcount}
                    onChange={(event) => setproductcount(event.target.value)}
                  />
                </div>
                <div className="addproduct-input-div">
                  <ImageIcon></ImageIcon>
                  <input
                    type="text"
                    placeholder="ادرس عکس جدید محصول را بنویسید"
                    value={productimg}
                    onChange={(event) => setproductimg(event.target.value)}
                  />
                </div>
                <div className="addproduct-input-div">
                  <LoyaltyIcon></LoyaltyIcon>
                  <input
                    type="text"
                    placeholder="میزان محبوبیت جدید محصول را بنویسید"
                    value={productpopularity}
                    onChange={(event) =>
                      setproductpopularity(event.target.value)
                    }
                  />
                </div>
                <div className="addproduct-input-div">
                  <TrendingUpIcon></TrendingUpIcon>
                  <input
                    type="text"
                    placeholder="میزان فروش جدید محصول را بنویسید"
                    value={productsale}
                    onChange={(event) => setproductsale(event.target.value)}
                  />
                </div>
                <div className="addproduct-input-div">
                  <ColorLensIcon></ColorLensIcon>
                  <input
                    type="text"
                    placeholder="رنگ بندی جدید محصول را بنویسید"
                    value={productcolors}
                    onChange={(event) => setproductcolors(event.target.value)}
                  />
                </div>
              </div>
            </Editmodal>
          )}
        </div>
      ) : (
        <Error msg={"هیچ محصولی یافت نشد"} />
      )}
    </>
  );
}
