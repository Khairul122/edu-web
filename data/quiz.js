// Centralized quiz data + dynamic renderer, reused by knowledge-check.html
const QUIZ_DATA = [
    {
        id: 1,
        question: "Why does sago starch thicken during heating?",
        options: [
            { text: "Water evaporation", correct: false },
            { text: "Starch granules swelling and bursting", correct: true },
            { text: "Cooling of the liquid", correct: false },
        ],
        explanation: "Gelatinization occurs when heat causes granules to swell with water until they rupture, creating a viscous gel network (Ambuyat)."
    },
    {
        id: 2,
        question: "Why does Ambuyat become viscous?",
        options: [
            { text: "Oxidation", correct: false },
            { text: "Fermentation", correct: false },
            { text: "Starch Gelatinization", correct: true },
            { text: "Neutralization", correct: false },
        ],
        explanation: "Starch gelatinization is the process where sago starch granules absorb water, swell, and burst when heated, releasing amylose and amylopectin to form a viscous gel."
    },
    {
        id: 3,
        question: "Which chemical process occurs during Hinavah preparation?",
        options: [
            { text: "Combustion", correct: false },
            { text: "Polymerization", correct: false },
            { text: "Protein Denaturation", correct: true },
            { text: "Electrolysis", correct: false },
        ],
        explanation: "Protein denaturation occurs when the acidic lime juice lowers the pH, causing the protein structure of the fish to unfold and coagulate — mimicking the effects of heat without cooking."
    }
];

function renderQuiz(containerId, questions, onComplete) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let currentQ = 0;
    let score = 0;

    function renderQuestion(index) {
        const q = questions[index];
        container.innerHTML = `
            <div class="mb-4">
                <div class="flex justify-between text-sm text-on-surface-variant mb-2">
                    <span>Question ${index + 1} of ${questions.length}</span>
                    <span>Score: ${score}/${index}</span>
                </div>
                <div class="w-full bg-outline-variant/30 h-2 rounded-full mb-4">
                    <div class="bg-secondary h-full rounded-full transition-all"
                         style="width: ${(index / questions.length) * 100}%"></div>
                </div>
            </div>
            <p class="font-headline-sm text-headline-sm text-primary mb-4">${q.question}</p>
            <div class="space-y-3" id="options-${index}">
                ${q.options.map((opt, i) => `
                    <button data-answered="false" onclick="window.__quizCheckAnswer(this, ${opt.correct}, ${index})"
                        class="quiz-btn w-full p-4 text-left rounded-lg border border-outline-variant hover:bg-secondary/10 transition-colors flex items-center group">
                        <span class="quiz-letter w-6 h-6 rounded-full border border-primary mr-3 flex items-center justify-center font-label-sm text-label-sm group-hover:bg-primary group-hover:text-white transition-colors">
                            ${String.fromCharCode(65 + i)}
                        </span>
                        <span class="font-body-md">${opt.text}</span>
                        <span class="quiz-icon material-symbols-outlined ml-auto hidden"></span>
                    </button>
                `).join('')}
            </div>
            <div id="feedback-${index}" class="mt-4 p-3 rounded-lg hidden">
                <p id="feedback-text-${index}" class="font-label-sm text-label-sm leading-relaxed"></p>
            </div>
            <div class="mt-6 flex justify-end" id="next-wrap-${index}"></div>
        `;
    }

    window.__quizCheckAnswer = function (btn, isCorrect, index) {
        const optionsContainer = document.getElementById(`options-${index}`);
        if (optionsContainer.dataset.locked === 'true') return;
        optionsContainer.dataset.locked = 'true';

        const allBtns = optionsContainer.querySelectorAll('.quiz-btn');
        allBtns.forEach(b => {
            b.className = "quiz-btn w-full p-4 text-left rounded-lg border border-outline-variant transition-colors flex items-center group opacity-50";
            const icon = b.querySelector('.quiz-icon');
            if (icon) icon.className = "quiz-icon material-symbols-outlined ml-auto hidden";
        });

        const icon = btn.querySelector('.quiz-icon');
        const feedbackBox = document.getElementById(`feedback-${index}`);
        const feedbackText = document.getElementById(`feedback-text-${index}`);
        const q = questions[index];

        btn.classList.remove('opacity-50', 'border-outline-variant');
        icon.classList.remove('hidden');

        if (isCorrect) {
            score++;
            btn.classList.add('border-2', 'border-secondary', 'bg-secondary/5');
            icon.classList.add('text-secondary', 'icon-filled');
            icon.innerText = "check_circle";
            feedbackBox.className = "mt-4 p-3 rounded-lg bg-secondary/10";
            feedbackText.className = "font-label-sm text-label-sm leading-relaxed text-on-secondary-container";
            feedbackText.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
        } else {
            btn.classList.add('border-2', 'border-[#ba1a1a]', 'bg-[#ba1a1a]/5');
            icon.classList.add('text-[#ba1a1a]');
            icon.innerText = "cancel";
            feedbackBox.className = "mt-4 p-3 rounded-lg bg-[#ba1a1a]/10";
            feedbackText.className = "font-label-sm text-label-sm leading-relaxed text-[#ba1a1a]";
            feedbackText.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
        }
        feedbackBox.classList.remove('hidden');

        const nextWrap = document.getElementById(`next-wrap-${index}`);
        const isLast = index === questions.length - 1;
        nextWrap.innerHTML = `
            <button onclick="window.__quizNext(${index})"
                class="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 active:scale-95 transition-all">
                ${isLast ? 'See Results' : 'Next Question'}
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
        `;
    };

    window.__quizNext = function (index) {
        if (index < questions.length - 1) {
            currentQ = index + 1;
            renderQuestion(currentQ);
        } else if (onComplete) {
            onComplete(score, questions.length);
        }
    };

    renderQuestion(0);
}
