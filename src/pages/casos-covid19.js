import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import CoronaVirus from "../components/CoronaVirus"

const CasosCovid19 = () => (
  <>
    <Header />
    <Layout>
      <SEO
        title="Casos Covid19"
        image="/assets/img/guilherme-icon.png"
        description="Informações sobre os casos de Covid19 no Brasil, nos seus estados e respectivas cidades."
      />
      <CoronaVirus />
    </Layout>
  </>
)

export default CasosCovid19
