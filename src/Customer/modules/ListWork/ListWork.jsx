import React, { useState, useEffect } from "react";
import { getCareermenu,getCareerfromMenu } from "Customer/apis/careerAPI";
import { Button, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { Menu as MenuComponent } from "antd";
import style from "./ListWork.module.scss"


function ListWork({idCareer}) {
    const obj=idCareer;
    const parse=parseInt(obj.ID)
  const navigate=useNavigate()
  const [menu, setMenu] = useState([]);
  const [carerr, setCareer] = useState([]);
  const getMenu = async () => {
    try {
      const data = await getCareermenu();
      setMenu(data.content);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCareerdetailmenu = async () => {
    try {
      const data = await getCareerfromMenu(parse);
      setCareer(data.content)
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  const items = menu?.map((item) => {
    return {
      key: item.id,
      label: item.tenLoaiCongViec,
      children: item.dsNhomChiTietLoai?.map((subMenu) => {
        return {
          type: "group",
          label: subMenu.tenNhom,
          children: subMenu.dsChiTietLoai?.map((menuChildren) => {
            return {
              key: menuChildren.id,
              label: (<p onClick={() => navigate(`/list/${menuChildren.id}`)}>{menuChildren.tenChiTiet}</p>)

            };
          }),
        };
      }),
    };
  });
  useEffect(() => {
    getMenu();
    getCareerdetailmenu();
  }, {});

  return (
    <div className={style.menu}>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="w-100">
          <MenuComponent mode="horizontal" items={items} />
        </div>

      </nav>
      <div className={`${style.careerContent} row`}>
        {carerr.map((item, index) => {
          return (
            <div className={`${style.careerItem} col-4`} >
              <div key={index} className={`${style.careerItem} card`} onClick={()=>{navigate(`/detail/${item.id}`)}}>
                <img className="card-img-top" src={item.congViec.hinhAnh} alt="Card image cap" />
                <div className="card-body">
                  <img className={style.avatar} src={item.avatar} alt="Card image cap" />
                  <h3 className="card-title">{item.tenChiTietLoai}</h3>
                  <p className="card-text">{item.congViec.moTaNgan}</p>
                  <p>{`Vote:  ${item.congViec.danhGia}/1000`}</p>
                  <p>{`Starting: ${item.congViec.giaTien}$`}</p>
                </div>
              </div>
            </div>

          )
        })}

      </div>
    </div>
  );
}

export default ListWork;