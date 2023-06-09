export const defaultTheme = {
  'white': '#FFFFFF',
  'background': '#FAFAFA',
  'base-card': '#F3F2F2',
  'base-input': '#EDEDED',
  'base-button': '#E6E5E5',
  'base-hover': '#8D8686',
  'base-label': '#D7D5D5',
  'base-text': '#574F4D',
  'base-title': '#272221',
  'base-subtitle': '#403937',
  'yellow': '#DBAC2C',
  'yellow-dark': '#C47F17',
  'yellow-light': '#F1E9C9',
  'purple': '#8047F8',
  'purple-dark': '#4B2995',
  'purple-light': '#EBE5F9',
} as const;

import SVG from "react-inlinesvg";
import styled from "styled-components";

interface SVGProps {
  color: string;
  src: any;
}

export const StyledSVG = styled(SVG)<SVGProps>`
  width: ${({ width }) => width || '24px'};
  height: ${({ height }) => height || '24px'};
  & path {
    fill: ${({ color }) => color};
  }
`;
