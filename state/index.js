// import { createGlobalState } from "react-hooks-global-state";

// const { useAuth, setAuth } = createGlobalState({
//   auth: false,
// });

// export { useAuth, setAuth };

import { proxy, useSnapshot } from "valtio";

const state= proxy({
  auth: false,
  firstName: "",
  lastName: "",
  email: "",
  empID: "",
  data:[{}],
});

export { state, useSnapshot };
