import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context/ContextProvider.jsx";
import { registerLicense, validateLicense } from "@syncfusion/ej2-base";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXZcc3VRRGdcUUZ/X0o="
);

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
