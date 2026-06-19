(() => {
    const storageKey = "actycare:language";
    const languages = {
        pt: { htmlLang: "pt-BR", label: "Português" },
        en: { htmlLang: "en", label: "English" },
        es: { htmlLang: "es", label: "Español" }
    };
    const translatableAttributes = ["aria-label", "alt", "placeholder", "title", "value"];
    const htmlOriginals = new WeakMap();
    const attributeOriginals = new WeakMap();

    const normalizeLanguage = (language) => (
        Object.prototype.hasOwnProperty.call(languages, language) ? language : "pt"
    );

    const readStoredLanguage = () => {
        try {
            return normalizeLanguage(window.localStorage.getItem(storageKey) || "pt");
        } catch (error) {
            return "pt";
        }
    };

    let currentLanguage = readStoredLanguage();

    const buildSelector = () => {
        const selectors = ["[data-i18n-en]", "[data-i18n-es]"];

        translatableAttributes.forEach((attribute) => {
            selectors.push(`[data-i18n-en-${attribute}]`, `[data-i18n-es-${attribute}]`);
        });

        return selectors.join(",");
    };

    const selector = buildSelector();

    const getMarkedElements = (root = document) => {
        const elements = [];

        if (root.nodeType === Node.ELEMENT_NODE && root.matches(selector)) {
            elements.push(root);
        }

        if (root.querySelectorAll) {
            elements.push(...root.querySelectorAll(selector));
        }

        return elements;
    };

    const getTextTranslation = (element, language) => {
        if (!htmlOriginals.has(element)) {
            htmlOriginals.set(element, element.innerHTML);
        }

        if (language === "pt") {
            return htmlOriginals.get(element);
        }

        const translation = element.getAttribute(`data-i18n-${language}`);
        return translation ? translation : htmlOriginals.get(element);
    };

    const getAttributeOriginals = (element) => {
        if (!attributeOriginals.has(element)) {
            attributeOriginals.set(element, {});
        }

        return attributeOriginals.get(element);
    };

    const getAttributeTranslation = (element, attribute, language) => {
        const originals = getAttributeOriginals(element);

        if (!Object.prototype.hasOwnProperty.call(originals, attribute)) {
            originals[attribute] = element.getAttribute(attribute) || "";
        }

        if (language === "pt") {
            return originals[attribute];
        }

        const translation = element.getAttribute(`data-i18n-${language}-${attribute}`);
        return translation ? translation : originals[attribute];
    };

    const applyElement = (element) => {
        if (element.hasAttribute(`data-i18n-${currentLanguage}`) || element.hasAttribute("data-i18n-en") || element.hasAttribute("data-i18n-es")) {
            element.innerHTML = getTextTranslation(element, currentLanguage);
        }

        translatableAttributes.forEach((attribute) => {
            const hasTranslationAttribute = element.hasAttribute(`data-i18n-en-${attribute}`)
                || element.hasAttribute(`data-i18n-es-${attribute}`);

            if (!hasTranslationAttribute) {
                return;
            }

            const value = getAttributeTranslation(element, attribute, currentLanguage);

            if (value) {
                element.setAttribute(attribute, value);
            } else {
                element.removeAttribute(attribute);
            }
        });
    };

    const updateLanguageControls = () => {
        document.querySelectorAll("[data-language-option]").forEach((option) => {
            const isActive = option.dataset.languageOption === currentLanguage;
            option.classList.toggle("is-active", isActive);
            option.setAttribute("aria-pressed", String(isActive));
        });
    };

    const closeLanguageSelector = (selectorElement) => {
        const toggle = selectorElement.querySelector("[data-language-toggle]");
        const menu = selectorElement.querySelector("[data-language-menu]");

        if (!toggle || !menu) {
            return;
        }

        selectorElement.classList.remove("is-open");
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    };

    const closeAllLanguageSelectors = () => {
        document.querySelectorAll("[data-language-selector]").forEach(closeLanguageSelector);
    };

    const toggleLanguageSelector = (selectorElement) => {
        const toggle = selectorElement.querySelector("[data-language-toggle]");
        const menu = selectorElement.querySelector("[data-language-menu]");

        if (!toggle || !menu) {
            return;
        }

        const shouldOpen = !selectorElement.classList.contains("is-open");
        closeAllLanguageSelectors();
        selectorElement.classList.toggle("is-open", shouldOpen);
        menu.classList.toggle("is-open", shouldOpen);
        toggle.setAttribute("aria-expanded", String(shouldOpen));
    };

    const initLanguageSelectors = () => {
        document.querySelectorAll("[data-language-selector]").forEach((selectorElement) => {
            if (selectorElement.dataset.languageReady === "true") {
                return;
            }

            const toggle = selectorElement.querySelector("[data-language-toggle]");
            const menu = selectorElement.querySelector("[data-language-menu]");

            if (!toggle || !menu) {
                return;
            }

            selectorElement.dataset.languageReady = "true";

            toggle.addEventListener("click", (event) => {
                event.stopPropagation();
                toggleLanguageSelector(selectorElement);
            });

            menu.addEventListener("click", (event) => {
                const option = event.target.closest("[data-language-option]");

                if (!option) {
                    return;
                }

                event.stopPropagation();
                setLanguage(option.dataset.languageOption);
                closeLanguageSelector(selectorElement);
                toggle.focus();
            });
        });
    };

    const applyTranslations = (root = document) => {
        document.documentElement.lang = languages[currentLanguage].htmlLang;
        getMarkedElements(root).forEach(applyElement);
        initLanguageSelectors();
        updateLanguageControls();
    };

    const setLanguage = (language) => {
        currentLanguage = normalizeLanguage(language);

        try {
            window.localStorage.setItem(storageKey, currentLanguage);
        } catch (error) {
            // localStorage can be unavailable in some privacy modes; the in-page state still works.
        }

        applyTranslations();
        window.dispatchEvent(new CustomEvent("actycare:languagechange", {
            detail: {
                language: currentLanguage,
                htmlLang: languages[currentLanguage].htmlLang,
                label: languages[currentLanguage].label
            }
        }));
    };

    const getLanguage = () => currentLanguage;

    window.actycareI18n = {
        apply: applyTranslations,
        getLanguage,
        languages,
        setLanguage
    };

    document.addEventListener("click", (event) => {
        if (!event.target.closest("[data-language-selector]")) {
            closeAllLanguageSelectors();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeAllLanguageSelectors();
        }
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => applyTranslations());
    } else {
        applyTranslations();
    }
})();
