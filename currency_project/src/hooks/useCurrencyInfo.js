import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/013950d992106a457bfe0da9/latest/${baseCurrency}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.result === "success") {
                    setData(data.conversion_rates); // Contains exchange rates
                } else {
                    console.error("Error fetching currency data:", data["error-type"]);
                }
            })
            .catch((error) => console.error("Fetch error:", error));
    }, [baseCurrency]);

    return data;
}

export default useCurrencyInfo;
