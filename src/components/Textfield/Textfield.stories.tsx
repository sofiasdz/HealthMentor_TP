import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import Textfield from "./index";

const meta: Meta<typeof Textfield> ={
    title:'Textfield',
    component:Textfield,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['Default','Error','Disabled'],
            control:{type:'select'},
            defaultValue:'Default'
        }
    }
}


export default meta

type Story = StoryObj<typeof Textfield>


export const DefaultTextfield: Story = {
    name:'Default',
    render: (args) => <div className={'m-4'}> <Textfield variant={'normal'} {...args}/> </div>
}

export const ErrorTextfield: Story = {
    name:'Error',
    render: (args) => <div className={'m-4'}> <Textfield variant={'error'} {...args}/> </div>
}

export const DisabledTextfield: Story = {
    name:'Disabled',
    render: (args) => <div className={'m-4'}> <Textfield variant={'disabled'} {...args}/> </div>
}