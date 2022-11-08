import React, { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import useFetchDetails from "../../Hooks/useFetchDetails";
import useFetchPlanets from "../../Hooks/useFetchPlanets";
import styles from "./Detail.module.css";
import { textTransformation } from "../../Utils/TextTransformation";

import Loader from "../Loader/Loader";
import useFetchSpecies from "../../Hooks/useFetchSpecies";
import useFetchFilms from "../../Hooks/useFetchFilms";

export default function Detail({ url, setCharacterDetails, characterDetails }) {
  const { detail } = useFetchDetails(url);
  const { planet, fetchDetailsPlanets } = useFetchPlanets();
  const { species, fetchSpecies } = useFetchSpecies();

  useEffect(() => {
    fetchDetailsPlanets(detail.homeworld);
    fetchSpecies(detail.species);
  }, [detail]);

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
            style={{ width: "18rem", height: "25rem" }}
            className="mb-2 text-center"
          >
            <Card.Body>
              <Card.Title>{detail.name.toUpperCase()}</Card.Title>
              <Card.Text>
                <span>Height: {detail.height} mts.</span>
              </Card.Text>
              <Card.Text>
                <span>Hair color: {textTransformation(detail.hair_color)}</span>
              </Card.Text>
              <Card.Text>
                <span>Skin color: {textTransformation(detail.skin_color)}</span>
              </Card.Text>
              <Card.Text>
                <span>Birth year: {textTransformation(detail.birth_year)}</span>
              </Card.Text>
              <Card.Text>
                <span>Gender: {textTransformation(detail.gender)}</span>
              </Card.Text>
              <Card.Text>
                <span>Gender: {textTransformation(detail.gender)}</span>
              </Card.Text>
              {planet.length ? (
                <Card.Text>
                  <span>Homeworld: {textTransformation(planet)}</span>
                </Card.Text>
              ) : (
                <span></span>
              )}

              {species.length ? (
                <Card.Text>
                  <span>Species: {species}</span>
                </Card.Text>
              ) : (
                <span></span>
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
          Close
        </Button>
      )}
    </div>
  );
}
