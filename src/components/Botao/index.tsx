import React from 'react'
import './styles.scss'

interface props {
    texto: string
}

export default function Botao(texto: props){
    return(
        <button className='botao'>
            {texto.texto}
        </button>
    )
}