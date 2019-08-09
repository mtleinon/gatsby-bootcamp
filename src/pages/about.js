import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout title="About">
    <h2>About</h2>
    <p>Hello, This is gatsby training page</p>
    <p>
      Contact info <Link to="/contact">contact</Link>{" "}
    </p>
  </Layout>
)
