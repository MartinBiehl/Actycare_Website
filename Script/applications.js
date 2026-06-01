(() => {
    const carousels = document.querySelectorAll("[data-applications-carousel]");

    if (!carousels.length) {
        return;
    }

    carousels.forEach((carousel) => {
        const track = carousel.querySelector("[data-carousel-track]");
        const previousButton = carousel.querySelector("[data-carousel-prev]");
        const nextButton = carousel.querySelector("[data-carousel-next]");

        if (!track || !previousButton || !nextButton) {
            return;
        }

        let ticking = false;

        const getStep = () => {
            const card = track.querySelector(".application-card");

            if (!card) {
                return track.clientWidth;
            }

            const styles = window.getComputedStyle(track);
            const gap = parseFloat(styles.columnGap || styles.gap) || 0;

            return card.getBoundingClientRect().width + gap;
        };

        const updateButtons = () => {
            const maxScroll = track.scrollWidth - track.clientWidth;

            previousButton.disabled = track.scrollLeft <= 2;
            nextButton.disabled = track.scrollLeft >= maxScroll - 2;
        };

        const requestButtonUpdate = () => {
            if (ticking) {
                return;
            }

            ticking = true;
            window.requestAnimationFrame(() => {
                updateButtons();
                ticking = false;
            });
        };

        const scrollByStep = (direction) => {
            track.scrollBy({
                left: getStep() * direction,
                behavior: "smooth"
            });
        };

        previousButton.addEventListener("click", () => scrollByStep(-1));
        nextButton.addEventListener("click", () => scrollByStep(1));
        track.addEventListener("scroll", requestButtonUpdate, { passive: true });
        window.addEventListener("resize", requestButtonUpdate);
        updateButtons();
    });
})();
