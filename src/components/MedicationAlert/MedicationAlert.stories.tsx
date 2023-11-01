import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import MedicationAlert from "./index";

const meta: Meta<typeof MedicationAlert> ={
    title:'MedicationAlert',
    component:MedicationAlert,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['orange','blue','green'],
            control:{type:'select'},
            defaultValue:'green'
        }
    }
}


export default meta

type Story = StoryObj<typeof MedicationAlert>


export const SevenStreak: Story = {
    name:'blue',
    render: (args) => <div className={'m-4'}> <MedicationAlert variant={'blue'} {...args}/> </div>
}

export const ThirtyStreak: Story = {
    name:'orange',
    render: (args) => <div className={'m-4'}> <MedicationAlert variant={'orange'} {...args}/> </div>
}

export const NinetyStreak: Story = {
    name:'green',
    render: (args) => <div className={'m-4'}> <MedicationAlert variant={'green'} {...args}/> </div>
}
