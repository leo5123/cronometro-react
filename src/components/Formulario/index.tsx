import e from 'express';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { ITarefa } from '../../types/tarefa';
import Botao from "../Botao"
import './style.scss'




export default function Formulario({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) {
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('');

    function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        let obj = {
            tarefa: tarefa,
            tempo: tempo
        }
        setTarefas(tarefasAntigas => [...tarefasAntigas, { ...obj, selecionado: false, completado: false, id: uuidv4() }])


    }

    return (
        <form onSubmit={adicionarTarefa} className="novaTarefa">
            <div className="inputContainer">
                <label>
                    Adicione uma nova tarefa
                </label>
                <input
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                    id="tarefa"
                    placeholder="O que você quer fazer hoje?"
                    required
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao
                texto="Adicionar"
            />
        </form>
    )
}