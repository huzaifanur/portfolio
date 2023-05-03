import React from "react";
import Layout from "../components/layout/Layout";
import "./index.css";

export default function index() {
  return (
    <Layout>
      <>
        <section className="section | about bg-blue">
          <div className="container">
            <div className="even-columns">
              <div className="column-1">
                <img className="frame" src="./sun.jpg" alt="sun" />
                <p>
                  <span className="name">Huzaifa Nur</span>
                  <br />
                  <span className="title">Full Stack Javascript Developer</span>
                </p>
              </div>
              <div className="column-2">
                <h2 className="section-heading">About me</h2>
                <p className="description">
                  I am Huzaifa. I am a Mechatronics Engineer and I know some
                  javascript. During my bachelors I studied many courses related
                  to programming and computer science and I just loved it. I
                  picked web development as a profession after I grdauated. I
                  worked as software develoer at a software house for around one
                  year. Then I moved to Karachi for a religious certificate
                  programme in Febraury 2022. While I was away I continued my
                  learning whenever I had time from studies. Now a days I am
                  looking for a Job to resume my web development career.
                </p>
                <p className="description">
                  Aprt from my professional life, I am an absolute introvert,
                  enjoy my personal time, obessisive about whatever I do. I am a
                  perfectionist and it hurts me as a developer sometime. and I
                  beleive it really hurts my who born and raised in Lahore.
                </p>
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
          </div>
        </section>
      </>
    </Layout>
  );
}
