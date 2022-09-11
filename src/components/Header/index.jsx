import React from "react";
import { Container, Logo, Menu, MenuItem } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <Container>
      <Logo>Brand</Logo>

      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <FontAwesomeIcon icon={faBars} />
      </label>

      <Menu>
        <MenuItem>
          <a className="active" href="#">
            Home
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#">About</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Services</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Gallery</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Feedback</a>
        </MenuItem>
      </Menu>
    </Container>
  );
}
