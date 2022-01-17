import React, {Component, useState} from "react";
import Select, { components } from 'react-select';
import './HeaderLogin.css';
import { Language } from "@material-ui/icons";

export default ({black}) => {
   
    const data = [
        {
          value: "pt-BR",
          text: 'Português',
          icon: <Language style={{fontSize: 16 }} />
        },
        {
          value: "eng",
          text: 'Inglês',
          icon: <Language style={{fontSize: 16 }} />
        },
      ];
      const [selectedOption, setSelectedOption] = useState(data[0]);
 
     // handle onChange event of the dropdown
        const handleChange = e => {
            setSelectedOption(e);
        }
 


    return(
        <header className={black ? 'black2' : ''}>
            <div className="header--logo2">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix"/>
                </a>
            </div>
            <div className="headerLogin--buutons">
                <Select className="headerLogin--Language"  value={selectedOption} options={data} onChange={handleChange}
                    getOptionLabel={e => (
                        <div style={{ display: 'flex', alignItems: 'center' }} className="headerLogin--LanguageText">
                            <div className="headerLogin--LanguageTextIcon">
                                {e.icon}
                            </div>
                            <span style={{ marginLeft: 5 }}>{e.text}</span>
                        </div>
                    )}
                />
                <a href="" className="headerLogin--entrarButton">
                    <div className="headerLogin--entrarButtonText">
                        Entrar
                    </div>
                </a>
            </div>
        </header>
    )
}