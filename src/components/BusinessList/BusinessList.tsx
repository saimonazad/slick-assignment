import useAxios from "axios-hooks";
import Table from "../shared/Table";
import { useState } from "react";
import BsModal from "../shared/Modal";
import { getBusinessById } from "../../services";
import ErrorModal from "../shared/ErrorModal";
import columns from "./Columns";

const BusinessList = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("Business");
  const [showError, setShowError] = useState<boolean>(false);
  const [individualBusinessData, setIndividualBusinessData] = useState<
    Business | undefined
  >(undefined);

  const [{ data, loading: businessListLoading }] = useAxios(
    "/businesses?verbose=true"
  );

  const OnRowClickHandler = async (row: Business) => {
    setModalShow(true);
    setLoading(true);
    setModalTitle(`Business Id: ${row.id}`);
    const data = await getBusinessById(row.id);
    setIndividualBusinessData(data);
    setLoading(false);
    try {
    } catch (error) {
      setLoading(false);
      setShowError(true);
    }
  };

  return (
    <>
      <Table
        Title="GET ALL Business"
        Column={columns}
        Data={data}
        OnClickRow={OnRowClickHandler}
        loading={businessListLoading}
      />
      <BsModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        title={modalTitle}
        loading={loading}
        data={individualBusinessData}
      />
      <ErrorModal showErrorModal={showError} setShowErrorModal={setShowError} />
    </>
  );
};
export default BusinessList;
