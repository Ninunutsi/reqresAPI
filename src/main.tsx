import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./config";
import { AppRoutes } from "./views";
import { FormProvider } from "./context/formContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <FormProvider>
      <AppRoutes />
    </FormProvider>
  </>
);
