import PropTypes from "prop-types";

export const FirstApp = ({title, subTitle,name  }) => {
    
  
    return(
      <>
        <h1>{title}</h1>
        <p>{subTitle +1}</p>
        <p>{name}</p>
      </>
    )
}
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitle',
  name: 'Fernando Herrera'
}