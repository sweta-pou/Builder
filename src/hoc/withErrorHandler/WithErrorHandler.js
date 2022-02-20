import React, { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal/Modal";
const WithErrorHandle = (Wrapped, axios) => {
  const WithErrorHandle = (props) => {
    const [error, setError] = useState(null);

    const requestInterceptors = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });

    const responseInterceptors = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        setError(error);
        return Promise.reject(error);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptors);
        axios.interceptors.response.eject(responseInterceptors);
      };
    }, [requestInterceptors, responseInterceptors]);

    return (
      <>
        <Modal show={error !== null} modalClosed={() => setError(null)}>
          {error !== null ? error.message : null}
        </Modal>
        <Wrapped {...props} />
      </>
    );
  };

  return WithErrorHandle;
};

export default WithErrorHandle;
