import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {CalendarWeek} from "./index";

const meta: Meta<typeof CalendarWeek> ={
    title:'CalendarWeek',
    component:CalendarWeek,
    tags: ['autodocs'],
    argTypes:{
        pickedDate:{
            control:{type:'number'},
            defaultValue:1
        },
        }
    }


export default meta

type Story = StoryObj<typeof CalendarWeek>

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
render: (args) => <CalendarWeek days={dayss} pickedDate={4}/>
}

