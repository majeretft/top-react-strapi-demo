import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Component = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Введите учетные данные
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Адрес электронной почты или логин</Form.Label>
            <Form.Control type="email" placeholder="example@email.com" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="**********" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button variant="outline-secondary" onClick={props.onHide}>
            Отмена
          </Button>
          <Button variant="outline-primary" onClick={props.onHide}>
            Войти
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default Component;
