import React from 'react'
import './styles.scss'

interface props {
    texto: string,
    onClick?: () => void
}

export default function Botao({ texto, onClick }: props) {
    return (
        <button onClick={onClick} type='submit' className='botao'>
            {texto}
        </button>
    )
}