import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {WeekTab} from "./index";


const meta: Meta<typeof WeekTab> ={
    title:'WeekTab',
    component:WeekTab,
    tags: ['autodocs'],
    argTypes:{
        activeDay:{
            options:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            control:{type:'select'},
            defaultValue:'Mon'
        }
    }
}

export default meta

type Story = StoryObj<typeof WeekTab>

export const Default: Story = {
name:'Default',
render: (args) => <WeekTab {...args}/>
}

