import {Meta, StoryObj} from "@storybook/react";
import {Cards} from "./index";
import React from 'react';

const meta : Meta<typeof Cards> = {
    title: 'Cards',
    component: Cards,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['single', 'multiple'],
            control: {type: 'select'},
            defaultValue : 'single'
        }
    }
}

export default meta

type Story = StoryObj<typeof Cards>

export const Default: Story = {
    name: 'Default',
    render: (args) => <Cards {...args}/>
}