import Toast from "react-bootstrap/Toast";

interface Props {
  showErrorModal: boolean;
  setShowErrorModal: Function;
}
function ErrorModal({ showErrorModal, setShowErrorModal }: Props) {
  return (
    <Toast
      onClose={() => setShowErrorModal(false)}
      show={showErrorModal}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>Something Happened!</Toast.Body>
    </Toast>
  );
}

export default ErrorModal;
