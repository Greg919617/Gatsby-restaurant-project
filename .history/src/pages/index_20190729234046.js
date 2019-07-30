import React from "react"
import {Link, graphql} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa";

// inster Line after </layout> <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"  keywords={[`jamaican`, `delivery`, `jerk-island`]}/>
    <h1>Island Jerk</h1>
    <p>Welcome to your new Restaurant website.</p>
  
    <FaGulp />
  </Layout>
);

export default IndexPage
