import { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import CloseIcon from "@material-ui/icons/Close";
import { Formik } from "formik";
import * as yup from "yup";

import api from "../../services/api";

import { ModalContext } from "../../contexts/ModalContext";

import s from "./Modal.module.css";

const validationSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  message: yup.string().required("Campo obrigatório"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Modal = () => {
  const [loading, setLoading] = useState(false);

  const { modalData, setModalData } = useContext(ModalContext);

  const handleFormSubmit = async (values, { resetForm }) => {
    setLoading(true);

    try {
      await api.post("/therapist/message", {
        therapist: modalData.data.id,
        ...values,
      });

      toast.success("Mensagem enviada! Logo entraremos em contato.");
      resetForm();
      setModalData({ showTherapistData: true, ...modalData });
    } catch (error) {
      toast.error("Não foi possível enviar a mensagem no momento.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setModalData({ show: false, data: null });
  };

  return (
    <>
      {modalData.show && (
        <div className="backdrop">
          <div className="modal elevation">
            {modalData.showTherapistData ? (
              <div className="modal-inner">
                <div className="modal-header">
                  <h2 className="modal-title">{`Entrar em contato com ${modalData.data.name}`}</h2>
                </div>

                <div className={s.modal_body}>
                  <div
                    className={s.name}
                  >{`E-mail: ${modalData.data.email}`}</div>
                  {modalData.data.action && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        window.open(modalData.data.action, "_blank")
                      }
                    >
                      WhatsApp
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={validationSchema}
              >
                {({ values, errors, setFieldValue, handleSubmit }) => (
                  <div className="modal-inner">
                    <div className="modal-header">
                      <h2 className="modal-title">{`Enviar mensagem para ${modalData.data.name}`}</h2>

                      <CloseIcon
                        className="modal-close"
                        onClick={handleClose}
                      />
                    </div>
                    <div className="form">
                      <TextField
                        className="modal-input"
                        label="Nome"
                        name="name"
                        value={values.name}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                        error={errors.name}
                        helperText={errors.name}
                        variant="outlined"
                      />

                      <TextField
                        className="modal-input"
                        label="E-mail"
                        name="email"
                        value={values.email}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                        error={errors.email}
                        helperText={errors.email}
                        variant="outlined"
                      />

                      <TextField
                        className="modal-input"
                        label="Celular"
                        name="phone"
                        value={values.phone}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                        error={errors.email}
                        helperText={errors.email}
                        variant="outlined"
                      />

                      <TextField
                        className="modal-input"
                        label="Mensagem"
                        name="message"
                        value={values.message}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                        error={errors.message}
                        helperText={errors.message}
                        multiline
                        rows={4}
                        rowsMax={7}
                        variant="outlined"
                      />
                    </div>
                    <Button
                      className="send-form"
                      variant="outlined"
                      disabled={loading}
                      style={{ opacity: loading ? 0.7 : 1 }}
                      onClick={handleSubmit}
                    >
                      Enviar mensagem
                    </Button>
                  </div>
                )}
              </Formik>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
