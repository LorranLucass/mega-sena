import style from "./megasena.module.css"

import Imagem from "./imagem"
import Sorteio from "./sorteio"

export default function megasena() {

    return(
        <>
        <Imagem />

        <div className={style.numeros}>

        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        </div>
        </>
    )
}
