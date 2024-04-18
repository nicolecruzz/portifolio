
// Modo noturno
const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", toggleTheme);

let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    
    // Alterna o texto do botão entre os modos light e dark
    isDarkMode ? toggle.innerText = "💡" : toggle.innerText = "💡"; 
    
    // Adiciona ou remove o atributo 'data-theme' do elemento HTML para ativar ou desativar o modo noturno
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : '');
}
