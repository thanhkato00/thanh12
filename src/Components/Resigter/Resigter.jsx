import React from "react";
import "./login.css"
import { Link } from "react-router-dom";
function Resigter() {
  return (
    <div>
      <div className="main">
        <form  className="form" id="form-2">
          <h3 className="heading">ログイン</h3>
          <div className="spacer" />
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="VD: email@domain.com"
              className="form-control"
            />
            <span className="form-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Nhập mật khẩu"
              className="form-control"
            />
            <span className="form-message" />
          </div>
          <button className="form-submit" as={Link} to="/" >ログイン</button>
          {/* <div id="them">
            <span>
              Chưa có tài khoản?{" "}
              <span>
                <a href="dangky.html">!</a>
              </span>
            </span>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Resigter;
