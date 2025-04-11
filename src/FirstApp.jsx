import PropTypes from "prop-types";

const message = {
    message: 'Hola Mundo',
    title: 'Mi primera app'
};

const getResult = () => {
    return 3 + 4;
}

export const FirstApp = ({ title, subtitle }) => {
    return (
        <>
        <h1>{ getResult() }</h1>
        {/* <h1>{ JSON.stringify( message ) }</h1> */}
        <p>{ title }</p>
        <p> { subtitle } </p>
        </>
    )
}

FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}