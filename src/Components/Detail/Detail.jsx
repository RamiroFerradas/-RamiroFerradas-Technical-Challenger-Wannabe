import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import useFetchDetails from "../../Hooks/useFetchDetails";
import useFetchPlanets from "../../Hooks/useFetchPlanets";
import styles from "./Detail.module.css";

import Loader from "../Loader/Loader";

export default function Detail({ url, setCharacterDetails, characterDetails }) {
  const { detail } = useFetchDetails(url);
  const { planet, fetchDetailsPlanets } = useFetchPlanets();

  const homeworld = detail.homeworld;
  fetchDetailsPlanets(homeworld);

  return (
    <div className={styles.body}>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        {!detail.name ? (
          <Loader />
        ) : (
          <Card
            bg="dark"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2 text-center"
          >
            <Card.Body>
              <Card.Title>{detail.name}</Card.Title>
              <Card.Text>
                <span>Height: {detail.height} mts.</span>
              </Card.Text>
              <Card.Text>
                <span>Hair color: {detail.hair_color}</span>
              </Card.Text>
              <Card.Text>
                <span>Skin color: {detail.skin_color}</span>
              </Card.Text>
              <Card.Text>
                <span>Birth year: {detail.birth_year}</span>
              </Card.Text>
              <Card.Text>
                <span>Gender: {detail.gender}</span>
              </Card.Text>
              <Card.Text>
                <span>Gender: {detail.gender}</span>
              </Card.Text>
              {planet && (
                <Card.Text>
                  <span>Homeworld: {planet && planet}</span>
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        )}
      </Container>
      {detail.name && (
        <Button
          variant="outline-warning"
          onClick={() => setCharacterDetails(!characterDetails)}
        >
          {"<"} Back
        </Button>
      )}
    </div>
  );
}
