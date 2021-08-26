import Headline from "./Headline"
import NewConfirmedImg from './img/cases-imgs/new-confirmed-img.svg';
import NewRecoveredImg from './img/cases-imgs/new-recovered-img.svg';
import NewDeathsImg from './img/cases-imgs/new-deaths-img.svg';
import TotalConfirmedImg from './img/cases-imgs/total-confirmed-img.svg';
import TotalRecoveredImg from './img/cases-imgs/total-recovered-img.svg';
import TotalDeathsImg from './img/cases-imgs/total-deaths-img.svg';
import numberWithCommas from "./helper";

const Cases = ({ cases, isPending }) => {

    const TITLE = 'global summary';
    const SUBTITLE = 'a summary of new and total cases updated daily';

    const renderCases = [
        { id : 1, title : 'new confirmed', total : 'NewConfirmed', img : NewConfirmedImg, alt : 'New Confirmed Image' },
        { id : 2, title : 'new recovered', total : 'NewRecovered', img : NewRecoveredImg, alt : 'New Recovered Image' },
        { id : 3, title : 'new deaths', total : 'NewDeaths', img : NewDeathsImg, alt : 'New Deaths Image' },
        { id : 4, title : 'total confirmed', total : 'TotalConfirmed', img : TotalConfirmedImg, alt : 'Total Confirmed Image' },
        { id : 5, title : 'total recovered', total : 'TotalRecovered', img : TotalRecoveredImg, alt : 'Total Recovered Image' },
        { id : 6, title : 'total deaths', total : 'TotalDeaths', img : TotalDeathsImg, alt : 'Total Deaths Image' }
    ];

    return (
        <div className="cases" id="cases">
            <Headline title={ TITLE } subtitle={ SUBTITLE } />
            <div className="cases__center">
                { renderCases.map(item => {
                    return <div className="cases__box" key={ item.id }>
                                <img className="cases__img" src={ item.img } alt={ item.alt } />
                                { isPending && <p className="cases__fetch-para">Fetching Data...</p> }
                                { cases && <p className="cases__para">{ numberWithCommas(cases.Global[ item.total ]) }</p> }
                                <div className="cases__underline"></div>
                                <h3 className="cases__heading">{ item.title }</h3>
                           </div>
                }) }
            </div>
        </div>
    );
}
 
export default Cases;