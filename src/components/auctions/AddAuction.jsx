import { useContext, useEffect, useRef, useState } from 'react';
import {
  Button,
  Form,
  Modal,
  Alert,
  Row,
  Col /* , Select */,
} from 'react-bootstrap';

import Resizer from "react-image-file-resizer";

import { FireStoreDataContext } from '../../context/FireStoreDataContext';





export const AddAuction = ({ setAuction }) => {
  const { handleFileAdd } = useContext(FireStoreDataContext);


  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');



  const codigo = useRef();
  const di = useRef();
   const de = useRef();
   const ancho = useRef();
   const precio = useRef();
   const precioCompra = useRef();
  const stock = useRef();

  const description = useRef();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);


  const submitForm = async (e) => {
    e.preventDefault();

    setError('');

    let currentDate = new Date();

    let dueDate = currentDate.setHours(
      currentDate.getHours() /* + itemDuration.current.value */
    );

    let newAuction = {
      email: localStorage.getItem('userEmailLS'),
      codigo: codigo.current.value,
      di: di.current.value,
      de: de.current.value,
      ancho: ancho.current.value,
      precio: Number(precio.current.value),
      precioCompra: Number(precioCompra.current.value),
      duration: dueDate,
      stock: Number(stock.current.value),
      description: description.current.value,
    }

    handleFileAdd(newAuction)

    closeForm()
  };

  return (
    <>
      <div className="col d-flex justify-content-center my-3 ">
        <div onClick={openForm} className="btn btn-primary mx-5">
          CREAR INFORME
        </div>
      </div>

      
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
                  <Form.Control type="text" required ref={codigo} />
                </Form.Group>
              </Col>
            </Row>


            <hr/>
     
          
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Diametro Interior </Form.Label>
                  <Form.Control type="number" required ref={di} />
                </Form.Group>
              </Col>
            </Row>


             <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Diametro Exterior  </Form.Label>
                  <Form.Control type="number" required ref={de} />
                </Form.Group>
              </Col>
            </Row>



              <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Ancho</Form.Label>
                  <Form.Control type="number" required ref={ancho} />
                </Form.Group>
              </Col>
            </Row>


            <hr />

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Precio Compra</Form.Label>
                  <Form.Control type="number" required ref={precioCompra} />
                </Form.Group>
              </Col>
            </Row>


            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Precio Venta</Form.Label>
                  <Form.Control type="number" required ref={precio} />
                </Form.Group>
              </Col>
            </Row>

            <hr />

              <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Stock</Form.Label>
                  <Form.Control type="number" required ref={stock} />
                </Form.Group>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control type="textarea" required ref={description} />
                </Form.Group>
              </Col>
            </Row>

 

           
       

            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancelar
            </Button>
            <Button variant="primary" disabled={false} type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
