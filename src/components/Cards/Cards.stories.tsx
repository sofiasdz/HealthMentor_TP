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

export const Multiple: Story = {
    name: 'Multiple',
    render: (args) => <Cards variant={'multiple'} buttonVariant={"clickeable"} dose={"30 mg"} medication={"Insulina"} />
}

export const Single: Story = {
    name: 'Single',
    render: (args) => <Cards variant={'single'} buttonVariant={"clickeable"} dose={"30 mg"} medication={"Insulina"} />
}