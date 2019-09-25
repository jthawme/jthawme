import React from "react"
import { graphql } from "gatsby";

import SEO from "../components/Common/seo"
import Professional from "../components/Professional/Professional";

const ProfessionalPage = ({ data }) => (
  <>
    <SEO title="Professional" />
    <Professional {...data.data}/>
  </>
)

export default ProfessionalPage

export const query = graphql`
  query {
    data: dataYaml(fields: {slug: {eq: "professional"}}) {
      clients
    }
  }
`;
