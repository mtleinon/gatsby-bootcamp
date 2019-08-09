import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import "../styles/index.scss"

export default () => (
  <Layout title="Home">
    <h2>Hello</h2>
    <p>This is a test page for Gatsby</p>
    <p>
      Contact page: <a href="/contact">contact me</a>.
    </p>
    <p>
      Contact page: <Link to="/contact">contact me with Link</Link>.
    </p>
  </Layout>
)
