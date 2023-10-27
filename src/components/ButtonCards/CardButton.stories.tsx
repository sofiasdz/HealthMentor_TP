import {Meta, StoryObj} from "@storybook/react";
import CardButton from "./index";
import React from 'react';

const meta: Meta<typeof CardButton> ={
    title:'CardButton',
    component:CardButton,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['clickeable','clicked','passedTime'],
            control:{type:'select'},
            defaultValue:'clickeable'
        }
    }
}


export default meta

type Story = StoryObj<typeof CardButton>

export const Default: Story = {
    name:'Default',
    render: (args) => <CardButton {...args}/>
}

export const Clickeable: Story = {
    name:'Clickeable',
    render: (args) => <CardButton variant={'clickeable'} {...args}/>
}

export const Clicked: Story = {
    name:'Clicked',
    render: (args) => <CardButton variant={'clicked'} {...args}/>
}

export const PassedTime: Story = {
    name:'PassedTime',
    render: (args) => <CardButton variant={'passedTime'} {...args}/>
}
