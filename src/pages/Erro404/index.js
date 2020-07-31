import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo404 from '../../assets/img/Logo404.jpg'

function Erro404() {
    return (
        <PageDefault>
            <div >
                <img src={Logo404} />
            </div>
        </PageDefault>
    );
}

export default Erro404;