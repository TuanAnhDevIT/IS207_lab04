import './App.css';
// import "typeface-roboto";
import React, { useState } from "react";
import Drawer from "@mui/masterial/Drawer";
import Button from "@mui/masterial/Button";
import List from "@mui/masterial/List";
import ListItem from "@mui/masterial/ListItem";
import ListItemText from "@mui/masterial/ListItemText";
import { BrowerRouter as Router, Route, Switch, Link } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

export default function App({ links }) 
{
    const [open, setOpen] = useState(false);

    function toggleDrawer({ type, key }){
    if (type === "keydown" && (key === "Tab" || key === "shift")) {
      return;
    }

    setOpen(!open);
  }

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {links.map((link) => (
              <listItem button key={link.url} component={link} to={link.url}>
                <Switch>
                  <Route
                    exact
                    path={link.url}
                    render={() => (
                      <listItemText
                        primary={link.name}
                        primaryTypographyProps={{ color: "primary" }}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    render={() => <ListItemText primary={link.name} />}
                  />
                </Switch>
              </listItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}

App.defaultProps = {
  link: [
    { url: "/first", name: "First Page" },
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" },
  ],
};
