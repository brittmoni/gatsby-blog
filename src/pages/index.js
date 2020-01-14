import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Gatsby Journey</h1>
    <p>This is a blog site detailing my journey learning Gatsby. Welcome and hope you enjoy!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Contact Me</Link>
  </Layout>
)

export default IndexPage
