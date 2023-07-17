import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div style={{backgroundColor: 'black', color: 'white'}}>{`<Formalise/>`}</div>,
  project: {
    link: 'https://github.com/stainedatom/formalise',
  },
  docsRepositoryBase: 'https://github.com/stainedatom/formalise-www',
  footer: {
    text: `MIT License ${new Date().getFullYear()} © Panhaboth Kun`,
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  darkMode: false,
  useNextSeoProps(){
    return {
      titleTemplate: '%s - Formalise'
    }
  }
}

export default config
