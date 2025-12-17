import { useCallback, useEffect, useState } from "react";

// Helper function to send HTTP requests
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  // Handle non-OK responses
  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wron, failed to send request."
    );
  }
  return resData;
}

// Custom hook for HTTP requests
export default function useHttp(url, config, initialData) {
  // State to manage data, loading status, and errors
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // Function to clear data
  function clearData() {
    setData(initialData);
  }

  // Function to send HTTP request
  const sendRequest = useCallback(
    async function sendRequest(data) {
      try {
        setIsLoading(true);
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  // Automatically send GET request on mount or when config changes
  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  // Return state and functions
  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
