import React, { useState, useEffect } from "react";
import axios from "axios";
import { state, useSnapshot } from "../state/index";

function enquiry() {
  const [data, setData] = useState([]);
  const auth = useSnapshot(state).auth;
  const id = useSnapshot(state).empID;
  useEffect(() => {
    console.log("9090909");
    if (auth) {
      console.log("656575765765");
      axios({
        method: "post",
        url: "https://calm-gray-penguin-hem.cyclic.app/all-challan",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: { empID: id },
      })
        .then((result) => {
          setData(result.data);
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="text-white p-10 flex-col space-y-6 ml-20">
      <h1 className="text-5xl ">Deatils</h1>
      <p className="text-gray-300">
        {data.map((challan) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(challan.img.data.data))
          );
          return (
            <div>
              <img src={`data:image/png;base64,${base64String}`} width="300" />
              <h1 className="text-3xl ">Location: {challan.location}</h1>
              <h1 className="text-3xl ">
                Vehicle Number: {challan.vechileNum}
              </h1>
              <h1 className="text-3xl ">Despcription: {challan.description}</h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default enquiry;

// const base64String = btoa(
//   String.fromCharCode(...new Uint8Array(singleData.img.data.data))
// );
// return <img src={`data:image/png;base64,${base64String}`} width="300"/>
