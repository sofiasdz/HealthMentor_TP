import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Footer} from "./index";

const meta: Meta<typeof Footer> ={
    title:'Footer',
    component:Footer,
    tags: ['autodocs'],
    argTypes:{

    }
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story= {
    name:'Default',
    render: args => <Footer {...args}/>
}

