import React, {Component} from 'react';
//import { PolymorphicCopyrightNotice } from '@ta-interaktiv/react-copyright-notice';
//import ShareButtons, { displayTypes } from '@ta-interaktiv/react-share-buttons';
//import FeedbackMessage from '@ta-interaktiv/react-feedback-message';
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/container.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/header.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/image.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/list.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/segment.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/divider.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/table.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/grid.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/icon.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/card.css'
//import '@ta-interaktiv/semantic-ui/semantic/dist/components/loader.css'
//import './footer.css';
import ThemeSwitch from '@ta-interaktiv/react-theme-switch';


class Footer extends Component {
  render() {
    return (
      <>
      <ThemeSwitch mediaName='tagesanzeiger' />{' '}
      <Footer articleId='16267582' credits='ddd' hideUserFeedback hidePortfolioTeaser />
    </>
    )
  }
}

export default Footer;