const fs = require('fs');

const files = ['module-ambuyat.html', 'lab.html', 'community.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<section\b/g, '<section data-animate="up"');
    if (!content.includes('animations.js')) {
        content = content.replace('</body>', '    <script src="animations.js"></script>\n</body>');
    }
    fs.writeFileSync(file, content);
});

let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/[\s]*\/\* Scroll-triggered slide animations \*\/[\s\S]*?\[data-delay="4"\]\.is-visible \{ transition-delay: 0\.4s; \}/g, '');
indexContent = indexContent.replace(/[\s]*<script>\s*const observer = new IntersectionObserver[\s\S]*?observer\.observe\(el\)\);\s*<\/script>/g, '');
if (!indexContent.includes('animations.js')) {
    indexContent = indexContent.replace('</body>', '    <script src="animations.js"></script>\n</body>');
}
fs.writeFileSync('index.html', indexContent);

let sharedCss = fs.readFileSync('shared.css', 'utf8');
if (!sharedCss.includes('[data-animate]')) {
    sharedCss += `\n/* Scroll-triggered slide animations */
[data-animate] {
    opacity: 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-animate="up"]    { transform: translateY(40px); }
[data-animate="left"]  { transform: translateX(60px); }
[data-animate="right"] { transform: translateX(-60px); }
[data-animate].is-visible { opacity: 1; transform: none; }
[data-delay="1"].is-visible { transition-delay: 0.1s; }
[data-delay="2"].is-visible { transition-delay: 0.2s; }
[data-delay="3"].is-visible { transition-delay: 0.3s; }
[data-delay="4"].is-visible { transition-delay: 0.4s; }\n`;
    fs.writeFileSync('shared.css', sharedCss);
}

fs.writeFileSync('animations.js', `document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
});`);

console.log('Done!');
