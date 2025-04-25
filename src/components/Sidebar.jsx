import Avatar from "../img/eu.jpg";
import SocialNetworks from "./SocialNetworks";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Ygor de Oliveira" />
            <p className="title">Desenvolvedor Front End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://github.com/ygordeoliveira/Curriculo/blob/main/2023-07-12/curriculo.md" className="btn">Ver currículo</a>
        </aside>
    )
}

export default Sidebar;