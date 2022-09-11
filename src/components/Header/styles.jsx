import styled from "styled-components";

export const Container = styled.nav`
  height: 80px;
  background: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 100px;

  label {
    svg {
      color: #fff;
      font-size: 22px;
      cursor: pointer;
      display: none;
    }

    @media (max-width: 940px) {
      svg {
        display: block;
      }
    }
  }

  #click {
    display: none;
  }

  @media (max-width: 940px) {
    #click:checked ~ ul {
      left: 0%;
    }
  }
`;

export const Logo = styled.div`
  font-size: 33px;
  color: #fff;
  font-weight: 600;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: 940px) {
    position: fixed;
    top: 80px;
    left: -100%;
    background: #111;
    height: 100vh;
    width: 100%;
    display: block;
    text-align: center;
    transition: all 0.3s ease;
  }
`;

export const MenuItem = styled.li`
  margin: 0 5px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 8px 10px;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      color: #1b1b1b;
      background: #fff;
    }

    &.active {
      color: #1b1b1b;
      background: #fff;
    }
  }

  @media (max-width: 940px) {
    margin: 40px 0;

    a {
      font-size: 20px;
      display: block;

      &:hover {
        color: cyan;
        background: none;
      }

      &.active {
        color: cyan;
        background: none;
      }
    }
  }
`;
