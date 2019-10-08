import React from "react"

import { graphql } from "gatsby";

import SEO from "../components/Common/seo"
import Project from "../components/Project/Project";

const ProjectPage = ({ data, pageContext }) => {
  console.log(data.project);
  return (
    <>
      <SEO title="Project" image={data.project.socialImage.childImageSharp.fixed.src} />
      <Project {...data.project} pageContext={pageContext}/>
    </>
  )
};

export default ProjectPage

export const query = graphql`
  query($slug: String) {
    project: projectYaml(fields: {slug: {eq: $slug}}) {
      id
      title
      description
      socialImage: image {
        childImageSharp {
          fixed(width: 1600) {
            src
          }
        }
      }
      content {
        type
        alt
        desktopSpan
        tabletSpan
        mobileSpan
        text
        youtubeId
        videoSrc {
          publicURL
        }
        file {
          colors {
            vibrant
            darkVibrant
            lightVibrant
            muted
            darkMuted
            lightMuted
          }
          image: childImageSharp {
            id
            fixed(quality: 100, width: 950) {
              width
              height
              src
              srcSet
              srcWebp
            }
          }
        }
        gif {
          width
          height
          url {
            publicURL
          }
        }
      }
    }
  }
`;
