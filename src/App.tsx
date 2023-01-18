import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UIProvider} from "./contexts"
import { AppRouter } from "./router"

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <UIProvider>
          <AppRouter></AppRouter>
        </UIProvider>
    </QueryClientProvider>
  )
}

export default App
