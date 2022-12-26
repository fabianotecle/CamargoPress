export function goWhats(msg) {
    if(msg===null || msg==='' || msg===undefined) {
        msg = '?text=Olá CamargoPress, gostaria de cotar uma entrega!';
    } else {
        msg = '?text=' + msg;
    }
    const link = 'https://wa.me/5551997309818' + msg;
    window.open(link, '_blank');
}

function Globais() {
  
}

export default Globais;