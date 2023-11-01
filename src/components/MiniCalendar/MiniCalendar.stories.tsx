import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {MiniCalendar} from "./index";


const meta: Meta<typeof MiniCalendar> ={
    title:'MiniCalendar',
    component:MiniCalendar,
    tags: ['autodocs'],
    argTypes:{
        selectedMonth:{
            options:['January','February','March','April','May','June','July','August','September','October','November','December'],
            control:{type:'select'},
            defaultValue:'April'
        }
    }
}


export default meta

type Story = StoryObj<typeof MiniCalendar>


const dayss = [
    {day:'Mon', number:1, passedMonth:false},
    {day:'Tue', number:2 , passedMonth:false},
    {day:'Wed', number:3 , passedMonth:false},
    {day:'Thu', number:4 , passedMonth:false},
    {day:'Fri', number:5 , passedMonth:false},
    {day:'Sat', number:6 , passedMonth:false},
]


export const Default: Story = {
name:'Default',
render: (args) => <MiniCalendar days={dayss} pickedDate={args.pickedDate} selectedMonth={args.selectedMonth}/>
}