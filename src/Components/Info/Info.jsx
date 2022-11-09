import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import useTheme from "../../Hooks/useTheme";
import FieldText from "../Detail/FieldText";
import styles from "./Info.module.css";

export default function Info({ show, setShow }) {
  const handleClose = () => setShow(false);
  const { theme } = useTheme();
  return (
    <div className={styles.body}>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Card
          border="warning"
          bg={theme === "dark" ? "dark" : "secondary"}
          text="light"
          style={{ width: "20rem", height: "10rem" }}
          className="mb-2 text-center"
        >
          <Card.Body>
            <Card.Title>
              <FieldText text="App desing by Ramiro Ferradas" />
            </Card.Title>

            <FieldText
              className="mt-4"
              text={
                <>
                  <a
                    target="_blank"
                    href="mailto:ramiferra97@gmail.com"
                    rel="noreferrer"
                  >
                    <i
                      className={`fa-regular fa-envelope h3 me-3 ${styles.gh}`}
                    ></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/RamiroFerradas"
                    rel="noreferrer"
                  >
                    <i
                      className={`fa-brands fa-github me-3 h3 ${styles.gh}`}
                    ></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ramiro-ferradas/"
                    rel="noreferrer"
                  >
                    <i className={`fab fa-linkedin h3 ${styles.lkd}`}></i>
                  </a>
                </>
              }
            />
          </Card.Body>
        </Card>
      </Container>
      <Button variant="outline-warning" onClick={handleClose}>
        Close
      </Button>
    </div>
  );
}
