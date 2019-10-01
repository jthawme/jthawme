import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import BigList from '../Common/BigList/BigList';
import BigListItem from '../Common/BigList/BigListItem';

const query = graphql`
  query {
    work: allProjectYaml(sort: {fields: order}) {
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

const WorkList = ({ category = false, limit = false }) => {
  const { nodes: work } = useStaticQuery(query).work;

  const filterWork = (item) => {
    if (!category) {
      return true;
    }

    return item.category === category;
  }

  let _limit = limit || work.length;

  return (
    <BigList>
      {
        work.filter(filterWork).slice(0, _limit).map(({ id, title, type, fields, image }) => (
          <BigListItem
            key={ id }
            to={ fields.slug }
            image={ image.childImageSharp.fixed.src }
            text={ title }
            label={ type }
            noSmallImage/>
        ))
      }
    </BigList>
  )
}

export default WorkList;
