import styled from 'styled-components'

export const Nav = styled.nav `
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    height: 80px;
`

export const Link = styled.link`
    color: #000;
    text-decoration: none;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.hover {
        color: #fff;
        background: #000;
    }
`
export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`