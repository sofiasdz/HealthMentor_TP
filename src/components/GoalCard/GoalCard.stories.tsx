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


export const Clickeable: Story = {
    name:'Completed',
    render: (args) => <GoalCard variant={'completed'} {...args}/>
}

export const Clicked: Story = {
    name:'Incomplete',
    render: (args) => <GoalCard variant={'incomplete'} {...args}/>
}