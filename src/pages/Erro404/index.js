import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo404 from '../../assets/img/Logo404.jpg'

function Erro404() {
    return (
        <PageDefault>
            <div>
                <table>
                    <tr>
                        <th >
                            <img src={Logo404} alt="Logo Erro 404"></img>

                        </th>
                        <th>
                            
                            <p>
                                Humano!!! </p>
                            <p>A página que você quer acessar não existe!!!
                            Vai encher meu pote de ração!
                         </p>

                        </th>
                    </tr>
                </table>



            </div>
        </PageDefault>
    );
}

export default Erro404;