import React from "react"

import { graphql } from "gatsby";

import SEO from "../components/Common/seo"
import Project from "../components/Project/Project";

const ProjectPage = ({ data }) => (
  <>
    <SEO title="Project" />
    <Project {...data.project}/>
  </>
)

export default ProjectPage

export const query = graphql`
  query($slug: String) {
    project: projectYaml(fields: {slug: {eq: $slug}}) {
      id
      title
      description
      content {
        type
        alt
        desktopSpan
        text
        src
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
      }
    }
  }
`;
