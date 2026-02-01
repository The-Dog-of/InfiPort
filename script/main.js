document.addEventListener('DOMContentLoaded', () => {
    

    const discordBtn = document.getElementById('discordBtn');
    
    if(discordBtn) {
        discordBtn.addEventListener('click', () => {

            const discordID = "744600948948861009";
            

            navigator.clipboard.writeText(discordID).then(() => {
                showToast();
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});


function showToast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
