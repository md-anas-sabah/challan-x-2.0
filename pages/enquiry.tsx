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
      <div className="text-white ml-10 mt-20 font-Roboto text-xl box-border gap-7 h-44 w-5/6 flex">
        <img
          src="https://gumlet.assettype.com/dtnext%2Fimport%2FArticles%2F2019%2FJul%2F201907180421332135_Transport-department-seizes-38-bike-taxis-for-illegal_SECVPF.gif?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true"
          alt=""
          className="object-contain h-44"
        />
        <div>
          <h3> Location: Near A1 Block </h3>
          <p> Vehicle Number: HR26DQ5551</p>
          <p>Description: N/A </p>
          <br />
          <button className="h-10 w-20 bg-red-600">Cancel</button>
        </div>
      </div>
    </>
  );
}

export default enquiry;

// const base64String = btoa(
//   String.fromCharCode(...new Uint8Array(singleData.img.data.data))
// );
// return <img src={`data:image/png;base64,${base64String}`} width="300"/>
