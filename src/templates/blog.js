import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//         author
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "D.M.YYYY")
      body {
        json
      }
    }
  }
`

export default ({ data }) => {
  console.log("data", data)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        try {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return <img alt={alt} src={url} />
        } catch {
          console.log("data.target.sys", node.data.target.sys)
          return (
            <p style={{ color: "red" }}>
              {" "}
              ERROR: "embedded-asset-block" failed: data.target.sys:
              {JSON.stringify(node.data.target.sys)}{" "}
            </p>
          )
        }
      },
    },
  }
  return (
    <Layout title={data.contentfulBlogPost.title}>
      <div className={blogStyles.title}>
        <h3>{data.contentfulBlogPost.title}</h3>
        <p>
          {data.contentfulBlogPost.publishedDate}
          {/* {data.markdownRemark.frontmatter.author} */}
        </p>
      </div>
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
      {/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div> */}
    </Layout>
  )
}
// export default ({ data }) => {
//   console.log("data", data)

//   return (
//     <Layout>
//       <div className={blogStyles.title}>
//         <h3>{data.markdownRemark.frontmatter.title}</h3>
//         <p>
//           {/* {data.markdownRemark.frontmatter.date} -{" "} */}
//           {data.markdownRemark.frontmatter.publishedDate}
//           {/* {data.markdownRemark.frontmatter.author} */}
//         </p>
//       </div>
//       {/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div> */}
//     </Layout>
//   )
// }
