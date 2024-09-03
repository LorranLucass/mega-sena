import style from "./megasena.module.css"

export default function Imagem() {
  return (
    <>
    <div className={style.div}>

    <img src="https://fdr.com.br/wp-content/uploads/2020/07/megasena-loteria-1024x576.png" className={style.imagem}></img>
    </div>
    <div>
    <h1 className={style.h1}>Números Premiados:</h1>
    </div>
    </>
  )
}
