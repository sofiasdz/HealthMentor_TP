import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import TextField from "./index";

const meta: Meta<typeof TextField> ={
    title:'Textfield',
    component:TextField,
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

type Story = StoryObj<typeof TextField>

export const Default: Story = {
    name:'Default',
    render: (args) => <div className={'m-4'}> <TextField {...args}/> </div>
}

export const DefaultTextfield: Story = {
    name:'Normal',
    render: (args) => <div className={'m-4'}> <TextField variant={'Normal'} placeHolder={args.placeHolder} name={"Name"}/> </div>
}

export const ErrorTextfield: Story = {
    name:'Error',
    render: (args) => <div className={'m-4'}> <TextField variant={'Error'} placeHolder={args.placeHolder} name={"Name"}/> </div>
}

export const DisabledTextfield: Story = {
    name:'Disabled',
    render: (args) => <div className={'m-4'}> <TextField variant={'Disabled'} placeHolder={args.placeHolder} name={"Name"}/> </div>
}