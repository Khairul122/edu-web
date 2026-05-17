const fs = require('fs');

fs.writeFileSync('footer.js', `class CustomFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = \`
    <footer class="bg-surface-container-low border-t border-outline-variant/30 py-stack-lg pb-32 md:pb-stack-lg">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div class="flex flex-col gap-4">
                <span class="font-headline-sm text-headline-sm text-primary">AmvaChem</span>
                <p class="text-on-surface-variant font-body-md text-body-md">Bridging the gap between the kitchen and
                    the laboratory. Empowering Sabahan youth through chemical literacy rooted in heritage.</p>
            </div>
            <div class="flex flex-col gap-4">
                <h4 class="font-bold text-primary">Resources</h4>
                <div class="flex flex-col gap-2">
                    <a class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md"
                        href="#">Academic References</a>
                    <a class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md"
                        href="#">Chemistry Ethics</a>
                    <a class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md"
                        href="#">Cultural Protocol</a>
                </div>
            </div>
            <div class="flex flex-col gap-4 items-start md:items-end">
                <div class="flex gap-4">
                    <button class="material-symbols-outlined text-primary hover:text-secondary">share</button>
                    <button class="material-symbols-outlined text-primary hover:text-secondary">mail</button>
                </div>
                <p class="text-on-surface-variant text-sm mt-auto">© 2024 AmvaChem - Sabah Culinary Chemistry Initiative
                </p>
            </div>
        </div>
    </footer>
        \`;
    }
}

customElements.define('custom-footer', CustomFooter);
`);

let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/<footer[\s\S]*?<\/footer>\s*/, '');
fs.writeFileSync('index.html', indexContent);

const files = ['index.html', 'module-ambuyat.html', 'lab.html', 'community.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add custom-footer before bottom-navbar if not present
    if (!content.includes('<custom-footer>')) {
        content = content.replace(/<!-- BottomNavBar[\s\S]*?<bottom-navbar/, '<custom-footer></custom-footer>\n    <!-- BottomNavBar -->\n    <bottom-navbar');
    }
    
    // Add footer.js before </body> if not present
    if (!content.includes('footer.js')) {
        content = content.replace('</body>', '    <script src="footer.js"></script>\n</body>');
    }
    
    fs.writeFileSync(file, content);
});

console.log('Done!');
