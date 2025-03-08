import { useState } from "react";
import { FaUser, FaCog, FaPalette, FaUniversalAccess, FaBell, FaQuestionCircle } from "react-icons/fa";
import "./App.css";

const menuItems = [
  { id: 1, name: "Public profile", icon: <FaUser /> },
  { id: 2, name: "Account", icon: <FaCog /> },
  { id: 3, name: "Appearance", icon: <FaPalette /> },
  { id: 4, name: "Accessibility", icon: <FaUniversalAccess /> },
  { id: 5, name: "Notifications", icon: <FaBell /> },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(2);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${selected === item.id ? "selected" : ""}`}
              onClick={() => setSelected(item.id)}
            >
              <span className="icon">{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Section */}
      <div className="content">
        {selected === 2 ? (
          <div>
            <h2>Change username</h2>
            <p>
              Changing your username can have <button onClick={() => alert('Unintended side effects')}>unintended side effects</button>.
            </p>
            <button>Change username</button>
            <p className="info">
              <FaQuestionCircle /> Looking to manage account security settings? You can find them in the <a href="/password-authentication">Password and authentication</a> page.
            </p>
          </div>
        ) : (
          <h2>{menuItems.find((item) => item.id === selected)?.name}</h2>
        )}
      </div>
    </div>
  );
}