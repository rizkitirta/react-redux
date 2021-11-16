import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";

function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.kontakReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("1.component didmount")
    dispatch(getListKontak());
  }, [dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp}
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading..</p>
      ) : getListKontakError ? (
        getListKontakError
      ) : (
        "Data kosong"
      )}
    </div>
  );
}

export default ListKontak;
