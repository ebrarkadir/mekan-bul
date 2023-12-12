import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import VenueDataService from "../services/VenueDataService";
import VenueList from "./VenueList";

function Admin() {
  const venueReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error("Unhandled action type");
    }
  };

  const [venues, dispatchVenues] = useReducer(venueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatchVenues({ type: "FETCH_INIT" });
      try {
        const result = await VenueDataService.listJsonVenues();
        dispatchVenues({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      } catch {
        dispatchVenues({ type: "FETCH_FAILURE" });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header headerText="Yönetici" motto="Mekanlarınızı Yönetin!" />
      {venues.isError ? (
        <p>
          <strong>Birşeyler ters gitti! ...</strong>
        </p>
      ) : venues.isLoading ? (
        <p>
          <strong>Mekanlar Yükleniyor ...</strong>
        </p>
      ) : venues.isSuccess && (
        <div className="row">
          <VenueList venues={venues.data} admin={true} />
        </div>
      )}
    </>
  );
}

export default Admin;
