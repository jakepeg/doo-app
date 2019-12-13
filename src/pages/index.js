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
      .get(`http://doo.zone/api/method/auth.php?myusername=jakepeg@gmail.com&mypassword=worm1`)
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
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  );
}

export default IndexPage