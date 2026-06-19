class CustomHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const activePage = this.getAttribute('active-page') || 'home';
        
        const navItems = [
            { id: 'home', href: 'index.html', label: 'Home' },
            { id: 'lessons', href: 'lessons.html', label: 'Lessons' },
            { id: 'lab', href: 'lab.html', label: 'Lab' },
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

        let mobileExtraHtml = extraNavItems.map(item => {
            const isActive = activePage === item.id;
            const activeClasses = isActive
                ? 'font-bold text-secondary'
                : 'text-on-surface-variant hover:text-on-surface transition-colors';
            return `<a href="${item.href}" class="${activeClasses} block px-4 py-3 text-sm border-b border-outline-variant/20">${item.label}</a>`;
        }).join('');

        this.innerHTML = `
    <header class="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
        <div class="flex items-center justify-between px-2 md:px-4 max-w-container-max mx-auto h-16 md:h-[72px]">
            <a href="index.html" class="flex items-center gap-2 shrink-0">
                <img alt="AmvaChem Logo" class="h-10 w-10 object-contain" src="logo.png">
                <span class="font-bold text-[1.25rem] text-on-surface tracking-tight">AmvaChem</span>
            </a>
            <div class="hidden md:flex items-center gap-7">
                <nav class="flex items-center gap-7">
                    ${navHtml.trim()}
                </nav>
                <div class="flex items-center gap-2 border border-outline rounded-full px-3 py-1.5 hover:bg-surface-container-low/40 transition-colors">
                    <span class="material-symbols-outlined text-on-surface-variant" style="font-size:18px">search</span>
                    <input type="text" placeholder="Search molecules..."
                        class="border-none focus:ring-0 outline-none bg-transparent text-sm text-on-surface-variant placeholder:text-on-surface-variant w-36">
                </div>
                <nav class="flex items-center gap-7">
                    ${extraNavHtml.trim()}
                </nav>
            </div>
            <div class="flex items-center gap-2">
                <span class="hidden md:inline material-symbols-outlined text-on-surface-variant text-[1.6rem] cursor-pointer hover:text-on-surface transition-colors">account_circle</span>
                <button class="md:hidden material-symbols-outlined text-primary" id="header-menu-btn">menu</button>
            </div>
        </div>
        <div id="header-mobile-menu" class="hidden md:hidden bg-white border-t border-outline-variant/20">
            ${mobileExtraHtml}
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
