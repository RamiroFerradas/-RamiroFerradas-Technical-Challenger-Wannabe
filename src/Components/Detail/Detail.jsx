import React, { useEffect } from "react";
import styles from "./Detail.module.css";
import Loader from "../Loader/Loader";
import useFetchDetails from "../../Hooks/useFetchDetails";
import useFetchPlanets from "../../Hooks/useFetchPlanets";
import useFetchSpecies from "../../Hooks/useFetchSpecies";
import useTheme from "../../Hooks/useTheme";
import { textTransformation } from "../../Utils/TextTransformation";
import { Button, Card, Container } from "react-bootstrap";
import FieldText from "./FieldText";

export default function Detail({ url, setCharacterDetails, characterDetails }) {
  const { detail, setDetail } = useFetchDetails(url);
  const { planet, fetchDetailsPlanets } = useFetchPlanets();
  const { species, fetchSpecies } = useFetchSpecies();
  const { theme } = useTheme();

  useEffect(() => {
    fetchDetailsPlanets(detail.homeworld);
    fetchSpecies(detail.species);
  }, [detail]);

  const handleClose = () => {
    setCharacterDetails(!characterDetails);
    setDetail("detail", {});
  };

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
            border="warning"
            bg={theme === "dark" ? "dark" : "secondary"}
            text="light"
            style={{ width: "18rem", height: "24rem" }}
            className="mb-2 text-center"
          >
            <Card.Body>
              <Card.Title className="text-uppercase">{detail.name}</Card.Title>

              <FieldText
                className="mt-4 text-center"
                title="Height:"
                text={detail.height}
                terminacion="mts."
              />
              <FieldText
                title="Hair color:"
                text={textTransformation(detail.hair_color)}
              />
              <FieldText
                title="Skin color:"
                text={textTransformation(detail.skin_color)}
              />
              <FieldText
                title="Birth year:"
                text={textTransformation(detail.birth_year)}
              />
              <FieldText
                title="Gender:"
                text={textTransformation(detail.gender)}
              />

              {planet.length ? (
                <FieldText
                  title="Homeworld:"
                  text={textTransformation(planet)}
                />
              ) : (
                <span></span>
              )}

              {species.length ? (
                <FieldText title="Species:" text={species} />
              ) : (
                <span></span>
              )}
            </Card.Body>
          </Card>
        )}
      </Container>
      {detail.name && (
        <Button variant="outline-warning" onClick={handleClose}>
          Close
        </Button>
      )}
    </div>
  );
}
