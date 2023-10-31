import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div><div style={{backgroundColor: 'black', color: 'white', display: 'inline-block'}}>{`<Formalise/>`}</div><div style={{fontWeight: 'bold', borderRadius: '5px', color: 'white', backgroundColor: '#7500fa', width: 'fit-content', padding: '0.2rem 0.5rem', display: 'inline-block', fontSize: '0.5rem', marginLeft: '0.2rem'}}>v2.0</div></div>,
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
    text: null
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'light'
  },
  useNextSeoProps(){
    return {
      titleTemplate: '%s - Formalise'
    }
  }
}

export default config
