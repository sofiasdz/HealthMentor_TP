import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";
import React from 'react';

const meta: Meta<typeof Button> ={
    title:'Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['default','disabled'],
            control:{type:'select'},
            defaultValue:'fulfilled'
        },
        name: {
            defaultValue: 'Button',
            control: { type: 'text' },
        }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    name:'Default',
    render: (args) => (<div className={"w-[172px] h-[46px]"}> <Button {...args}/> </div>)
}

export const Defaultt: Story = {
    name:'Mocked Default',
    render: (args) => (<div className={"w-[172px] h-[46px]"}> <Button variant={"default"} name={"Button"} onClick={() => {}} /> </div>)
}

export const Disabled: Story = {
    name:'Disabled',
    render: (args) =>(<div className={"w-[172px] h-[46px]"}> <Button variant={"disabled"} name={"Button"} onClick={() => {}} /> </div>)
}





