import React from "react"
import { graphql } from "gatsby";

import SEO from "../components/Common/seo"
import Professional from "../components/Professional/Professional";

const ProfessionalPage = ({ data }) => (
  <>
    <SEO title="Professional" />
    <Professional {...data.content}/>
  </>
)

export default ProfessionalPage

export const query = graphql`
  query {
    content: dataYaml(fields: {slug: {eq: "professional"}}) {
      id
      clients
      noteworthy {
        title
        subtitle
        info
        date
        file {
          image: childImageSharp {
            id
            fixed(quality: 100, width: 950) {
              src
            }
          }
        }
      }
      experience {
        date
        subtitle
        title
      }
    }
  }
`;
