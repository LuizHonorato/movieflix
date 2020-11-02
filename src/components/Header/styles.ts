import styled from 'styled-components';

export const Header = styled.header`
  background: #000;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    margin-left: 40px;
  }

  ul li {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-left: 40px;
  }
  ul li:first-child {
    margin: 0;
  }

  ul li a {
    text-decoration: none;
    color: #fff;
  }
`;

export const NavContent = styled.div`
  display: flex;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: #fff;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease 0s, visibility 0.2s ease 0s;
  z-index: 1;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
  }

  ul li {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    margin-left: 0;
  }

  ul li div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
  }

  ul li div span,
  strong {
    color: #000;
    font-weight: normal;
    font-size: 15px;
  }

  ul li a {
    color: black;
  }
`;

export const AvatarArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-left: 10px;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  &:hover ${DropdownContent} {
    visibility: visible;
    opacity: 1;
  }
`;
