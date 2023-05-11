import React from "react";
import Layout from "../components/layout/Layout";
import profileImage from "../images/sun.jpeg";
import { StaticImage } from "gatsby-plugin-image";
import "./index.css";

export default function Index() {
  const [more, setMore] = React.useState(false);
  return (
    <Layout>
      <>
        <section className="section | about bg-blue">
          <div className="container">
            <div className="even-columns">
              <div className="column-1">
                <div className="frame">
                  <StaticImage src="../images/sun.jpeg" />
                </div>

                <p>
                  <span className="name">Huzaifa Nur</span>
                  <br />
                  <span className="title">Full Stack Javascript Developer</span>
                </p>
              </div>
              <div className="column-2">
                <h2 className="section-heading">About me</h2>
                <p className="description">
                  I am a Mechatronics Engineer who became a web developer.
                  During my bachelors I studied many courses related to
                  programming and computer science and I just loved it. I picked
                  web development as a profession after I grdauated. I worked as
                  software develoer at a software house for around one year.
                </p>
                {more && (
                  <>
                    <p className="description">
                      Then I moved to Karachi for a religious certificate
                      programme in Febraury 2022. While I was away I continued
                      my learning whenever I had time from studies. Now a days I
                      am looking for a Job to resume my web development career.
                    </p>
                    <p className="description">
                      Other than that, I am an absolute introvert and obessisive
                      about my work. I am a perfectionist at heart and it hurts
                      which hurts at times
                    </p>
                    <p className="description">
                      I <strong>TRY</strong> to keep a healthy routine, always
                      wake up early in the morning and start my day with some
                      meditation, walk or some other excercise. I believe health
                      is precious gift and should not take it for granted by
                      taking good care of it.
                    </p>
                  </>
                )}
                <div className="more" onClick={() => setMore(!more)}>
                  {more ? <>show less</> : <> Show more</>}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Prjects</h2>
          </div>
        </section>
        <section className="section bg-blue">
          <div className="container">
            <h2 className="section-heading">Skills</h2>
            <div className="skills-container">
              <div className="row">
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
              </div>
              <div className="row">
                <span>React</span>
                <span>Javascript browser API's</span>
                <span>Node.js</span>
              </div>
            </div>
            <hr />
            <p className="detail">
              I understand sematic <strong>HTML</strong> , a bit of accessibilty
              & a11y practices
            </p>
            <p className="detail">
              I am just becomming comfortable with <strong>CSS</strong>. I have
              made quite a few prjects from{" "}
              <a style={{ color: "blue" }} href="https://frontendmentor.io/">
                frontendmentor.io
              </a>
              , Infact thats what bloated my github account. I have reasonable
              skills with <strong>Flex Box</strong> and <strong>Grid</strong> .
              Whenever I have a chance to make a choice between using plain css
              or a CSS framework. I almost always stick to plain CSS (SASS).
            </p>
            <p className="detail">
              I worked on a couple of <strong>React</strong> projects. I am
              familiar with redux pattern for state management. Also lookd up
              redux toolkit recently. I took a react course very recently called{" "}
              <strong>Joy of React</strong>. You can check my certificate{" "}
              <a
                href="https://courses.joshwcomeau.com/certificate/64197b50fc33dca3e7e5ff06"
                className="block"
              >
                here
              </a>
            </p>
            <p className="detail">
              I try to make use of native browser API's as mcu as I can , try to
              make my own hooks using them instead of looking for npm packages
              all the time. I keep an eye for new JS/CSS features getting added
              to different browsers.
            </p>

            <p className="detail">
              I can make basic CRUP applications using node.js and express. I
              have creaeted various services and deployed them to Heroku, EC2
              and Render
            </p>
          </div>
        </section>
      </>
    </Layout>
  );
}
