import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [action, setAction] = useState([]);
  const [nickname, setNickname] = useState('');

  const [password, setPassword] = useState('');
  const khiBamVao = () => {
    setAction((prevAction) => [
      ...prevAction,
      {
        nick: nickname,
        pass: password,
      },
    ]);
    setPassword('');
    setNickname('');
  };

  return (
    <div class="display">
      <h1>FACEBOOKPHAKE</h1>
      <h2>Tài Khoản</h2>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      ></input>
      <h3>Mật Khẩu</h3>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <input type="button" value="Log In" onClick={khiBamVao}></input>
      {action.length != 0 ? (
        <li>
          {' '}
          Action:{' '}
          {action.map((i) => (
            <li>
              <p>
                {i.nick}, {i.pass}
              </p>
            </li>
          ))}
        </li>
      ) : null}
    </div>
  );
}
