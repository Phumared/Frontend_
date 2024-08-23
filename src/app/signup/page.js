'use client'
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (<>
      <br />
      <br />
      <br />
      <br />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card p-4">
              <h2 className="text-center mb-4">Signup</h2>
              <form>
                <div className="mb-3">
                  <i class="bi bi-envelope-at-fill m-2"></i>
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">กรอกอีเมลเช่น google1234@gmail.com</div>
                </div>
                <div className="mb-3">
                  <i class="bi bi-key-fill m-2"></i>
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type={showPassword ? "text" : "password"} id="password" className="form-control p-2" style={{ backgroundColor: '#FFFFFF', paddingRight: '2.5rem' }} placeholder="รหัสผ่าน" />
                  <span
                    onClick={togglePasswordVisibility}
                    className="position-absolute"
                    style={{ cursor: 'pointer', left: '365px', top: '71%', transform: 'translateY(-50%)' }}
                  >
                  </span>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
