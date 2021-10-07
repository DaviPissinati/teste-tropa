import React from 'react'
import PostItemComponent from '../PostItemComponent'
import './style.css'

// imagens

import paisagemPng from "../../assets/imagens/image 7.png"

export default function PostListComponent() {
    return (
        <div className={"post-list"}>
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
        </div>
    )
}
