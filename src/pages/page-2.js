import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact Me</h1>
    <p>Following are ways to contact me via email or social media: </p>
    <ul>
      <li><a href="www.linkedin.com/in/bfrankl">LinkedIn</a></li>
      <li><a href="www.github.com/brittmoni">Github</a></li>
      <li><a href="mailto:brittfrank77@gmail.com" target="_top">Email</a></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
