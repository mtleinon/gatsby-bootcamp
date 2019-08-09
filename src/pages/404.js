import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout title="Page not found">
    <h2>Page not found</h2>
    <p>
      <Link to="/">Head home</Link>
    </p>
  </Layout>
)
