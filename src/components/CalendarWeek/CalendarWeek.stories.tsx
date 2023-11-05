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
    {day:'Mon', number:1, passedMonth:false},
    {day:'Tue', number:2, passedMonth: false},
    {day:'Wed', number:3, passedMonth: false},
    {day:'Thu', number:4 , passedMonth: false},
    {day:'Fri', number:5 , passedMonth: false},
    {day:'Sat', number:6 , passedMonth: false},
]

export const Default: Story = {
name:'Default',
render: (args) => <CalendarWeek days={dayss} pickedDate={args.pickedDate}/>
}

export const Selected: Story = {
name:'Selected',
render: (args) => <CalendarWeek days={dayss} pickedDate={2}/>
}

