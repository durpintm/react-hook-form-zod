import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Option } from "../../types/Option";

export function useStates() {
  return useQuery({
    queryKey: ["states"],
    queryFn: () => {
      return axios
        .get<Option[]>("http://localhost:8080/states")
        .then((res) => res.data);
    },
  });
}
