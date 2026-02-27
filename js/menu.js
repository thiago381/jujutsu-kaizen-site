
document.addEventListener("DOMContentLoaded", () => {
    const btnHamburger = document.getElementById("btnHamburger");
    const menuLateral = document.getElementById("menuLateral");

    if (btnHamburger && menuLateral) {
        btnHamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            menuLateral.classList.toggle("is-open");
        });

        document.addEventListener("click", (e) => {
            const clicouNoBotao = btnHamburger.contains(e.target);
            const clicouNoMenu = menuLateral.contains(e.target);

            if (!clicouNoBotao && !clicouNoMenu) {
                menuLateral.classList.remove("is-open");
            }
        });
    }

    const btnEntrar = document.getElementById("btnEntrar");
    const modalLogin = document.getElementById("modalLogin");
    const fecharLogin = document.getElementById("fecharLogin");

    if (btnEntrar && modalLogin && fecharLogin) {
        btnEntrar.addEventListener("click", () => {
            modalLogin.classList.add("is-open");
        });

        fecharLogin.addEventListener("click", () => {
            modalLogin.classList.remove("is-open");
        });

        modalLogin.addEventListener("click", (e) => {
            if (e.target === modalLogin) {
                modalLogin.classList.remove("is-open");
            }
        });
    }
});