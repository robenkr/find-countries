import Country from "./Country";
import {useEffect, useState} from "react";

import {useQuery} from "@apollo/client";
import {LOAD_COUNTRIES} from "../GraphQL/queries";

function Countries() {

    const {data} = useQuery(LOAD_COUNTRIES);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        if (data) {
            setCountries(data.countries)
        }
    }, [data]);

    return (
        <div>
            <div className="lg:flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold mb-2 lg:mb-0"> Countries list</h1>
            </div>
            <div className="flex flex-wrap -mx-3 mb-20">
                {
                    countries.map(
                        (country, index) => <Country country={country} key={index}/>
                    )
                }
            </div>
        </div>
    );
}

export default Countries;
