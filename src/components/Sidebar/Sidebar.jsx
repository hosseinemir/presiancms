import React, { useState } from "react";
import "./Sidebar.css";
import CottageIcon from "@mui/icons-material/Cottage";
import ChairIcon from "@mui/icons-material/Chair";
import CommentBankIcon from "@mui/icons-material/CommentBank";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DiscountIcon from "@mui/icons-material/Discount";
import { Link, NavLink } from "react-router-dom";
export default function Sidebar() {
  // const [activemenu,setactivemenu]=useState(null)
  return (
    <div className="sidebar-main">
      <h3 className="sidebar-h3">به داشبورد خود خوش امدید</h3>
      <ul className="sidebar-ul">
        <span className="sidebar-span">خانه</span>
        <NavLink to={"/"}>
          <CottageIcon className="sidebar-icon" />
          صفحه اصلی
        </NavLink>
        <span className="sidebar-span">تولید ما</span>

        <NavLink to={"/product"}>
          <ChairIcon className="sidebar-icon" />
          محصولات
        </NavLink>
        <span className="sidebar-span">کاربران ما و پیشنهادات</span>

        <NavLink to={"/comments"}>
          
            <CommentBankIcon className="sidebar-icon" />
            کامنت ها
          
        </NavLink>
        <NavLink to={"/users"}>
          
            <PeopleAltIcon className="sidebar-icon" />
            کاربران
          
        </NavLink>
        <NavLink to={"/orders"}>
          
            <BorderColorIcon className="sidebar-icon" />
            سفارشات
         
        </NavLink>
        <NavLink to={"/discounts"}>
          
            <DiscountIcon className="sidebar-icon" />
            تخفیف ها
          
        </NavLink>
      </ul>
    </div>
  );
}
