import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {MonthTab} from "./index";


const meta: Meta<typeof MonthTab> ={
    title:'MonthTab',
    component:MonthTab,
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

type Story = StoryObj<typeof MonthTab>

export const Default: Story = {
name:'Default',
render: (args) => <MonthTab {...args}/>
}

export const Selected: Story = {
name:'Selected',
render: (args) => <MonthTab selectedMonth={"April"}/>
}

