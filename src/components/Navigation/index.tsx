import { FC } from "react";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
        label="Квадрат"
        value="square"
        icon={<CheckBoxOutlineBlankIcon sx={{ fontSize: 30 }} />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Треугольник"
        value="triangle"
        icon={<ChangeHistoryIcon sx={{ fontSize: 32 }} />}
        component={Link}
        to="/triangle"
      />
      <BottomNavigationAction
        label="н/д"
        value="not-found1"
        icon={<HelpOutlineIcon sx={{ fontSize: 30 }} />}
      />
      <BottomNavigationAction
        label="н/д"
        value="not-found2"
        icon={<HelpOutlineIcon sx={{ fontSize: 30 }} />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
