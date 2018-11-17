/**
 * @prettier
 * @flow
 */

import React, { ReactElement } from 'react';
import capitalize from '../../utils/capitalize';
import { SVG, Img, ImgWrapper } from './styles';
import { IProps, IconsMap } from './types';

import brazil from './img/brazil.svg';
import china from './img/china.svg';
import india from './img/india.svg';
import nicaragua from './img/nicaragua.svg';
import pakistan from './img/pakistan.svg';
import austria from './img/austria.svg';

import spain from './img/spain.svg';
import earth from './img/earth.svg';
import verdaccio from './img/verdaccio.svg';

export const Icons: IconsMap = {
  // flags
  brazil,
  spain,
  china,
  nicaragua,
  pakistan,
  india,
  austria,

  earth,
  verdaccio,
};

const Icon = ({ className, name, img, ...props }: IProps): ReactElement<HTMLOrSVGElement> => {
  const title = capitalize(name);
  return img ? (
    <ImgWrapper className={className} title={title} {...props}>
      <Img src={Icons[name]} alt={title} />
    </ImgWrapper>
  ) : (
    <SVG className={className} {...props}>
      <title>{title}</title>
      <use xlinkHref={`${Icons[name]}#${name}`} />
    </SVG>
  );
};

Icon.defaultProps = {
  size: 'sm',
  img: false,
  pointer: false,
};

export default Icon;
