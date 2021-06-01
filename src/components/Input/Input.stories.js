import React from "react"
import Input from "./Input"


export default {
  title: 'Form/Input',
  component:Input,
}

export const Small = () => <Input placeholder={`Small size`} size={'small'}/>
export const Medium = () => <Input placeholder={`Medium size`} size={'medium'}/>
export const Large = () => <Input placeholder={`Large size`} size={'large'}/>

Small.storyName = 'Small Input'