import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./config";
import { AppRoutes } from "./views";
import { FormProvider } from "./context/formContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <FormProvider>
        <AppRoutes />
      </FormProvider>
    </QueryClientProvider>
  </>
);
