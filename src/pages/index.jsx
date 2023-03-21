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
// import PartnerSectionComponent from "../components/header";
// import FooterComponent from "../components/header";

const Page = () => {
  return (
    <>
      <HeaderComponent>
        <MenuComponent />

        <PromoComponent>
          <Row>
            <Col md="3">
              <CardComponent
                text={`Новый подход к реализации задач, оптимизация времени
                      выполнения`}
                title={`Архитектурные решения`}
                cardButton={
                  <Button variant="warning">Подписаться на новости</Button>
                }
                imageUrl={`https://cdn-icons-png.flaticon.com/512/9215/9215454.png`}
                translate={-100}
              />
            </Col>
            <Col md="6" className="d-flex justify-content-center">
              <Image
                fluid
                src="https://cdn-icons-png.flaticon.com/512/9995/9995237.png"
                id="#section-0"
              ></Image>
            </Col>
            <Col md="3">
              <CardComponent
                text={`Продвинутая среда исполнения для настройки гибких
                  процессов`}
                title={`Автоматизация процессов`}
                cardButton={
                  <Button variant="warning">Подписаться на новости</Button>
                }
                imageUrl={`https://cdn-icons-png.flaticon.com/512/9215/9215459.png`}
                translate={100}
              />
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
