import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

type tLinks = {
  path: string;
  title: string;
  disabled: boolean;
};

const links: tLinks[] = [
  { path: "/", title: "Квадрат", disabled: false },
  { path: "/triangle", title: "Треугольник", disabled: false },
  { path: "/not-found", title: "н/д", disabled: true },
];

export default function TabsShape() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#225588" }}>
      <Tabs textColor="inherit" value={value} onChange={handleChange} centered>
        {links.map((link, id) => (
          <Tab
            key={id}
            disabled={link.disabled}
            label={
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={link.path}
              >
                {link.title}
              </Link>
            }

            sx={{
                color: (theme) =>
                  link.disabled
                    ? theme.palette.text.disabled
                    : "white",
              }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
