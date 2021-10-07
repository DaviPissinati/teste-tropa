import React from 'react'
import BadgeGeneticComponent from './generics/BadgeGeneticComponent'


// imagens
import calenPng from "../assets/imagens/calen.png"

export default function PostItemComponent({ title, text, img, }) {
    let styleListBox = {
        display: 'flex',
        width: "100%",
        height: "auto",
        padding: "15px",
        marginBottom: "24px",
        boxSizing: "border-box",
        flexDirection: "column",
        color: "#000",
        background: "#FFFFFF",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.09)",
        borderRadius: "6px",
        justifyContent: "space-around",
        position:"relative"
    }

    
    return (
        <div style={styleListBox}>
            <div>
                <img style={{ width: "100%" }} src={img} alt="" />
                <BadgeGeneticComponent icone={calenPng} text={"2min atras"} />
            </div>
            <h2 style={{ fontSize: "14px", marginTop: "16px" }}>{title}</h2>
            <p style={{ fontSize: "12px" }}>{text}</p>
        </div>
    )
}
