import './UpperNav.css';
const UpperNav = () => {
    const companyName = 'Netzer Tecnologies Ltd';
    return (
    <div class="upper-nav">
        <div className="icon-zone">
            <span>{companyName}</span>
        </div>
        <div className="arrows-zone">
            <span>Israel Israeli</span>^
            <span>Kibutz Afik</span>^
            <span>En</span>^
        </div>
    </div>)
}

export default UpperNav;