(() => {
    const footerTemplate = `
        <footer class="actycare-footer" aria-label="Rodapé institucional ACTYCARE" data-i18n-en-aria-label="Institutional footer" data-i18n-es-aria-label="Pie de página institucional de ACTYCARE">
            <section class="actycare-footer__top" aria-label="Informações institucionais" data-i18n-en-aria-label="Institutional information" data-i18n-es-aria-label="Información institucional">
                <div class="actycare-footer__top-inner">
                    <a class="actycare-footer__brand" href="index.html" aria-label="ACTYCARE - página inicial" data-footer-nav data-i18n-en-aria-label="ACTYCARE - home page" data-i18n-es-aria-label="ACTYCARE - página principal">
                        <span class="actycare-footer__logo-frame">
                            <img src="images/actycare-logo-wordmark.png" alt="ACTYCARE" loading="eager" decoding="async">
                        </span>
                    </a>

                    <address class="actycare-footer__locations">
                        <span class="actycare-footer__location">
                            <strong>ATC DO BRASIL</strong>
                            <span><span data-i18n-en="ESTÂNCIA VELHA - BRASIL" data-i18n-es="ESTÂNCIA VELHA - BRASIL">ESTÂNCIA VELHA - BRASIL</span> <span class="actycare-footer__flag actycare-footer__flag--br" role="img" aria-label="Brasil" data-i18n-en-aria-label="Brasil" data-i18n-es-aria-label="Brasil"></span></span>
                        </span>
                        <span class="actycare-footer__location">
                            <strong>ATC CHEMICALS</strong>
                            <span><span data-i18n-en="MONTANAY - FRANÇA" data-i18n-es="MONTANAY - FRANÇA">MONTANAY - FRANÇA</span> <span class="actycare-footer__flag actycare-footer__flag--fr" role="img" aria-label="França" data-i18n-en-aria-label="França" data-i18n-es-aria-label="França"></span></span>
                        </span>
                    </address>

                    <span class="actycare-footer__divider" aria-hidden="true"></span>

                    <address class="actycare-footer__contact">
                        <a href="tel:+555135610206">+55 51 3561-0206</a>
                        <a href="mailto:actycare@atcdobrasil.com.br">actycare@atcdobrasil.com.br</a>
                    </address>

                    <nav class="actycare-footer__social" aria-label="Redes sociais" data-i18n-en-aria-label="Social media" data-i18n-es-aria-label="Redes sociales">
                        <a href="https://www.instagram.com/atc.brasil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram ACTYCARE">
                            <img src="images/instagram-circle.png" alt="" loading="eager" decoding="async">
                        </a>
                        <a href="https://www.linkedin.com/company/atcdobrasil/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ATC do Brasil">
                            <img src="images/linkedin-circle.png" alt="" loading="eager" decoding="async">
                        </a>
                    </nav>

                    <button class="actycare-footer__to-top" type="button" aria-label="Voltar ao topo" data-footer-scroll-top data-i18n-en-aria-label="Back to top" data-i18n-es-aria-label="Volver a la cima">
                        <span aria-hidden="true">↑</span>
                    </button>
                </div>
            </section>

            <section class="actycare-footer__bottom" aria-label="Links do rodapé" data-i18n-en-aria-label="Footer links" data-i18n-es-aria-label="Enlaces del pie de página">
                <div class="actycare-footer__bottom-inner">
                    <nav class="actycare-footer__menu" aria-label="Menu do rodape" data-i18n-en-aria-label="Footer menu" data-i18n-es-aria-label="Menú del pie de página">
                        <a href="sobre-nos.html" data-footer-nav data-i18n-en="About us" data-i18n-es="Sobre nosotros">Sobre nós</a>
                        <a href="produtos-e-solucoes.html" data-footer-nav data-i18n-en="Products and Solutions" data-i18n-es="Productos y soluciones">Produtos e soluções</a>
                        <a href="contatos.html" data-footer-nav data-i18n-en="Contacts" data-i18n-es="Contactos">Contatos</a>
                    </nav>

                    <nav class="actycare-footer__legal" aria-label="Links institucionais" data-i18n-en-aria-label="Institutional links" data-i18n-es-aria-label="Enlaces institucionales">
                        <span data-footer-placeholder>Certified ISO 9001:2015</span>
                    </nav>

                    <p class="actycare-footer__copyright" data-i18n-en="Copyright @ ACTYCARE 2026. All rights reserved." data-i18n-es="Copyright @ ACTYCARE 2026. Todos los derechos reservados.">Copyright @ ACTYCARE 2026. Todos direitos reservados</p>
                </div>
            </section>
        </footer>
    `;

    const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion() ? "auto" : "smooth"
        });
    };

    const normalizePath = (path) => path.replace(/\/index\.html$/, "/");

    const ensureTopAfterNavigation = () => {
        if (sessionStorage.getItem("actycare:openTop") !== "true") {
            return;
        }

        sessionStorage.removeItem("actycare:openTop");
        window.requestAnimationFrame(() => window.scrollTo(0, 0));
    };

    class ActycareFooter extends HTMLElement {
        connectedCallback() {
            if (this.dataset.ready === "true") {
                return;
            }

            this.innerHTML = footerTemplate;
            this.dataset.ready = "true";
            window.actycareI18n?.apply?.(this);

            const footer = this.querySelector(".actycare-footer");
            const topButton = footer.querySelector("[data-footer-scroll-top]");

            topButton.addEventListener("click", scrollToTop);

            footer.querySelectorAll("[data-footer-nav]").forEach((link) => {
                link.addEventListener("click", (event) => {
                    const nextUrl = new URL(link.href, window.location.href);
                    const currentUrl = new URL(window.location.href);
                    const samePage = normalizePath(nextUrl.pathname) === normalizePath(currentUrl.pathname);

                    if (nextUrl.hash) {
                        return;
                    }

                    sessionStorage.setItem("actycare:openTop", "true");

                    if (samePage) {
                        event.preventDefault();
                        scrollToTop();
                    }
                });
            });

            footer.querySelectorAll("[data-footer-placeholder]").forEach((link) => {
                link.addEventListener("click", (event) => event.preventDefault());
            });
        }
    }

    if (!customElements.get("actycare-footer")) {
        customElements.define("actycare-footer", ActycareFooter);
    }

    window.addEventListener("pageshow", ensureTopAfterNavigation);
    ensureTopAfterNavigation();
})();
