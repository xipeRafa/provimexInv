import { useContext, useRef, useState} from 'react';
import { FireStoreDataContext } from '../../context/FireStoreDataContext';
  import './auctionCard.css'


import {
  Button,
  Form,
  Modal,
  Alert,
  Row,
  Col /* , Select */,
} from 'react-bootstrap';








export const AuctionCard = ({ item }) => {

  console.log(item)

  const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
   
  const milisegundosComoFecha = (milisegundos=0) => {
      return formateador.format(new Date(milisegundos));
  }; 



  const { deleteById, setToggle, toggle, UpdateById } = useContext(FireStoreDataContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const [showForm, setShowForm] = useState(false);

 
  const [error, setError] = useState('');


function QrFunction(){
      let typeNumber = 4;
      let errorCorrectionLevel = 'L';
      let qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(`https://xiperafa.github.io/adminProvimex/${item.id}`);
      qr.make();
      return <div dangerouslySetInnerHTML={{ __html: qr.createImgTag() }} />

}


const [newObjEdit, setNewObjEdit]=useState({
  codigo:'',
  di:'',
  de: '',
  ancho: '',
  precio: 0,
  // precioCompra: '',
  stock:'',
  description: ''
})



const {codigo, di,de,ancho,precio,stock,description} = newObjEdit


const handlerForm =(e)=>{
    setNewObjEdit({ ...newObjEdit, [e.target.name] : e.target.value })
}



const submitForm = async (e) => {
    e.preventDefault();

    setError('');

    let currentDate = new Date();

    let dueDate = currentDate.setHours(
      currentDate.getHours() /* + itemDuration.current.value */
    );



    newObjEdit.email = localStorage.getItem('userEmailLS')

    newObjEdit.duration = dueDate

    UpdateById(item.id, newObjEdit)

    closeForm();
  };




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
        {/*<p> {milisegundosComoFecha(item.duration)}  </p>*/}
        {item.id}

        <hr/>
        <p>Código: <span>{item.codigo}</span></p>

        <hr/>

        <p>Dia Int: <span>{item.di}</span></p>
        
        <hr />

        <p> Dia Ext: <span>{item.de}</span></p>
        
        <hr />
       
        <p> Altura: <span>{item.ancho}</span></p>
        
        <hr />
{/*
        <p> Precio Compra: <span>{item.precioCompra}</span></p>

        <hr />*/}

        <p> Precio Venta: <span>{item.precio}</span></p>

        <hr />

        <p> Stock: <span>{item.stock}</span></p>

        <hr />

        <p> Descripción: <span>{item.description}</span></p>




        <hr/>



        
        <div className='btnBorrarInforme'> 
          <button
            className="btn btn-danger mb-2 mt-2"
            onClick={() => {

              console.log(item.id)
              if (window.confirm(`Quiere Borrar este Documento? ${item.codigo}`)) {
                  deleteById(item.id);
                }
              }}
          >
            Borrar
          </button>


          <button className="btn btn-info mx-1" onClick={()=>{openForm(), setNewObjEdit(item)}}>
            Editar
          </button>

    
          <QrFunction />



        </div>

      </div>

{/*   modal editar */}

      <Modal
        centered
        show={showForm}
        onHide={closeForm}
        style={{ width: '96%', marginLeft: '1%' }}
      >
        <form
          onSubmit={submitForm}
          style={{ backgroundColor: 'rgb(222,222,222)' }}
        >
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
              <Col className="border mb-5 btn bg-primary mx-2 p-2 text-center text-white">
                {localStorage.getItem('userEmailLS')}
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Código</Form.Label>
                  <Form.Control type="text" required name='codigo' value={codigo} onChange={(e)=>handlerForm(e)} />
                </Form.Group>
              </Col>
            </Row>


            <hr/>
     
          
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Diametro Interior </Form.Label>
                  <Form.Control type="number" name='di' value={di} onChange={(e)=>handlerForm(e)} required  />
                </Form.Group>
              </Col>
            </Row>


             <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Diametro Exterior  </Form.Label>
                  <Form.Control type="number" name='de' value={de} required onChange={(e)=>handlerForm(e)} />
                </Form.Group>
              </Col>
            </Row>



              <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Ancho</Form.Label>
                  <Form.Control type="number" name='ancho' value={ancho} required onChange={(e)=>handlerForm(e)} />
                </Form.Group>
              </Col>
            </Row>


            <hr />

          {/*  <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Precio Compra</Form.Label>
                  <Form.Control type="number" name='precioCompra' value={precioCompra} required onChange={(e)=>handlerForm(e)} />
                </Form.Group>
              </Col>
            </Row>*/}


            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Precio Venta</Form.Label>
                  <Form.Control type="number" name='precio' value={precio} required onChange={(e)=>handlerForm(e)} />
                </Form.Group>
              </Col>
            </Row>

            <hr />

              <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Stock</Form.Label>
                  <Form.Control type="number" name='stock' value={stock} required onChange={(e)=>handlerForm(e)} />
                </Form.Group>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control type="textarea" required name='description' value={description} onChange={(e)=>handlerForm(e)} />
                </Form.Group>
              </Col>
            </Row>

      
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancelar
            </Button>
            <Button variant="primary" disabled={false} type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      
    </div>
  );
};
