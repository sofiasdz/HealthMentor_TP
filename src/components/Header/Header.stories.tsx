import {Meta, StoryObj} from "@storybook/react";
import {Header} from "./index";
import React from 'react';

const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['buttonRight', 'buttonLeft', 'empty'],
            control: {type: 'select'},
            defaultValue : 'buttonRight'
        },
    }
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
    name: 'Default',
    render: (args) => <Header {...args}/>
}