import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import layoutStyles from "./layout.module.scss"
import Head from "./head"

export default ({ title, children }) => (
  <div className={layoutStyles.container}>
    <Head title={title}></Head>
    <Header />
    <div className={layoutStyles.content}>{children}</div>
    <Footer />
  </div>
)
