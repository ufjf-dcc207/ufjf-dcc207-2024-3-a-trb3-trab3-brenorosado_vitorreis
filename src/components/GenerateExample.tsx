import { useEffect, useState } from "react";
import { fetchFakeData } from "../api/fakeData";

interface GenerateExampleProps {
  selectedField: string;
  name: string;
}

interface ApiResult {
  [key: string]: any;
}

export function GenerateExample({ selectedField, name }: GenerateExampleProps) {
  const [apiResult, setApiResult] = useState<ApiResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchFakeData(`&${name}=${selectedField}`);
      console.log(result)
      setApiResult(result);
    };

    fetchData();
  }, [selectedField, name]);

  return (
    <div className="type">
      {apiResult ? apiResult[name] : "Carregando..."}
    </div>
  );
}