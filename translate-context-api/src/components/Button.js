import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component{

    // Used to retrive context data via this.context type
  //  static contextType = LanguageContext;    // static is used to bind this property to Button class // so it is bind to all the button class objects
    
    renderSubmit(value){
        return value  === 'english' ? 'Submit' : 'Voorleegen';
    }

    render(){

    // Used to retrive context data via this.context type
   // const text = this.context === 'english' ? 'Submit' : 'Voorleegen';

    return(
            <ColorContext.Consumer>
            {color=> 
                <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {value=> this.renderSubmit(value)}
                </LanguageContext.Consumer>
                </button>
            }
           
            </ColorContext.Consumer>
    )
    }
}
export default Button;