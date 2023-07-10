import React, { useEffect, useState } from "react";
import "./Comments.css";
import Error from "../../components/Error/Error";
import Infomodal from "../../components/Infomodal/Infomodal";
import Deletemodal from "../../components/Deletemodal/Deletemodal";
import Editmodal from "../../components/Editmodal/Editmodal";
export default function Comments() {
  const fdata = () => {
    fetch(`http://localhost:8000/api/comments`)
      .then((res) => res.json())
      .then((data) => {
        setallcomments(data);
      });
  };
  const [allcomments, setallcomments] = useState([]);
  const [isshowcommodal, setisshowcommodal] = useState(false);
  const [maincomment, setmaincomment] = useState(null);
  const [isdeletemodal, setisdeletemodal] = useState(false);
  const [iseditmodal, setiseditmodal] = useState(false);
  const [commenttext, setcommentstext] = useState(null);
  const [isconfirm, setisconfirm] = useState(false);
  const [isnotconfirm, setisnotconfirm] = useState(false);
  const closeeditmodal = () => setiseditmodal(false);
  const closeinfomodalhandler = () => setisshowcommodal(false);
  const yesnotconfirm = () => {
    fetch(`http://localhost:8000/api/comments/reject/${maincomment.id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        setisnotconfirm(false);
        fdata();
      });
  };
  const yesconfirm = () => {
    fetch(`http://localhost:8000/api/comments/accept/${maincomment.id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        setisconfirm(false);
        fdata();
      });
  };
  const submiteditmodal = (event) => {
    event.preventDefault();
    setisshowcommodal(false);
    fetch(`http://localhost:8000/api/comments/${maincomment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: commenttext }),
    })
      .then((res) => res.json())
      .then((result) => {
        setiseditmodal(false);
        fdata();
      });
  };
  const yeshandler = () => {
    fetch(`http://localhost:8000/api/comments/${maincomment.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resualt) => {
        console.log(resualt);
        fdata();
      });
    setisdeletemodal(false);
  };
  const nohandler = () => {
    setisdeletemodal(false);
    setisconfirm(false);
    setisnotconfirm(false);
  };
  useEffect(() => {
    fdata();
  }, []);

  return (
    <div className="comments-main">
      {allcomments.length ? (
        <div className="Commenttable-main">
          <table className="comment-table">
            <thead>
              <tr className="Tableproduct-tr1">
                <th>نام کاربر</th>
                <th>محصول</th>
                <th>مشاهده نظر</th>
                <th>تاریخ ثبت</th>
                <th>ساعت ثبت</th>
                <th>ویرایش</th>
              </tr>
            </thead>
            <tbody>
              {allcomments.map((item) => {
                return (
                  <tr className="Tableproduct-tr2" key={item.id}>
                    <td>{item.userID}</td>
                    <td>{item.productID}</td>
                    <td>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setmaincomment(item);
                          setisshowcommodal(true);
                        }}
                      >
                        مشاهده متن
                      </button>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.hour}</td>
                    <td>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setmaincomment(item);
                          setisdeletemodal(true);
                        }}
                      >
                        حذف
                      </button>
                      <button
                        className="Tableproduct-btn"
                        onClick={() => {
                          setiseditmodal(true);
                          setmaincomment(item);
                          setcommentstext(item.body);
                        }}
                      >
                        ویرایش
                      </button>
                      <button className="Tableproduct-btn">پاسخ</button>

                      {!item.isAccept ? (
                        <button
                          className="Tableproduct-btn"
                          onClick={() => {
                            setisconfirm(true);
                            setmaincomment(item);
                          }}
                        >
                          تایید
                        </button>
                      ) : (
                        <button
                          className="Tableproduct-btn"
                          onClick={() => {
                            setisnotconfirm(true);
                            setmaincomment(item);
                          }}
                        >
                          رد نظر
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Error msg={"هیچ کامنتی یافت نشد"} />
      )}
      {isshowcommodal && (
        <Infomodal closeinfomodalhandler={closeinfomodalhandler}>
          <p className="info-comment">{maincomment.body}</p>
        </Infomodal>
      )}
      {isdeletemodal && (
        <Deletemodal
          yeshandler={yeshandler}
          nohandler={nohandler}
          title={"ایا از حذف اطمینان دارید؟"}
        />
      )}
      {iseditmodal && (
        <Editmodal
          closeeditmodal={closeeditmodal}
          submiteditmodal={submiteditmodal}
        >
          <textarea
            className="comment-textarea"
            name=""
            id=""
            cols="30"
            rows="10"
            value={commenttext}
            onChange={(event) => setcommentstext(event.target.value)}
          ></textarea>
        </Editmodal>
      )}
      {isconfirm && (
        <Deletemodal
          yeshandler={yesconfirm}
          nohandler={nohandler}
          title={"ایا از تائید اطمینان دارید؟"}
        />
      )}
      {isnotconfirm && (
        <Deletemodal
          yeshandler={yesnotconfirm}
          nohandler={nohandler}
          title={"ایا از رد نظر اطمینان دارید؟"}
        />
      )}
    </div>
  );
}
