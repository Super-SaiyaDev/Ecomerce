import React from 'react'
import LinesChart from './LineShart'

const grafico = () => {
  return (
    <div>
        <h1>Graficos</h1>
        <div className="grafico-1">
            <p className='m-2'><b>Grafico</b></p>
            <div className='bg-light mx-auto px-2 border border-2 border-primary' style={{width: '450px', height: '230px'}}>
                {/*Aqui incluire el grafico*/}
                <LinesChart />git 
            </div>
        </div>
    </div>
  )
}

export default grafico