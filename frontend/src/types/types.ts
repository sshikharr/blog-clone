import { ChangeEvent } from "react"

export interface LabelledInputType{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void,
    type?: string
}

export interface HeadingLabels{
    text: string,
    to: string,
    text2: string,
    heading: string
}

export interface ButtonTypes{
    text: string,
    onClick: ()=>void
}

export interface BlogCardType{
    title: string,
    content: string,
    id: string,
    time: string,
    name: string,
    date: string
}

export interface BlogFetched{
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    },
    time?: string
    date?: string
}

export interface Blog{
    title: string,
    content: string,
    name: string
}

export interface onClick{
    onClick: () => void;
}