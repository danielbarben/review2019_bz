import React, { Component } from 'react'
import { Accordion, Icon, Item } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import events from '../Data/events.json'

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 };



  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }
  
  

  render() {
    //console.log(Events[0].date);
    const { activeIndex } = this.state
    //let Dani = events.map((items) =>{<div>
    

    return (

      <Accordion>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
      
    )
  }
}