import PropTypes from "prop-types";

import Card from "./Card";

const ContainerCard = ({ list }) => {
    return (
        <article>
            {list.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} />
            ))}
        </article>
    );
};

ContainerCard.propTypes = {
    list: PropTypes.array.isRequired,
};

export default ContainerCard;