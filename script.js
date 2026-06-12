alert("Bem-vindo ao Agro Forte, Futuro Sustentável!");

const curiosidades = [
    "O Brasil está entre os maiores produtores agrícolas do mundo.",
    "Drones ajudam a monitorar plantações com precisão.",
    "A agricultura de precisão reduz desperdícios e aumenta a produtividade.",
    "O agronegócio é um dos setores mais importantes da economia brasileira."
];

function mostrarCuriosidade() {
    const numero = Math.floor(Math.random() * curiosidades.length);
    alert(curiosidades[numero]);
}
