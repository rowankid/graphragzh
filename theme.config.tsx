import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { title } from 'process'
import Banner from './components/Banner'


const config: DocsThemeConfig = {
  logo: <span>GraphRAG</span>,
  project: {
    link: 'https://github.com/rowankid/graphragzh'
  },
  docsRepositoryBase: 'https://github.com/rowankid/graphragzh',
  head: () => {
      const { asPath, defaultLocale, locale } = useRouter()
      const { frontMatter } = useConfig()
      console.log(frontMatter)
      const url =
        'https://www.GraphRAG.com.cn' +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
   
      return <>
        <link data-rh="true" rel="icon" href="https://js.langchain.com/img/favicon.ico"></link>
        <meta name="keywords" content="GraphRAG,LLM,chatGPT,应用开发" />
        <meta name="description" content="LangChain中文站，助力大语言模型LLM应用开发、chatGPT应用开发。" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content="LangChain中文站，助力大语言模型LLM应用开发、chatGPT应用开发。" />
      </>
    },
    navbar:{
      extraContent: (
        <Banner/>
      )
    },
    useNextSeoProps:() =>{
      const { asPath } = useRouter()
      var titleTemplate = ''
      if (asPath !== '/') {
        titleTemplate = `%s | GraphRAG:中文文档教程，助力大模型LLM应用开发从入门到精通`
      }else{
        titleTemplate = `GraphRAG:中文文档教程，助力大模型LLM应用开发从入门到精通`
      }
      return {
        'titleTemplate':titleTemplate
      }
    },
  toc: {
    float: true
  }
}

export default config
