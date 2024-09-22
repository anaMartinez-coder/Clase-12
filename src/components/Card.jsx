import { useContext } from "react";
import PropTypes from "prop-types";
import { SocialContext } from "../pages/App";

const Card = ({ title, description }) => {
    const { instagram, facebook } = useContext(SocialContext);

    return (
        <article>
            <h2>{title}</h2>
            <p>{description}</p>

            <article>
                <a href={instagram}>Instagram del sitio web</a>
                <a href={facebook}>Facebook del sitio web</a>
            </article>
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
