import { useState } from "react";
import Headline from "./Headline"
import numberWithCommas from "./helper";

const Countries = ({ cases }) => {

    const [result, setResult] = useState(null);
    const [display, setDisplay] = useState('none');
    const [fadeIn, setFadeIn] = useState(null);

    const TITLE = 'countries';
    const SUBTITLE = 'check total cases per country';

    const [country, setCountry] = useState('');

    const handleSubmit = e => {

        e.preventDefault();

        setCountry('');

        const { Countries } = cases;

        const matchCountry = Countries.find(item => item.Country.toLowerCase() === country.toLowerCase().trim());

        if (!matchCountry) {
            
            const html = <p className="countries__para">
                            Wrong input, please try again.
                          </p>;

            setResult(html);
            
            setDisplay('block');
            setFadeIn('fade-in');
            
            setTimeout(() => {
                setResult(null);
                setFadeIn(null);
            }, 2000);
            
        } else {
            
            const html = <div className="countries__box">
                            <img className="countries__img" src={ `https://www.countryflags.io/${matchCountry.CountryCode}/shiny/64.png` } alt={ 'Flag' - `${ matchCountry.CountryCode }`} />
                            <h2 className="countries__heading">{ `${matchCountry.Country}` } - <span>{ (`${matchCountry.CountryCode}`) }</span></h2>
                                <div>
                                    <h3 className="countries__result">total confirmed: <span className="countries__span">{ `${numberWithCommas(matchCountry.TotalConfirmed)}` }</span></h3>
                                    <h3 className="countries__result">total recovered: <span className="countries__span">{ `${numberWithCommas(matchCountry.TotalRecovered)}` }</span></h3>
                                    <h3 className="countries__result">total deaths: <span className="countries__span">{ `${numberWithCommas(matchCountry.TotalDeaths)}` }</span></h3>
                                </div>
                        </div>;
            
            setResult(html);
            
            setDisplay('block');
            setFadeIn('fade-in');
            
            setTimeout(() => {
                setFadeIn(null);
            }, 2000);
        }

    };

    return (
        <div className="countries">
            <Headline title={ TITLE } subtitle={ SUBTITLE } />
            <form className="countries__form" onSubmit={ handleSubmit }>
                <input
                    className="countries__input" 
                    type="text" 
                    placeholder="Enter state name..."
                    value={ country }
                    onChange={ (e) => setCountry(e.target.value) }
                />
            </form>
            <div className={ 'countries__output ' + fadeIn } style={ {display} }>
                { result }
            </div>
        </div>
    );
}
 
export default Countries;
