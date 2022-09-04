import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import "./login.css";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  
  const [firstName, setfirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  
  const [userNameToLogin, setuserNameToLogin] = useState("");
  const [passwordToLogin, setpasswordLogin] = useState("");

  const [registerMessage, setregisterMessage] = useState("");
  const [loginMessage, setloginMessage] = useState("")

  useEffect(() => {
    if (show === false || show2 === false ||  show3 === false){
      setregisterMessage("");
      setloginMessage("");
    }
  }, [show, show2, show3]);

  async function register() {
    try {
      const result = await axios({
        method: "post",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/users`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          firstname: firstName,
          lastname: lastname,
          email: email,
          username: username,
          password: password,
        },
      });
      console.log(result);
      handleClose3();
      handleShow();
    } catch (error) {
      console.log(error);
      setregisterMessage(error.response.data);
    }
  }

  async function login() {
    try {
      const result = await axios({
        method: "post",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          userNameToLogin: userNameToLogin,
          password: passwordToLogin,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
      setloginMessage(error.response.data)
    }
  }

  return (
    <div className="login">
      <div className="main">
        <div className="row g-0">
          <div className="col-xl-7 order-2 order-xl-1">
            <div className="bg-img">
              <svg
                className="left-bird"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="white"
                width="40%"
                height="40%"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="col-xl-5 order-1 order-xl-2">
            <div className="login-info">
              <div className="info-container">
                <div className="rigth-bird">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="#1a8cd8"
                    width="10%"
                    height="10%"
                  >
                    <g>
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                  </svg>
                </div>
                <h1 className="main-title">
                  Lo que está <br />
                  pasando ahora
                </h1>
                <h3 className="subtitle">Únete a Twitter hoy mismo.</h3>
                <div className="register_buttons">
                  <button className="register register_google">
                    <span className="google-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                    </span>
                    Registrarse con Google
                  </button>
                  <button className="register register_apple">
                    <span>
                      <svg
                        className="apple-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"></path>
                      </svg>
                    </span>
                    Registrarse con Apple
                  </button>
                  <div className="container-o">
                    <hr className="line" />
                    <p className="o">o</p>
                    <hr className="line" />
                  </div>
                  <button
                    onClick={() => {
                      handleShow3();
                    }}
                    className="register new-register"
                    data-bs-toggle="modal"
                    data-bs-
                  >
                    Registrate con el número de ...
                  </button>
                  <p className="termins">
                    Al registrarte, aceptas los Términos de servicioy la Política de privacidad,
                    incluida la política de Uso de Cookies.
                  </p>
                </div>
                <div className="iniciar-sesion">
                  <h4 className="have-account">¿Ya tienes una cuenta?</h4>
                  <button
                    onClick={() => handleShow()}
                    type="button"
                    className="register new-sesion"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form action="/login" method="post">
        <Modal show={show} onHide={handleClose} centered className="modal-1">
          <Modal.Body className="modal-body-1">
            <div>
              <div className="modal-content bg-negro">
                <div className="modal-bird">
                  <svg
                    className="left-bird-modal1"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="white"
                    height="30px"
                    width="30px"
                  >
                    <g>
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                  </svg>
                </div>
                <button
                  type="button"
                  className="btn-close p-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div className="contenido-modal">
                  <div className="elements ">
                    <div className="botones_modal">
                      <div className="div-modal-title">
                        <h4 className="modal-title">Inicia sesión en Twitter</h4>
                      </div>
                      <button className="register register_google">
                        <span className="google-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="00px"
                            y="0px"
                            width="18"
                            height="18"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                            <path
                              fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            ></path>
                            <path
                              fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            ></path>
                            <path
                              fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                          </svg>
                        </span>
                        Continuar con Google
                      </button>
                      <button className="register register_apple register_apple-modal-1">
                        <span>
                          <svg
                            className="apple-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"></path>
                          </svg>
                        </span>
                        Continuar con Apple
                      </button>
                      <div>
                        <div className="container-o container-o-modal-1">
                          <hr className="line" />
                          <p className="o">o</p>
                          <hr className="line" />
                        </div>
                      </div>
                      <div className="siguiente">
                        <input
                          className="input-email input-email-modal-1"
                          type="text"
                          placeholder="Correo electrónico o nombre de usuario"
                          name="user"
                          onChange={(e) => setuserNameToLogin(e.target.value)}
                        />
                        <button
                          onClick={() => {
                            handleShow2();
                            handleClose();
                          }}
                          className="button-prevent register siguiente-btn "
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        >
                          Siguiente
                        </button>
                        <button className="button-prevent register olvidaste-btn">
                          ¿Olvidaste tu contraseña?
                        </button>
                        <p>
                          ¿No tienes una cuenta?
                          <Link
                            onClick={() => handleShow3()}
                            to=""
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal3"
                          >
                            Regístrate
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={show2} onHide={handleClose2} centered className="modal-1">
          <Modal.Body className="modal-body-1">
            <div className="modal-content bg-negro">
              <div className="modal2-bird">
                <svg
                  className="left-bird"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="30px"
                  width="30px"
                >
                  <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </g>
                </svg>
              </div>
              <button
                type="button"
                className="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="contenido-modal h-100 d-flex flex-column justify-content-between">
                <div className="elements-modal2 h-100">
                  <div className="div-modal-title">
                    <h4 className="modal-title">Inicia sesión en Twitter</h4>
                  </div>
                  <div className="login-login-message">
                    <p>{loginMessage.message}</p>
                  </div>
                  <button className="register register_google">
                    <span className="google-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="00px"
                        y="0px"
                        width="18"
                        height="18"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                    </span>
                    Continuar con Google
                  </button>
                  <button className="register register_apple">
                    <span>
                      <svg
                        className="apple-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"></path>
                      </svg>
                    </span>
                    Continuar con Apple
                  </button>
                  <div>
                    <div className="container-o container-o-modal-1">
                      <hr className="line" />
                      <p className="o">o</p>
                      <hr className="line" />
                    </div>
                  </div>

                  <h4 className="nameUser">Inicia sesión como: {userNameToLogin}</h4>
                  <div className="siguiente">
                    <input
                      className="input-email input-modal-2"
                      type="password"
                      placeholder="Ingresar contraseña"
                      onChange={(e) => setpasswordLogin(e.target.value)}
                    />
                    <button type="submit" className="register siguiente-btn" onClick={() => login()}>
                      Iniciar sesión
                    </button>
                    <button className="button-prevent register olvidaste-btn">
                      ¿Olvidaste tu contraseña?
                    </button>
                    <p>
                      ¿No tienes una cuenta?
                      <Link
                        to="#"
                        onClick={() => {
                          handleClose2();
                          handleShow();
                          handleShow3();
                        }}
                      >
                        Regístrate
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </form>

      <Modal show={show3} onHide={handleClose3} centered>
        <Modal.Body>
          <div className="modal-dialog modal-dialog-centered h-100">
            <div className="modal-content bg-negro modal-3">
              <div>
                <button
                  type="button"
                  className="btn-close p-3"
                  data-bs-d5ismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="contenido-modal modal-3">
                <h1>Cree su cuenta</h1>
                <div className="errorMessage">
                  <p>{registerMessage.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    placeholder="Ingrese su nombre..."
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    placeholder="Ingrese su apellido..."
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo elecrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Ingrese su correo electrónico..."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Ingrese su usuario..."
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Ingrese su contraseña..."
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <button
                  className="register btn-register"
                  onClick={() => {
                    register();
                  }}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <footer>
        <p className="item-footer">Información</p>
        <p className="item-footer">Centro de Ayuda</p>
        <p className="item-footer">Condiciones de Servicio</p>
        <p className="item-footer">Política de Privacidad</p>
        <p className="item-footer">Política de cookies</p>
        <p className="item-footer">Accesibilidad</p>
        <p className="item-footer">Información de anuncios</p>
        <p className="item-footer">Blog</p>
        <p className="item-footer">Estado</p>
        <p className="item-footer">Empleos</p>
        <p className="item-footer">Recursos para marcas</p>
        <p className="item-footer">Publicidad</p>
        <p className="item-footer">Marketing</p>
        <p className="item-footer">Twitter para empresas</p>
        <p className="item-footer">Desarrolladores</p>
        <p className="item-footer">Guía</p>
        <p className="item-footer">Configuración</p>
        <p className="item-footer">© 2022 Twitter, Inc.</p>
      </footer>
    </div>
  );
}

export default Login;
