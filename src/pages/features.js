import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/layout'
import TabList from '../components/tabs/TabList'
import Tab from '../components/tabs/Tab'
import TabPanels from '../components/tabs/TabPanels'
import TabPanel from '../components/tabs/TabPanel'
import SignUp from '../components/sign-up'

import collabImage from '../img/collaborative-documents.png'
import collabImage2x from '../img/collaborative-documents@2x.png'
import markdownImage from '../img/markdown.png'
import markdownImage2x from '../img/markdown@2x.png'
import projectKeyImage from '../img/project-keys.png'
import projectKeyImage2x from '../img/project-keys@2x.png'
import mediaImage from '../img/media-and-fields.png'
import mediaImage2x from '../img/media-and-fields@2x.png'
import outlineImage from '../img/document-outline.png'
import outlineImage2x from '../img/document-outline@2x.png'
import dndImage from '../img/drag-and-drop.png'
import dndImage2x from '../img/drag-and-drop@2x.png'
import documentImage from '../img/drag-document.png'
import documentImage2x from '../img/drag-document@2x.png'
import dragImage from '../img/drag-image.png'
import dragImage2x from '../img/drag-image@2x.png'
import teamsImage from '../img/illo_project-teams.png'
import teamsImage2x from '../img/illo_project-teams@2x.png'
import collabIllo from '../img/illo_collaborate.png'
import collabIllo2x from '../img/illo_collaborate@2x.png'
import restImage from '../img/illo_full-rest-API.png'
import restImage2x from '../img/illo_full-rest-API@2x.png'
import accessImage from '../img/illo_manage-access.png'
import accessImage2x from '../img/illo_manage-access@2x.png'
import structuredImage from '../img/illo_structured-content.png'
import structuredImage2x from '../img/illo_structured-content@2x.png'

import '../css/features.scss'

const Features = () => {
  const [activePanel, setActivePanel] = useState(0)

  function tabChangeHandler(tabIndex) {
    setActivePanel(tabIndex)
  }

  return (
    <>
      <Helmet>
        <body className="theme-features" />
      </Helmet>
      <Layout title="Features">
        <div className="container features">
          <section className="intro">
            <h2 className="intro__title">A developer-friendly, collaborative notes app<br />for flexible, distraction free writing</h2>
          </section>
          {/* /Intro */}
          <section className="features__tabs">
            <TabList onChange={tabChangeHandler}>
              <Tab className="features__tab features__tab--content" href="#content" id="tab1" label="Content">
                <svg height="32" viewBox="0 0 31 32" width="31" xmlns="http://www.w3.org/2000/svg"><path d="m36.4430963 15.3449225c1.0675625 0 2.0223625.4909625 2.651275 1.2586.6289125-.7676375 1.5841-1.2586 2.6516625-1.2586h2.9283375v1.55h-2.9283375c-1.0350125 0-1.8766625.8420375-1.8766625 1.8766625v24.4570625c0 1.034625.84165 1.876275 1.8766625 1.876275h2.9283375v1.55h-2.9283375c-1.0675625 0-2.02275-.490575-2.6516625-1.2582125-.6289125.7676375-1.5837125 1.2582125-2.651275 1.2582125h-2.928725v-1.55h2.928725c1.034625 0 1.876275-.84165 1.876275-1.876275v-24.4570625c0-1.034625-.84165-1.8766625-1.876275-1.8766625h-2.928725v-1.55zm-4.7886863 5.543575v5.8981375h-1.4601l-.898225-4.2129h-4.6062125v16.6563l2.976775.6730875v1.208225h-8.7633125v-1.208225l2.976775-.6730875v-16.6563h-4.6341125l-.870325 4.2129h-1.4612625v-5.8981375z" fill="#ea6e42" fillRule="evenodd" transform="translate(-14 -15)"/></svg>
              </Tab>
              <Tab className="features__tab features__tab--markdown" href="#markdown" id="tab2" label="Markdown">
                <svg height="29" viewBox="0 0 47 29" width="47" xmlns="http://www.w3.org/2000/svg"><path d="m45.4820375 17.0500387v26.0295375l6.814575-6.8126375 1.09585 1.0962375-8.685425 8.6827125-8.685425-8.6827125 1.09585-1.0962375 6.814575 6.8126375v-26.0295375zm-30.8053587 3.8386526 5.5052125 17.6669h.112375l5.4207375-17.6669h6.5723875v1.2078375l-2.3591.589775v16.627625l2.3591.589775v1.2078375h-7.21835v-1.2078375l2.05065-.589775v-16.599725l-5.7865375 18.3973375h-3.3139l-5.8423375-18.3973375v16.599725l2.0502625.589775v1.2078375h-6.23526255v-1.2078375l2.35910005-.589775v-16.627625l-2.35910005-.589775v-1.2078375z" fill="#ea6e42" fillRule="evenodd" transform="translate(-7 -17)"/></svg>
              </Tab>
              <Tab className="features__tab features__tab--developers" href="#developers" id="tab3" label="Developers">
                <svg height="32" viewBox="0 0 31 32" width="31" xmlns="http://www.w3.org/2000/svg"><path d="m36.4430963 15.3449225c1.0675625 0 2.0223625.4909625 2.651275 1.2586.6289125-.7676375 1.5841-1.2586 2.6516625-1.2586h2.9283375v1.55h-2.9283375c-1.0350125 0-1.8766625.8420375-1.8766625 1.8766625v24.4570625c0 1.034625.84165 1.876275 1.8766625 1.876275h2.9283375v1.55h-2.9283375c-1.0675625 0-2.02275-.490575-2.6516625-1.2582125-.6289125.7676375-1.5837125 1.2582125-2.651275 1.2582125h-2.928725v-1.55h2.928725c1.034625 0 1.876275-.84165 1.876275-1.876275v-24.4570625c0-1.034625-.84165-1.8766625-1.876275-1.8766625h-2.928725v-1.55zm-4.7886863 5.543575v5.8981375h-1.4601l-.898225-4.2129h-4.6062125v16.6563l2.976775.6730875v1.208225h-8.7633125v-1.208225l2.976775-.6730875v-16.6563h-4.6341125l-.870325 4.2129h-1.4612625v-5.8981375z" fill="#ea6e42" fillRule="evenodd" transform="translate(-14 -15)"/></svg>
              </Tab>
              <Tab className="features__tab features__tab--media" href="#media" id="tab4" label="Media">
                <svg height="40" viewBox="0 0 48 40" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m19.397475 0v19.397475h-19.397475v-19.397475zm-6.2654875 8.7451-10.9883375 9.489875h16.091325v-5.4075625zm5.1029875-7.5826h-17.072475v16.3838875l11.9412-10.312925 5.131275 4.105175zm-11.95518875 2.25660625c1.5775125 0 2.860525 1.2834 2.860525 2.860525 0 1.5775125-1.2830125 2.860525-2.860525 2.860525s-2.860525-1.2830125-2.860525-2.860525c0-1.577125 1.2830125-2.860525 2.860525-2.860525zm0 1.1625c-.9365875 0-1.698025.761825-1.698025 1.698025s.7614375 1.698025 1.698025 1.698025 1.698025-.761825 1.698025-1.698025-.7614375-1.698025-1.698025-1.698025zm17.42858755 20.28950005v14.8385375h-21.67675005v-14.8385375zm-1.1625 11.419625h-2.2564125v2.2564125h2.2564125zm-3.4193-10.257125h-12.51353755v12.5135375h12.51353755zm-13.67603755 10.257125h-2.2564125v2.2564125h2.2564125zm4.55874375-7.55873 6.32555 3.558025-6.32555 3.5584125zm12.5365938 4.1398175h-2.2564125v2.2564125h2.2564125zm-17.09533755 0h-2.2564125v2.2564125h2.2564125zm5.72124375-2.1519425v3.1406875l2.7919375-1.5705375zm11.3740938-1.26697h-2.2564125v2.2564125h2.2564125zm-17.09533755 0h-2.2564125v2.2564125h2.2564125zm17.09533755-3.4189125h-2.2564125v2.2564125h2.2564125zm-17.09533755 0h-2.2564125v2.2564125h2.2564125zm20.14806245-21.47525005h3.39605v-2.2564125h-3.39605zm4.55855 0h6.81535v-2.2564125h-6.81535zm7.97785 0h6.8149625v-2.2564125h-6.8149625zm-12.5364 3.4189125h3.39605v-2.2564125h-3.39605zm4.55855 0h6.81535v-2.2564125h-6.81535zm7.97785 0h6.8149625v-2.2564125h-6.8149625zm-12.5364 3.41891245h3.39605v-2.25641245h-3.39605zm4.55855 0h6.81535v-2.25641245h-6.81535zm7.97785 0h6.8149625v-2.25641245h-6.8149625zm-12.5364 3.4193h3.39605v-2.2564125h-3.39605zm4.55855 0h6.81535v-2.2564125h-6.81535zm7.97785 0h6.8149625v-2.2564125h-6.8149625zm-13.6989 1.1625h21.6763625v-14.83853745h-21.6763625zm8.6457063 11.2462576v-2.02895l8.6769-3.44565v2.02895zm7.071875 7.4152c-.8854375 0-1.6054125-.7203625-1.6054125-1.6054125 0-.8854375.719975-1.6054125 1.6054125-1.6054125.88505 0 1.605025.719975 1.605025 1.6054125 0 .88505-.719975 1.6054125-1.605025 1.6054125zm-9.8397875 3.9071625c-.88505 0-1.605025-.719975-1.605025-1.605025 0-.8854375.719975-1.6054125 1.605025-1.6054125.8854375 0 1.6054125.719975 1.6054125 1.6054125 0 .88505-.719975 1.605025-1.6054125 1.605025zm1.6054125-14.1402625v.394475 4.1357875 5.754375c-.453375-.3243375-1.006725-.5173125-1.6054125-.5173125-1.525975 0-2.767525 1.24155-2.767525 2.7679125 0 1.525975 1.24155 2.767525 2.767525 2.767525 1.5263625 0 2.7679125-1.24155 2.7679125-2.767525 0-.03875-.0042625-.076725-.0058125-.1150875h.0058125v-8.3514l8.6769-3.4460375v5.7547625c-.453375-.324725-1.006725-.5177-1.605025-.5177-1.5263625 0-2.7679125 1.2419375-2.7679125 2.7679125 0 1.5263625 1.24155 2.7679125 2.7679125 2.7679125 1.525975 0 2.767525-1.24155 2.767525-2.7679125 0-.03875-.0042625-.0763375-.0058125-.1147h.0058125v-8.3517875-3.674275-.8559875z" fill="#ea6e42" fillRule="evenodd" transform="translate(.992 .145)"/></svg>
              </Tab>
              <Tab className="features__tab features__tab--outline" href="#outline" id="tab5" label="Document Outline" >
                <svg height="40" viewBox="0 0 48 40" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m19.397475 0v19.397475h-19.397475v-19.397475zm-6.2654875 8.7451-10.9883375 9.489875h16.091325v-5.4075625zm5.1029875-7.5826h-17.072475v16.3838875l11.9412-10.312925 5.131275 4.105175zm-11.95518875 2.25660625c1.5775125 0 2.860525 1.2834 2.860525 2.860525 0 1.5775125-1.2830125 2.860525-2.860525 2.860525s-2.860525-1.2830125-2.860525-2.860525c0-1.577125 1.2830125-2.860525 2.860525-2.860525zm0 1.1625c-.9365875 0-1.698025.761825-1.698025 1.698025s.7614375 1.698025 1.698025 1.698025 1.698025-.761825 1.698025-1.698025-.7614375-1.698025-1.698025-1.698025zm17.42858755 20.28950005v14.8385375h-21.67675005v-14.8385375zm-1.1625 11.419625h-2.2564125v2.2564125h2.2564125zm-3.4193-10.257125h-12.51353755v12.5135375h12.51353755zm-13.67603755 10.257125h-2.2564125v2.2564125h2.2564125zm4.55874375-7.55873 6.32555 3.558025-6.32555 3.5584125zm12.5365938 4.1398175h-2.2564125v2.2564125h2.2564125zm-17.09533755 0h-2.2564125v2.2564125h2.2564125zm5.72124375-2.1519425v3.1406875l2.7919375-1.5705375zm11.3740938-1.26697h-2.2564125v2.2564125h2.2564125zm-17.09533755 0h-2.2564125v2.2564125h2.2564125zm17.09533755-3.4189125h-2.2564125v2.2564125h2.2564125zm-17.09533755 0h-2.2564125v2.2564125h2.2564125zm20.14806245-21.47525005h3.39605v-2.2564125h-3.39605zm4.55855 0h6.81535v-2.2564125h-6.81535zm7.97785 0h6.8149625v-2.2564125h-6.8149625zm-12.5364 3.4189125h3.39605v-2.2564125h-3.39605zm4.55855 0h6.81535v-2.2564125h-6.81535zm7.97785 0h6.8149625v-2.2564125h-6.8149625zm-12.5364 3.41891245h3.39605v-2.25641245h-3.39605zm4.55855 0h6.81535v-2.25641245h-6.81535zm7.97785 0h6.8149625v-2.25641245h-6.8149625zm-12.5364 3.4193h3.39605v-2.2564125h-3.39605zm4.55855 0h6.81535v-2.2564125h-6.81535zm7.97785 0h6.8149625v-2.2564125h-6.8149625zm-13.6989 1.1625h21.6763625v-14.83853745h-21.6763625zm8.6457063 11.2462576v-2.02895l8.6769-3.44565v2.02895zm7.071875 7.4152c-.8854375 0-1.6054125-.7203625-1.6054125-1.6054125 0-.8854375.719975-1.6054125 1.6054125-1.6054125.88505 0 1.605025.719975 1.605025 1.6054125 0 .88505-.719975 1.6054125-1.605025 1.6054125zm-9.8397875 3.9071625c-.88505 0-1.605025-.719975-1.605025-1.605025 0-.8854375.719975-1.6054125 1.605025-1.6054125.8854375 0 1.6054125.719975 1.6054125 1.6054125 0 .88505-.719975 1.605025-1.6054125 1.605025zm1.6054125-14.1402625v.394475 4.1357875 5.754375c-.453375-.3243375-1.006725-.5173125-1.6054125-.5173125-1.525975 0-2.767525 1.24155-2.767525 2.7679125 0 1.525975 1.24155 2.767525 2.767525 2.767525 1.5263625 0 2.7679125-1.24155 2.7679125-2.767525 0-.03875-.0042625-.076725-.0058125-.1150875h.0058125v-8.3514l8.6769-3.4460375v5.7547625c-.453375-.324725-1.006725-.5177-1.605025-.5177-1.5263625 0-2.7679125 1.2419375-2.7679125 2.7679125 0 1.5263625 1.24155 2.7679125 2.7679125 2.7679125 1.525975 0 2.767525-1.24155 2.767525-2.7679125 0-.03875-.0042625-.0763375-.0058125-.1147h.0058125v-8.3517875-3.674275-.8559875z" fill="#ea6e42" fillRule="evenodd" transform="translate(.992 .145)"/></svg>
              </Tab>
              <Tab className="features__tab features__tab--dnd" href="#dnd" id="tab6" label="Drag & drop">
                <svg height="33" viewBox="0 0 32 33" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m24.3606913 19.40321v1.55h-7.0149125v23.70105h27.3082874v-23.70105h-7.0156874v-1.55h8.5656875v26.80105h-30.4082875v-26.80105zm7.41396-4.4385412v21.8298125l6.79365-6.7932625 1.09585 1.09585-8.6645 8.6645-8.6641125-8.6645 1.09585-1.09585 6.7932625 6.7932625v-21.8298125z" fill="#ea6e42" fillRule="evenodd" transform="translate(-15 -14)"/></svg>
              </Tab>
            </TabList>
            {/* /Tabs */}
            <TabPanels activePanel={activePanel}>
              <TabPanel id="content" className="features__panel" labelledBy="tab1">
                <h3 className="features__panel-title">Collaborative documents</h3>
                <p className="features__panel-body">Write your latest garden journal entry, or create a new blog entry for your website.</p>
                <img className="features__panel-image" src={collabImage} srcSet={`${collabImage}, ${collabImage2x} 2x`} width="780" height="644" alt="Portway screenshot" />
              </TabPanel>
              <TabPanel id="markdown" className="features__panel" labelledBy="tab2">
                <h3 className="features__panel-title">We <span role="img" aria-label="Love">❤️</span> Markdown</h3>
                <p className="features__panel-body">Portway is a Markdown writing app packed with advanced features.</p>
                <img className="features__panel-image" src={markdownImage} srcSet={`${markdownImage}, ${markdownImage2x} 2x`} width="780" height="644" alt="Portway screenshot" />
              </TabPanel>
              <TabPanel id="developers" className="features__panel" labelledBy="tab3">
                <h3 className="features__panel-title">Developer APIs</h3>
                <p className="features__panel-body">Manage developer access to create custom applications and workflows using your Portway projects.</p>
                <img className="features__panel-image" src={projectKeyImage} srcSet={`${projectKeyImage}, ${projectKeyImage2x} 2x`} width="780" height="644" alt="Portway screenshot" />
              </TabPanel>
              <TabPanel id="media" className="features__panel" labelledBy="tab4">
                <h3 className="features__panel-title">Media and fields</h3>
                <p className="features__panel-body">Add custom fields to your documents such as images, PDFs, or events.</p>
                <img className="features__panel-image" src={mediaImage} srcSet={`${mediaImage}, ${mediaImage2x} 2x`} width="780" height="644" alt="Portway screenshot" />
              </TabPanel>
              <TabPanel id="outline" className="features__panel" labelledBy="tab5">
                <h3 className="features__panel-title">Document outline</h3>
                <p className="features__panel-body">Writing doesn’t start at the beginning. Arrange your documents however you like!</p>
                <img className="features__panel-image" src={outlineImage} srcSet={`${outlineImage}, ${outlineImage2x} 2x`} width="780" height="644" alt="Portway screenshot" />
              </TabPanel>
              <TabPanel id="dnd" className="features__panel" labelledBy="tab6">
                <h3 className="features__panel-title">Full drag and drop</h3>
                <p className="features__panel-body">Drag text documents right into Portway from your desktop. Reorder your document’s content easily.</p>
                <img className="features__panel-image" src={dndImage} srcSet={`${dndImage}, ${dndImage2x} 2x`} width="780" height="644" alt="Portway screenshot" />
                <div className="features__panel-item features__panel-item--document"><img src={documentImage} srcSet={`${documentImage}, ${documentImage2x} 2x`} width="138" height="117" alt="New document" /></div>
                <div className="features__panel-item features__panel-item--image"><img src={dragImage} srcSet={`${dragImage}, ${dragImage2x} 2x`} width="140" height="124" alt="New file" /></div>
              </TabPanel>
            </TabPanels>
            {/* /Tabbed Content */}
          </section>
          {/* /Tabs */}
          <SignUp />
          {/* /Sign up promo */}
        </div>
        {/* /container features */}

        <section className="teams">
          <div className="container">
            <div className="intro">
              <h2>Teams</h2>
              <h3 className="normal">Enable teams and start with 5 users. Add more users as needed.</h3>
            </div>
            <ul className="teams__list grid row row--two">
              <li>
                <img src={teamsImage} srcSet={`${teamsImage}, ${teamsImage2x} 2x`} alt="Project teams" width="260" />
                <div className="teams__list-content">
                  <h4 className="teams__list-title">Project teams</h4>
                  <p className="teams__list-body">Add teammates to projects and assign them specific roles.</p>
                </div>
              </li>
              <li>
                <img src={collabIllo} srcSet={`${collabIllo}, ${collabIllo2x} 2x`} alt="Collaborate" width="300" height="216" />
                <div className="teams__list-content">
                  <h4 className="teams__list-title">Collaborate</h4>
                  <p className="teams__list-body">Work together in the same document with real-time updates.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* /Teams */}

        <section className="container developers">
          <div className="intro">
            <h2>Developers, hack away</h2>
            <p>Build applications and websites. Update documents through Siri shortcuts. Do custom content auditing by parsing the structured versions of your content. Do more with your documents.</p>
          </div>
          <ul className="developers__list">
            <li className="developers__list-item">
              <div className="developers__list-item-image">
                <img src={restImage} srcSet={`${restImage}, ${restImage2x} 2x`} alt="REST API illustration" width="300" height="220" />
              </div>
              <div className="developers__list-item-content">
                <h3>Full REST API</h3>
                <p>Fetch, update, and create new content. It’s your data!</p>
              </div>
            </li>
            <li className="developers__list-item">
              <div className="developers__list-item-image">
                <img src={accessImage} srcSet={`${accessImage}, ${accessImage2x} 2x`} alt="API Access illustration" width="300" height="220" />
              </div>
              <div className="developers__list-item-content">
                <h3>Manage API access</h3>
                <p>Create API tokens for any project. Consuming content? Create a read-only token. Adding a custom content integration? Create a token with write access.</p>
              </div>
            </li>
            <li className="developers__list-item">
              <div className="developers__list-item-image">
                <img src={structuredImage} srcSet={`${structuredImage}, ${structuredImage2x} 2x`} alt="API Access illustration" width="300" height="220" />
              </div>
              <div className="developers__list-item-content">
                <h3>Structured content</h3>
                <p>Ever want to grab “just the headlines”, or “just the links” from a document? Our Content API provides a structured view of your document.</p>
                <p>We provide an easily consumable JSON data structure of your content, you choose how you want your content displayed. Or take the raw markdown, your choice!</p>
              </div>
            </li>
          </ul>
        </section>
        {/* /Developers */}

      </Layout>
    </>
  )
}

Features.propTypes = {
}

export default Features
