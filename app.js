const lessons = [
    {
        id: "agentic-ai",
        title: "AI-native apps & agents",
        track: "Basics",
        time: "2 min",
        summary: "Agentic AI apps use models plus tools to plan, act, and change state.",
        points: [
            "Agents chain reasoning, tool calls, and data access.",
            "They create a larger, shifting attack surface.",
            "Security must cover the full AI SDLC."
        ],
        aeAngle: "Position Evo by Snyk as agentic security orchestration across the AI SDLC.",
        quiz: [
            {
                question: "Agentic AI apps typically do what?",
                options: [
                    "Plan and call tools across steps",
                    "Only return static answers",
                    "Store data without processing"
                ],
                correct: 0,
                explain: "Agents take actions via tools, not just chat."
            },
            {
                question: "Why is the attack surface larger?",
                options: [
                    "More tools, data sources, and integrations",
                    "Models are smaller",
                    "Tokens are free"
                ],
                correct: 0,
                explain: "Every tool and data source adds risk."
            },
            {
                question: "AI SDLC covers?",
                options: [
                    "Build and deploy AI components",
                    "Only model training",
                    "Only UI design"
                ],
                correct: 0,
                explain: "AI security spans development through deployment."
            }
        ]
    },
    {
        id: "model",
        title: "Models",
        track: "Basics",
        time: "2 min",
        summary: "A model is a trained statistical engine that predicts the next token.",
        points: [
            "Training learns patterns; inference applies them to new inputs.",
            "Outputs are probabilistic, so confidence is not a guarantee of truth.",
            "Models do not see external data unless you connect tools or RAG.",
            "Model choice trades cost, latency, and capability."
        ],
        aeAngle: "Set expectations: models are probabilistic and need guardrails and monitoring.",
        quiz: [
            {
                question: "What does a model produce at each step?",
                options: [
                    "A probability distribution over next tokens",
                    "A final answer with no uncertainty",
                    "A database lookup"
                ],
                correct: 0,
                explain: "Models score possible next tokens; sampling picks one."
            },
            {
                question: "Why can two models answer the same prompt differently?",
                options: [
                    "Different training data, size, or sampling",
                    "Only the prompt matters",
                    "Models are deterministic by default"
                ],
                correct: 0,
                explain: "Data, architecture, and sampling settings all affect output."
            },
            {
                question: "Fine-tuning changes what?",
                options: [
                    "The model weights",
                    "The tokenization rules",
                    "The internet"
                ],
                correct: 0,
                explain: "Fine-tuning updates weights to specialize behavior."
            }
        ]
    },
    {
        id: "tokens",
        title: "Tokens & context window",
        track: "Basics",
        time: "2 min",
        summary: "Tokens are chunks of text; the context window is the max tokens a model can see.",
        points: [
            "Words can split into multiple tokens.",
            "Prompt plus response must fit the window.",
            "Long prompts raise cost and can crowd out answers."
        ],
        aeAngle: "Translate token limits into pages or minutes for customers.",
        quiz: [
            {
                question: "What is a token?",
                options: [
                    "A chunk of text used by the model",
                    "A sentence",
                    "A training label"
                ],
                correct: 0,
                explain: "Tokens can be parts of words, whole words, or symbols."
            },
            {
                question: "What counts toward the context window?",
                options: [
                    "System, developer, user messages, and tool outputs",
                    "Only the latest user message",
                    "Only the model response"
                ],
                correct: 0,
                explain: "Everything in the conversation consumes tokens."
            },
            {
                question: "Why might answers be shorter?",
                options: [
                    "The prompt used most of the token budget",
                    "The model refuses long answers",
                    "The user typed too fast"
                ],
                correct: 0,
                explain: "Long prompts reduce available output tokens."
            }
        ]
    },
    {
        id: "prompts",
        title: "Prompts & instruction hierarchy",
        track: "Basics",
        time: "2 min",
        summary: "Prompts are instructions; system messages outrank developer and user messages.",
        points: [
            "Structure with role, goal, constraints, and format.",
            "Examples (few-shot) steer tone and structure.",
            "Instruction priority matters for safety."
        ],
        aeAngle: "Tie guardrails to controlling the instruction hierarchy.",
        quiz: [
            {
                question: "Which instruction has the highest priority?",
                options: [
                    "System",
                    "User",
                    "Developer"
                ],
                correct: 0,
                explain: "System messages have the highest priority."
            },
            {
                question: "Few-shot prompting means you provide what?",
                options: [
                    "Examples of desired outputs",
                    "Fewer tokens",
                    "A smaller model"
                ],
                correct: 0,
                explain: "Examples anchor the style and format."
            },
            {
                question: "A good prompt should include?",
                options: [
                    "Clear constraints and output format",
                    "As little detail as possible",
                    "No context"
                ],
                correct: 0,
                explain: "Specificity improves consistency and quality."
            }
        ]
    },
    {
        id: "rag",
        title: "RAG & embeddings",
        track: "Basics",
        time: "2 min",
        summary: "RAG retrieves relevant docs (via embeddings) and injects them into prompts.",
        points: [
            "Embeddings encode meaning for similarity search.",
            "RAG improves grounding but depends on retrieval quality.",
            "Retrieved text can carry prompt injection risks."
        ],
        aeAngle: "Connect RAG risks to Evo guardrails and red teaming.",
        quiz: [
            {
                question: "RAG stands for?",
                options: [
                    "Retrieval-augmented generation",
                    "Random answer generation",
                    "Recursive AI grouping"
                ],
                correct: 0,
                explain: "RAG combines retrieval with generation."
            },
            {
                question: "Embeddings are mainly used to?",
                options: [
                    "Find similar items by meaning",
                    "Generate images",
                    "Replace databases"
                ],
                correct: 0,
                explain: "Embeddings enable semantic search."
            },
            {
                question: "A new risk with RAG is?",
                options: [
                    "Untrusted content injecting instructions",
                    "Lower latency",
                    "Too many tokens"
                ],
                correct: 0,
                explain: "Retrieved text can act as an indirect prompt injection."
            }
        ]
    },
    {
        id: "sales-discovery",
        title: "Discovery questions that qualify AI-SPM",
        track: "Sales",
        time: "2 min",
        summary: "Use executive-level questions to expose AI inventory, governance, and risk gaps.",
        points: [
            "Inventory: Can they prove what AI is in production today?",
            "Governance: Are policies enforceable or just written?",
            "Risk review: Who reviews model/MCP risk before deployment?"
        ],
        aeAngle: "Listen for manual, slow, or vague answers — that is the gap AI-SPM solves.",
        quiz: [
            {
                question: "Which response signals the biggest AI-SPM gap?",
                options: [
                    "We can export an AI inventory report today",
                    "We’d need weeks to compile the AI inventory",
                    "We already track models in a live dashboard"
                ],
                correct: 1,
                explain: "Manual, slow inventory indicates a visibility gap."
            },
            {
                question: "Best executive-level governance question?",
                options: [
                    "Which prompt template do you use?",
                    "Are AI policies enforceable or just documented?",
                    "What is your favorite model size?"
                ],
                correct: 1,
                explain: "This surfaces whether governance is real or on paper."
            },
            {
                question: "Risk review focus should include?",
                options: [
                    "Only model behavior",
                    "Model and MCP server risk before deployment",
                    "UI design choices"
                ],
                correct: 1,
                explain: "AI-SPM focuses on model and MCP risk in the supply chain."
            }
        ]
    },
    {
        id: "sales-soundbites",
        title: "Sound bites that land with executives",
        track: "Sales",
        time: "2 min",
        summary: "Use concise framing to position AI-SPM as build-time visibility and governance.",
        points: [
            "“AI security starts where AI is built — in your code.”",
            "“Visibility before protection: you can’t govern what you can’t see.”",
            "“AI-SPM extends AppSec to AI without new workflows.”"
        ],
        aeAngle: "Pair a sound bite with a discovery question to move from interest to urgency.",
        quiz: [
            {
                question: "Best sound bite for a CISO worried about sprawl?",
                options: [
                    "Visibility before protection: you can’t govern what you can’t see.",
                    "We can tune your model temperature.",
                    "We offer prompt templates."
                ],
                correct: 0,
                explain: "It frames AI-SPM as a visibility and governance solution."
            },
            {
                question: "Best sound bite for DevSecOps?",
                options: [
                    "AI-SPM extends AppSec to AI without new workflows.",
                    "AI models are probabilistic.",
                    "Tokens are chunks of text."
                ],
                correct: 0,
                explain: "It aligns with their existing platform and workflows."
            },
            {
                question: "Sound bite that anchors Snyk’s differentiation?",
                options: [
                    "AI security starts where AI is built — in your code.",
                    "We can write prompts for you.",
                    "We are a runtime-only vendor."
                ],
                correct: 0,
                explain: "It ties AI-SPM to Snyk’s AppSec heritage."
            }
        ]
    },
    {
        id: "tools",
        title: "Tools, APIs & MCP servers",
        track: "Security",
        time: "2 min",
        summary: "Agents call tools and APIs; MCP servers expose tools and data to models.",
        points: [
            "Tool access can change or exfiltrate data.",
            "MCP servers standardize tool access and expand the attack surface.",
            "Discovery + risk intelligence helps prioritize risky MCP usage."
        ],
        aeAngle: "AI-SPM Discovery finds MCP usage; Risk Intelligence scores it; Policy notifies on misuse.",
        quiz: [
            {
                question: "What is the main risk of tool access?",
                options: [
                    "Models can take actions on data and systems",
                    "It reduces the context window",
                    "It lowers cost"
                ],
                correct: 0,
                explain: "Tools let models act, not just answer."
            },
            {
                question: "MCP servers are used to?",
                options: [
                    "Expose tools and data to AI agents",
                    "Store training data only",
                    "Replace vector databases"
                ],
                correct: 0,
                explain: "MCP servers make tools available to agents."
            },
            {
                question: "Which control helps prevent unsafe tool use?",
                options: [
                    "Allowlist tools and validate outputs",
                    "Increase temperature",
                    "Remove logging"
                ],
                correct: 0,
                explain: "Gated, verified tool access reduces risk."
            }
        ]
    },
    {
        id: "injection",
        title: "Prompt injection",
        track: "Security",
        time: "2 min",
        summary: "Prompt injection is when untrusted input attempts to override instructions.",
        points: [
            "Direct (user) or indirect (retrieved content).",
            "Separate instructions from data with delimiters.",
            "Validate tool calls and outputs."
        ],
        aeAngle: "Position AI-SPM policy guardrails as defenses against injection.",
        quiz: [
            {
                question: "Prompt injection is best described as?",
                options: [
                    "Untrusted text changing model behavior",
                    "A model bug",
                    "Faster inference"
                ],
                correct: 0,
                explain: "Attackers try to subvert instructions through input."
            },
            {
                question: "Indirect injection comes from?",
                options: [
                    "External content like web pages or docs",
                    "The system prompt only",
                    "Model weights"
                ],
                correct: 0,
                explain: "RAG pipelines can pull in hostile instructions."
            },
            {
                question: "A strong mitigation is?",
                options: [
                    "Allowlist tool actions with verification",
                    "Let the model decide everything",
                    "Remove all system instructions"
                ],
                correct: 0,
                explain: "Tool gating limits blast radius."
            }
        ]
    },
    {
        id: "discovery",
        title: "AI asset discovery & AI-BOM",
        track: "Security",
        time: "2 min",
        summary: "You cannot secure AI systems you cannot inventory.",
        points: [
            "Map models, datasets, prompts, agents, and MCP servers.",
            "Discovery reduces shadow AI hidden in code and build artifacts.",
            "AI-BOMs support compliance and audit readiness (EU AI Act)."
        ],
        aeAngle: "Discovery Agent builds a single AI inventory across code assets and dependencies.",
        quiz: [
            {
                question: "An AI-BOM is best described as?",
                options: [
                    "An inventory of AI components and dependencies",
                    "A model training dataset",
                    "A prompt template"
                ],
                correct: 0,
                explain: "AI-BOMs catalog AI components and their usage."
            },
            {
                question: "Why start with discovery?",
                options: [
                    "Security needs visibility across AI use in code",
                    "It makes models faster",
                    "It reduces token usage"
                ],
                correct: 0,
                explain: "You cannot secure what you cannot see in the supply chain."
            },
            {
                question: "Evo's Discovery Agent does what?",
                options: [
                    "Maps AI assets across repositories and applications",
                    "Writes prompts for users",
                    "Trains models from scratch"
                ],
                correct: 0,
                explain: "Discovery builds a complete view of AI usage."
            }
        ]
    },
    {
        id: "guardrails",
        title: "Guardrails & governance",
        track: "Security",
        time: "2 min",
        summary: "Policies flag improper AI component usage in a central dashboard.",
        points: [
            "Policies define acceptable model, data, and MCP use.",
            "Violations are flagged for review and reporting.",
            "Risk intelligence informs policy priorities."
        ],
        aeAngle: "Policy Agent flags violations in the dashboard and supports exportable lists.",
        quiz: [
            {
                question: "Policies should be?",
                options: [
                    "Codified rules that flag misuse for review",
                    "Only a single system prompt",
                    "Only a firewall"
                ],
                correct: 0,
                explain: "AI-SPM policies flag usage that breaks rules."
            },
            {
                question: "What does a Policy Agent govern?",
                options: [
                    "Model use, data access, and compliance",
                    "Only UI behavior",
                    "Only marketing content"
                ],
                correct: 0,
                explain: "Policies control how AI is used and what it can access."
            },
            {
                question: "Why pair policy with risk scores?",
                options: [
                    "To enforce controls based on risk",
                    "To make prompts longer",
                    "To reduce logging"
                ],
                correct: 0,
                explain: "Risk-based policies help prioritize and enforce safely."
            }
        ]
    },
    {
        id: "risk-intel",
        title: "Risk intelligence & prioritization",
        track: "Security",
        time: "2 min",
        summary: "Risk intelligence scores AI components and MCP servers to focus on top risks.",
        points: [
            "Evaluate models, datasets, prompts, and MCP servers.",
            "Model risk is dynamic: jailbreaks and poisoning evolve.",
            "Scores support compliance reviews and policy decisions."
        ],
        aeAngle: "Risk Intelligence Agent highlights risky models and MCP servers for action.",
        quiz: [
            {
                question: "Risk intelligence is used to?",
                options: [
                    "Continuously evaluate AI component risk",
                    "Reduce token costs",
                    "Train models faster"
                ],
                correct: 0,
                explain: "Risk scoring keeps only trusted components deployed."
            },
            {
                question: "Why use risk scores?",
                options: [
                    "Prioritize remediation and policy decisions",
                    "Replace discovery",
                    "Make prompts longer"
                ],
                correct: 0,
                explain: "Scores focus attention on the highest-risk items."
            },
            {
                question: "Which agent can flag items based on risk scores?",
                options: [
                    "Policy Agent",
                    "Discovery Agent",
                    "The model itself"
                ],
                correct: 0,
                explain: "Policies can flag items when risk breaks thresholds."
            }
        ]
    }
];

const API_BASE = "/api/ai101";
const LEADERBOARD_ENDPOINT = `${API_BASE}/leaderboard`;
const SCORE_ENDPOINT = `${API_BASE}/score`;
const STORAGE_KEY = "ai101-progress-v1";
let currentFilter = "all";
let questionData = {};
let savedAnswers = loadProgress();
const state = { answered: 0, correct: 0 };

const grid = document.getElementById("lessonGrid");
const answeredCount = document.getElementById("answeredCount");
const totalCount = document.getElementById("totalCount");
const accuracyRate = document.getElementById("accuracyRate");
const progressFill = document.getElementById("progressFill");
const filterLabel = document.getElementById("filterLabel");
const resetProgress = document.getElementById("resetProgress");
const leaderboardList = document.getElementById("leaderboardList");
const scoreForm = document.getElementById("scoreForm");
const scoreName = document.getElementById("scoreName");
const scoreMessage = document.getElementById("scoreMessage");

function loadProgress() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            return {};
        }
        const parsed = JSON.parse(stored);
        return parsed.answers || {};
    } catch (error) {
        return {};
    }
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: savedAnswers }));
}

function updateScoreboard(totalQuestions) {
    answeredCount.textContent = state.answered;
    totalCount.textContent = totalQuestions;
    const accuracy = state.answered === 0 ? 0 : Math.round((state.correct / state.answered) * 100);
    accuracyRate.textContent = `${accuracy}%`;
    const progress = totalQuestions === 0 ? 0 : Math.round((state.answered / totalQuestions) * 100);
    progressFill.style.width = `${progress}%`;
}

function setScoreMessage(message, tone) {
    if (!scoreMessage) {
        return;
    }
    scoreMessage.textContent = message;
    scoreMessage.classList.remove("error", "success");
    if (tone) {
        scoreMessage.classList.add(tone);
    }
}

function formatTimestamp(timestamp) {
    if (!timestamp) {
        return "";
    }
    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime())) {
        return "";
    }
    return date.toLocaleString();
}

function renderLeaderboard(entries) {
    if (!leaderboardList) {
        return;
    }
    leaderboardList.innerHTML = "";
    if (!entries.length) {
        const empty = document.createElement("li");
        empty.className = "leaderboard-empty";
        empty.textContent = "No scores yet. Be the first!";
        leaderboardList.appendChild(empty);
        return;
    }

    entries.forEach((entry, index) => {
        const row = document.createElement("li");
        row.className = "leaderboard-row";
        const answered = Number(entry.answered || 0);
        const total = Number(entry.total || 0);
        const score = Number(entry.score || 0);
        const scoreText = total > 0 ? `${score}/${total}` : `${score}`;
        const timestamp = formatTimestamp(entry.timestamp);

        const rank = document.createElement("span");
        rank.className = "lb-rank";
        rank.textContent = String(index + 1);

        const name = document.createElement("span");
        name.className = "lb-name";
        name.textContent = entry.name || "Anonymous";

        const meta = document.createElement("span");
        meta.className = "lb-meta";
        meta.textContent = timestamp ? `${scoreText} | ${timestamp}` : scoreText;

        row.append(rank, name, meta);
        leaderboardList.appendChild(row);
    });
}

async function fetchLeaderboard() {
    if (!leaderboardList) {
        return;
    }
    try {
        const response = await fetch(LEADERBOARD_ENDPOINT, { cache: "no-store" });
        if (!response.ok) {
            throw new Error("leaderboard_failed");
        }
        const data = await response.json();
        const entries = Array.isArray(data.entries) ? data.entries : [];
        renderLeaderboard(entries);
    } catch (error) {
        renderLeaderboard([]);
        setScoreMessage("Leaderboard is unavailable right now.", "error");
    }
}

async function submitScore(name) {
    const payload = {
        name,
        score: state.correct,
        answered: state.answered,
        total: totalQuestions()
    };
    const response = await fetch(SCORE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        throw new Error("submit_failed");
    }
}

function buildQuestionHtml(lesson, question, index) {
    const key = `${lesson.id}-${index}`;
    questionData[key] = {
        explain: question.explain,
        correctIndex: question.correct
    };

    return `
        <div class="question" data-key="${key}" data-correct="${question.correct}">
            <div class="question-text">${index + 1}. ${question.question}</div>
            <div class="options">
                ${question.options
                    .map((option, optionIndex) => {
                        return `<button class="option" type="button" data-index="${optionIndex}">${option}</button>`;
                    })
                    .join("")}
            </div>
            <div class="feedback" aria-live="polite"></div>
        </div>
    `;
}

function applyAnswerState(questionEl, selectedIndex, correctIndex, isCorrect, explain) {
    const options = Array.from(questionEl.querySelectorAll(".option"));
    const feedback = questionEl.querySelector(".feedback");
    const selectedBtn = options[selectedIndex];
    const correctBtn = options[correctIndex];

    questionEl.dataset.answered = "true";
    questionEl.classList.add(isCorrect ? "correct" : "wrong");

    if (selectedBtn) {
        selectedBtn.classList.add("selected", isCorrect ? "correct" : "wrong");
    }

    if (correctBtn) {
        correctBtn.classList.add("correct-answer");
    }

    options.forEach((btn) => {
        btn.disabled = true;
    });

    if (feedback) {
        feedback.textContent = isCorrect ? `Correct. ${explain}` : `Not quite. ${explain}`;
    }
}

function handleAnswer(questionEl, optionBtn) {
    if (questionEl.dataset.answered === "true") {
        return;
    }

    const key = questionEl.dataset.key;
    const selectedIndex = Number(optionBtn.dataset.index);
    const { explain, correctIndex } = questionData[key];
    const isCorrect = selectedIndex === correctIndex;

    applyAnswerState(questionEl, selectedIndex, correctIndex, isCorrect, explain);

    state.answered += 1;
    if (isCorrect) {
        state.correct += 1;
    }

    savedAnswers[key] = { selectedIndex, correct: isCorrect };
    saveProgress();

    updateScoreboard(totalQuestions());
}

function totalQuestions() {
    return lessons.reduce((sum, lesson) => sum + lesson.quiz.length, 0);
}

function renderLessons() {
    grid.innerHTML = "";
    questionData = {};
    state.answered = 0;
    state.correct = 0;

    lessons.forEach((lesson, index) => {
        const card = document.createElement("article");
        card.className = "lesson-card";
        card.dataset.track = lesson.track.toLowerCase();
        card.style.setProperty("--i", index + 1);

        const pointsHtml = lesson.points.map((point) => `<li>${point}</li>`).join("");
        const questionsHtml = lesson.quiz
            .map((question, qIndex) => buildQuestionHtml(lesson, question, qIndex))
            .join("");

        card.innerHTML = `
            <div class="lesson-head">
                <span class="badge ${lesson.track.toLowerCase()}">${lesson.track}</span>
                <span class="lesson-time">${lesson.time}</span>
            </div>
            <h3>${lesson.title}</h3>
            <p class="summary">${lesson.summary}</p>
            <ul class="points">${pointsHtml}</ul>
            <div class="ae-tip"><strong>AE angle:</strong> ${lesson.aeAngle}</div>
            <div class="quiz">
                <div class="quiz-header">
                    <h4>Quick Check</h4>
                    <button class="toggle-btn" type="button">Start quiz</button>
                </div>
                <div class="quiz-body">${questionsHtml}</div>
            </div>
        `;

        grid.appendChild(card);

        const quizBody = card.querySelector(".quiz-body");
        const toggleBtn = card.querySelector(".toggle-btn");

        toggleBtn.addEventListener("click", () => {
            const isOpen = quizBody.classList.toggle("open");
            toggleBtn.textContent = isOpen ? "Hide quiz" : "Start quiz";
        });

        const questionEls = card.querySelectorAll(".question");
        questionEls.forEach((questionEl) => {
            const options = questionEl.querySelectorAll(".option");
            options.forEach((optionBtn) => {
                optionBtn.addEventListener("click", () => handleAnswer(questionEl, optionBtn));
            });
        });
    });

    Object.entries(savedAnswers).forEach(([key, value]) => {
        const questionEl = document.querySelector(`.question[data-key="${key}"]`);
        if (!questionEl || !questionData[key]) {
            return;
        }

        const { explain, correctIndex } = questionData[key];
        const selectedIndex = Number(value.selectedIndex);
        const isCorrect = Boolean(value.correct);

        applyAnswerState(questionEl, selectedIndex, correctIndex, isCorrect, explain);

        state.answered += 1;
        if (isCorrect) {
            state.correct += 1;
        }
    });

    updateScoreboard(totalQuestions());
    applyFilter();
}

function applyFilter() {
    const label = currentFilter === "all"
        ? "All"
        : currentFilter === "basics"
            ? "Basics"
            : currentFilter === "security"
                ? "Security"
                : "Sales";

    filterLabel.textContent = label;

    document.querySelectorAll(".lesson-card").forEach((card) => {
        const show = currentFilter === "all" || card.dataset.track === currentFilter;
        card.classList.toggle("hidden", !show);
    });
}

resetProgress.addEventListener("click", () => {
    savedAnswers = {};
    saveProgress();
    renderLessons();
});

if (scoreForm) {
    scoreForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!scoreName) {
            return;
        }
        const name = scoreName.value.trim();
        if (!name) {
            setScoreMessage("Please enter your name.", "error");
            return;
        }
        if (state.answered === 0) {
            setScoreMessage("Answer at least one question before submitting.", "error");
            return;
        }
        setScoreMessage("Submitting score...");
        try {
            await submitScore(name);
            scoreName.value = "";
            setScoreMessage("Score submitted!", "success");
            await fetchLeaderboard();
        } catch (error) {
            setScoreMessage("Could not submit score. Try again.", "error");
        }
    });
}

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.track;
        applyFilter();
    });
});

renderLessons();
fetchLeaderboard();
