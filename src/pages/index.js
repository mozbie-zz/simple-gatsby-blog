import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    < Layout >
      <h1>Table of contents</h1>
      {posts
        .map(({ node: post }) => (
          <div            
            style={{ border: '1px solid #eaecee'}}
            key={post.id}
          >
            <p style={{ padding: '10px', margin: '0' }}>
              <Link to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>              
            </p>      
          </div>
        ))}
    </Layout >
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title            
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
