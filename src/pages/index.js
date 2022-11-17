// Stap 1: Importeer React
import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Inghelbrecht Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="https://source.unsplash.com/random/800x600"
      />
       <StaticImage
        alt="Een Gatsby astronaut"
        src="../images/040.png"
      />
      </Layout>
      {/* <title>Home Page</title>
      <h1>Welcome to Inghelbrecht Agency!</h1>
      <Link to="/about">About page</Link>
      <p>Lorem ipsum</p> */}
    </main>
  )
}



// Stap 3: Exporteer je component
export default IndexPage