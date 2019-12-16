import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage() {

  React.useEffect(() => {
    fetchJSON();
  })
  
  const fetchJSON = () => {
    axios
      .get(`https://www.snorm.co/api/method/auth.php?myusername=jakepeg@gmail.com&mypassword=worm1`)
      .then(res => {
         console.log(res.data);
      })
      .catch(error => {
        console.log(`error = ${error}`);
      });
  };

  return (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-gray-500">Hello</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  );
}

export default IndexPage