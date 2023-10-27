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
render: (args) => <CalendarButton borderColor={'selected'} backgroundColor={'selected'} {...args}/>
}

export const Unselected: Story = {
name:'Unselected',
render: (args) => <CalendarButton borderColor={'unselected'} backgroundColor={'unselected'} {...args}/>
}

export const PassedMonth: Story = {
name:'PassedMonth',
render: (args) => <CalendarButton borderColor={'passedMonth'} backgroundColor={'passedMonth'} {...args}/>
}

export const Streak: Story = {
name:'Streak',
render: (args) => <CalendarButton borderColor={'streak'} backgroundColor={'streak'} {...args}/>
}

export const FailedStreak: Story = {
name:'FailedStreak',
render: (args) => <CalendarButton borderColor={'failedStreak'} backgroundColor={'failedStreak'} {...args}/>
}

