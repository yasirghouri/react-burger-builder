import useHttpErrorHandler from "../../hooks/http-error-handler";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, errorConfirmedHandler] = useHttpErrorHandler(axios);
    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
