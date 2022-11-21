import React, { useState, useEffect } from "react";
import axios from "axios";
import { state, useSnapshot } from "../state/index";
import Challans from "../components/Challans";

function enquiry() {
  const [data, setData] = useState([]);
  const auth = useSnapshot(state).auth;
  const id = useSnapshot(state).empID;
  const dataa = useSnapshot(state).data;
  useEffect(() => {
    console.log("9090909");
    if (auth) {
      console.log("656575765765");
      axios({
        method: "post",
        url: "https://shy-cyan-tadpole-boot.cyclic.app/all-challan",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: { empID: id },
      })
        .then((result) => {
          setData(result.data);
          state.data = [...result.data];
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="overflow-y-auto w-4/5 scrlbar">
      <Challans data={data} />
    </div>
  );
}

export default enquiry;

// const base64String = btoa(
//   String.fromCharCode(...new Uint8Array(singleData.img.data.data))
// );
// return <img src={`data:image/png;base64,${base64String}`} width="300"/>
