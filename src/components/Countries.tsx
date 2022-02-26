import Country from "./Country";
import {useEffect, useState} from "react";

import {useQuery} from "@apollo/client";
import {LOAD_COUNTRIES} from "../GraphQL/queries";
import LoadingAnimation from "./Loading-animation";

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
                <div>
                    <div className='container flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-10 mb-5'>
                        <label htmlFor="search-form" className='relative'>
                            <input
                                type="search" name='search-form' id='search-form'
                                className='h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none'
                                placeholder='Search by name or Code' value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-20 overflow-y-auto h-screen scrollbar">
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
