import { ITarefa } from '../../../types/tarefa'
import './styles.scss'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
    {
        tarefa,
        tempo,
        completado,
        selecionado,
        id,
        selecionaTarefa
    }: Props) {

    return (
        <li
            className={`${'item'} ${selecionado ? 'itemSelecionado' : ''} ${completado ? 'itemCompletado' : ''} `}
            onClick={() => !completado && selecionaTarefa({
                tarefa,
                tempo,
                completado,
                selecionado,
                id
            }
            )}
        >
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
            {completado && <span className={'concluido'} aria-label='tarefa-completada'></span>}
        </li>
    )
}