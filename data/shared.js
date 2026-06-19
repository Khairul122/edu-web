// Reusable rendering helpers shared across module-ambuyat, module-hinava, knowledge-check

function renderStepTimeline(containerId, steps, accentColor = 'secondary') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = steps.map((step, i) => `
        <div class="flex items-start gap-3">
            <span class="w-6 h-6 rounded-full bg-${accentColor} text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                ${i + 1}
            </span>
            <p class="text-sm text-on-surface-variant">${step}</p>
        </div>
    `).join('');
}

function initInteractiveSlider(sliderId, config) {
    const { valId, min, max, unit, stages, onUpdate } = config;
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    const valEl = valId ? document.getElementById(valId) : null;

    function update(val) {
        if (valEl) valEl.innerText = val;
        const stage = stages.find(s => val >= s.min && val <= s.max) || stages[stages.length - 1];
        if (onUpdate) onUpdate(val, stage);
    }

    slider.addEventListener('input', (e) => update(parseInt(e.target.value)));
    update(parseInt(slider.value));
}

function initScrollTracker(moduleKey, progressBarId) {
    const progressBar = document.getElementById(progressBarId);
    if (!progressBar) return;

    function updateProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
        
        // Update top progress bar width
        progressBar.style.width = `${percentage}%`;
        
        // Persist only if higher than previous progress
        const currentMax = parseInt(localStorage.getItem(moduleKey) || '0');
        if (percentage > currentMax) {
            localStorage.setItem(moduleKey, percentage);
            window.dispatchEvent(new CustomEvent('progress-updated', { detail: { key: moduleKey, value: percentage } }));
        }
    }

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    
    // Initialize after a tiny delay to ensure page rendering settles
    setTimeout(updateProgress, 100);
}
