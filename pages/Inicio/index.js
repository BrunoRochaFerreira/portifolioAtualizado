import styles from './inicio.module.css'
import Head from 'next/head'
export default function Inicio() {
  return (
    <div>


      

      <div className={styles.image}>
        <Head>
          <title>Portifolio</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <h1 className={styles.pname}>Bruno Rocha Ferreira
         <p>22 Anos</p>
         <p>Primavera-Sp</p>
         <p><br/></p>
         <p>Estudante no Instituto Federal de Mato Grosso do Sul</p>
        </h1>

      </div>

     
    </div>

    
  )
}