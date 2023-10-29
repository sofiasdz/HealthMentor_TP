import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {MonthTab} from "./index";


const meta: Meta<typeof MonthTab> ={
    title:'MonthTab',
    component:MonthTab,
    tags: ['autodocs'],
    argTypes:{

    }
}

export default meta

type Story = StoryObj<typeof MonthTab>

export const Default: Story = {
name:'Default',
render: (args) => <MonthTab {...args}/>
}

