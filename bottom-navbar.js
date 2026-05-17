class BottomNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const activePage = this.getAttribute('active-page') || 'home';
        
        const navItems = [
            { id: 'home', href: '/', icon: 'home', label: 'Home' },
            { id: 'lessons', href: '/module-ambuyat', icon: 'menu_book', label: 'Lessons' },
            { id: 'lab', href: '/lab', icon: 'biotech', label: 'Lab' },
            // { id: 'gallery', href: '/community', icon: 'museum', label: 'Gallery' }
        ];

        let html = `
            <nav class="md:hidden fixed bottom-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-t border-outline-variant/20 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] h-20 pb-safe flex justify-around items-center px-2 rounded-t-3xl transition-all duration-300">
        `;

        navItems.forEach(item => {
            const isActive = activePage === item.id;
            
            // Premium active and hover states
            const activeClasses = isActive 
                ? 'bg-secondary-container/50 text-primary scale-110 shadow-inner' 
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container hover:scale-105';
            
            // Icon filled variation for active state
            const iconContent = isActive 
                ? `<span class="material-symbols-outlined transition-transform duration-300 group-hover:-translate-y-1 icon-filled">${item.icon}</span>`
                : `<span class="material-symbols-outlined transition-transform duration-300 group-hover:-translate-y-1">${item.icon}</span>`;
            
            // Optional micro-animation for active state (subtle pulsing background)
            const activeBackground = isActive 
                ? `<span class="absolute inset-0 bg-primary/5 rounded-2xl animate-pulse opacity-50"></span>` 
                : '';

            html += `
                <a href="${item.href}"
                    class="relative flex flex-col items-center justify-center rounded-2xl w-16 h-[60px] transition-all duration-300 ease-out active:scale-95 group ${activeClasses}">
                    ${activeBackground}
                    ${iconContent}
                    <span class="font-label-sm text-[10px] mt-0.5 font-medium transition-all duration-300 opacity-80 group-hover:opacity-100 tracking-wide">${item.label}</span>
                </a>
            `;
        });

        html += `</nav>`;
        
        this.innerHTML = html;
        
        // Add a safe area padding style for iOS devices if not already present
        if (!document.getElementById('safe-area-style')) {
            const style = document.createElement('style');
            style.id = 'safe-area-style';
            style.innerHTML = `
                .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
                .icon-filled { font-variation-settings: 'FILL' 1; }
            `;
            document.head.appendChild(style);
        }
    }
}

customElements.define('bottom-navbar', BottomNavbar);
