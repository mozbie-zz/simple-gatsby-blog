import React from 'react'
import {graphql, Link} from 'gatsby'

import Layout from '../components/layout'

const Template = ({data}) => {
  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html    
  return (
    <Layout>
      <Link to="/">Go Back</Link>
      <hr />
      <h1>{title}</h1>
      <div className="blogpost"
       dangerouslySetInnerHTML={{ __html: html }} 
      />      
    </Layout>
  )
}

export const pageQuery = graphql`
query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title       
      }
    }
  }
`

export default Template