import { useEffect, useState } from 'react'
import styles from './projetos.module.css'
import Link from 'next/link'

export default function Projetos() {
    const [projetos, setProjetos] = useState([])

    useEffect(() => {
      obterProjetos()
    }, [])

    const obterProjetos = async() => {
      const projetos = await fetch('/projetos.json')
      const resultado = await projetos.json()
      console.log(resultado.projects)
      setProjetos(resultado.projects)
    }

    return (
      
      <div className ={styles.container}>
        <h1>Projetos desenvolvidos</h1>
        <div className = {styles.projetos}>
          {
            projetos.map(projeto => (
              <Link href={`/projeto/${projeto.id}`}>
                <div className = {styles.projeto}>
                  <h1>{projeto.name}</h1>
                  <p>{projeto.description}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    )
}