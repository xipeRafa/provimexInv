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

//   const[img, setImg]=useState()

// const resizeFile = (file) =>
//   new Promise((resolve) => {
//     Resizer.imageFileResizer(
//       file,
//       600,
//       600,
//       "JPEG",
//       120,
//       0,
//       (uri) => {resolve(uri);},"base64");
//   });

//   const onResize = async (event) => {
//     const file = event.target.files[0];

//     const image = await resizeFile(file);

//     fetch(image).then(res => res.blob())
//       .then(blob => {
//           const file = new File([blob], Date.now()+'.jpeg',{ type: "image/jpeg" })
//           setImg(file)
//     })
//   };

  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');



    // const [tallaState, setTallaState]=useState('')




  // const handleTallaState=(e)=>{
  //     let str = e.target.value.toLowerCase()
  //     let arr = str.split(',')
  //     setTallaState(arr)
  // }


  const codigo = useRef();
  // const para = useRef();
  //const category = useRef();
  const di = useRef();
   const de = useRef();
   const ancho = useRef();
  //const marca = useRef();
  // const itemImage = useRef();
  //const itemImageName = useRef();
  //const talla = useRef();
  // const tela = useRef();
  // const stockHermosillo = useRef();

  const description = useRef();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  // const imgTypes = ['image/png', 'image/jpeg', 'image/jpg'];

  const submitForm = async (e) => {
    e.preventDefault();

    setError('');

    // if (!imgTypes.includes(itemImage.current?.files[0].type)) {
    //   return setError('por favor use una imagen valida (png, jpeg, jpg)');
    // }

    let currentDate = new Date();

    let dueDate = currentDate.setHours(
      currentDate.getHours() /* + itemDuration.current.value */
    );

    let newAuction = {
      email: localStorage.getItem('userEmailLS'),
      codigo: codigo.current.value,
      // para: para.current.value,

      //category: category.current.value,
      di: di.current.value,
      de: de.current.value,
      ancho: ancho.current.value,
       //marca: marca.current.value,

      duration: dueDate,

      // tela: tela.current.value,
      // stockHermosillo: Number(stockHermosillo.current.value),

      // talla: tallaState,
      // sucursal: 'Hermosillo',
      description: description.current.value,
    };

    handleFileAdd(newAuction);

    closeForm();
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
      {/*      <Row>
              <Col>
                <Form.Label>Imagen</Form.Label>
                <Form.Group>
                  <Form.Control
                    type="file"
                    label="Cargar Foto"
                    required
                    ref={itemImage}
                    onChange={onResize}
                  />
                </Form.Group>
              </Col>
            </Row>*/}
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Código</Form.Label>
                  <Form.Control type="text" required ref={codigo} />
                </Form.Group>
              </Col>
            </Row>
                 <hr/>
        {/*    <Row>
              <Col className="mb-2">
                <Form.Label>para</Form.Label>
                <Form.Control as="select" multiple={false} ref={para}>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </Form.Control>
              </Col>
            </Row>*/}
{/*
            <Row>
              <Col className="mb-2">
                <Form.Label>Categoria</Form.Label>
                <Form.Control as="select" multiple={false} ref={category}>
                  <option value="Sala">Sala</option>
                  <option value="Recamara">Recamara</option>
                  <option value="Comedor">Comedor</option>
                  <option value="Decoracion">Decoracion</option>
                </Form.Control>
              </Col>
            </Row>*/}
          {/*  <Row>
              <Col>
                <Form.Label>Talla</Form.Label>
                 <Form.Control type="text" required  onChange={(e)=>handleTallaState(e)} value={tallaState} placeholder='separar cada talla con una coma ,' />
              </Col>
            </Row>*/}
               <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control type="textarea" required ref={description} />
                </Form.Group>
              </Col>
            </Row>
<hr />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Diametro Interior </Form.Label>
                  <Form.Control type="number" required ref={di} />
                </Form.Group>
              </Col>
            </Row>

            <hr />

             <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Diametro Exterior  </Form.Label>
                  <Form.Control type="number" required ref={de} />
                </Form.Group>
              </Col>
            </Row>

            <hr />


              <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Ancho</Form.Label>
                  <Form.Control type="number" required ref={ancho} />
                </Form.Group>
              </Col>
            </Row>

         {/*   <Row>
              <Col className="mb-2">
                <Form.Label>tela</Form.Label>
                <Form.Control as="select" multiple={false} ref={tela}>
                  <option value="algodon">algodon</option>
                  <option value="lino">lino</option>
                </Form.Control>
              </Col>
            </Row>*/}
        {/*    <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Stock Hermosillo</Form.Label>
                  <Form.Control type="number" required ref={stockHermosillo} />
                </Form.Group>
              </Col>
            </Row>*/}

           
       

            
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
