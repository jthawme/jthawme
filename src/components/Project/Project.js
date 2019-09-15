import React from 'react';

import classNames from 'classnames';
import YouTube from 'react-youtube';

import HoverLink from '../Common/HoverLink/HoverLink';

import styles from './Project.module.scss';

import img from '../../images/project.jpg';

const Block = ({ className, children, desktopSpan = '1 / span 12', tabletSpan = '1 / span 6', mobileSpan = '1 / span 4' }) => {
  const cls = classNames(
    styles.block,
    className
  );

  const style = {
    '--desktop-span': desktopSpan,
    '--tablet-span': tabletSpan,
    '--mobile-span': mobileSpan,
  };

  return <div className={cls} style={style}>{ children }</div>;
}

const ImageBlock = ({ src, ...props }) => {
  return (
    <Block className={styles.blockImage} {...props}>
      <img src={src}/>
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

const Project = ({}) => {
  return (
    <main className={"page"}>
      <h1 className={styles.title}>Play</h1>
      <div className={styles.description}>
        <p className="large">
          A table of instruments designed for anyone to make a song they could be proud of. Designed from the same school of thought as things like tonepads, these <em>instruments</em> were able to let anyone (musically skilled or not) create a melody, a drum backing, a bass line and to choose the sounds on the <em>mixer</em>.
        </p>
        <p className="large">
          All the instruments were in the same key and could not go outside of it, which allowed any arrangement to sound like it worked. Users could then print their song out, for a unique keepsake.
        </p>
      </div>
      <div className={styles.content}>
        <ImageBlock
          src={img}/>
        <TextBlock
          desktopSpan="2 / span 5"
          />
        <ImageBlock
          src={img}
          desktopSpan="8 / span 4"/>
        <ImageBlock
          src={img}
          desktopSpan="1 / span 7"/>
        <ImageBlock
          src={img}
          desktopSpan="10 / span 3"/>
        <EmbedBlock
          videoId={'ka8wUBGli6A'}/>
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
