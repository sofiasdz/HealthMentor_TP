import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Footer} from "./index";

const meta: Meta<typeof Footer> ={
    title:'Footer',
    component:Footer,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['home','goals','medication'],
            control:{type:'select'},
            defaultValue:'home'
        }
    }
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story= {
    name:'Default',
    render: args => <Footer {...args}/>
}

export const Home: Story = {
    name:'Home',
    render: (args) => (
        <Footer/>
    )
}

export const Goals: Story = {
    name:'Goals',
    render: (args) => <Footer/>
}

export const Medication: Story = {
    name:'Medication',
    render: (args) => <Footer/>
}