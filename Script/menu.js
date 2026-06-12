(() => {
    const cabecalho = document.querySelector(".cabecalho");
    const botaoMenu = document.querySelector(".botao-menu");
    const menu = document.querySelector("#menu-principal");
    const shareButton = document.querySelector("[data-share-button]");
    const consultaMobile = window.matchMedia("(max-width: 900px)");
    const limiteScrollCabecalho = 56;
    let aguardandoFrameScroll = false;
    let cabecalhoCompacto = null;
    const siteImagePreloads = [];

    const preloadSiteImages = () => {
        const loadedImages = new Set();
        const imageSources = [
            "images/actycare-logo-lockup.png",
            "images/actycare-logo-wordmark.png",
            "images/icons8-partilhar-2-50.png",
            "images/instagram-circle.png",
            "images/linkedin-circle.png"
        ];

        if (document.body.classList.contains("pagina-inicial")) {
            imageSources.push(
                "images/site-otimizadas/capa.jpg",
                "images/site-otimizadas/hidratante.jpg",
                "images/site-otimizadas/locao.jpg",
                "images/site-otimizadas/cabelo-masc.jpg",
                "images/site-otimizadas/sabonete-liquido.jpg",
                "images/site-otimizadas/maquiagens.jpg",
                "images/site-otimizadas/lencos-umedecidos.jpg"
            );
        }

        if (document.body.classList.contains("pagina-sobre")) {
            imageSources.push("images/site-otimizadas/atc-franca.jpg");
        }

        imageSources.forEach((source) => {
            if (loadedImages.has(source)) {
                return;
            }

            loadedImages.add(source);

            const image = new Image();
            image.decoding = "async";
            image.loading = "eager";
            image.src = source;
            siteImagePreloads.push(image);
        });

        document.querySelectorAll("img").forEach((image) => {
            image.decoding = "async";
            image.loading = "eager";
        });
    };

    preloadSiteImages();

    const atualizarAcessibilidade = (aberto) => {
        if (!botaoMenu || !menu) {
            return;
        }

        botaoMenu.setAttribute("aria-expanded", String(aberto));
        botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");

        if (consultaMobile.matches) {
            menu.setAttribute("aria-hidden", String(!aberto));
        } else {
            menu.removeAttribute("aria-hidden");
        }
    };

    const definirMenu = (aberto) => {
        if (!cabecalho) {
            return;
        }

        cabecalho.classList.toggle("menu-aberto", aberto);
        atualizarAcessibilidade(aberto);
    };

    const atualizarCabecalhoNoScroll = () => {
        if (!cabecalho) {
            aguardandoFrameScroll = false;
            return;
        }

        const deveCompactar = window.scrollY > limiteScrollCabecalho;

        if (deveCompactar !== cabecalhoCompacto) {
            cabecalho.classList.toggle("header--scrolled", deveCompactar);
            cabecalhoCompacto = deveCompactar;
        }

        aguardandoFrameScroll = false;
    };

    const solicitarAtualizacaoCabecalho = () => {
        if (aguardandoFrameScroll) {
            return;
        }

        aguardandoFrameScroll = true;
        window.requestAnimationFrame(atualizarCabecalhoNoScroll);
    };

    if (cabecalho) {
        atualizarCabecalhoNoScroll();
        window.addEventListener("scroll", solicitarAtualizacaoCabecalho, { passive: true });
        window.addEventListener("resize", solicitarAtualizacaoCabecalho);
    }

    if (cabecalho && botaoMenu && menu) {
        botaoMenu.addEventListener("click", () => {
            definirMenu(!cabecalho.classList.contains("menu-aberto"));
        });

        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => definirMenu(false));
        });

        const sincronizarMenu = () => definirMenu(false);

        if (consultaMobile.addEventListener) {
            consultaMobile.addEventListener("change", sincronizarMenu);
        } else {
            consultaMobile.addListener(sincronizarMenu);
        }

        sincronizarMenu();
    }

    const getCurrentUrl = () => window.location.href;

    const openShareWindow = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const copyToClipboard = async (text) => {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
    };

    const buildShareUrl = (action) => {
        const currentUrl = getCurrentUrl();
        const encodedUrl = encodeURIComponent(currentUrl);
        const shareText = "Conheça a ACTYCARE® — The True Meaning of Excellence.";
        const fullMessage = `${shareText}\n\n${currentUrl}`;

        const urls = {
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodeURIComponent(shareText)}`,
            whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(fullMessage)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent(shareText)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(shareText)}`,
            email: `mailto:?subject=${encodeURIComponent("Conheça a ACTYCARE®")}&body=${encodeURIComponent(fullMessage)}`
        };

        return urls[action];
    };

    const createShareModal = () => {
        if (document.querySelector("[data-share-overlay]")) {
            return document.querySelector("[data-share-overlay]");
        }

        const overlay = document.createElement("div");
        overlay.className = "share-overlay";
        overlay.dataset.shareOverlay = "";
        overlay.setAttribute("aria-hidden", "true");
        overlay.innerHTML = `
            <div class="share-modal" role="dialog" aria-modal="true" aria-labelledby="share-modal-title">
                <div class="share-modal__header">
                    <h2 id="share-modal-title">Compartilhar</h2>
                    <button class="share-modal__close" type="button" aria-label="Fechar compartilhamento" data-share-close>&times;</button>
                </div>
                <div class="share-modal__options">
                    <button class="share-option" type="button" data-share-action="linkedin">
                        <span class="share-option__icon" aria-hidden="true">in</span>
                        <span>LinkedIn</span>
                    </button>
                    <button class="share-option" type="button" data-share-action="whatsapp">
                        <span class="share-option__icon" aria-hidden="true">WA</span>
                        <span>WhatsApp</span>
                    </button>
                    <button class="share-option" type="button" data-share-action="facebook">
                        <span class="share-option__icon" aria-hidden="true">f</span>
                        <span>Facebook</span>
                    </button>
                    <button class="share-option" type="button" data-share-action="twitter">
                        <span class="share-option__icon" aria-hidden="true">X</span>
                        <span>X/Twitter</span>
                    </button>
                    <button class="share-option" type="button" data-share-action="email">
                        <span class="share-option__icon" aria-hidden="true">@</span>
                        <span>E-mail</span>
                    </button>
                    <button class="share-option" type="button" data-share-action="copy">
                        <span class="share-option__icon" aria-hidden="true">URL</span>
                        <span>Copiar link</span>
                    </button>
                </div>
                <p class="share-modal__feedback" role="status" aria-live="polite" data-share-feedback></p>
            </div>
        `;

        document.body.appendChild(overlay);
        return overlay;
    };

    const shareOverlay = createShareModal();
    const shareModal = shareOverlay.querySelector(".share-modal");
    const closeShareButton = shareOverlay.querySelector("[data-share-close]");
    const shareFeedback = shareOverlay.querySelector("[data-share-feedback]");
    let lastFocusedElement = null;

    const focusableShareElements = () => Array.from(shareModal.querySelectorAll("button"));

    const openShareModal = () => {
        if (!shareButton) {
            return;
        }

        definirMenu(false);
        lastFocusedElement = document.activeElement;
        shareFeedback.textContent = "";
        shareOverlay.classList.add("is-open");
        shareOverlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("share-modal-open");
        window.requestAnimationFrame(() => closeShareButton.focus());
    };

    const closeShareModal = () => {
        shareOverlay.classList.remove("is-open");
        shareOverlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("share-modal-open");

        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    };

    const handleShareAction = async (action) => {
        if (action === "copy") {
            try {
                await copyToClipboard(getCurrentUrl());
                shareFeedback.textContent = "Link copiado.";
            } catch (error) {
                shareFeedback.textContent = "Não foi possível copiar o link.";
            }
            return;
        }

        const shareUrl = buildShareUrl(action);

        if (!shareUrl) {
            return;
        }

        if (action === "email") {
            window.location.href = shareUrl;
        } else {
            openShareWindow(shareUrl);
        }

        closeShareModal();
    };

    if (shareButton) {
        shareButton.addEventListener("click", openShareModal);
    }

    closeShareButton.addEventListener("click", closeShareModal);

    shareOverlay.addEventListener("click", (event) => {
        if (event.target === shareOverlay) {
            closeShareModal();
        }
    });

    shareOverlay.querySelectorAll("[data-share-action]").forEach((button) => {
        button.addEventListener("click", () => handleShareAction(button.dataset.shareAction));
    });

    shareModal.addEventListener("keydown", (event) => {
        if (event.key !== "Tab") {
            return;
        }

        const focusable = focusableShareElements();
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            definirMenu(false);

            if (shareOverlay.classList.contains("is-open")) {
                closeShareModal();
            }
        }
    });
})();
