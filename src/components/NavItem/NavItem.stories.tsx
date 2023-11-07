import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {NavItem} from "./index";

const meta: Meta<typeof NavItem> ={
    title:'NavItem',
    component:NavItem,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['home','goals','medication'],
            control:{type:'select'},
            defaultValue:'home'
        },
        turnOn:{
            options:['on','off'],
            control:{type:'select'},
            defaultValue:'on'
        },
        name:{
            defaultValue:'Home'
        }
    }
}

export default meta

type Story = StoryObj<typeof NavItem>


export const Default: Story= {
    name:'Default',
    render: args => <NavItem {...args}/>
}

export const Home: Story = {
    name:'Home',
    render: (args) => (
        <NavItem name={"Home"} variant={"home"} turnOn={"off"}/>
    )
}

export const Goals: Story = {
    name:'Goals',
    render: (args) => <NavItem  name={"Goals"} variant={"goals"} turnOn={"off"}/>
}

export const Medication: Story = {
    name:'Medication',
    render: (args) => <NavItem name={"Medication"} variant={"medication"} turnOn={"off"}/>
}