import React from 'react';
import { createComponentWithProxy } from 'react-fela';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
  space,
  width,
  fontSize,
  color,
  fontWeight,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
  hover,
  focus,
  active,
  disabled,
  style,
  responsiveStyle
} from 'styled-system';
import flame from './img/flame-white.png';

const underline = ({ underline }) =>
  underline === false
    ? { textDecoration: 'none' }
    : underline && { textDecoration: 'underline' };

// not to collide with flex's alignItems
const textAlign = responsiveStyle({ prop: 'ta', cssProperty: 'textAlign' });

const textRules = props => ({
  ...props.css,
  ...space(props),
  ...underline(props),
  ...fontSize(props),
  ...color(props),
  ...fontWeight(props),
  ...hover(props),
  ...focus(props),
  ...active(props),
  ...disabled(props),
  ...style({ prop: 'float' })(props),
  ...(props.pointer && { cursor: 'pointer' }),
  ...(props.grow && {
    transition: 'transform 0.25s ease-out',
    ':hover': { transform: `scale(${1 + 0.1 * Number(props.grow)})` },
    ':active': { transform: `scale(${1 - 0.05 * Number(props.grow)})` }
  })
});

const boxRules = props => ({
  ...textRules(props),
  ...width(props),
  ...textAlign(props),
  ...flex(props),
  ...responsiveStyle({ cssProperty: 'flexBasis' })(props),
  ...alignSelf(props),
  ...borderRadius(props),
  ...borderColor(props),
  ...borderWidth(props),
  ...boxShadow(props),
  ...style({ prop: 'overflow' })(props),
  ...style({ prop: 'opacity' })(props),
  ...style({ prop: 'wordBreak' })(props),
  ...(props.bgUrl && {
    'background-image': `url(${props.bgUrl})`,
    'background-position': 'center',
    'background-size': 'cover'
  }),
  ...style({
    prop: 'bgGrad',
    cssProperty: 'background-image',
    key: 'gradients'
  })(props),
  ...(props.centerX && { marginLeft: 'auto', marginRight: 'auto' }),
  ...(props.centerY && { marginTop: 'auto', marginBottom: 'auto' }),
  ...(props.columnContainer && {
    marginLeft: `-${space({ ml: props.columnContainer }).marginLeft}`,
    marginRight: `-${space({ mr: props.columnContainer }).marginRight}`
  }),
  ...(props.mw1000 && { maxWidth: '1000px' })
});

export const Box = createComponentWithProxy(boxRules, 'div');
export const LinkBox = createComponentWithProxy(
  props => ({
    display: 'block',
    ...boxRules(props)
  }),
  Link
);

export const Text = createComponentWithProxy(textRules, 'span');

const flexRules = props => ({
  ...boxRules(props),
  ...responsiveStyle({ cssProperty: 'alignItems' })(props),
  ...justifyContent(props),
  ...flexWrap(props),
  ...flexDirection(props),
  ...style({ prop: 'alignContent' })(props),
  display: props.inline ? 'inline-flex' : 'flex'
});

export const Flex = createComponentWithProxy(flexRules, 'div');

export const LayerStack = createComponentWithProxy(
  props => ({
    ...boxRules(props),
    position: 'relative'
  }),
  'div'
);

export const Layer = createComponentWithProxy(
  props => ({
    ...flexRules(props),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    'pointer-events': 'none',
    '> *': {
      'pointer-events': 'initial'
    }
  }),
  'div'
);

const unstyledInput = ({ onEnter, ...props }) => (
  <input
    type="text"
    {...props}
    onKeyUp={event => event.key === 'Enter' && onEnter()}
  />
);

export const Input = createComponentWithProxy(
  props => ({
    ...space({ p: 1 }),
    ...space(props),
    ...fontSize(props),
    ...color(props),
    ...fontWeight(props),
    ...textAlign(props),
    ...props.css,
    display: 'block',
    borderBottom: 'solid 1px transparent',
    ':focus': { borderBottom: `solid 1px ${props.theme.colors.main}` }
  }),
  unstyledInput
);

export const Spinner = createComponentWithProxy(
  (props, renderer) => ({
    ...boxRules(props),
    backgroundColor: color(props).color || props.theme.colors.main,
    width: props.size || '1em',
    height: props.size || '1em',
    borderRadius: '100%',
    animationName: {
      '0%': {
        transform: `scale(${props.minScale || 0})`,
        opacity: props.maxOpacity || 1
      },
      '100%': { transform: 'scale(1)', opacity: props.minOpacity || 0 }
    },
    animationDuration: props.duration || '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    ...(props.alternate && { animationDirection: 'alternate' })
  }),
  'div'
);

const transitionAnimation = anim => state =>
  ({ entering: anim, exiting: { '0%': anim['100%'], '100%': anim['0%'] } }[
    state
  ]);

const fadingTransition = transitionAnimation({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

export const Fading = ({
  visible,
  component: Component = Box,
  duration = 500,
  ...props
}) => (
  <Transition in={visible} mountOnEnter unmountOnExit timeout={duration}>
    {state => (
      <Component
        css={{
          animationName: fadingTransition(state),
          animationDuration: `${duration / 1000}s`,
          opacity: { entered: 1, entering: 1, exited: 0, exiting: 0 }[state]
        }}
        {...props}
      />
    )}
  </Transition>
);

export const Button = ({ iconName, children, bg = 'grad', ...props }) => (
  <Flex
    px={2}
    pointer
    grow
    borderRadius="regular"
    {...(bg === 'grad' && { bgGrad: 'main' }) || { bg }}
    inline
    alignItems="center"
    {...props}
  >
    {iconName && (
      <Text mr="0.3em">
        <i className={`ion-${iconName}`} />
      </Text>
    )}
    {children}
  </Flex>
);

export const Logo = () => (
  <Box ta="center">
    <img src={flame} style={{ height: '1em' }} alt="" />
    <Box mt="-0.5em" mb="-0.3em">
      <Text>wild</Text>
      <Text fontWeight={800}>flame</Text>
      <Text css={{ fontSize: '0.5em', width: 0, display: 'inline-block' }}>
        .co
      </Text>
    </Box>
  </Box>
);
