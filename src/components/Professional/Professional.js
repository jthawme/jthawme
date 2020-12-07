import React from "react"

import Title from "../Common/Title/Title"
import Row from "../Common/Row/Row"

import styles from "./Professional.module.scss"

import BigList from "../Common/BigList/BigList"
import BigListItem from "../Common/BigList/BigListItem"

const totalYears = new Date().getFullYear() - 2011

const Professional = ({ clients, noteworthy, experience }) => {
  return (
    <main className={"page"}>
      <Row title={<Title>Introduction</Title>}>
        <p className="large">
          I have been a <span className="highlight">Web Developer</span> for{" "}
          <span className="little-dev-joke">
            (new Date().getFullYear() - 2011) =
          </span>{" "}
          <span className="highlight">{totalYears} years</span> now and have
          worked on projects small and large, in studios small and large.
        </p>
        <p className="large">
          Primarily working as a{" "}
          <span className="highlight">front end developer</span> using{" "}
          <span className="highlight">Javascript</span> and specialising in{" "}
          <span className="highlight">React.js</span>, I also have non trivial
          experience in working with databases, server infrastructure, back end
          technologies and even further more creative outlets such as Physical
          Computing, Creating Coding and Graphic Design.
        </p>
      </Row>
      <Row title={<Title>Clients</Title>}>
        <ul className={styles.colList}>
          {clients.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Row>
      <Row className={styles.double}>
        <Row
          className={styles.doubleItem}
          title={<Title>Job Experience</Title>}
        >
          <ul className={styles.smallList}>
            {experience.map(({ title, subtitle, date }) => (
              <li className={styles.smallListItem} key={title}>
                <span className={styles.smallListItemTitle}>{title}</span>
                <span className={styles.smallListItemSubtitle}>{subtitle}</span>
                <span className={styles.smallListItemSubtitle}>{date}</span>
              </li>
            ))}
          </ul>
        </Row>

        <Row className={styles.doubleItem} title={<Title>Noteworthy</Title>}>
          <BigList>
            {noteworthy.map(
              ({ title, subtitle, info, date, file, link }, idx) => {
                return (
                  <BigListItem
                    to={link}
                    text={title}
                    label={subtitle}
                    vertical
                    key={idx}
                  />
                )
              }
            )}
          </BigList>
        </Row>
      </Row>
      {/* <Row
        title={<Title>Noteworthy</Title>}>
        <ul className={styles.colList}>
          { clients.map(c => <li key={c}>{ c }</li>) }
        </ul>
      </Row> */}
    </main>
  )
}

export default Professional
