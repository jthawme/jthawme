import React from "react"

import { graphql } from 'gatsby';

import SEO from "../components/Common/seo"
import Things from "../components/Things/Things";

const ThingsPage = ({ data }) => (
  <>
    <SEO title="Things" />
    <Things {...data.content}/>
  </>
)

export default ThingsPage

export const query = graphql`
  query {
    content: dataYaml(fields: {slug: {eq: "misc"}}) {
      sketches {
        url
        text
      }
    }
  }
`;
