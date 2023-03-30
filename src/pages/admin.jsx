import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";

import CardAdmin from "../components/card-admin";
import { getCards, updateCard } from "../store/card";
import constants from "../const";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.card.cards);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const cardHeader = form.cardHeader.value;
    const cardBody = form.cardBody.value;
    const cardImage = form.cardImage.files[0];
    const id = form.id;

    const data = {
      cardHeader,
      cardBody,
      cardImage,
      id
    };

    dispatch(updateCard(data));
  };

  return (
    <Container className="mb-5">
      <h1>Настройка карточек главной страницы</h1>
      <hr />
      <Row>
        {cards &&
          cards.map((x) => (
            <Col md="3" key={x.id}>
              <CardAdmin
                id={x.id}
                imageUrl={`${constants.urlBase}${x.attributes.cardImage.data.attributes.url}`}
                cardHeader={x.attributes.cardHeader}
                cardBody={x.attributes.cardBody}
                handleSubmit={handleSubmit}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Page;
