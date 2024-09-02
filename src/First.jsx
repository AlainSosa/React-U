
const saludar = (nombre) => {
  return `hola como estas  ${nombre}`
}

export const First = () => {
    
    return (
    <>
    <h1>{saludar('Alain')}</h1>
        {/* <code>{ JSON.stringify(newMessage)}</code> */}
        <p>Soy un subtitulo</p>
    </>
  )
}

