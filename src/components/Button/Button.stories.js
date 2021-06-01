import React from "react";
import Button from "./Button";
import Center from "../Center/Center"

export default {
  title: 'Form/Button', //left side panel
  component:Button,
  args:{
    children:'Button' // can set args globally
  },
  decorators:[story => <Center>{story()}</Center>]
}

// export each button 
export const Primary = () => <Center><Button variant='primary'>Primary</Button></Center>
export const Secondary = () => <Center><Button variant='secondary'>Secondary</Button></Center>
export const Success = () => <Center><Button variant='success'>Success</Button></Center>
export const Danger = () => <Center><Button variant='danger'>Danger</Button></Center>

const Template = args => <Button {...args}/>
export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant:'primary',
  // children:'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children:'Long Primary A'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant:'secondary',
  // children:'Secondary Args'
}