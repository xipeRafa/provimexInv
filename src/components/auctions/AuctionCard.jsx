import { useContext, useRef} from 'react';
import { FireStoreDataContext } from '../../context/FireStoreDataContext';
  import './auctionCard.css'








export const AuctionCard = ({ item }) => {
  const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
   
  const milisegundosComoFecha = (milisegundos) => {
      return formateador.format(new Date(milisegundos));
  }; 



  const { deleteById, setToggle, toggle } = useContext(FireStoreDataContext);



function QrFunction(){
      let typeNumber = 4;
      let errorCorrectionLevel = 'L';
      let qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(`https://xiperafa.github.io/adminProvimex/${item.id}`);
      qr.make();
      return <div dangerouslySetInnerHTML={{ __html: qr.createImgTag() }} />
}


  return (
    <div className="card shadow-sm " >
    {/*  <div
        style={{
          height: '180px',
          backgroundImage: `url(${item.imgUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-100 mt-4"
      />*/}

      <div className="card-body p-4 ">

        {/*<p>Creado: {  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</p>*/}
        <p> {milisegundosComoFecha(item.duration)}  </p>
        {/*{item.id}*/}

        <hr/>
        <p>Código: <span>{item.codigo}</span></p>
        {/*<p>para: <span>{item.para}</span></p>*/}

        <hr/>

        <p>Dia Int: <span>{item.di}</span></p>
        
        <hr />

        <p> Dia Ext: <span>{item.de}</span></p>
        
        <hr />
       
        <p> Ancho: <span>{item.ancho}</span></p>
        
        <hr />

        <p> Precio Compra: <span>{item.precioCompra}</span></p>

        <hr />

        <p> Precio Venta: <span>{item.precio}</span></p>

        <hr />

        <p> Stock: <span>{item.stock}</span></p>

        <hr />

        <p> Descripción: <span>{item.description}</span></p>




        <hr/>

        {/*<p> Stock Hermosillo: <span>{item.stockHermosillo}</span></p>*/}
        {/*<p> Precio: <span>{item.price} $ </span></p>*/}
        {/*<p> Tallas: </p>*/}
   {/*     {item?.talla?.map((el,i)=>(
                          <b key={i}><span>{el }, </span></b>
        ))}*/}


        
        <div className='btnBorrarInforme'> 
          <button
            className="btn btn-danger mb-2 mt-2"
            onClick={() => {
              if (window.confirm(`Quiere Borrar este Documento? ${item.codigo}`)) {
                  deleteById(item.id, item.imgName);
                  setToggle(!toggle);
                }
              }}
          >
            Borrar
          </button>


          <button
            className="btn btn-info mx-1"
            onClick={() => {
              if (window.confirm(`Quiere Borrar este Documento? ${item.codigo}`)) {
                  deleteById(item.id, item.imgName);
                  setToggle(!toggle);
                }
              }}
          >
            Editar
          </button>

    
          <QrFunction />



         {/*<button className="btn btn-dark btn-sm mt-1">IMPRIMIR QR</button>*/}
        </div>

      </div>
      
    </div>
  );
};
