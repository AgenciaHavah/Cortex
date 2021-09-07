/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CloseIcon from "@material-ui/icons/Close";
import { Formik } from "formik";
import * as yup from "yup";

import logo from "../assets/images/logo-horizontal.png";

import { DataContext } from "../contexts/DataContext";
import { Modal, TextField } from "@material-ui/core";
import termsOfUse from "../utils/termsOfUse";

const validationSchema = yup.object().shape({
  country: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://cortexacademy.org/">
        Cortex Academy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    width: "100%",
  },
  formControlLast: {
    width: "100%",
    marginTop: "25px",
  },
  paperModal: {
    position: "absolute",
    width: "100%",
    maxWidth: 600,
    maxHeight: 400,
    boxShadow: theme.shadows[5],
    outline: "none",
  },
  close: {
    cursor: "pointer",
  },
}));

const initialValues = {
  country: "",
  state: "",
};

const Home = ({ locations: countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { setIsLogged, setFilterOptions } = useContext(DataContext);

  const classes = useStyles();

  const states = selectedCountry
    ? countries.find(({ code }) => code === selectedCountry).locations
    : [];

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const handleTermsClick = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleFormSubmit = (values) => {
    const { country, state } = values;

    if (!country || !state || !acceptTerms) {
      !acceptTerms && setTermsError(true);

      return;
    }

    setFilterOptions({ country, state });
    setIsLogged(true);
  };

  return (
    <Container maxWidth="xs">
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(!modalOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={classes.paperModal}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "white",
              outline: "none",
            }}
          >
            <CloseIcon
              className={classes.close}
              style={{ margin: 4 }}
              onClick={() => setModalOpen(!modalOpen)}
            />
          </div>
          <Typography variant="body2" color="textSecondary" align="center">
            {termsOfUse}
          </Typography>
        </div>
      </Modal>
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="logo" height={72} style={{ marginBottom: 3 }} />

        <h2>Encontre um hipnoterapeuta</h2>
        <Formik
          className={classes.form}
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ values, setFieldValue, handleSubmit, errors }) => (
            <>
              <TextField
                className={classes.formControl}
                id="outlined-select-currency"
                select
                label="País"
                value={values.country}
                onChange={({ target: { value } }) => {
                  setFieldValue("country", value);
                  setFieldValue("state", "");
                  setSelectedCountry(value);
                }}
                helperText={errors.country}
                error={errors.country}
                variant="outlined"
              >
                {countries.map(({ code, label }) => (
                  <MenuItem key={code} value={code}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                className={classes.formControlLast}
                id="outlined-select-currency"
                select
                label="Estado"
                value={values.state}
                onChange={({ target: { value } }) =>
                  setFieldValue("state", value)
                }
                helperText={errors.state}
                error={errors.state}
                variant="outlined"
              >
                {states.map(({ code, label }) => (
                  <MenuItem key={code} value={code}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptTerms}
                    onChange={() => {
                      !acceptTerms && setTermsError(false);
                      setAcceptTerms(!acceptTerms);
                    }}
                    value="remember"
                    color="primary"
                  />
                }
                label={
                  <p style={{ fontSize: 14 }}>
                    Li e concordo com os{" "}
                    <a onClick={handleTermsClick} href="">
                      termos e condições de uso
                    </a>
                    .
                  </p>
                }
              />
              {termsError && (
                <p style={{ color: "red" }}>
                  Você precisa aceitar os termos para prosseguir
                </p>
              )}

              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Procurar
              </Button>
            </>
          )}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
