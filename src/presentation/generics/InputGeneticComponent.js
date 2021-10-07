import React from 'react';

// import { Container } from './styles';

function InputGeneticComponent({type, text}) {

    let formControl = {
            fontFamily: 'Advent Pro',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '161.5%',
            color: 'rgba(0, 0, 0, 0.35)',
            padding:' 13px 14px',
            background: '#FFFFFF',
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: 'border-box',
            borderRadius: '5px',
            width: '313px',
            height: '44px',
            margin: '6.5px 0px',
    }

  return <input style={formControl} type={type} placeholder={text} />
}

export default InputGeneticComponent;