import React from 'react';
import PropTypes from 'prop-types';

import {
  layout,
  colours,
  fontSize,
  fontFamily,
  fontWeight,
  mq
} from '../../theme/airways';

const SVGArrowRight = ({ color, ...rest }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...rest}>
    <defs>
      <path
        id="arrow-right_svg__a"
        d="M10.138 11.269l5.088-4.766.005-.004.769-.721L10.138.287a1.144 1.144 0 0 0-1.53.012.976.976 0 0 0-.013 1.433l3.23 3.024H1.09C.488 4.756 0 5.214 0 5.778 0 6.342.488 6.8 1.09 6.8h10.733L8.595 9.824a.976.976 0 0 0 .014 1.432c.42.394 1.1.4 1.529.013z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(4 6)">
      <mask id="arrow-right_svg__b" fill="#fff">
        <use xlinkHref="#arrow-right_svg__a" />
      </mask>
      <use fill="#202020" xlinkHref="#arrow-right_svg__a" />
      <g fill={color} mask="url(#arrow-right_svg__b)">
        <path d="M-4-6h24v24H-4z" />
      </g>
    </g>
  </svg>
);
SVGArrowRight.propTypes = {
  color: PropTypes.string.isRequired
};

const align = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
};

const ItemContainer = ({ children }) => (
  <div
    css={{
      height: '72px',
      padding: `20px ${layout.gutter}`,
      backgroundColor: colours.lightGrey,
      [mq.tablet]: {
        height: '100%',
        padding: '0px',
        backgroundColor: colours.darkerGrey
      },
      ...align
    }}
  >
    {children}
  </div>
);
ItemContainer.propTypes = {
  children: PropTypes.node
};
ItemContainer.defaultProps = {
  children: undefined
};

const Item = ({ children, size, onlyMobile, ...rest }) => (
  <span
    css={{
      ...(size && { flex: size }),
      display: 'inline',
      [mq.tablet]: {
        display: onlyMobile ? 'none' : 'inline'
      },
      ...rest
    }}
  >
    {children}
  </span>
);
Item.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  onlyMobile: PropTypes.bool
};
Item.defaultProps = {
  children: undefined,
  onlyMobile: false,
  size: null
};

const Spacer = ({ onlyMobile }) => (
  <Item width={layout.links.gutter} onlyMobile={onlyMobile} />
);
Spacer.propTypes = {
  onlyMobile: PropTypes.bool
};
Spacer.defaultProps = {
  onlyMobile: false
};

const Text = ({ children }) => (
  <span
    css={{
      textTransform: 'uppercase',
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.body,
      color: [colours.darkGrey, colours.white]
    }}
  >
    {children}
  </span>
);
Text.propTypes = {
  children: PropTypes.node.isRequired
};

const ExternalLink = ({ icon, url, text }) => (
  <a css={{ textDecoration: 'none' }} href={url}>
    <ItemContainer>
      <Item height={layout.iconSize} width={layout.iconSize}>
        {icon}
      </Item>
      <Spacer />
      <Item size={1}>
        <Text>{text}</Text>
      </Item>
      <Spacer onlyMobile />
      <Item onlyMobile height={layout.iconSize} width={layout.iconSize}>
        <SVGArrowRight color={colours.darkerGrey} height="100%" width="100%" />
      </Item>
    </ItemContainer>
  </a>
);

ExternalLink.propTypes = {
  icon: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ExternalLink;
