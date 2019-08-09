import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "D.M.YYYY")
          }
        }
      }
    }
  `)

  // const data = useStaticQuery(graphql`
  //   {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           html
  //           excerpt
  //           fileAbsolutePath
  //           id
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  console.log("data", data)

  return (
    <Layout title="Blog">
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li className={blogStyles.post} key={edge.node.title}>
            <Link to={"/blog/" + edge.node.slug}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
