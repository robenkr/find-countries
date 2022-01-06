import {Link} from "react-router-dom";

export function addDefaultSrc(event: any) : void{
    event.target.src = `https://www.freepnglogos.com/uploads/globe-png/blue-globe-transparent-sporetesting-39.png`;
}

function Country(props: any) {

    let to = `/country/${props.code}`;
    let imgLink = `https://www.worldatlas.com/r/w425/img/flag/${props.code.toLocaleLowerCase()}-flag.jpg`;



    return (
        <div className='w-1/2 xl:w-1/4 px-3 mb-4'>
            <div className='w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0'>
                <img alt={`${props.code}`} src={imgLink} onError={addDefaultSrc}
                    className="w-16 h-16 fill-current text-primary mr-4 hidden lg:block rounded-full shadow-md"
                />
                <div className="text-gray-700">
                    <h2 className="font-semibold text-xl text-primary mb-3">{props.name}</h2>

                    <Link to={to}>
                        <button className="block w-full py-3 px-6 rounded-xl bg-cyan-500 transition hover:bg-cyan-600 focus:bg-cyan-700 active:bg-cyan-800">
                        <span className="block text-center text-white font-semibold lg:text-base">
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
