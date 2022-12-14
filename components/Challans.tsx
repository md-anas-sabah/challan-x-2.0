import React from "react";
import axios from "axios";
import { state, useSnapshot } from "../state/index";

function Challans(props: any) {
  const auth = useSnapshot(state).auth;
  const id = useSnapshot(state).empID;
  const pdfDownloader = (e: any) => {
    e.preventDefault();

    console.log(props.data);
    if (auth) {
      console.log("RUUN");
      axios({
        method: "post",
        url: "https://shy-cyan-tadpole-boot.cyclic.app/add-user",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: props.data,
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      {props.data.map((challan: any) => {
        console.log(challan);
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(challan.img.data.data))
        );
        return (
          <div
            className="text-white ml-10 mt-20 font-Roboto text-xl box-border gap-7 h-44 w-5/6 flex"
            key={challan._id}
          >
            <img
              src={`data:image/png;base64,${base64String}`}
              width="300px"
              className="object-contain h-44"
            />
            <div>
              <h3>Location: {challan.location}</h3>
              <p>Vehicle Number: {challan.vechileNum}</p>
              <h1>Despcription: {challan.description}</h1>
              <br />
              {/* <button className="h-10 w-20 bg-red-600" onClick={pdfDownloader}>
                Cancel
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Challans;
