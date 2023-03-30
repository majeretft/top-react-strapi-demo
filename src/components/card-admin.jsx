import styled from "styled-components";
import { Card, Form, Button } from "react-bootstrap";

const CardImgStyled = styled(Card.Img).attrs({
  className: `p-5`,
})``;

const Component = (props) => (
  <Card>
    <CardImgStyled variant="top" src={props.imageUrl} />

    <Form onSubmit={props.handleSubmit} id={props.id}>
      <Card.Body className="d-flex flex-column">
        <Form.Group className="mb-3">
          <Form.Label>Загрузка нового изображения</Form.Label>
          <Form.Control type="file" name="cardImage" />
        </Form.Group>

        <hr />

        <Form.Group className="mb-3">
          <Card.Title>
            <Form.Label>{props.cardHeader}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Новый заголовок карточки"
              name="cardHeader"
            />
          </Card.Title>
        </Form.Group>

        <hr />

        <Form.Group className="mb-3">
          <Card.Text>
            <Form.Label>{props.cardBody}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Новый текст карточки"
              name="cardBody"
            />
          </Card.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Сохранить
        </Button>
      </Card.Body>
    </Form>
  </Card>
);

export default Component;
