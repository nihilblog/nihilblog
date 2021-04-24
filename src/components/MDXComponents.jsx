import React from 'react';
import { A } from './PostComponents/A';
import { Bold } from './PostComponents/Bold';
import { Char } from './PostComponents/Char';
import { Code } from './PostComponents/Code';
import { Details } from './PostComponents/Details';
import { Dl } from './PostComponents/Dl';
import { Em } from './PostComponents/Em';
import { Gray } from './PostComponents/Gray';
import { H } from './PostComponents/H';
import { Image } from './PostComponents/Image';
import { Kbd } from './PostComponents/Kbd';
import { Message } from './PostComponents/Message';
import { NoteBottom } from './PostComponents/NoteBottom';
import { NoteTop } from './PostComponents/NoteTop';
import { Ol } from './PostComponents/Ol';
import { P } from './PostComponents/P';
import { Q } from './PostComponents/Q';
import { Quote } from './PostComponents/Quote';
import { Score } from './PostComponents/Score';
import { Spoiler } from './PostComponents/Spoiler';
import { Strike } from './PostComponents/Strike';
import { Strong } from './PostComponents/Strong';
import { Ul } from './PostComponents/Ul';
import { Youtube } from './PostComponents/Youtube';
import { Prism } from './PostComponents/Prism';

const MDXComponents = {
  h1: props => <H type='1' {...props} />,
  h2: props => <H type='2' {...props} />,
  h3: props => <H type='3' {...props} />,
  h4: props => <H type='4' {...props} />,
  inlineCode: props => <Code {...props} />,
  p: props => <P {...props} />,
  img: props => <Image {...props} />,
  a: props => <A href={props.href} rel={props.rel} type='blog'>{props.children}</A>,
  del: props => <Strike {...props} />,
  strong: props => <Strong {...props} />,
  em: props => <Em {...props} />,
  ol: props => <Ol {...props} />,
  ul: props => <Ul {...props} />,
  pre: props => <Prism {...props} />,
  H,
  Code,
  A,
  P,
  Image,
  Strong,
  Strike,
  Em,
  Ol,
  Ul,
  Dl,
  Score,
  Gray,
  Details,
  Bold,
  Kbd,
  Char,
  Message,
  NoteTop,
  NoteBottom,
  Q,
  Quote,
  Spoiler,
  Youtube,
};

export default MDXComponents;