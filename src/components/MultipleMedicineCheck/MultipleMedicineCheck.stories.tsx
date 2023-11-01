import {Meta, StoryObj} from "@storybook/react";
import {MultipleMedicineCheck} from "./index";
import React from 'react';

const meta: Meta<typeof MultipleMedicineCheck> ={
    title:'MultipleMedicineCheck',
    component:MultipleMedicineCheck,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['marked','unavailable','available'],
            control:{type:'select'},
            defaultValue:'marked'
        },
        medication: {

        },
        dose: {

        }

    }
}

export default meta

type Story = StoryObj<typeof MultipleMedicineCheck>

export const Default : Story = {
    name:'Default',
    render: (args) => <MultipleMedicineCheck {...args}/>
}

export const Marked : Story = {
    name:'Marked',
    render: (args) => <MultipleMedicineCheck variant={'marked'} {...args}/>
}

export const Unavailable : Story = {
    name:'Unavailable',
    render: (args) => <MultipleMedicineCheck variant={'unavailable'} {...args}/>
}

export const Available : Story = {
    name:'Available',
    render: (args) => <MultipleMedicineCheck variant={'available'} {...args}/>

}
