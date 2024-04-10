

const Footer = () => {
    return (
        <footer className="flex flex-col gap-4 items-center w-full mt-10 bg-black py-20">
            <div className="flex flex-col gap-4 items-center">
                <span className="text-white">Build by&nbsp;
                    <a href='https://pierre-antoniutti.fr' className="underline underline-offset-4">Pierre Antoniutti</a>
                </span>
                <p className="text-slate-300"> Utilise l{`'`}API:<a href="https://restcountries.com/"> RestCountries</a></p>
            </div>
        </footer>
    )
}

export default Footer;
                