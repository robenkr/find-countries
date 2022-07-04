import Country from "./Country";
import {useEffect, useState} from "react";

import {useQuery} from "@apollo/client";
import {LOAD_COUNTRIES} from "../GraphQL/queries";
import LoadingAnimation from "./Loading-animation";
import CountryFilter from "./CountryFilter";

function Countries() {

    const {data, loading} = useQuery(LOAD_COUNTRIES);
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState("");
    const [searchParam] = useState(["name", "code"])

    useEffect(() => {
        if (data) {
            setCountries(data.countries)
        }
    }, [data]);

    const filterHandler = (inputQuery: string) => {
        setQuery(inputQuery);
    }

    /**
     * Method that return a filtered list
     * @param countries A Country list
     * @return Filtered list
     */
    function filterByName(countries: any){
        return countries.filter((country: any) => {
            return searchParam.some((oneCountry) => {
                return (
                    country[oneCountry]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <div>
            {!loading ?
                <div className='flex flex-col max-h-screen overflow-y-auto overflow-x-hidden mb-20'>
                    <CountryFilter inputValue={query} onFilterCHange={filterHandler}/>
                    <div className="flex flex-wrap -mx-3 pb-20 overflow-y-auto overflow-x-hidden no-scrollbar">
                        {
                            filterByName(countries).map((country: any, index: any) => <Country {...country} key={index}/>)
                        }
                    </div>
                </div> :
                <div className="container px-8 py-24 mx-auto my-32 flex flex-col">
                    <LoadingAnimation/>
                </div>
            }
        </div>
    );
}

export default Countries;
