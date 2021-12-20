import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 5000 } },
});

export default queryClient;
