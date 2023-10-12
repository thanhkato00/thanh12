import React from "react";
import "./style.css";
function Login() {
  return (
    <div>
      <div className="main">
        <form action="" method="POST" className="form" id="form-2">
          <h3 className="heading">Đăng Nhập</h3>
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
              Mật khẩu
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
          <button className="form-submit">Đăng Nhập</button>
          <div id="them">
            <span>
              Chưa có tài khoản?{" "}
              <span>
                <a href="dangky.html">Đăng ký tại đây!</a>
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
