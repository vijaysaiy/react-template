import {
  Collapsible,
  Heading,
  Icon,
  VerticalNav,
} from "censa_front_end_library";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/censa_logo.svg";
const data = [
  {
    name: "orders",
    label: "Orders",
    icon: "shopping_bag",
    group: "General",
    path: "/orders",
  },
];

const Sidebar = () => {
  const location = useLocation();
  console.log(location);

  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const handleNavigation = (menu) => {
    navigate(menu.path);
  };

  return (
    <div className="sidebar">
      <Collapsible expanded={expanded} onToggle={setExpanded} hoverable={false}>
        <div className="d-flex align-items-center mb-3 px-5 pt-6">
          <Icon
            name="menu"
            className="cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          ></Icon>
          <Heading size="s" className="ml-5">
            <img src={Logo} alt="censa" width="160px" height="32px" />
          </Heading>
        </div>
        <VerticalNav
          menus={data}
          active={data.find((item) => location.pathname.includes(item.path))}
          expanded={expanded}
          onClick={handleNavigation}
        />
      </Collapsible>
    </div>
  );
};

export default Sidebar;
