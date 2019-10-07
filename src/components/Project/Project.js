import React from 'react';

import classNames from 'classnames';
import YouTube from 'react-youtube';
import Markdown from 'react-markdown';

import HoverLink from '../Common/HoverLink/HoverLink';
import JTImage from '../Common/Image/Image';
import JTVideo from '../Common/Video/Video';

import styles from './Project.module.scss';

const Block = ({ className, children, desktopSpan, tabletSpan, mobileSpan }) => {
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
      <Markdown source={content}/>
    </Block>
  )
};

const EmbedBlock = ({ youtubeId, videoSrc, ...props }) => {
  return (
    <Block className={styles.blockEmbed} {...props}>
      { youtubeId && (
        <YouTube
          className={styles.blockEmbedIframe}
          videoId={youtubeId}/>
      ) }
      { videoSrc && (
        <JTVideo
          className={styles.blockEmbedIframe}
          src={videoSrc.publicURL}/>
      ) }
    </Block>
  )
};

const renderBlocks = ({ type, alt, file, text, youtubeId, gif, videoSrc, desktopSpan, tabletSpan, mobileSpan }, idx) => {
  const spans = { desktopSpan, tabletSpan, mobileSpan };

  switch (type) {
    case 'gif':
      return (
        <ImageBlock
          key={ idx }
          alt={ alt }
          { ...spans }
          src={ gif.url.publicURL }
          width={ gif.width }
          height={ gif.height }/>
      );
    case 'image':
      return (
        <ImageBlock
          key={ idx }
          alt={ alt }
          bgColor={ file.colors.vibrant }
          { ...spans }
          { ...file.image.fixed }/>
      );
    case 'text':
      return (
        <TextBlock
          key={ idx }
          content={ text }
          { ...spans }/>
      );
    case 'embed':
      return (
        <EmbedBlock
          key={ idx }
          youtubeId={ youtubeId }
          videoSrc={ videoSrc }
          { ...spans }/>
      );
    default:
      return null;
  }
}

const Project = ({ title, description, content, pageContext }) => {
  const { next, prev } = pageContext;

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
        { prev ? (
          <HoverLink
            to={prev.slug}
            image={prev.image}
            className={[styles.footerLeft, styles.footerLink].join(' ')}>
            <span className={styles.footerLinkTitle}>Previous</span>
            <span className={styles.footerLinkLabel}>{ prev.title }</span>
          </HoverLink>
        ) : null }
        { next ? (
          <HoverLink
            to={next.slug}
            image={next.image}
            className={[styles.footerRight, styles.footerLink].join(' ')}>
            <span className={styles.footerLinkTitle}>Next</span>
            <span className={styles.footerLinkLabel}>{ next.title }</span>
          </HoverLink>
        ) : null }
      </div>
    </main>
  )
};

export default Project;
