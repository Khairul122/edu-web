// Centralized module data, reused by lessons.html and index.html
const MODULES_DATA = [
    {
        id: 1,
        title: "Module 1: Ambuyat &amp; Gelatinization",
        href: "module-ambuyat.html",
        progress: 65,
        badge: "New",
        badgeColor: "bg-primary/90",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTgcIEhXgdk_haQiEP8UZMpM0qUXWq4imavs8-3ml-UXvBjhWAVXB28AYCifnYkvKye9hOIaZRTyTW96KgilPnOD_BG-rgOn4nfDvmo3tXlqRMUVrAabOQaevyp5vsGQKU_u5hOK3eO73s0v3n7ojcXkTAUzPRefh6CSw-b2_9JIulUcAavlXBSHhHr84GxIy9Hcj3lDZq3F7SgFKBaG3FLFAM3_Ez1_f8Lc_FsmWfa-eUvb-E6mgo4Wrg249DkJmtd94TBGqBvHmY",
        progressColor: "bg-secondary",
        textColor: "text-secondary",
        actionText: "Resume",
        description: "The chemistry of sago starch and gelatinization process"
    },
    {
        id: 2,
        title: "Module 2: Hinava &amp; Protein Denaturation",
        href: "module-hinava.html",
        progress: 20,
        badge: "In Progress",
        badgeColor: "bg-tertiary-fixed-dim/90",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNKG-p5-rNi7L42H27SiTPUOx1t5N8RNHeOGsEIkfLwxKdNx4uJ-2N6unEgUeKdrrnzp6DiWfCQ3vwU4YIOYLrDNTe8RE6rmxrtzL9cSkYA9TS-SIPZsMlthh_ASZmlEYC398SWcGlQbh3K4z_XBNAtl9EIWIf22YURfnXOZonSjFnhGQJT21qMhIQCpXJmfMjLsCKCXyi7P49izQvK6jnkCoTjUJ6bk1ykwEISIi7JbfxZo6AlevdfC9jD5zEYE9IqE21unVO5nMn",
        progressColor: "bg-tertiary-fixed-dim",
        textColor: "text-tertiary",
        actionText: "Explore",
        description: "Acid-induced protein denaturation in traditional Kadazan-Dusun cuisine"
    }
];

function renderModuleCards(containerId, modules) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = modules.map((m, i) => `
        <a href="${m.href}" data-animate="left" data-delay="${i + 1}"
            class="min-w-[320px] glass-card rounded-2xl overflow-hidden flex-1 group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div class="h-48 relative overflow-hidden">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="${m.image}" alt="${m.title}" />
                <div class="absolute top-4 right-4 ${m.badgeColor} text-white px-3 py-1 rounded-lg text-xs font-bold">${m.badge}</div>
            </div>
            <div class="p-6">
                <h3 class="font-headline-sm text-headline-sm text-primary mb-2">${m.title}</h3>
                <div class="w-full bg-outline-variant/30 h-2 rounded-full mb-4">
                    <div class="${m.progressColor} h-full rounded-full transition-all duration-700" style="width: ${m.progress}%"></div>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-xs text-on-surface-variant font-label-md">${m.progress}% Completed</span>
                    <span class="${m.textColor} font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        ${m.actionText} <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                </div>
            </div>
        </a>
    `).join('');
}
