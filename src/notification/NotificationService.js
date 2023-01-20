


import { createContext, useState } from 'react';

const Notificacion = ({message, type}) => {
    const notificationStyle = {
      position: 'absolute',
      top: 100,
      right: 100,
      backgroundColor: type === 'success'? 'green': 'red',
      color: 'white',
      padding: '10px 20px 10px 20px'
     
    }
    if (!message) {
      return null
    }
      return (
        <div style={notificationStyle}>
          {message}
        </div>
      )
}


export const NotificacionContext = createContext()


export const NotificacionProvider = ( {children}) => {

    const [menssage, setMenssage] = useState ("")
    const [type, setType] = useState ("success")

    const setNotification = (type ,menssage, time) => {
        setMenssage (menssage)
        setType(type)
    
        setTimeout ( ()=> {
          setMenssage("")
        }, time * 1000)
      }



    return (
        <NotificacionContext.Provider value={setNotification}>
            <Notificacion message={menssage} type={type} />
            { children }

        </NotificacionContext.Provider>

    )
}