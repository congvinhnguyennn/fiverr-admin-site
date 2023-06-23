import React, { useState, useEffect } from 'react'
import { getCareermenu } from "../../API/careerAPI"

function Menu() {
  const [menu, setMenu] = useState([])
  const getMenu = async () => {
    try {
      const data = await getCareermenu();
      setMenu(data.content)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMenu();
  }, {});


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {menu.map((item) => {
          return (
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-content dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {item.tenLoaiCongViec}
                    </a>
                    <ul className="dropdown-menu dropdown dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      {item.dsNhomChiTietLoai.map((itemType) => {
                        return (
                          <>
                            <li className="dropdown-content dropdown">{itemType.tenNhom}</li>
                            <li>Another action</li>
                          </>
                        )
                      })}

                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}

      </nav>

    </div>

  )
}

export default Menu