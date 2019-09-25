import React from 'react';

import classNames from 'classnames';
import YouTube from 'react-youtube';
import Markdown from 'react-markdown';

import HoverLink from '../Common/HoverLink/HoverLink';
import JTImage from '../Common/Image/Image';

import styles from './Project.module.scss';

import img from '../../images/project.jpg';

const Block = ({ className, children, desktopSpan, tabletSpan, mobileSpan = '1 / span 4' }) => {
  const cls = classNames(
    styles.block,
    className
  );

  const style = {
    '--desktop-span': desktopSpan || '1 / span 12',
    '--tablet-span': tabletSpan || '1 / span 6',
    '--mobile-span': mobileSpan || '1 / span 4',
  };

  return <div className={cls} style={style}>{ children }</div>;
}

const ImageBlock = ({ src, alt="", width, height, bgColor, ...props }) => {
  return (
    <Block className={styles.blockImage} {...props}>
      <JTImage
        bgColor={bgColor}
        width={width}
        height={height}
        src={src}
        alt={alt}/>
    </Block>
  )
};

const TextBlock = ({ content, ...props }) => {
  return (
    <Block className={styles.blockText} {...props}>
      <p>
        The lego bricks were the drum sequencer, the guess who was the melody/synthesizer, the paper and pens was the bass<em>line</em> (GET IT!) and the scrabble was the mixer.
      </p>
      <p>
        All of these controllers were processed by a webcam above, and ran through processing to create their output.
      </p>
    </Block>
  )
};

const EmbedBlock = ({ videoId, ...props }) => {
  return (
    <Block className={styles.blockEmbed} {...props}>
      <YouTube
        className={styles.blockEmbedIframe}
        videoId={videoId}/>
    </Block>
  )
};

const renderBlocks = ({ type, alt, file, text, src, desktopSpan }, idx) => {
  switch (type) {
    case 'image':
      return (
        <ImageBlock
          key={ idx }
          alt={ alt }
          bgColor={ file.colors.vibrant }
          desktopSpan={ desktopSpan }
          { ...file.image.fixed }/>
      );
    case 'text':
      return (
        <TextBlock
          key={ idx }
          content={ text }
          desktopSpan={ desktopSpan }/>
      );
    case 'embed':
      return (
        <EmbedBlock
          key={ idx }
          videoId={ src }
          desktopSpan={ desktopSpan }/>
      );
    default:
      return null;
  }
}

const Project = ({ title, description, content }) => {
  return (
    <main className={"page"}>
      <h1 className={styles.title}>{ title }</h1>
      <div className={`${styles.description} large-container`}>
        <Markdown source={description}/>
      </div>
      <div className={styles.content}>
        { content.map(renderBlocks) }
      </div>
      <div className={styles.footer}>
        <HoverLink
          to={'/project'}
          image={img}
          className={[styles.footerLeft, styles.footerLink].join(' ')}>
          <span className={styles.footerLinkTitle}>Previous</span>
          <span className={styles.footerLinkLabel}>Endless Vine</span>
        </HoverLink>
        <HoverLink
          to={'/project'}
          image={img}
          className={[styles.footerRight, styles.footerLink].join(' ')}>
          <span className={styles.footerLinkTitle}>Next</span>
          <span className={styles.footerLinkLabel}>Drum Generates</span>
        </HoverLink>
      </div>
    </main>
  )
};

export default Project;
