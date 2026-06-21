class CustomHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const activePage = this.getAttribute('active-page') || 'home';

        const navItems = [
            { id: 'home', href: 'index.html', label: 'Home' },
            { id: 'lessons', href: 'lessons.html', label: 'Lessons' },
            // { id: 'lab', href: 'lab.html', label: 'Lab' },
            // { id: 'gallery', href: '/community', label: 'Gallery' }
        ];

        const extraNavItems = [
            { id: 'knowledge-check', href: 'knowledge-check.html', label: 'Knowledge Check' },
            { id: 'sabah-food-heritage', href: 'sabah-food-heritage.html', label: 'Sabah Food Heritage' },
        ];

        const renderLink = (item) => {
            const isActive = activePage === item.id;
            const activeClasses = isActive
                ? 'font-bold text-secondary text-sm'
                : 'text-on-surface-variant hover:text-on-surface transition-colors text-sm';
            return `<a href="${item.href}" class="${activeClasses}">${item.label}</a>\n                    `;
        };

        let navHtml = navItems.map(renderLink).join('');
        let extraNavHtml = extraNavItems.map(renderLink).join('');

        const allMobileItems = [...navItems, ...extraNavItems];

        let mobileNavHtml = allMobileItems.map(item => {
            const isActive = activePage === item.id;
            const activeClasses = isActive
                ? 'font-bold text-secondary'
                : 'text-on-surface-variant hover:text-on-surface transition-colors';
            return `<a href="${item.href}" class="${activeClasses} block px-4 py-3 text-sm border-b border-outline-variant/20">${item.label}</a>`;
        }).join('');

        this.innerHTML = `
    <header class="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
        <div class="flex items-center justify-between px-4 md:px-8 w-full h-16 md:h-[72px]">
            <div class="flex-1 flex justify-start">
                <a href="index.html" class="flex items-center gap-2 shrink-0">
                    <img alt="AmvaChem Logo" class="h-10 w-10 object-contain" src="assets/LOGO.png">
                    <span class="font-bold text-[1.25rem] text-on-surface tracking-tight">AmvaChem</span>
                </a>
            </div>
            <div class="hidden md:flex items-center justify-center gap-7 shrink-0">
                <nav class="flex items-center gap-7">
                    ${navHtml.trim()}
                </nav>
                <nav class="flex items-center gap-7">
                    ${extraNavHtml.trim()}
                </nav>
            </div>
            <div class="flex-1 flex justify-end items-center gap-4">
                <button class="md:hidden material-symbols-outlined text-primary" id="header-menu-btn">menu</button>
            </div>
        </div>
        <div id="header-mobile-menu" class="hidden md:hidden bg-white border-t border-outline-variant/20">
            ${mobileNavHtml}
        </div>
    </header>
        `;

        const menuBtn = this.querySelector('#header-menu-btn');
        const mobileMenu = this.querySelector('#header-mobile-menu');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

customElements.define('custom-header', CustomHeader);
