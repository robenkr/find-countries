import React from 'react';
function CountryFilter(props: any) {
    // @ts-ignore
    const selectedCountry = (event) => {
        props.onFilterCHange(event.target.value);
    };
    return (
        <div className='container flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-10 mb-5'>
            <label htmlFor="search-form" className='relative'>
                <input
                    type="search" name='search-form' id='search-form'
                    className='h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none'
                    placeholder='Search by name or Code' value={props.query}
                    onChange={selectedCountry}
                />
            </label>
        </div>
    );
}

export default CountryFilter;