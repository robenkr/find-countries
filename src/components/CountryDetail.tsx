import {useParams} from "react-router-dom";
import {LOAD_COUNTRY} from "../GraphQL/queries";
import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {addDefaultSrc} from './Country';

function CountryDetail() {
    let {countryCode} = useParams<{countryCode: string}>();

    const {data} = useQuery(LOAD_COUNTRY, {
        variables: { code: countryCode}
    });
    const [country, setCountry] = useState([]);

    useEffect(() => {
        if (data !== undefined) {
            // console.log(data);
            setCountry(data.country)
        }
        // if(error){
        //     console.log(`Load Data Error => ${error}`);
        //     alert(error);
        // }
    }, [data]);

    return (
        <div>
            {
                console.log(country, typeof country)
            }
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="flex flex-col sm:flex-row mb-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-400">
                            <img alt={`${countryCode}`} onError={addDefaultSrc}
                                 src={`https://www.worldometers.info/img/flags/${countryCode.toLocaleLowerCase()}-flag.gif`}
                                 className='w-full h-full fill-current text-primary mr-4 hidden lg:block rounded-full shadow-md'
                            />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center"><h2
                            className="font-medium title-font mt-4 text-gray-900 text-lg">{data.country.name}</h2>
                            <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"/>
                            <p className="text-base">
                                <strong>Capital :</strong> {data.country.capital}
                            </p>
                        </div>
                    </div>
                    <div
                        className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">
                            <strong>Continent :</strong> {data.country.continent.name}
                        </p>
                        <p className="leading-relaxed text-lg mb-4">
                            <strong>Currency :</strong> {data.country.currency}
                        </p>
                        <p className="leading-relaxed text-lg mb-4">
                            <strong>Phone-code :</strong> {data.country.currency}
                        </p>
                        <p className="leading-relaxed text-lg mb-4">
                            <strong>Languages-name :</strong> {data.country.languages[0].name}
                        </p>
                        <p className="leading-relaxed text-lg mb-4">
                            <strong>Languages-native :</strong> {data.country.languages[0].native}
                        </p>
                    </div>
                </div>
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-auto overflow-hidden">
                        <img alt={`${countryCode}`} onError={addDefaultSrc}
                             className="object-cover object-center h-full w-full"
                             src={`https://www.worldometers.info/img/flags/${countryCode.toLocaleLowerCase()}-flag.gif`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetail;