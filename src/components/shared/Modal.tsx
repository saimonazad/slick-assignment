import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/esm/Spinner";
import Modal from "react-bootstrap/Modal";

interface Props {
  modalShow: boolean;
  setModalShow: Function;
  title: string;
  loading: boolean;
  data: any;
}
interface CenteredModalProps {
  show: boolean;
  onHide: any;
  title: string;
  loading: boolean;
  data: any;
}

const CenteredModal = (props: CenteredModalProps) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="h5">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.loading ? <Spinner animation="border" /> : undefined}
        {!props.loading && props.data && (
          <>
            <h5>Business Information</h5>
            <h6>Operating Name: {props.data.operatingName}</h6>
            <h6>Legal Name: {props.data.legalName}</h6>
            <h6>Email: {props.data.email}</h6>
            <h6>
              Address:{" "}
              {`${props.data.address.addressLine1} ${props.data.address.city}`}
            </h6>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const BsModal = ({ modalShow, setModalShow, title, loading, data }: Props) => {
  return (
    <CenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      title={title}
      loading={loading}
      data={data}
    />
  );
};

export default BsModal;
