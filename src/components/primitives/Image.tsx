import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { BoxProps } from "./Box";
import { space, layout } from "styled-system";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image: Component<ImageProps> = ({ src, alt = "", className }) => {
  return <img class={className} src={src} alt={alt} />;
};

export default styled(Image)<BoxProps>`
  ${space};
  ${layout};
`;
