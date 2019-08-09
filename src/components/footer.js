import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"
export default ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={footerStyles.footer}>
      Footer Created by {data.site.siteMetadata.author}: {children}
    </div>
  )
}
