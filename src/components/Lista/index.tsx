
import { ITarefa } from '../../types/tarefa'
import Item from './Item'
import './styles.scss'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {


    return (
        <aside className="listaTarefas">
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}

                    />
                ))}


            </ul>
        </aside>
    )
}