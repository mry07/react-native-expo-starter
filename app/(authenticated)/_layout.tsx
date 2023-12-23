import React from "react";
import { AuthContext } from "../../src/context/auth";
import { Redirect, Slot } from "expo-router";
import { getStorage } from "../../src/utility/storage";

const AppLayout = () => {
  const { hasLogged, setHasLogged } = React.useContext(AuthContext);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const hasLogged = await getStorage("@has_logged");

      setLoading(false);
      setHasLogged(hasLogged === true);
    })();
  }, []);

  if (loading) {
    return null;
  }

  if (!hasLogged) {
    return <Redirect href="/login" />;
  }

  return <Slot />;
};

export default AppLayout;
