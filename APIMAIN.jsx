import React, { Suspense, lazy } from "react";
const UserAPI = lazy(() => import("./UserAPI"));
import './API_INTEGRATION.css';

function APIMAIN() {
  return (
    <div >
 
      <Suspense
        fallback={
          <h5
            style={{ fontSize: "40px" }}
            className="text-3xl text-center"
          >
            Loading component{" "}
            <span style={{ fontSize: "50px" }}>&#9676;</span>
          </h5>
        }
      >
        <UserAPI />
      </Suspense>

    </div>
  );
}

export default APIMAIN;
