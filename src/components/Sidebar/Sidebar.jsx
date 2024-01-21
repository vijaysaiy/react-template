import {
  Collapsible,
  Heading,
  Icon,
  VerticalNav,
} from "censa_front_end_library";
import React from "react";
import Logo from "../../assets/censa_logo.svg";
const data = [
  {
    name: "header",
    label: "Header",
    icon: "home",
    group: "General",
    subMenu: [
      {
        name: "profile.personal",
        label: "Personal",
        count: 5,
      },
      {
        name: "profile.are_team",
        label: "Care Team",
        count: 10,
      },
      {
        name: "profile.goals",
        label: "Goals",
        count: 5,
      },
      {
        name: "profile.care_plans",
        label: "Care Plans",
        count: 5,
      },
    ],
  },
  {
    name: "table",
    label: "Table",
    icon: "home",
    group: "General",
  },
  {
    name: "input",
    label: "Input",
    icon: "home",
    group: "General",
  },
  {
    name: "file_uploader",
    label: "File Uploader",
    icon: "home",
    group: "General",
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
  },
];
const Sidebar = ({ setActiveScreen, activeScreen }) => {
  const [expanded, setExpanded] = React.useState(true);

  const onClickHandler = (menu) => {
    console.log("menu-clicked: ", menu);
    setActiveScreen(menu);
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
          onClick={onClickHandler}
        />
      </Collapsible>
    </div>
  );
};

export default Sidebar;
