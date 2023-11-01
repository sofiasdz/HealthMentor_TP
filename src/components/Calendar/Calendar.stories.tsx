import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Calendar} from "./index";

const meta : Meta<typeof Calendar> ={
    title:'Calendar',
    component:Calendar,
    tags: ['autodocs'],
    argTypes:{
        selectedMonth:{
            options:['January','February','March','April','May','June','July','August','September','October','November','December'],
            control:{type:'select'},
            defaultValue:'April'
        },
        pickedDay: {
            control:{type:'number'},
            defaultValue:1
        }
    }
}

export default meta

type Story = StoryObj<typeof Calendar>

const dayss = [
    {day:'Mon', number:1, passedMonth:false},
    {day:'Tue', number:2 , passedMonth:false},
    {day:'Wed', number:3 , passedMonth:false},
    {day:'Thu', number:4 , passedMonth:false},
    {day:'Fri', number:5 , passedMonth:false},
    {day:'Sat', number:6 , passedMonth:false},
    {day:'Sun', number:7 , passedMonth:false},
    {day:'Mon', number:8 , passedMonth:false},
    {day:'Tue', number:9 , passedMonth:false},
    {day:'Wed', number:10 , passedMonth:false},
    {day:'Thu', number:11 , passedMonth:false},
    {day:'Fri', number:12 , passedMonth:false},
    {day:'Sat', number:13 , passedMonth:false},
    {day:'Sun', number:14 , passedMonth:false},
    {day:'Mon', number:15 , passedMonth:false},
    {day:'Tue', number:16 , passedMonth:false},
    {day:'Wed', number:17 , passedMonth:false},
    {day:'Thu', number:18 , passedMonth:false},
    {day:'Fri', number:19 , passedMonth:false},
    {day:'Sat', number:20 , passedMonth:false},
    {day:'Sun', number:21 , passedMonth:false},
    {day:'Mon', number:22 , passedMonth:false},
    {day:'Tue', number:23 , passedMonth:false},
    {day:'Wed', number:24 , passedMonth:false},
    {day:'Thu', number:25 , passedMonth:false},
    {day:'Fri', number:26 , passedMonth:false},
    {day:'Sat', number:27 , passedMonth:false},
    {day:'Sun', number:28 , passedMonth:false},
    {day:'Mon', number:29 , passedMonth:false},
    {day:'Tue', number:30 , passedMonth:false},
    {day:'Wed', number:31 , passedMonth:false},
    {day:'Thu', number:1 , passedMonth:true},
    {day:'Fri', number:2 , passedMonth:true},
    {day:'Sat', number:3 , passedMonth:true},
    {day:'Sun', number:4 , passedMonth:true},
    {day:'Mon', number:5 , passedMonth:true},
]

export const Default: Story = {
    name:'Default',
    render: (args) => <Calendar days={dayss} pickedDay={args.pickedDay} selectedMonth={args.selectedMonth}/>
}