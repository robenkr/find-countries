import {useParams} from "react-router-dom";
import {LOAD_COUNTRY} from "../GraphQL/queries";
import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {addDefaultSrc} from './Country';
import LoadingAnimation from "./Loading-animation";

function CountryDetail() {
    let {countryCode} = useParams<{countryCode: string}>();

    const {data, loading} = useQuery(LOAD_COUNTRY, {
        variables: { code: countryCode}
    });
    const [country, setCountry] = useState(Object);

    useEffect(() => {

        if (data) {
            setCountry(data.country)
        }

        // if(error){
        //     console.log(`Load Data Error => ${error}`);
        //     alert(error);
        // }
    }, [data]);

    return (
        <div>
            {!loading ?
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="flex flex-col sm:flex-row mb-10 my-24">
                    <div className="sm:w-1/4 text-center sm:pr-8 sm:py-8">
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-400">
                            <img alt={`${countryCode}`} onError={addDefaultSrc}
                                 src={`https://www.worldatlas.com/r/w425/img/flag/${countryCode.toLocaleLowerCase()}-flag.jpg`}
                                 className='w-full h-full fill-current text-primary hidden lg:block rounded-full shadow-md'
                            />
                        </div>
                        <div className="flex flex-col items-center text-center text-white justify-center">
                            <h2 className="font-medium title-font mt-4 text-transform: uppercase text-gray-700 text-lg">{country.name || '-'}</h2>
                            <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"/>
                            <p className="text-base text-gray-700">
                                <strong>Capital :</strong> {country.capital}
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-1/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center text-gray-700 sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">
                            <strong>Continent :</strong> {country?.continent?.name}
                        </p>
                        <p className="leading-relaxed text-lg mb-4">
                            <strong>Currency :</strong> {country.currency}
                        </p>
                        <p className="leading-relaxed text-lg mb-4">
                            <strong>Phone-code :</strong> {country.phone}
                        </p>
                        <div className="leading-relaxed text-lg mb-4">
                            <strong>Language(s) :</strong>
                            <ul>
                                {country?.languages?.map((language: {name: string, native:string}, index: number) =>
                                    <li className="indent-4" key={index}>{language.name} ({language.native})</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="sm:w-2/6 mx-auto">
                        <div className="rounded-lg h-auto overflow-hidden shadow-md hover:shadow-lg">
                            <img alt={`${countryCode}`} onError={addDefaultSrc}
                                 className="object-cover object-center h-full w-full"
                                 src={`https://www.worldatlas.com/r/w425/img/flag/${countryCode.toLocaleLowerCase()}-flag.jpg`}/>
                        </div>
                    </div>
                </div>
            </div> :
                <div className="container px-5 py-24 mx-auto my-32 flex flex-col">
                    <LoadingAnimation/>
                </div>
            }
        </div>
    );
}

export default CountryDetail;
