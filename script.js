// 영어 단어 데이터
const wordData = {
    easy: [
        { word: "HELLO", meaning: "안녕하세요", type: "감탄사", pronunciation: "[həˈloʊ]" },
        { word: "APPLE", meaning: "사과", type: "명사", pronunciation: "[ˈæpəl]" },
        { word: "CAT", meaning: "고양이", type: "명사", pronunciation: "[kæt]" },
        { word: "DOG", meaning: "개", type: "명사", pronunciation: "[dɔg]" },
        { word: "BOOK", meaning: "책", type: "명사", pronunciation: "[bʊk]" },
        { word: "WATER", meaning: "물", type: "명사", pronunciation: "[ˈwɔtər]" },
        { word: "HOUSE", meaning: "집", type: "명사", pronunciation: "[haʊs]" },
        { word: "TREE", meaning: "나무", type: "명사", pronunciation: "[tri]" },
        { word: "SUN", meaning: "태양", type: "명사", pronunciation: "[sʌn]" },
        { word: "MOON", meaning: "달", type: "명사", pronunciation: "[mun]" },
        { word: "CAR", meaning: "자동차", type: "명사", pronunciation: "[kar]" },
        { word: "FISH", meaning: "물고기", type: "명사", pronunciation: "[fɪʃ]" },
        { word: "BIRD", meaning: "새", type: "명사", pronunciation: "[bɜrd]" },
        { word: "FLOWER", meaning: "꽃", type: "명사", pronunciation: "[ˈflaʊər]" },
        { word: "HAPPY", meaning: "행복한", type: "형용사", pronunciation: "[ˈhæpi]" },
        { word: "GOOD", meaning: "좋은", type: "형용사", pronunciation: "[gʊd]" },
        { word: "BIG", meaning: "큰", type: "형용사", pronunciation: "[bɪg]" },
        { word: "SMALL", meaning: "작은", type: "형용사", pronunciation: "[smɔl]" },
        { word: "RED", meaning: "빨간", type: "형용사", pronunciation: "[red]" },
        { word: "BLUE", meaning: "파란", type: "형용사", pronunciation: "[blu]" }
    ],
    medium: [
        { word: "EDUCATION", meaning: "교육", type: "명사", pronunciation: "[ˌeʤəˈkeɪʃən]" },
        { word: "BEAUTIFUL", meaning: "아름다운", type: "형용사", pronunciation: "[ˈbjutəfəl]" },
        { word: "IMPORTANT", meaning: "중요한", type: "형용사", pronunciation: "[ɪmˈpɔrtənt]" },
        { word: "UNDERSTAND", meaning: "이해하다", type: "동사", pronunciation: "[ˌʌndərˈstænd]" },
        { word: "OPPORTUNITY", meaning: "기회", type: "명사", pronunciation: "[ˌɑpərˈtunəti]" },
        { word: "EXPERIENCE", meaning: "경험", type: "명사", pronunciation: "[ɪkˈspɪriəns]" },
        { word: "TECHNOLOGY", meaning: "기술", type: "명사", pronunciation: "[tekˈnɑləʤi]" },
        { word: "ENVIRONMENT", meaning: "환경", type: "명사", pronunciation: "[ɪnˈvaɪrənmənt]" },
        { word: "KNOWLEDGE", meaning: "지식", type: "명사", pronunciation: "[ˈnɑləʤ]" },
        { word: "CREATIVE", meaning: "창의적인", type: "형용사", pronunciation: "[kriˈeɪtɪv]" },
        { word: "CHALLENGE", meaning: "도전", type: "명사", pronunciation: "[ˈʧæləndʒ]" },
        { word: "SUCCESS", meaning: "성공", type: "명사", pronunciation: "[səkˈses]" },
        { word: "COMMUNICATE", meaning: "소통하다", type: "동사", pronunciation: "[kəˈmjunəkeɪt]" },
        { word: "DEVELOP", meaning: "발전시키다", type: "동사", pronunciation: "[dɪˈveləp]" },
        { word: "PROBLEM", meaning: "문제", type: "명사", pronunciation: "[ˈprɑbləm]" },
        { word: "SOLUTION", meaning: "해결책", type: "명사", pronunciation: "[səˈluʃən]" },
        { word: "ANALYZE", meaning: "분석하다", type: "동사", pronunciation: "[ˈænəˌlaɪz]" },
        { word: "EFFECTIVE", meaning: "효과적인", type: "형용사", pronunciation: "[ɪˈfektɪv]" },
        { word: "ORGANIZE", meaning: "조직하다", type: "동사", pronunciation: "[ˈɔrgəˌnaɪz]" },
        { word: "NECESSARY", meaning: "필요한", type: "형용사", pronunciation: "[ˈnesəˌseri]" }
    ],
    hard: [
        { word: "SOPHISTICATED", meaning: "정교한", type: "형용사", pronunciation: "[səˈfɪstəˌkeɪtəd]" },
        { word: "COMPREHENSIVE", meaning: "포괄적인", type: "형용사", pronunciation: "[ˌkɑmprɪˈhensɪv]" },
        { word: "AMBIGUOUS", meaning: "애매한", type: "형용사", pronunciation: "[æmˈbɪgjuəs]" },
        { word: "FACILITATE", meaning: "촉진하다", type: "동사", pronunciation: "[fəˈsɪləˌteɪt]" },
        { word: "ENTREPRENEUR", meaning: "기업가", type: "명사", pronunciation: "[ˌɑntrəprəˈnur]" },
        { word: "PERSEVERANCE", meaning: "인내", type: "명사", pronunciation: "[ˌpɜrsəˈvɪrəns]" },
        { word: "PROCRASTINATE", meaning: "미루다", type: "동사", pronunciation: "[proʊˈkræstəˌneɪt]" },
        { word: "SERENDIPITY", meaning: "우연한 발견", type: "명사", pronunciation: "[ˌserənˈdɪpəti]" },
        { word: "UBIQUITOUS", meaning: "어디에나 있는", type: "형용사", pronunciation: "[juˈbɪkwətəs]" },
        { word: "EXACERBATE", meaning: "악화시키다", type: "동사", pronunciation: "[ɪgˈzæsərˌbeɪt]" },
        { word: "METICULOUS", meaning: "세심한", type: "형용사", pronunciation: "[məˈtɪkjələs]" },
        { word: "PARADIGM", meaning: "패러다임", type: "명사", pronunciation: "[ˈpærəˌdaɪm]" },
        { word: "SCRUTINIZE", meaning: "면밀히 조사하다", type: "동사", pronunciation: "[ˈskrutəˌnaɪz]" },
        { word: "ELOQUENT", meaning: "웅변의", type: "형용사", pronunciation: "[ˈeləkwənt]" },
        { word: "UNPRECEDENTED", meaning: "전례 없는", type: "형용사", pronunciation: "[ʌnˈpresəˌdentəd]" },
        { word: "INEFFABLE", meaning: "말로 표현할 수 없는", type: "형용사", pronunciation: "[ɪnˈefəbəl]" },
        { word: "PROLIFERATE", meaning: "급증하다", type: "동사", pronunciation: "[prəˈlɪfəˌreɪt]" },
        { word: "JUXTAPOSITION", meaning: "병치", type: "명사", pronunciation: "[ˌʤʌkstəpəˈzɪʃən]" },
        { word: "SURREPTITIOUS", meaning: "은밀한", type: "형용사", pronunciation: "[ˌsɜrəpˈtɪʃəs]" },
        { word: "QUINTESSENTIAL", meaning: "전형적인", type: "형용사", pronunciation: "[ˌkwɪntəˈsenʃəl]" }
    ]
};

// 게임 상태
let gameState = {
    currentWordIndex: 0,
    score: 0,
    level: 1,
    learnedWords: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    streak: 0,
    maxStreak: 0,
    mode: 'study', // study, quiz, random
    difficulty: 'medium',
    totalWords: 20,
    currentWords: [],
    isCardFlipped: false
};

// DOM 요소
const elements = {
    card: document.getElementById('word-card'),
    wordDisplay: document.getElementById('word-display'),
    meaningDisplay: document.getElementById('meaning-display'),
    wordType: document.getElementById('word-type'),
    pronunciation: document.getElementById('pronunciation'),
    flipBtn: document.getElementById('flip-btn'),
    nextBtn: document.getElementById('next-btn'),
    quizSection: document.getElementById('quiz-section'),
    quizOptions: document.getElementById('quiz-options'),
    quizResult: document.getElementById('quiz-result'),
    studyModeBtn: document.getElementById('study-mode'),
    quizModeBtn: document.getElementById('quiz-mode'),
    randomModeBtn: document.getElementById('random-mode'),
    score: document.getElementById('score'),
    level: document.getElementById('level'),
    currentWord: document.getElementById('current-word'),
    totalWords: document.getElementById('total-words'),
    progressFill: document.getElementById('progress-fill'),
    learnedCount: document.getElementById('learned-count'),
    accuracy: document.getElementById('accuracy'),
    streak: document.getElementById('streak'),
    resetBtn: document.getElementById('reset-btn'),
    settingsBtn: document.getElementById('settings-btn'),
    settingsModal: document.getElementById('settings-modal'),
    closeModal: document.getElementById('close-modal'),
    saveSettings: document.getElementById('save-settings'),
    difficulty: document.getElementById('difficulty'),
    cardCount: document.getElementById('card-count')
};

// 초기화
function init() {
    loadSettings();
    shuffleWords();
    displayCurrentWord();
    updateUI();
    attachEventListeners();
}

// 설정 로드
function loadSettings() {
    const savedSettings = localStorage.getItem('englishCardGameSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        gameState.difficulty = settings.difficulty || 'medium';
        gameState.totalWords = settings.totalWords || 20;
        elements.difficulty.value = gameState.difficulty;
        elements.cardCount.value = gameState.totalWords;
    }
}

// 설정 저장
function saveSettings() {
    const settings = {
        difficulty: elements.difficulty.value,
        totalWords: parseInt(elements.cardCount.value)
    };
    localStorage.setItem('englishCardGameSettings', JSON.stringify(settings));
    gameState.difficulty = settings.difficulty;
    gameState.totalWords = settings.totalWords;
    resetGame();
    closeSettings();
}

// 단어 섞기
function shuffleWords() {
    const words = [...wordData[gameState.difficulty]];
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    gameState.currentWords = words.slice(0, gameState.totalWords);
}

// 현재 단어 표시
function displayCurrentWord() {
    if (gameState.currentWordIndex >= gameState.currentWords.length) {
        showGameComplete();
        return;
    }

    const currentWord = gameState.currentWords[gameState.currentWordIndex];
    elements.wordDisplay.textContent = currentWord.word;
    elements.meaningDisplay.textContent = currentWord.meaning;
    elements.wordType.textContent = currentWord.type;
    elements.pronunciation.textContent = currentWord.pronunciation;
    
    // 카드 뒤집기 상태 초기화
    gameState.isCardFlipped = false;
    elements.card.classList.remove('flipped');
    
    updateProgress();
}

// 카드 뒤집기
function flipCard() {
    gameState.isCardFlipped = !gameState.isCardFlipped;
    elements.card.classList.toggle('flipped');
    
    if (gameState.isCardFlipped && gameState.mode === 'study') {
        gameState.learnedWords++;
        updateScore(10);
    }
}

// 다음 단어
function nextWord() {
    gameState.currentWordIndex++;
    displayCurrentWord();
    
    if (gameState.mode === 'quiz') {
        generateQuiz();
    }
}

// 퀴즈 생성
function generateQuiz() {
    if (gameState.currentWordIndex >= gameState.currentWords.length) {
        showGameComplete();
        return;
    }

    const currentWord = gameState.currentWords[gameState.currentWordIndex];
    const allWords = wordData[gameState.difficulty];
    
    // 정답과 오답 선택지 생성
    let options = [currentWord.meaning];
    while (options.length < 4) {
        const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
        if (!options.includes(randomWord.meaning)) {
            options.push(randomWord.meaning);
        }
    }
    
    // 선택지 섞기
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    // 퀴즈 UI 생성
    elements.quizOptions.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => checkQuizAnswer(option, currentWord.meaning);
        elements.quizOptions.appendChild(button);
    });
    
    elements.quizResult.textContent = '';
}

// 퀴즈 답안 확인
function checkQuizAnswer(selected, correct) {
    gameState.totalAnswers++;
    const options = elements.quizOptions.querySelectorAll('.quiz-option');
    
    options.forEach(option => {
        option.style.pointerEvents = 'none';
        if (option.textContent === correct) {
            option.classList.add('correct');
        } else if (option.textContent === selected && selected !== correct) {
            option.classList.add('wrong');
        }
    });
    
    if (selected === correct) {
        gameState.correctAnswers++;
        gameState.streak++;
        gameState.maxStreak = Math.max(gameState.maxStreak, gameState.streak);
        updateScore(20);
        elements.quizResult.textContent = '정답입니다! 🎉';
        elements.quizResult.style.color = '#28a745';
        
        // 성공 효과
        elements.card.classList.add('success-effect');
        setTimeout(() => elements.card.classList.remove('success-effect'), 500);
    } else {
        gameState.streak = 0;
        elements.quizResult.textContent = `틀렸습니다. 정답: ${correct}`;
        elements.quizResult.style.color = '#dc3545';
        
        // 실패 효과
        elements.card.classList.add('error-effect');
        setTimeout(() => elements.card.classList.remove('error-effect'), 500);
    }
    
    updateUI();
    
    // 자동으로 다음 문제로 이동
    setTimeout(() => {
        nextWord();
    }, 2000);
}

// 점수 업데이트
function updateScore(points) {
    gameState.score += points;
    
    // 레벨 업 체크
    const newLevel = Math.floor(gameState.score / 100) + 1;
    if (newLevel > gameState.level) {
        gameState.level = newLevel;
        showLevelUp();
    }
}

// 레벨업 표시
function showLevelUp() {
    const levelUpMsg = document.createElement('div');
    levelUpMsg.textContent = `🎉 레벨 ${gameState.level}로 상승! 🎉`;
    levelUpMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
        color: #333;
        padding: 20px 40px;
        border-radius: 25px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 1001;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: fadeIn 0.5s ease;
    `;
    document.body.appendChild(levelUpMsg);
    
    setTimeout(() => {
        document.body.removeChild(levelUpMsg);
    }, 3000);
}

// UI 업데이트
function updateUI() {
    elements.score.textContent = gameState.score;
    elements.level.textContent = gameState.level;
    elements.currentWord.textContent = gameState.currentWordIndex + 1;
    elements.totalWords.textContent = gameState.totalWords;
    elements.learnedCount.textContent = gameState.learnedWords;
    
    // 정답률 계산
    const accuracy = gameState.totalAnswers > 0 ? 
        Math.round((gameState.correctAnswers / gameState.totalAnswers) * 100) : 0;
    elements.accuracy.textContent = `${accuracy}%`;
    elements.streak.textContent = gameState.streak;
}

// 진행률 업데이트
function updateProgress() {
    const progress = ((gameState.currentWordIndex) / gameState.totalWords) * 100;
    elements.progressFill.style.width = `${progress}%`;
}

// 게임 모드 변경
function setGameMode(mode) {
    gameState.mode = mode;
    
    // 모든 모드 버튼에서 active 클래스 제거
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 현재 모드 버튼에 active 클래스 추가
    const activeBtn = mode === 'study' ? elements.studyModeBtn :
                     mode === 'quiz' ? elements.quizModeBtn : elements.randomModeBtn;
    activeBtn.classList.add('active');
    
    // 퀴즈 섹션 표시/숨김
    if (mode === 'quiz') {
        elements.quizSection.style.display = 'block';
        elements.flipBtn.style.display = 'none';
        generateQuiz();
    } else {
        elements.quizSection.style.display = 'none';
        elements.flipBtn.style.display = 'inline-block';
    }
    
    // 랜덤 모드일 경우 카드 자동 뒤집기
    if (mode === 'random') {
        setInterval(() => {
            if (gameState.mode === 'random') {
                flipCard();
            }
        }, 3000);
    }
}

// 게임 완료
function showGameComplete() {
    const accuracy = gameState.totalAnswers > 0 ? 
        Math.round((gameState.correctAnswers / gameState.totalAnswers) * 100) : 0;
    
    const completeMsg = document.createElement('div');
    completeMsg.innerHTML = `
        <div style="text-align: center; padding: 40px; background: white; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <h2 style="color: #333; margin-bottom: 20px;">🎉 게임 완료! 🎉</h2>
            <div style="margin-bottom: 20px;">
                <p><strong>최종 점수:</strong> ${gameState.score}점</p>
                <p><strong>최종 레벨:</strong> ${gameState.level}</p>
                <p><strong>학습한 단어:</strong> ${gameState.learnedWords}개</p>
                <p><strong>정답률:</strong> ${accuracy}%</p>
                <p><strong>최대 연속 정답:</strong> ${gameState.maxStreak}개</p>
            </div>
            <button onclick="resetGame(); document.body.removeChild(this.parentElement.parentElement)" 
                    style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border: none; border-radius: 25px; font-weight: bold; cursor: pointer;">
                다시 시작
            </button>
        </div>
    `;
    completeMsg.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1002;
    `;
    document.body.appendChild(completeMsg);
}

// 게임 리셋
function resetGame() {
    gameState = {
        currentWordIndex: 0,
        score: 0,
        level: 1,
        learnedWords: 0,
        correctAnswers: 0,
        totalAnswers: 0,
        streak: 0,
        maxStreak: 0,
        mode: gameState.mode || 'study',
        difficulty: gameState.difficulty || 'medium',
        totalWords: gameState.totalWords || 20,
        currentWords: [],
        isCardFlipped: false
    };
    
    shuffleWords();
    displayCurrentWord();
    updateUI();
    setGameMode(gameState.mode);
}

// 설정 모달 열기
function openSettings() {
    elements.settingsModal.style.display = 'block';
}

// 설정 모달 닫기
function closeSettings() {
    elements.settingsModal.style.display = 'none';
}

// 이벤트 리스너 연결
function attachEventListeners() {
    elements.card.addEventListener('click', flipCard);
    elements.flipBtn.addEventListener('click', flipCard);
    elements.nextBtn.addEventListener('click', nextWord);
    elements.studyModeBtn.addEventListener('click', () => setGameMode('study'));
    elements.quizModeBtn.addEventListener('click', () => setGameMode('quiz'));
    elements.randomModeBtn.addEventListener('click', () => setGameMode('random'));
    elements.resetBtn.addEventListener('click', resetGame);
    elements.settingsBtn.addEventListener('click', openSettings);
    elements.closeModal.addEventListener('click', closeSettings);
    elements.saveSettings.addEventListener('click', saveSettings);
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target === elements.settingsModal) {
            closeSettings();
        }
    });
    
    // 키보드 단축키
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case ' ':
                e.preventDefault();
                flipCard();
                break;
            case 'ArrowRight':
                nextWord();
                break;
            case 'r':
                if (e.ctrlKey) {
                    e.preventDefault();
                    resetGame();
                }
                break;
        }
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);