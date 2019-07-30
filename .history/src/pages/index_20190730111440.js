import React from "react"
import {Link, graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
// import { FaGulp } from "react-icons/fa";
import Info from "../components/Home/Info";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"  keywords={[`jamaican`,
     `delivery`, `jerk-island`]}/>
    <BackgroundSection img={data.img.childImageSharp.fluid}
    />
    <Info/>
  </Layout>
);

export const query = graphql`

  {
    img:file(relativePath:{eq:
    "default-aloe.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

`;
export default IndexPage
