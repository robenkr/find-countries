import {Link} from "react-router-dom";

export function addDefaultSrc(event: any) : void{
    event.target.src = `https://www.freepnglogos.com/uploads/globe-png/blue-globe-transparent-sporetesting-39.png`;
}

function Country(props: any) {

    let to = `/country/${props.country.code}`;
    let imgLink = `https://www.worldometers.info/img/flags/${props.country.code.toLocaleLowerCase()}-flag.gif`;



    return (
        <div className='w-1/2 xl:w-1/4 px-3 mb-4'>
            <div className='w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0'>
                <img alt={`${props.country.code}`} src={imgLink} onError={addDefaultSrc}
                    className="w-16 h-16 fill-current text-primary mr-4 hidden lg:block rounded-full shadow-md"
                />
                <div className="text-gray-700">
                    <h2 className="font-semibold text-xl text-primary mb-3">{props.country.name}</h2>

                    <Link to={to}>
                        <button className="group px-7 py-3 mb-3 shadow-md rounded-md bg-gradient-to-br from-primary to-secondary text-white tracking-wider text-sm font-medium hover:from-secondary active:to-primary hover:shadow-lg transition">
                        <span className="flex flex-row-reverse items-center gap-2.5 transition">
                            <span className="material-icons group-hover:translate-x-1 transition">chevron_right</span>
                            Details
                        </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Country;
