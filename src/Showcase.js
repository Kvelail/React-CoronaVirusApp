import { FaChevronDown } from 'react-icons/fa';

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcase__center">
                <h2 className="showcase__heading">COVID-19<br /><span className="showcase__span">Latest Updates</span></h2>
                <p className="showcase__para">Stay informed and follow advice given<br /> by government</p>
                <a href="#cases" className="showcase__btn">
                    CASES
                    <FaChevronDown style={{
                        marginLeft : '.3rem'
                    }}/>
                </a>
            </div>
        </div>
    );
}
 
export default Showcase;