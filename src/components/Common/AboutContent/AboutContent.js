import React, { useState, useEffect } from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import LatestTrack from "./LatestTrack"

import styles from "./AboutContent.module.scss"
import HoverLink from "../HoverLink/HoverLink"

const query = graphql`
  query {
    content: dataYaml(fields: { slug: { eq: "misc" } }) {
      me {
        image {
          childImageSharp {
            fixed(width: 1000) {
              src
            }
          }
          publicURL
        }
      }
      travel {
        image {
          childImageSharp {
            fixed(width: 1000) {
              src
            }
          }
          publicURL
        }
      }
    }
  }
`

const rand = arr => {
  return arr[Math.floor(arr.length * Math.random())]
}

const getImage = image => {
  console.log(image)
  return image.childImageSharp
    ? image.childImageSharp.fixed.src
    : image.publicURL
}

const AboutContent = ({ small = false }) => {
  const { content } = useStaticQuery(query)

  const [meImg, setMeImg] = useState(false)
  const [travelImg, setTravelImg] = useState(false)

  useEffect(() => {
    setMeImg(rand(content.me))
    setTravelImg(rand(content.travel))
  }, [content.me, content.travel])

  return (
    <>
      <p className={styles.paragraph}>
        <HoverLink
          image={meImg ? getImage(meImg.image) : null}
          to={small ? "/about" : "https://twitter.com/jthawme"}
        >
          I am
        </HoverLink>{" "}
        a full stack developer living in London, but born and raised in the
        lovely town of Shrewsbury. I am currently looking for contracts across
        creative coding, web development or installation projects.
      </p>
      {small ? null : (
        <>
          <p className={styles.paragraph}>
            I like making things that people will use, or that make people happy
            or have fun with. I don't do it as much as I would like to though. I
            like making things "just 'cos".
          </p>
          <p className={styles.paragraph}>
            Besides work, I love music. I'm currently listening to{" "}
            <LatestTrack />. I also love travelling, for memories like{" "}
            <HoverLink
              image={travelImg ? getImage(travelImg.image) : null}
              to="https://twitter.com/jthawme"
            >
              this
            </HoverLink>
            , although I haven't done it as much as I'd want.
          </p>
          <p className={styles.paragraph}>
            This about page gets updated every so often, because I come back and
            look and think "Damn, I gave up on that I guess"
          </p>
          <p className={styles.paragraph}>
            If you want to see a more professional overview, please check out{" "}
            <Link to="/professional">this link</Link>.
          </p>
        </>
      )}
    </>
  )
}

export default AboutContent
