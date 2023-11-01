import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {MiniCalendar} from "./index";


const meta: Meta<typeof MiniCalendar> ={
    title:'MiniCalendar',
    component:MiniCalendar,
    tags: ['autodocs'],
    argTypes:{

    }
}


export default meta

type Story = StoryObj<typeof MiniCalendar>


const dayss = [
    {day:'Mon', number:1},
    {day:'Tue', number:2},
    {day:'Wed', number:3},
    {day:'Thu', number:4},
    {day:'Fri', number:5},
    {day:'Sat', number:6},
]

export const Default: Story = {
name:'Default',
render: (args) => <MiniCalendar days={dayss} pickedDate={4}/>
}