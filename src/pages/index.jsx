import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import CardComponent from "../components/card";
import MenuComponent from "../components/menu";
import PromoComponent from "../components/promo";
import HeaderComponent from "../components/header";
import PlatformSectionComponent from "../components/platform-section";
import SolutionSectionComponent from "../components/solution-section";
import { getCards } from "../store/card";
import constants from "../const";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.card.cards);

  const cardLeft = cards[0];
  const cardRight = cards[1];

  return (
    <>
      <HeaderComponent>
        <MenuComponent />

        <PromoComponent>
          <Row>
            <Col md="3">
              {cardLeft && (
                <CardComponent
                  title={cardLeft.attributes.cardHeader}
                  text={cardLeft.attributes.cardBody}
                  imageUrl={`${constants.urlBase}${cardLeft.attributes.cardImage.data.attributes.url}`}
                  cardButton={
                    <Button variant="warning">Подписаться на новости</Button>
                  }
                  translate={-100}
                />
              )}
            </Col>
            <Col md="6" className="d-flex justify-content-center">
              <Image
                fluid
                src="https://cdn-icons-png.flaticon.com/512/9995/9995237.png"
                id="#section-0"
              ></Image>
            </Col>
            <Col md="3">
              {cardRight && (
                <CardComponent
                  title={cardRight.attributes.cardHeader}
                  text={cardRight.attributes.cardBody}
                  imageUrl={`${constants.urlBase}${cardRight.attributes.cardImage.data.attributes.url}`}
                  cardButton={
                    <Button variant="warning">Подписаться на новости</Button>
                  }
                  translate={100}
                />
              )}
            </Col>
          </Row>
        </PromoComponent>
      </HeaderComponent>

      <PlatformSectionComponent />

      <SolutionSectionComponent />
    </>
  );
};

export default Page;
