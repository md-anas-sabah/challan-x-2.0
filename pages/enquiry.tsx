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
    // <div className="text-white p-10 flex-col space-y-6 ml-20">
    //   <h1 className="text-5xl ">Deatils</h1>
    //   <p className="text-gray-300">
    //     {data.map((challan) => {
    //       const base64String = btoa(
    //         String.fromCharCode(...new Uint8Array(challan.img.data.data))
    //       );
    //       return (
    //         <div>
    //           <img src={`data:image/png;base64,${base64String}`} width="300" />
    //           <h1 className="text-3xl ">Location: {challan.location}</h1>
    //           <h1 className="text-3xl ">
    //             Vehicle Number: {challan.vechileNum}
    //           </h1>
    //           <h1 className="text-3xl ">Despcription: {challan.description}</h1>
    //           <br></br>
    //           <br></br>
    //           <br></br>
    //           <br></br>
    //         </div>
    //       );
    //     })}
    //   </p>
    // </div>
    <>
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
