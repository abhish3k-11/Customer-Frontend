import React, { useState } from "react";
import Pages from "./Pages"

function App() {
  /**
   * Auth state is a binary state
   * false: not logged in
   * true: Logged in
   */

  const [authState, setAuthState] = useState(false)
  return (
    <>
      {!authState ?
        <Pages.Auth setAuthState={setAuthState} /> :
        <div>Logged In</div>
      }
    </>
  );
}

export default App;
