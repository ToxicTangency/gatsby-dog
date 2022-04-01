import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>

      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      <div className="posts">
        <Link to="/using-ssr">Тут разные пёсели</Link>
        {nodes.map(post => {
          const { category, title, url, image } = post.frontmatter
          const img = getImage(image)
          return (
            <div key={post.id} className="post">
              <GatsbyImage image={img} alt={title} />
              <Link to={`/${category}/${url}`}>{title}</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 100, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`
