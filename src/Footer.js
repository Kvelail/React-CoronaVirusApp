const Footer = () => {

    const now = new Date().getFullYear();

    return (
        <div className="footer">
            <h2 className="footer__heading">Kvelail &copy; { now }</h2>
        </div>
    );
    
}
 
export default Footer;