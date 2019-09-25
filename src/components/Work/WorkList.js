import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import BigList from '../Common/BigList/BigList';
import BigListItem from '../Common/BigList/BigListItem';

const query = graphql`
  query {
    allProjectYaml {
      nodes {
        id
        title
        type
        category
        fields {
          slug
        }
        image {
          childImageSharp {
            fixed(width: 1000) {
              src
            }
          }
        }
      }
    }
  }
`;

const WorkList = ({ category = false }) => {
  const work = useStaticQuery(query).allProjectYaml.nodes;

  const filterWork = (item) => {
    if (!category) {
      return true;
    }

    return item.category === category;
  }

  return (
    <BigList>
      {
        work.filter(filterWork).map(({ id, title, type, fields, image }) => (
          <BigListItem
            key={ id }
            to={ fields.slug }
            image={ image.childImageSharp.fixed.src }
            text={ title }
            label={ type }/>
        ))
      }
    </BigList>
  )
}

export default WorkList;
