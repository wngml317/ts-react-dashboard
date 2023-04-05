import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components"

const Navbar = styled.nav`
    flex: left;
    min-width: 200px;
    min-height: 100vh;
    padding-top: 10px;
    background: #0f0e17;
`
const List = styled.div`
    margin: 0px 10px;
    padding: 10px 20px;
    list-style: none;
`
const PageLink = styled.a<{active: Boolean}>`
    
    display: block;
    margin: 0 calc(20px * -1);
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    border-radius: 4px;

    ${(props) => 
        props.active && 
        css`
            color: #ff8906; 
            font-weight: bold;
        `
    }

    &:hover {
        background: #ff8906;
        transform: translateY(-2px);
        transition: 1s;
    }
    &:not([href]) {
        color: #a7a9be;
        background: revert;
        transform: none;
      }
`

const SideBar = () => {
    const location = useLocation();
    return (
        <Navbar>
            <List>
                <PageLink href="/counter" active={location.pathname.includes("/counter")}>카운터</PageLink>
                <PageLink href="/todo" active={location.pathname.includes("/todo")}>투두리스트</PageLink>
                <PageLink href="/board" active={location.pathname.includes("/board")}>게시판</PageLink>
                <PageLink href="/chart" active={location.pathname.includes("/chart")}>차트</PageLink>
            </List>
        </Navbar>
    )
}

export default SideBar;