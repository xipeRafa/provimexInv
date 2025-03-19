import { useContext, useState } from 'react';

import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';

import { FireStoreDataContext } from '../../context/FireStoreDataContext';
import { AuthContext } from '../../context/AuthContext';

export const AuctionBody = () => {
  const { items } = useContext(FireStoreDataContext);
  const { stateLogout } = useContext(AuthContext);




          const[sliceState, setSliceState]=useState(0)
          let prodByPage = 20;
          const[sliceAlert, setSliceAlert]=useState('')

          const [hmState, setHmState]=useState(true)



          const[codigoState, setCodigoState]=useState('')
          const[diState, setDiState]=useState()
          const[deState, setDeState]=useState()
          const[anchoState, setAnchoState]=useState()




  return (


    <div className="">







      {localStorage.getItem('userEmailLS') !== null && <AddAuction />}
{/*<p className='sliceButtonsP'>De: {sliceState + 1} a: {items.length > sliceState + prodByPage ? sliceState + prodByPage : items.length}</p>*/}








      <div className='filters'>
          <label>Codigo:</label>
          <input type='text' value={codigoState} onChange={(e)=>setCodigoState(e.target.value)}/>

          <label>Diametro Interior:</label>
          <input type='number' min='0' value={diState} onChange={(e)=>{setCodigoState(''),setDiState(Number(e.target.value))}}/>

          <label>Diametro Exterior:</label>
          <input type='number' min='0' value={deState} onChange={(e)=>{setCodigoState(''),setDeState(Number(e.target.value))}}/>

          <label>Altura:</label>
          <input type='number' min='0' value={anchoState} onChange={(e)=>{setCodigoState(''),setAnchoState(Number(e.target.value))}}/>
      </div>












      {stateLogout ? (


            codigoState.length > 3 ?   

   <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border ">

          {items.sort((a, b) => {
              const result = a.codigo.localeCompare(b.codigo);

              return result === 0 ? result : a.codigo.localeCompare(b.codigo);
          })

          .filter(el=>el.codigo===codigoState)
          


          .slice(sliceState, sliceState + prodByPage).map((doc, i) => {
            return localStorage.getItem('userEmailLS') !== null && <AuctionCard item={doc} key={i} />
          })}

        </div>




 :





        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border ">

          {items.sort((a, b) => {
              const result = a.codigo.localeCompare(b.codigo);

              return result === 0 ? result : a.codigo.localeCompare(b.codigo);
          })

          .filter(el=>el.di===diState)
          .filter(el=>el.de===deState)
          .filter(el=>el.ancho===anchoState)


          .slice(sliceState, sliceState + prodByPage).map((doc, i) => {
            return localStorage.getItem('userEmailLS') !== null && <AuctionCard item={doc} key={i} />
          })}

        </div>











      ) : (
        ''
      )}


      {localStorage.getItem('userEmailLS') !== null ? (

        <div className='sliceButtons'>

            <button className={sliceState === 0 ? 'd-none' : 'button'} onClick={()=>{
                                                                  if(sliceState > 0){
                                                                      setSliceState(sliceState - prodByPage)
                                                                      window.scrollTo(0,0)
                                                                    }
                                                                  }
                                                                }>
                                                                    ⇦ Anterior
            </button>  



            <button className={sliceState === prodByPage || sliceState === 0 ? 'd-none' : 'button'} 
                    onClick={()=>{ setSliceState(0), window.scrollTo(0,0) } }>
                  ０
            </button>   



            <button className='button' onClick={()=>{ 
                                    if(items.length > sliceState + prodByPage){
                                        setSliceState(sliceState + prodByPage) 
                                        window.scrollTo(0,0) 
                                    }else{
                                        setSliceAlert(' No hay mas Productos en esta Lista')
                                        setTimeout(()=>{
                                            setSliceAlert('')
                                        },2500)
                                    }
                                }
                    }>
                        Siguiente ⇨ 
            </button>  


            <span className='sliceAlert'>{sliceAlert}</span>


            <p className='sliceButtonsP'>De: {sliceState + 1} a: {items.length > sliceState + prodByPage ? sliceState + prodByPage : items.length}</p>
            <p className='sliceButtonsP'>Paginas de {prodByPage} Codigos c/u. Total Lista: {items.length}</p>

        </div> ) : (
        ''
      )}




    </div>
  );
};



