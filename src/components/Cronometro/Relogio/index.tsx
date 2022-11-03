import './styles.scss'

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60
    const [minutosDezenas, minutosUnidades] = String(minutos).padStart(2, '0')
    const [segundosDezenas, segundosUnidades] = String(segundos).padStart(2, '0')

    return (
        <>
            <span className='relogioNumero'>{minutosDezenas}</span>
            <span className='relogioNumero'>{minutosUnidades}</span>
            <span className='relogioDivisao'>:</span>
            <span className='relogioNumero'>{segundosDezenas}</span>
            <span className='relogioNumero'>{segundosUnidades}</span>
        </>
    )
}