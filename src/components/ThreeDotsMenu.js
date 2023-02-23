import './ThreeDotsMenu.css';

export const ThreeDotsMenu = ({ isOpen, openOrClose, menuItems }) => {
    return (
        <div>
            <ul className="dropdown" onClick={() => openOrClose()}> 
                <li />
                <li />
                <li />
            </ul>
            {isOpen ? (
                <ul className="menu">
                    {menuItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="menuItem">{item}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}