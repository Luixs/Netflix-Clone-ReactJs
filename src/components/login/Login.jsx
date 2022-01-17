import React, { useState } from "react";
import './Login.css';
//VER FUNDO DEPOIS  style={{backgroundPosition: 'center',backgroundImage: `url(https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png)`}}
//<img src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png" alt="oi"/>
//---COMPONENTS---
import HeaderLogin from "../headerLogin/HeaderLogin.jsx";

export default () =>{

    // ---------- CONST AREA ---------------
    const [blackLoginHeader, setBlackLoginHeader] = useState(true);
    return(
        <section className="">
            <div className="login--background">
                <div className="login--vertical">
                    <HeaderLogin black={blackLoginHeader}/>
                    <div className="login--centralizeItens">
                        <div className="login--mainText">
                        Filmes, séries e muito mais.<br/>Sem limites.
                        </div>
                        <div className="login--secText">
                            Assista onde quiser. Cancele quando quiser.
                        </div>
                        <div className="login--otherText">
                            Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
                        </div>
                        <div className="login--form">
                            <form action="">
                                <div className="login--formPosition">
                                    <input type="email" size="50" id="login--inputEmail"   placeholder="Email" />
                                    <a href="" className="login--buttonStartText">Vamos lá {`>`} </a>    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}