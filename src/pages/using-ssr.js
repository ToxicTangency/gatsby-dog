import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>Разные пёсели</h1>
      <img
        style={{ width: "300px" }}
        alt="A random dog"
        src={serverData.message}
      />
      <p>Тут разные собаки</p>
      {/* <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p> */}
      <Link to="/">На главную</Link>
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
