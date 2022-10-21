import Item from './Item'
import './styles.scss'

export default function Lista(){
    const tarefas = [{
        tarefa: 'react',
        tempo: '02:00:00'
    },
    {
        tarefa: 'JavaScript',
        tempo: '01:00:00'     
    },
]
    
    return(
        <aside className="listaTarefas">
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item,index)  => (
                    <Item
                    key = {index}
                    {...item}

                    />
                ))}
                
                
            </ul>
        </aside>
    )
}