<!DOCTYPE html>
<html lang="zh-Hans">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Siteproxy - 渐变美化版</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            /* --- 色彩变量 --- */
            --light-text: #212529;
            --light-primary: #007bff;
            --light-card-bg: #ffffff;
            --light-border: #dee2e6;
            --light-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);

            --dark-text: #e0e0e0;
            --dark-primary: #BB86FC;
            --dark-card-bg: #1e1e1e;
            --dark-border: #444444;
            --dark-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
            
            /* --- 新增：渐变色变量 --- */
            --light-bg-gradient: linear-gradient(180deg, #fdfbfb 0%, #ebedee 100%);
            --dark-bg-gradient: linear-gradient(180deg, #232526 0%, #121212 100%);
            --light-title-gradient: linear-gradient(45deg, #343a40 0%, #007bff 100%);
            --dark-title-gradient: linear-gradient(45deg, #e0e0e0 0%, #BB86FC 100%);

            --transition-speed: 0.3s;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-image: var(--light-bg-gradient);
            color: var(--light-text);
            transition: color var(--transition-speed);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            min-height: 100vh;
            background-attachment: fixed;
        }

        body.dark-mode {
            background-image: var(--dark-bg-gradient);
            color: var(--dark-text);
        }

        .container {
            width: 100%;
            max-width: 900px;
            position: relative;
            z-index: 1;
        }

        .header {
            display: flex;
            align-items: center;
            margin: 60px 0;
        }

        h1 {
            font-size: 3rem;
            font-weight: 700;
            margin: 0;
            background-image: var(--light-title-gradient);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: background-image var(--transition-speed);
            position: relative;
            display: inline-block;
        }

        h1::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--light-primary);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s;
        }

        h1:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }

        body.dark-mode h1 {
            background-image: var(--dark-title-gradient);
        }

        body.dark-mode h1::after {
            background: var(--dark-primary);
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            margin-left: 20px;
        }

        .logo a {
            display: inline-block;
            margin-left: 15px;
            transition: transform 0.2s ease-in-out;
        }

        .logo a:hover {
            transform: scale(1.1);
        }

        .logo svg {
            fill: var(--light-text);
            width: 28px;
            height: 28px;
        }

        body.dark-mode .logo svg {
            fill: var(--dark-text);
        }

        .search-box-container {
            position: relative;
            margin-bottom: 50px;
        }

        .search-box {
            width: 100%;
            padding: 15px 20px;
            font-size: 1rem;
            color: var(--light-text);
            background-color: var(--light-card-bg);
            border: 1px solid var(--light-border);
            border-radius: 8px;
            outline: none;
            box-sizing: border-box;
            transition: all var(--transition-speed);
            backdrop-filter: blur(5px);
            background-color: rgba(255, 255, 255, 0.8);
            border: none;
            box-shadow: var(--light-shadow);
        }

        .search-box:hover {
            transform: scale(1.01);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .search-box:focus {
            border-color: var(--light-primary);
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }

        body.dark-mode .search-box {
            color: var(--dark-text);
            background-color: rgba(30, 30, 30, 0.8);
            border-color: var(--dark-border);
        }
        
        body.dark-mode .search-box:hover {
            border-color: var(--dark-primary);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        body.dark-mode .search-box:focus {
            border-color: var(--dark-primary);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.25);
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 500;
            margin: 40px 0 15px 0;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--light-border);
            color: var(--light-text);
        }
        
        body.dark-mode .section-title {
            border-color: var(--dark-border);
            color: var(--dark-text);
        }

        .websites {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 20px;
        }

        .website {
            text-decoration: none;
            color: var(--light-text);
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            box-shadow: var(--light-shadow);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.6s ease forwards;
            opacity: 0;
        }

        .website::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
        }

        .website::after {
            content: '→';
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: 0.3s;
        }

        .website:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }

        .website:hover::before {
            left: 100%;
        }

        .website:hover::after {
            opacity: 1;
            right: 10px;
        }

        body.dark-mode .website {
            color: var(--dark-text);
            background-color: rgba(30, 30, 30, 0.8);
            box-shadow: var(--dark-shadow);
        }

        body.dark-mode .website:hover {
             box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
        }

        .theme-toggle {
            position: fixed;
            top: 25px;
            right: 25px;
            cursor: pointer;
            width: 32px;
            height: 32px;
            z-index: 10;
        }
        
        .theme-toggle svg {
            width: 100%;
            height: 100%;
            transition: transform 0.3s ease;
        }

        .theme-toggle:hover svg {
            transform: rotate(30deg);
        }

        .footer {
            text-align: center;
            margin: 100px 0 40px 0;
            color: #6c757d;
        }

        body.dark-mode .footer {
            color: #8c8c8c;
        }
        
        .footer a {
            color: var(--light-primary);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        body.dark-mode .footer a {
            color: var(--dark-primary);
        }

        canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .website:nth-child(1) { animation-delay: 0.1s; }
        .website:nth-child(2) { animation-delay: 0.2s; }
        .website:nth-child(3) { animation-delay: 0.3s; }
        .website:nth-child(4) { animation-delay: 0.4s; }
        .website:nth-child(5) { animation-delay: 0.5s; }
        .website:nth-child(6) { animation-delay: 0.6s; }
    </style>
</head>

<body>
    <canvas id="particles"></canvas>
    
    <div class="theme-toggle">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path
                d="M736 624A399.52 399.52 0 0 1 352.48 110.944a416 416 0 1 0 599.616 449.344A397.728 397.728 0 0 1 736 624z"
                fill="#000000"></path>
        </svg>
    </div>
    <div class="container">
        <div class="header">
            <h1>Siteproxy</h1>
            <div class="logo-container">
                <div class="logo">
                    <a href="https://github.com/netptop/siteproxy" target="_blank" title="GitHub">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                            <title>GitHub</title>
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                </div>
                <div class="logo">
                    <a href="https://t.me/siteproxy" target="_blank" title="Telegram">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                            <title>Telegram</title>
                            <path
                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="search-box-container">
            <input type="text" class="search-box" placeholder="输入网址后按 Enter 键访问..." />
        </div>

        <h3 class="section-title">搜索引擎</h3>
        <div class="websites">
            <a class="website" href="https://www.google.com" target="_blank">Google IPv4</a>
            <a class="website" href="https://ipv6.google.com" target="_blank">Google IPv6</a>
            <a class="website" href="https://duckduckgo.com" target="_blank">DuckDuckGo</a>
            <a class="website" href="https://www.bing.com" target="_blank">Bing</a>
        </div>

        <h3 class="section-title">常用网站</h3>
        <div class="websites">
            <a class="website" href="https://duckduckgo.com/aichat" target="_blank">DuckDuckGo AI Chat</a>
            <a class="website" href="https://zh.wikipedia.org/" target="_blank">Wikipedia</a>
            <a class="website" href="https://www.youtube.com/?gl=US" target="_blank">YouTube</a>
            <a class="website" href="https://x.com/" target="_blank">X / Twitter</a>
            <a class="website" href="https://www.apkmirror.com/" target="_blank">APKMirror</a>
            <a class="website" href="https://web.telegram.org/" target="_blank">Web Telegram</a>
        </div>

        <div class="footer">
            <p>本站内容源自互联网, 如有内容侵犯了你的权益, 请联系删除相关内容, 联系邮箱: <a href="mailto:admin@cfip.nyc.mn">admin@cfip.nyc.mn</a></p>
            <p id="copyright"></p>
        </div>
    </div>
    <script>
        // 主题切换功能
        const searchBox = document.querySelector('.search-box');
        const themeToggle = document.querySelector('.theme-toggle');
        
        window.addEventListener('load', () => {
            const theme = localStorage.getItem('theme');
            if (theme === 'dark-mode') {
                document.body.classList.add('dark-mode');
                const svg = themeToggle.querySelector('svg');
                svg.innerHTML = `<path d="M511.998465 305.797661c-113.855094 0-206.190059 92.332918-206.190059 206.182896 0 113.888863 92.334965 206.145034 206.190059 206.145034 113.89398 0 206.154243-92.295056 206.154243-206.145034S625.892445 305.797661 511.998465 305.797661L511.998465 305.797661zM511.998465 202.705702c18.992563 0 34.364669-15.371082 34.364669-34.322713L546.363134 99.652628c0-18.9854-15.372106-34.362622-34.364669-34.362622-18.9854 0-34.363645 15.377222-34.363645 34.362622l0 68.730361C477.63482 187.367365 493.013065 202.705702 511.998465 202.705702L511.998465 202.705702zM511.998465 821.216527c-18.9854 0-34.363645 15.415085-34.363645 34.362622l0 68.728314c0 19.024286 15.378246 34.401508 34.363645 34.401508 18.992563 0 34.364669-15.377222 34.364669-34.401508L546.363134 855.579149C546.363134 836.631612 530.990005 821.216527 511.998465 821.216527L511.998465 821.216527zM924.306952 477.618958l-68.728314 0c-18.990516 0-34.367739 15.375176-34.367739 34.361599 0 18.989493 15.377222 34.362622 34.367739 34.362622l68.728314 0c19.024286 0 34.401508-15.373129 34.401508-34.362622C958.70846 492.995157 943.331237 477.618958 924.306952 477.618958L924.306952 477.618958zM202.71133 511.98158c0-18.986423-15.371082-34.361599-34.363645-34.361599l-68.693522 0c-18.948561 0-34.363645 15.375176-34.363645 34.361599 0 18.989493 15.415085 34.362622 34.363645 34.362622l68.732407 0C187.37197 546.344203 202.71133 530.97005 202.71133 511.98158L202.71133 511.98158zM779.289114 293.326629l48.585555-48.583508c13.443174-13.443174 13.443174-35.18536 0-48.585555-13.400195-13.405311-35.18229-13.405311-48.585555 0l-48.626487 48.585555c-13.367449 13.403265-13.367449 35.218106 0 48.583508C744.029052 306.730916 765.810125 306.730916 779.289114 293.326629L779.289114 293.326629zM244.710886 730.633463l-48.586578 48.624441c-13.404288 13.366426-13.404288 35.146475 0 48.585555 13.405311 13.44215 35.149545 13.44215 48.586578 0l48.586578-48.585555c13.404288-13.43908 13.443174-35.218106 0-48.624441C279.89727 717.270107 258.153036 717.270107 244.710886 730.633463L244.710886 730.633463zM779.289114 730.633463c-13.440104-13.364379-35.222199-13.364379-48.626487 0-13.405311 13.366426-13.367449 35.147498 0 48.624441l48.626487 48.585555c13.365402 13.44215 35.146475 13.44215 48.585555 0 13.443174-13.401218 13.443174-35.180244 0-48.585555L779.289114 730.633463 779.289114 730.633463zM244.710886 196.120726c-13.438057-13.405311-35.18229-13.405311-48.586578 0-13.404288 13.403265-13.404288 35.145451 0 48.584532l48.586578 48.584532c13.405311 13.405311 35.187407 13.443174 48.586578 0 13.443174-13.365402 13.404288-35.180244 0-48.584532L244.710886 196.120726 244.710886 196.120726zM244.710886 196.120726" fill="#ffffff"></path>`;
            }
            
            // 设置版权年份
            document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} Siteproxy - 保留所有权利`;
        });

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const svg = themeToggle.querySelector('svg');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark-mode');
                svg.innerHTML = `<path d="M511.998465 305.797661c-113.855094 0-206.190059 92.332918-206.190059 206.182896 0 113.888863 92.334965 206.145034 206.190059 206.145034 113.89398 0 206.154243-92.295056 206.154243-206.145034S625.892445 305.797661 511.998465 305.797661L511.998465 305.797661zM511.998465 202.705702c18.992563 0 34.364669-15.371082 34.364669-34.322713L546.363134 99.652628c0-18.9854-15.372106-34.362622-34.364669-34.362622-18.9854 0-34.363645 15.377222-34.363645 34.362622l0 68.730361C477.63482 187.367365 493.013065 202.705702 511.998465 202.705702L511.998465 202.705702zM511.998465 821.216527c-18.9854 0-34.363645 15.415085-34.363645 34.362622l0 68.728314c0 19.024286 15.378246 34.401508 34.363645 34.401508 18.992563 0 34.364669-15.377222 34.364669-34.401508L546.363134 855.579149C546.363134 836.631612 530.990005 821.216527 511.998465 821.216527L511.998465 821.216527zM924.306952 477.618958l-68.728314 0c-18.990516 0-34.367739 15.375176-34.367739 34.361599 0 18.989493 15.377222 34.362622 34.367739 34.362622l68.728314 0c19.024286 0 34.401508-15.373129 34.401508-34.362622C958.70846 492.995157 943.331237 477.618958 924.306952 477.618958L924.306952 477.618958zM202.71133 511.98158c0-18.986423-15.371082-34.361599-34.363645-34.361599l-68.693522 0c-18.948561 0-34.363645 15.375176-34.363645 34.361599 0 18.989493 15.415085 34.362622 34.363645 34.362622l68.732407 0C187.37197 546.344203 202.71133 530.97005 202.71133 511.98158L202.71133 511.98158zM779.289114 293.326629l48.585555-48.583508c13.443174-13.443174 13.443174-35.18536 0-48.585555-13.400195-13.405311-35.18229-13.405311-48.585555 0l-48.626487 48.585555c-13.367449 13.403265-13.367449 35.218106 0 48.583508C744.029052 306.730916 765.810125 306.730916 779.289114 293.326629L779.289114 293.326629zM244.710886 730.633463l-48.586578 48.624441c-13.404288 13.366426-13.404288 35.146475 0 48.585555 13.405311 13.44215 35.149545 13.44215 48.586578 0l48.586578-48.585555c13.404288-13.43908 13.443174-35.218106 0-48.624441C279.89727 717.270107 258.153036 717.270107 244.710886 730.633463L244.710886 730.633463zM779.289114 730.633463c-13.440104-13.364379-35.222199-13.364379-48.626487 0-13.405311 13.366426-13.367449 35.147498 0 48.624441l48.626487 48.585555c13.365402 13.44215 35.146475 13.44215 48.585555 0 13.443174-13.401218 13.443174-35.180244 0-48.585555L779.289114 730.633463 779.289114 730.633463zM244.710886 196.120726c-13.438057-13.405311-35.18229-13.405311-48.586578 0-13.404288 13.403265-13.404288 35.145451 0 48.584532l48.586578 48.584532c13.405311 13.405311 35.187407 13.443174 48.586578 0 13.443174-13.365402 13.404288-35.180244 0-48.584532L244.710886 196.120726 244.710886 196.120726zM244.710886 196.120726" fill="#ffffff"></path>`;
            } else {
                localStorage.setItem('theme', 'light-mode');
                svg.innerHTML = `<path d="M736 624A399.52 399.52 0 0 1 352.48 110.944a416 416 0 1 0 599.616 449.344A397.728 397.728 0 0 1 736 624z" fill="#000000"></path>`;
            }
            
            // 更新粒子颜色
            setTimeout(() => {
                particles.forEach(p => {
                    p.color = document.body.classList.contains('dark-mode') ? 'rgba(187, 134, 252, 0.5)' : 'rgba(0, 123, 255, 0.5)';
                });
            }, 300);
        });

        searchBox.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                navigate();
            }
        });

        function navigate() {
            let inputText = searchBox.value.trim();
            if (!inputText.startsWith('http://') && !inputText.startsWith('https://')) {
                inputText = 'https://' + inputText;
            }
            window.open(inputText, '_blank');
        }

        // 粒子效果脚本
        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let particles = [];
        const particleCount = window.innerWidth < 768 ? 30 : 80;
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = document.body.classList.contains('dark-mode') ? 'rgba(187, 134, 252, 0.5)' : 'rgba(0, 123, 255, 0.5)';
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.strokeStyle = document.body.classList.contains('dark-mode') ? 'rgba(187, 134, 252, 0.1)' : 'rgba(0, 123, 255, 0.1)';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        init();
        animate();
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });
    </script>
</body>
</html>
