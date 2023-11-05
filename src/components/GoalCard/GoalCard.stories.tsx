import {Meta, StoryObj} from "@storybook/react";
import GoalCard from "./index";
import React from 'react';

const meta: Meta<typeof GoalCard> ={
    title:'GoalCard',
    component:GoalCard,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['completed','incomplete'],
            control:{type:'select'},
            defaultValue:'incomplete'
        },
        taskName:{
            defaultValue:'add a task'
        },
        position:{
            defaultValue: 'def'
        }
    }
}


export default meta

type Story = StoryObj<typeof GoalCard>

export const Default: Story = {
    name:'Default',
    render: (args) => <GoalCard {...args}/>
}


export const Clickeable: Story = {
    name:'Completed',
    render: (args) => <GoalCard variant={'completed'} icon={"ejercicio"} taskName={"Sentadillas 5"} position={"mid"}/>
}

export const Clicked: Story = {
    name:'Incomplete',
    render: (args) => <GoalCard variant={'incomplete'} icon={"ejercicio"} taskName={"Sentadillas 5"} position={"mid"}/>
}