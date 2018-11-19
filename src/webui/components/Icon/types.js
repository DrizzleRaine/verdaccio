/**
 * @prettier
 * @flow
 */

export interface IIconsMap {
  brazil: string;
  spain: string;
  china: string;
  nicaragua: string;
  pakistan: string;
  austria: string;
  india: string;
  earth: string;
  verdaccio: string;
  [key: string]: string;
}

export interface IProps {
  name: $Keys<typeof IIconsMap>;
  className?: string;
  onClick?: (event: SyntheticMouseEvent<SVGElement | HTMLSpanElement>) => void;
  size?: 'sm' | 'md';
  pointer?: boolean;
  img?: boolean;
}
