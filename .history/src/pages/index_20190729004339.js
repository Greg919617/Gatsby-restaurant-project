import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa";

// inster Line after </layout> <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
const IndexPage = () => (
  <Layout>
    <SEO title="Home"  keywords={[`jamaican`, `delivery`, `jerk-island`]}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  
    <FaGulp />
  </Layout>
);

export default IndexPage
