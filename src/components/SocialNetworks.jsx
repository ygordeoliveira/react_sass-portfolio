import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/ygor-oliveira-ba3bb3256/"},
    {name: "github", icon: <FaGithub />, url: "https://github.com/ygordeoliveira/"},
    {name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/ygordeoliveira_oficial/" },
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                    <a href={network.url} className="social-btn" id={network.name} key={network.name}>
                        {network.icon}
                    </a>
            ))}
        </section>
    )
}

export default SocialNetworks;