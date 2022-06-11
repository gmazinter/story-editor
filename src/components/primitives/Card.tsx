import { styled } from "solid-styled-components";
import Box, { BoxProps } from "./Box";
import { border, BorderProps } from "styled-system";

export type CardProps = BoxProps & BorderProps;

export default styled(Box)<CardProps>`
	${border}
`;
