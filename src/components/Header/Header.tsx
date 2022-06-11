import type { Component } from "solid-js";
import { styled } from "solid-styled-components";

export const Header: Component = () => {
	return <HeaderContainer>i am the best editor app out there</HeaderContainer>;
};

const HeaderContainer = styled("div")`
	background-color: red;
`;
