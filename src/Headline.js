const Headline = ({ title, subtitle }) => {

    return (
        <div className="headline">
            <h2 className="headline__title">{ title }</h2>
            <div className="headline__underline"></div>
            <h3 className="headline__subtitle">{ subtitle }</h3>
        </div>
    );
    
}
 
export default Headline;