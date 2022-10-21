import Botao from "../Botao"
import './style.scss'


export default function Formulario() {
    return(
        <form className="novaTarefa">
            <div className="inputContainer">
                <label>
                    Adicione uma nova tarefa
                </label>
                <input 
                type="text" 
                name="tarefa"
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