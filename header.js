class CustomHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const activePage = this.getAttribute('active-page') || 'home';
        
        const navItems = [
            { id: 'home', href: '/', label: 'Home' },
            { id: 'lessons', href: '/module-ambuyat', label: 'Lessons' },
            { id: 'lab', href: '/lab', label: 'Lab' },
            // { id: 'gallery', href: '/community', label: 'Gallery' }
        ];

        let navHtml = '';
        navItems.forEach(item => {
            const isActive = activePage === item.id;
            const activeClasses = isActive
                ? 'font-bold text-secondary text-sm'
                : 'text-on-surface-variant hover:text-on-surface transition-colors text-sm';
            
            navHtml += `<a href="${item.href}" class="${activeClasses}">${item.label}</a>\n                    `;
        });

        this.innerHTML = `
    <header class="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
        <div class="flex items-center justify-between px-4 md:px-12 max-w-container-max mx-auto h-16 md:h-[72px]">
            <a href="/" class="flex items-center gap-2 shrink-0">
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
                <span class="material-symbols-outlined text-on-surface-variant text-[1.6rem] cursor-pointer hover:text-on-surface transition-colors">account_circle</span>
            </div>
            <button class="md:hidden material-symbols-outlined text-primary">menu</button>
        </div>
    </header>
        `;
    }
}

customElements.define('custom-header', CustomHeader);
