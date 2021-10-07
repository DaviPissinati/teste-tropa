import React from 'react';

// import { Container } from './styles';

function BadgeGeneticComponent({icone , text}) {

    let calen = {
        width: "101.94px",
        height: "27px" ,
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "3px",
        display: "flex" ,
        alignItems: "center",
        justifyContent: "space-around",
        top: "0",
        right: "0",
        margin: "26px 26px 0px 0px",
        position: "absolute"
    }

    return <div style={calen}>
        <img src={icone} alt="" />
        <p style={{color:"white", fontSize:"11px"}}>{text}</p>
    </div>;
}

export default BadgeGeneticComponent;