import {Meta, StoryObj} from "@storybook/react";
import Badge from "./index";
import React from 'react';

const meta: Meta<typeof Badge> ={
    title:'Badge',
    component:Badge,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['sevenS','thirtyS','ninetyS','fistWorkout'],
            control:{type:'select'},
            defaultValue:'firstWorkout'
        }
    }
}


export default meta

type Story = StoryObj<typeof Badge>


export const SevenStreak: Story = {
    name:'7 streak',
    render: (args) => <div className={'m-4'}> <Badge variant={'sevenS'} {...args}/> </div>
}

export const ThirtyStreak: Story = {
    name:'30 streak',
    render: (args) => <div className={'m-4'}> <Badge variant={'thirtyS'} {...args}/> </div>
}

export const NinetyStreak: Story = {
    name:'90 streak',
    render: (args) => <div className={'m-4'}> <Badge variant={'ninetyS'} {...args}/> </div>
}

export const FirstWorkout: Story = {
    name:'First workout',
    render: (args) => <div className={'m-4'}> <Badge variant={'firstWorkout'} {...args}/> </div>
}
