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

export const Default: Story = {
    name:'Default',
    render: (args) => <div className={'m-4'}> <Textfield {...args}/> </div>
}

export const DefaultTextfield: Story = {
    name:'Normal',
    render: (args) => <div className={'m-4'}> <Textfield variant={'Normal'} placeHolder={args.placeHolder} name={"Name"}/> </div>
}

export const ErrorTextfield: Story = {
    name:'Error',
    render: (args) => <div className={'m-4'}> <Textfield variant={'Error'} placeHolder={args.placeHolder} name={"Name"}/> </div>
}

export const DisabledTextfield: Story = {
    name:'Disabled',
    render: (args) => <div className={'m-4'}> <Textfield variant={'Disabled'} placeHolder={args.placeHolder} name={"Name"}/> </div>
}