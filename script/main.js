document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o botão de copiar pelo ID
    const discordBtn = document.getElementById('discordBtn');
    
    if(discordBtn) {
        discordBtn.addEventListener('click', () => {
            // O ID que será copiado
            const discordID = "744600948948861009";
            
            // API da área de transferência
            navigator.clipboard.writeText(discordID).then(() => {
                showToast();
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});

// Função para mostrar a mensagem pop-up (Toast)
function showToast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}