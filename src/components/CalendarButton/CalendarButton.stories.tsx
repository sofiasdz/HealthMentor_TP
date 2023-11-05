import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {CalendarButton} from "./index";


const meta: Meta<typeof CalendarButton> ={
    title:'CalendarButton',
    component:CalendarButton,
    tags: ['autodocs'],
    argTypes:{
        borderColor:{
            options:['selected','unselected','passedMonth','streak','failedStreak'],
            control:{type:'select'},
            defaultValue:'unselected'
        } ,
        backgroundColor:{
            options:['selected','unselected','passedMonth','streak','failedStreak'],
            control:{type:'select'},
            defaultValue:'unselected'
        },
        number:{
            control:{type:'text'},
            defaultValue:'13'
        },
        dayName:{
            control:{type:'text'},
            defaultValue:'Mon'
        }
    }
}

export default meta

type Story = StoryObj<typeof CalendarButton>

export const Default: Story = {
name:'Default',
render: (args) => <CalendarButton  borderColor={'selected'} backgroundColor={'selected'} {...args}/>
}

export const Selected: Story = {
name:'Selected',
render: (args) => <CalendarButton borderColor={'selected'} backgroundColor={'selected'} number={"13"} dayName={"Mon"}/>
}

export const Unselected: Story = {
name:'Unselected',
render: (args) => <CalendarButton borderColor={'unselected'} backgroundColor={'unselected'} number={"13"} dayName={"Mon"}/>
}

export const PassedMonth: Story = {
name:'PassedMonth',
render: (args) => <CalendarButton borderColor={'passedMonth'} backgroundColor={'passedMonth'} number={"13"} dayName={"Mon"}/>
}

export const Streak: Story = {
name:'Streak',
render: (args) => <CalendarButton borderColor={'streak'} backgroundColor={'streak'} number={"13"} dayName={"Mon"}/>
}

export const FailedStreak: Story = {
name:'FailedStreak',
render: (args) => <CalendarButton borderColor={'failedStreak'} backgroundColor={'failedStreak'} number={"13"} dayName={"Mon"}/>
}

