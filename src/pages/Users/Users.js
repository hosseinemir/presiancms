import React from "react";
import "./Users.css";
import "../Comments/Comments.css";
import Error from "../../components/Error/Error";
import { useState } from "react";
import { useEffect } from "react";
import Infomodal from "../../components/Infomodal/Infomodal";
import Deletemodal from "../../components/Deletemodal/Deletemodal";
import Editmodal from "../../components/Editmodal/Editmodal";
export default function Users() {
  const [allusers, setallusers] = useState([]);
  const [isshoweditmodal, setisshoweditmodal] = useState(false);
  const [isshowinfomodal, setisshowinfomodal] = useState(false);
  const [isshowdeletemodal, setisshowdeletemodal] = useState(false);
  //const for edit imput
  const [firsname, setfirsname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [score, setscore] = useState("");
  const [buy, setbuy] = useState("");
  ////
  const [mainuser, setmainuser] = useState(null);
  const closeinfomodalhandler = () => setisshowinfomodal(false);
  const closeeditmodalhandler = () => setisshoweditmodal(false);
  const deleteuserhandler = () => {
    fetch(`http://localhost:8000/api/users/${mainuser.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        fdata();
        setisshowdeletemodal(false);
      });
  };
  const submiteditmodal = (event) => {
    const updateuser = {
      firsname,
      lastname,
      username,
      password,
      phone,
      city,
      email,
      address,
      score,
      buy,
    };
    event.preventDefault();
    fetch(`http://localhost:8000/api/users/${mainuser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateuser),
    })
      .then((res) => res.json())
      .then((result) => {
        setisshoweditmodal(false);
        fdata();
      });
  };
  const closedeletemodal = () => {
    setisshowdeletemodal(false);
  };
  const fdata = () => {
    fetch(`http://localhost:8000/api/users`)
      .then((res) => res.json())
      .then((result) => {
        setallusers(result);
      });
  };

  useEffect(() => {
    fdata();
  }, []);

  return (
    <div className="users-main">
      {allusers.length ? (
        <div className="Commenttable-main">
          <table className="comment-table">
            <thead>
              <tr className="Tableproduct-tr1">
                <th>نام و نام خانوادگی</th>
                <th>یوزر نیم</th>
                <th>رمز عبور</th>
                <th>شماره تماس</th>
                <th>ایمیل</th>
                <th>بیشتر</th>
              </tr>
            </thead>
            <tbody>
              {allusers.map((item) => {
                return (
                  <tr key={item.id} className="Tableproduct-tr2">
                    <td>
                      {item.firsname} {item.lastname}
                    </td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setisshowdeletemodal(true);
                          setmainuser(item);
                        }}
                      >
                        حذف
                      </button>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setisshoweditmodal(true);
                          setmainuser(item);
                          setfirsname(item.firsname);
                          setlastname(item.lastname);
                          setusername(item.username);
                          setpassword(item.password);
                          setphone(item.phone);
                          setcity(item.city);
                          setemail(item.email);
                          setaddress(item.address);
                          setscore(item.score);
                          setbuy(item.buy);
                        }}
                      >
                        ویرایش
                      </button>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setisshowinfomodal(true);
                          setmainuser(item);
                        }}
                      >
                        جزئیات
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Error msg={"هیچ کاربری یافت نشد"} />
      )}
      {isshowdeletemodal && (
        <Deletemodal
          yeshandler={deleteuserhandler}
          nohandler={closedeletemodal}
          title={"ایا از حذف کاربر اطمینان دارید؟"}
        ></Deletemodal>
      )}
      {isshoweditmodal && (
        <Editmodal
          closeeditmodal={closeeditmodalhandler}
          submiteditmodal={submiteditmodal}
        >
          <div className="addproduct-group-div">
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="نام جدید کاربر را بنویسید"
                value={firsname}
                onChange={(event) => setfirsname(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="نام خانوادگی جدید کاربر را بنویسید"
                value={lastname}
                onChange={(event) => setlastname(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="نام کاربری جدید کاربر را بنویسید"
                value={username}
                onChange={(event) => setusername(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="پسورد  جدید کاربر را بنویسید"
                value={password}
                onChange={(event) => setpassword(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="شماره تماس  جدید کاربر را بنویسید"
                value={phone}
                onChange={(event) => setphone(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder=" محل زندگی جدید کاربر را بنویسید"
                value={city}
                onChange={(event) => setcity(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="ایمیل  جدید کاربر را بنویسید"
                value={email}
                onChange={(event) => setemail(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="ادرس  جدید کاربر را بنویسید"
                value={address}
                onChange={(event) => setaddress(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="امتیاز  جدید کاربر را بنویسید"
                value={score}
                onChange={(event) => setscore(event.target.value)}
              />
            </div>
            <div className="addproduct-input-div">
              <input
                type="text"
                placeholder="میزان خرید  جدید کاربر را بنویسید"
                value={buy}
                onChange={(event) => setbuy(event.target.value)}
              />
            </div>
          </div>
        </Editmodal>
      )}
      {isshowinfomodal && (
        <Infomodal closeinfomodalhandler={closeinfomodalhandler}>
          <table className="info-table">
            <thead>
              <tr className="info-tr1">
                <th>امتیاز</th>
                <th>شهر</th>
                <th>ادرس</th>
              </tr>
            </thead>
            <tbody>
              <tr className="info-tr2">
                <td>{mainuser.score}</td>
                <td>{mainuser.city} </td>
                <td> {mainuser.address}</td>
              </tr>
            </tbody>
          </table>
        </Infomodal>
      )}
    </div>
  );
}
