import React, { useEffect, useLayoutEffect } from "react";
import styles from "./Detail.module.css";
import Loader from "../Loader/Loader";
import useFetchDetails from "../../Hooks/useFetchDetails";
import useFetchPlanets from "../../Hooks/useFetchPlanets";
import useFetchSpecies from "../../Hooks/useFetchSpecies";
import useTheme from "../../Hooks/useTheme";
import { textTransformation } from "../../Utils/TextTransformation";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import FieldText from "../../Utils/FieldText/FieldText";
import useFetchData from "../../Hooks/useFetchData";
import useLoader from "../../Hooks/useLoader";

export default function Detail({ url, setCharacterDetails, characterDetails }) {
  const { detail, setDetail } = useFetchDetails(url);
  const { planet, fetchDetailsPlanets } = useFetchPlanets();
  const { species, fetchSpecies } = useFetchSpecies();
  const { theme } = useTheme();
  const { films, vehicles, fetchData, starships } = useFetchData();
  const { load, setLoad } = useLoader();

  useLayoutEffect(() => {
    fetchDetailsPlanets(detail.homeworld);
    fetchSpecies(detail.species);
    fetchData("films", detail.films);
    fetchData("vehicles", detail.vehicles);
    fetchData("starships", detail.starships);
  }, [detail]);

  setTimeout(() => {
    setLoad(false);
  }, 2500);

  const handleClose = () => {
    setCharacterDetails(!characterDetails);
    setDetail("detail", {});
  };

  return (
    <div className={styles.body}>
      <Container fluid>
        {load ? (
          <Loader />
        ) : (
          <Row
            className={`d-flex justify-content-center align-items-centerme-4 text-center p-3`}
          >
            <Card
              border="warning"
              bg={theme === "dark" ? "dark" : "secondary"}
              text="light"
              style={{ width: "18rem", height: "25rem" }}
              className={`mb-2 text-center m-4`}
            >
              <Col>
                <Card.Title className="text-uppercase mt-5">
                  {detail.name}
                </Card.Title>
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
              </Col>
            </Card>
            {
              <Card
                border="warning"
                bg={theme === "dark" ? "dark" : "secondary"}
                text="light"
                style={{ width: "18rem", height: "auto" }}
                className={`mb-2 text-center p-3 m-4`}
              >
                <Col>
                  <ul>
                    {
                      <FieldText
                        className="mt-4"
                        title="Films:"
                        text={films.map((e) => {
                          return (
                            <>
                              <li key={e.episode_id}>{e.title}</li>
                            </>
                          );
                        })}
                      />
                    }
                  </ul>
                  <ul>
                    {
                      <FieldText
                        title="Vehicles:"
                        text={
                          vehicles.length
                            ? vehicles.map((e) => {
                                return (
                                  <>
                                    <li key={e.name}>{e.name}</li>
                                  </>
                                );
                              })
                            : "Unknown"
                        }
                      />
                    }
                  </ul>
                  <ul>
                    {
                      <FieldText
                        title="Starships:"
                        text={
                          starships.length
                            ? starships.map((e) => {
                                return (
                                  <>
                                    <li key={e.name}>{e.name}</li>
                                  </>
                                );
                              })
                            : "Unknown"
                        }
                      />
                    }
                  </ul>
                </Col>
              </Card>
            }
          </Row>
        )}
      </Container>
      {!load && (
        <Button variant="outline-warning" onClick={handleClose}>
          Close
        </Button>
      )}
    </div>
  );
}
