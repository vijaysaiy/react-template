import {
  Collapsible,
  Heading,
  Icon,
  VerticalNav,
} from "censa_front_end_library";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/censa_logo.svg";
const data = [
  {
    name: "header",
    label: "Header",
    icon: "home",
    group: "General",
    path: "/sample",
  },
  {
    name: "table",
    label: "Table",
    icon: "home",
    group: "General",
    subMenu: [
      {
        name: "table.with_checkbox",
        label: "With Checkbox",
        path: "/table-checkbox",
      },
      {
        name: "table.paginated",
        label: "With Pagination",
        path: "/table-pagination",
      },
    ],
  },
  {
    name: "input",
    label: "Input",
    icon: "home",
    group: "General",
    path: "/input",
  },
  {
    name: "file_uploader",
    label: "File Uploader",
    icon: "home",
    group: "General",
    path: "/file-uploader",
  },
  {
    name: "phone_input",
    label: "Phone Input",
    icon: "home",
    group: "General",
  },
  {
    name: "drop_down",
    label: "Drop down",
    icon: "home",
    group: "General",
  },
  {
    name: "header",
    label: "Header",
    icon: "home",
    group: "Primary",
  },
  {
    name: "table",
    label: "Table",
    icon: "home",
    group: "Primary",
  },
  {
    name: "input",
    label: "Input",
    icon: "home",
    group: "Primary",
  },
  {
    name: "file_uploader",
    label: "File Uploader",
    icon: "home",
    group: "Primary",
  },
  {
    name: "phone_input",
    label: "Phone Input",
    icon: "home",
    group: "Primary",
  },
  {
    name: "drop_down",
    label: "Drop down",
    icon: "home",
    group: "Primary",
    path: "dropdown",
  },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeScreen, setActiveScreen] = useState(data[1]);
  const navigate = useNavigate();

  const handleNavigation = (menu) => {
    setActiveScreen(menu);
    navigate(menu.path);
  };

  return (
    <div className="vh-100 collapse-bottom-none border-right">
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
          active={activeScreen}
          expanded={expanded}
          onClick={handleNavigation}
        />
      </Collapsible>
    </div>
  );
};

export default Sidebar;
