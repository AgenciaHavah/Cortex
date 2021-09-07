import React, { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";

import * as gtag from "../../lib/gtag";

import api from "../../services/api";

import Loader from "../elements/Loader";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required("Campo obrigatório"),
  lastName: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  message: yup.string().required("Campo obrigatório"),
});

const Form = ({ controlId, onDismiss }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    try {
      await api.post("/user", values);

      toast.success("Mensagem enviada! Logo entraremos em contato.");
      resetForm();
    } catch (error) {
      toast.error("Não foi possível enviar a mensagem no momento.");
    } finally {
      const message = `Mensagem de ${value.firstName} ${value.firstName} - Contatos: ${values.phone} / ${values.email} - mensagem para o time: ${values.message}`;

      gtag.event({
        action: "submit_form",
        category: "Contato",
        label: message,
      });

      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-0 md:col-span-2">
        <Formik
          className="flex flex-col items-center"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, setFieldValue, handleSubmit, resetForm }) => (
            <>
              <div className="overflow-hidden">
                <div className="px-1 py-1">
                  <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-6 sm:col-span-3 p-1">
                      <label
                        htmlFor={`firstName-${controlId}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id={`firstName-${controlId}`}
                        name="firstName"
                        value={values.firstName}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                        placeholder="Nome"
                        className={`${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        } mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md`}
                      />
                      {errors.firstName && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3 p-1">
                      <label
                        htmlFor={`lastName-${controlId}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sobrenome
                      </label>
                      <input
                        type="text"
                        id={`lastName-${controlId}`}
                        name="lastName"
                        value={values.lastName}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                        placeholder="Sobrenome"
                        className={`${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        } mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md`}
                      />
                      {errors.lastName && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3 p-1">
                      <label
                        htmlFor={`phone-${controlId}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Celular
                      </label>
                      <input
                        type="number"
                        id={`phone-${controlId}`}
                        name="phone"
                        value={values.phone}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                        placeholder="Seu número de celular"
                        className={`${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md`}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3 p-1">
                      <label
                        htmlFor={`email-${controlId}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Seu melhor email
                      </label>
                      <input
                        type="text"
                        id={`email-${controlId}`}
                        name="email"
                        value={values.email}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                        placeholder="seu@email.com"
                        className={`${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md`}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="col-span-6 p-1">
                      <label
                        htmlFor={`message-${controlId}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mensagem
                      </label>
                      <div className="mt-1">
                        <textarea
                          id={`message-${controlId}`}
                          name="message"
                          value={values.message}
                          onChange={({ target: { name, value } }) =>
                            setFieldValue(name, value)
                          }
                          rows="3"
                          className={`${
                            errors.message
                              ? "border-red-500"
                              : "border-gray-300"
                          } mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md`}
                          placeholder="Mensagem"
                        ></textarea>
                      </div>
                      {errors.message ? (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.message}
                        </p>
                      ) : (
                        <p className="mt-2 text-sm text-gray-500">
                          Sua mensagem para nosso time ;).
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                {onDismiss && (
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      onDismiss();
                    }}
                    className="mr-4 w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancelar
                  </button>
                )}

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1 }}
                  className="m-auto w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:text-sm"
                >
                  Enviar mensagem
                </button>
              </div>
            </>
          )}
        </Formik>
      </div>
      <Loader loading={loading} />
    </>
  );
};

export default Form;
