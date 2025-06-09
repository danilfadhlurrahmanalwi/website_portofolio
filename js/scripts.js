window.addEventListener('DOMContentLoaded', (event) => {
    const elementsToObserve = [
        ...document.querySelectorAll('section'),
        ...document.querySelectorAll('.feature'),
        ...document.querySelectorAll('.media')
    ];

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.getElementById('enter-button').addEventListener('click', () => {
        document.getElementById('welcome-page').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    });

    elementsToObserve.forEach(element => {
        observer.observe(element);
    });


    // Popup Modal Handler
 document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", () => {
            const link = button.getAttribute("data-link");

            if (link && link !== "??") {
                window.open(link, "_blank"); // Buka di tab baru
            } else {
                alert("Link tidak tersedia.");
            }
        });
    });

});
