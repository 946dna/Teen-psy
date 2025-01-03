// Add a back-to-top button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Top';
    button.style.position = 'fixed';
    button.style.bottom = '1rem';
    button.style.right = '1rem';
    button.style.padding = '0.5rem 1rem';
    button.style.backgroundColor = '#6c63ff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.display = 'none';
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
