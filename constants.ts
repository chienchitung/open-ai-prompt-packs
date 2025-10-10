import { PromptCategory } from './types';

export const GEMINI_MODELS = ['gemini-2.5-flash', 'imagen-4.0-generate-001', 'veo-2.0-generate-001', 'gemini-2.5-flash-image-preview'];

export const PROMPT_CATEGORIES: PromptCategory[] = [
    {
        title: "各職位皆適用的提示詞 (For any role)",
        subCategories: [
            {
                title: "溝通與寫作 (Communication & writing)",
                prompts: [
                    { scenario: "撰寫專業電子郵件 (Write a professional email)", chinesePrompt: "撰寫一封給［收件人］的專業電子郵件。主題為［主題］，語氣需禮貌、清楚且精簡。請提供郵件主旨與簡短結尾。", englishPrompt: "Write a professional email to [recipient]. The email is about [topic] and should be polite, clear, and concise. Provide a subject line and a short closing." },
                    { scenario: "改寫文字，使內容更易理解 (Rewrite for clarity)", chinesePrompt: "請改寫以下文字，使其更易理解。此文字將用於專業場合。請確保語氣清晰、尊重且精簡。文字：［貼上文字］", englishPrompt: "Rewrite the following text so it is easier to understand. The text will be used in a professional setting. Ensure the tone is clear, respectful, and concise. Text: [paste text]." },
                    { scenario: "依收信人調整文字 (Adapt message for audience)", chinesePrompt: "請將此訊息改寫給［受眾類型：主管、同儕或客戶］。此訊息原本寫給［情境］。請調整語氣、用字與風格以符合目標受眾。文字：［貼上文字］", englishPrompt: "Reframe this message for [audience type: executives, peers, or customers]. The message was originally written for [context]. Adjust tone, word choice, and style to fit the intended audience. Text: [paste text]." },
                    { scenario: "草擬會議邀請 (Draft meeting invite)", chinesePrompt: "為一場關於［主題］的會議撰寫邀請。參與者包含［參與者／角色］，列出議程項目、目標與需事前準備事項。請以行事曆邀請格式提供文字。", englishPrompt: "Draft a meeting invitation for a session about [topic]. The meeting will include [attendees/roles] and should outline agenda items, goals, and preparation required. Provide the text in calendar-invite format." },
                    { scenario: "摘要冗長郵件 (Summarize long email)", chinesePrompt: "請將此電子郵件往來摘要成短篇重點。此信件串包含多次來回訊息。請標示關鍵決策、行動項目與未解問題。郵件：［貼上文字］", englishPrompt: "Summarize this email thread into a short recap. The thread includes several back-and-forth messages. Highlight key decisions, action items, and open questions. Email: [paste text]." }
                ]
            },
            {
                title: "會議與協作 (Meetings & collaboration)",
                prompts: [
                    { scenario: "建立會議議程 (Create a meeting agenda)", chinesePrompt: "為一場關於［主題］的會議建立結構化議程。會議時長為［時間］，參與者包含［參與者］。請分段並提供每段的時間估算與目標。", englishPrompt: "Create a structured agenda for a meeting about [topic]. The meeting will last [time] and include [attendees]. Break the agenda into sections with time estimates and goals for each section." },
                    { scenario: "摘要會議筆記 (Summarize meeting notes)", chinesePrompt: "請將這份非正式、零散的會議筆記整理成摘要。分類為：關鍵決策、下一步、責任分工。筆記：［貼上文字］", englishPrompt: "Summarize these meeting notes into a structured recap. The notes are rough and informal. Organize them into categories: key decisions, next steps, and responsibilities. Notes: [paste text]." },
                    { scenario: "產出行動清單 (Create an action items list)", chinesePrompt: "請將以下會議筆記轉換成清楚的任務清單。任務依負責人分組，並包含已提及的截止日期。筆記：［貼上文字］", englishPrompt: "Turn the following meeting notes into a clean task list. The tasks should be grouped by owner and include deadlines if mentioned. Notes: [paste text]." },
                    { scenario: "準備會議問題 (Prep questions for a meeting)", chinesePrompt: "為［主題］的會議準備有深度的提問。會議目的為［目的］。提供至少 5 個展現準備與洞察的問題。", englishPrompt: "Suggest thoughtful questions to ask in a meeting about [topic]. The purpose of the meeting is [purpose]. Provide a list of at least 5 questions that show preparation and insight." },
                    { scenario: "撰寫會後追蹤信 (Draft follow-up email)", chinesePrompt: "為關於［主題］的會議撰寫專業的進度追蹤信。包含重點回顧、指派責任、與含截止日期的下一步。語氣清楚而禮貌。", englishPrompt: "Write a professional follow-up email after a meeting about [topic]. Include a recap of key points, assigned responsibilities, and next steps with deadlines. Use a clear and polite tone." }
                ]
            },
            {
                title: "決策與分析 (Decision & analysis)",
                prompts: [
                    { scenario: "辨識根本原因 (Identify root cause)", chinesePrompt: "請分析以下職場問題：［描述問題］。此問題已多次發生。提出可能的根本原因並建議用來驗證的提問。", englishPrompt: "Analyze the following workplace issue: [describe issue]. The context is that the problem has occurred multiple times. Identify possible root causes and suggest questions to confirm them." },
                    { scenario: "比較解決選項 (Compare options)", chinesePrompt: "比較以下兩個或多個可能的解決方案：［列出選項］。決策需在［時間框架］內完成。評估優缺點與潛在風險。", englishPrompt: "Compare the following two or more possible solutions: [list options]. The decision needs to be made in [timeframe]. Evaluate pros, cons, and potential risks for each option." },
                    { scenario: "制定決策準則 (Decision criteria)", chinesePrompt: "為［描述決策］制定清楚的決策準則。牽涉多位利害關係人。提供具權重的短清單以引導選擇。", englishPrompt: "Help define clear decision-making criteria for [describe decision]. The context is that multiple stakeholders are involved. Provide a short list of weighted criteria to guide the choice." },
                    { scenario: "風險評估 (Risk assessment)", chinesePrompt: "評估以下計畫的潛在風險：［描述計畫］。計畫於［日期］開始。依可能性與影響列出風險，並提出緩解策略。", englishPrompt: "Assess the potential risks of the following plan: [describe plan]. The plan is set to start on [date]. List risks by likelihood and impact, and suggest mitigation strategies." },
                    { scenario: "推薦最佳選項 (Recommend best option)", chinesePrompt: "根據以下背景：［描述情境與選項］，推薦最適合的選項。清楚說明理由並提出首次執行步驟。", englishPrompt: "Based on the following background: [describe situation and options], recommend the most suitable option. Explain your reasoning clearly and suggest first steps for implementation." }
                ]
            },
            {
                title: "組織與生產力 (Organization & productivity)",
                prompts: [
                    { scenario: "規劃當日優先事項 (Document daily priorities)", chinesePrompt: "依以下任務建立優先順序的待辦清單：［貼上任務］。此為一般工作天且時間有限。建議先做的事項並說明原因。", englishPrompt: "Create a prioritized to-do list from the following tasks: [paste tasks]. The context is a typical workday with limited time. Suggest which tasks should be done first and why." },
                    { scenario: "建立週工作計畫 (Create a weekly plan)", chinesePrompt: "為［描述角色或情境］建立一週工作計畫。包含截止日期、會議與個人專注時間。提供平衡時程與建議優先順序。", englishPrompt: "Build a weekly work plan for [describe role or situation]. The week includes deadlines, meetings, and individual focus time. Provide a balanced schedule with recommended priorities." },
                    { scenario: "摘要長文件 (Summarize a long document)", chinesePrompt: "將以下文件摘要為 5 個重點與 3 個建議行動。文件類型為［報告／計畫／筆記］。保持摘要精簡且專業。文字：［貼上文件］", englishPrompt: "Summarize the following document into 5 key points and 3 recommended actions. The document is [type: report, plan, or notes]. Keep the summary concise and professional. Text: [paste document]." },
                    { scenario: "腦力激盪解法 (Brainstorm solutions)", chinesePrompt: "為以下職場挑戰腦力激盪可能的解法：［描述挑戰］。至少提供 5 個多元想法，並標註各自的優缺點。", englishPrompt: "Brainstorm potential solutions to the following workplace challenge: [describe challenge]. Provide at least 5 varied ideas, noting pros and cons for each." },
                    { scenario: "撰寫專案更新 (Write a project update)", chinesePrompt: "為利害關係人撰寫短篇專案更新。此專案為［描述專案］。包含已完成進度、目前阻礙與下一步。採用專業且精簡的風格。", englishPrompt: "Draft a short project update for stakeholders. The project is [describe project]. Include progress made, current blockers, and next steps. Write in a professional, concise style." }
                ]
            }
        ]
    },
    {
        title: "業務與銷售專用 (For sales)",
        subCategories: [
            {
                title: "對外拓展與溝通 (Outreach & communication)",
                prompts: [
                    { scenario: "撰寫個人化冷啟動外聯郵件 (Draft a personalized cold outreach email)", chinesePrompt: "撰寫一封簡短、有說服力的冷郵件給［職稱］，公司為［公司名稱］，介紹我們的產品。請用以下背景客製化內容：背景：［填入價值主張或理想客戶輪廓］。以可直接貼上的郵件文字格式輸出。", englishPrompt: "Write a short, compelling cold email to a [job title] at [company name] introducing our product. Use the background below to customize it. Background: [insert value props or ICP info]. Format it in email-ready text." },
                    { scenario: "重寫展示後跟進郵件 (Rework demo follow-up email)", chinesePrompt: "重寫這封產品展示後的跟進郵件，使其更具顧問式語氣。原始郵件：［貼上］。請包含重點回顧、下一步、與安排電話的行動呼籲。輸出為郵件文本。", englishPrompt: "Rewrite this follow-up email after a demo to sound more consultative. Original email: [paste here]. Include recap, next steps, and call scheduling CTA. Output as email text." },
                    { scenario: "為重要客戶撰寫續約提案 (Draft renewal pitch for key customer)", chinesePrompt: "根據以下續約歷史與價值數據，為［客戶名稱］撰寫續約提案：［貼上資料］。請包含關鍵 ROI 證據與續約建議。輸出為短篇提案與可選的後續郵件。", englishPrompt: "Draft a renewal pitch for [customer name] based on this renewal history and value data: [paste data]. Include key ROI proof points and renewal recommendation. Output as a short pitch and optional follow-up email." }
                ]
            },
            {
                title: "銷售策略與規劃 (Sales strategy & planning)",
                prompts: [
                    { scenario: "產出策略性計畫 (Generate strategic account plan)", chinesePrompt: "為［客戶名稱］建立策略計畫。使用以下輸入：公司概況、已知優先事項、現有產品使用、關鍵利害關係人、與續約日期。輸出具結構的計畫，含目標、風險、機會、與下一步。", englishPrompt: "Create an account plan for [customer name]. Use these inputs: company profile, known priorities, current product usage, stakeholders, and renewal date. Output a structured plan with goals, risks, opportunities, and next steps." },
                    { scenario: "設計業務區域規劃框架 (Design territory planning framework)", chinesePrompt: "為下一財年建立區域規劃指南。輸入：團隊人數、目標產業、區域、與歷史營收。請推薦分配方法與範例覆蓋計畫。", englishPrompt: "Create a territory planning guide for our next fiscal year. Inputs: team headcount, target industries, regions, and historical revenue. Recommend allocation method and sample coverage plan." },
                    { scenario: "運用企業統計資料分級排序 (Prioritize accounts using firmographic data)", chinesePrompt: "我有這份帳戶清單：［貼上範例］。請依［準則：產業、規模、融資、技術堆疊］排序優先級，並輸出排名與理由。", englishPrompt: "I have this list of accounts: [paste sample]. Prioritize them based on [criteria: industry, size, funding, tech stack]. Output a ranked list with reasons why." },
                    { scenario: "用加權評分找出高潛力帳戶 (Spot high-potential accounts using weighted scoring)", chinesePrompt: "依據［插入規則：公司規模、互動分數、意圖訊號等］為帳戶評分。資料：［上傳帳戶清單］。輸出前 10 名帳戶、其分數、與說明原因。", englishPrompt: "Score accounts based on [insert rules—e.g., company size, engagement score, intent signals]. Data: [Upload account list]. Output top 10 ranked accounts with their score and a note explaining why." },
                    { scenario: "區域市場進入規劃 (Regional market entry planning)", chinesePrompt: "我正在評估在［區域／國家］推出我們的［SaaS 解決方案］。請研究當地採購行為、競爭態勢、經濟環境、與法規考量。以「進入／不進入」的市場準備度摘要格式呈現，附引用與行動步驟。", englishPrompt: "I’m evaluating market entry into [region/country] for our [SaaS solution]. Research local buying behaviors, competitive landscape, economic conditions, and regulatory concerns. Format as a go/no-go market readiness summary with citations and action steps." },
                    { scenario: "整理業務每日活動摘要 (Create summary of rep activity)", chinesePrompt: "撰寫每日更新，摘要關鍵業務活動。輸入：［貼上通話摘要或 CRM 匯出］。語氣積極、精簡。輸出為 3–5 點項目。", englishPrompt: "Write a daily update summarizing key rep activities. Inputs: [paste call summaries or CRM exports]. Make it upbeat and concise. Output as 3–5 bullet message." },
                    { scenario: "撰寫高階主管管線狀態更新 (Draft exec update on pipeline status)", chinesePrompt: "為高階主管摘要本月管線健康度。輸入：［貼上數據］。請包含總管線、主要風險、最大成交、與預測信心。以短篇主管更新風格撰寫。", englishPrompt: "Summarize our pipeline health this month for execs. Inputs: [paste data]. Include total pipeline, top risks, biggest wins, and forecast confidence. Write it like a short exec update." }
                ]
            },
            {
                title: "競爭對手情报分析 (Competitive intelligence & enablement)",
                prompts: [
                    { scenario: "製作競爭策略 (Create battlecard for competitor)", chinesePrompt: "為［競品名稱］建立作戰卡。使用以下筆記：［插入定位資料］。請包含優勢、劣勢、我們如何取勝、與快速話術。以表格格式輸出。", englishPrompt: "Create a battlecard for [competitor name]. Use these notes: [insert positioning data]. Include strengths, weaknesses, how we win, and quick talk track. Output as table format." },
                    { scenario: "競品定位分析 (Competitive positioning analysis)", chinesePrompt: "我在準備［競品名稱］的競品作戰卡。請研究其定價模式、產品定位、近期客戶勝／敗案例、與銷售方式。再依我們的這些強項比較：［插入］。輸出一頁摘要，附引用。", englishPrompt: "I’m preparing a competitive battlecard for [competitor name]. Research their pricing model, product positioning, recent customer wins/losses, and sales motion. Compare it to ours based on these strengths: [insert]. Output a 1-page summary with citations." },
                    { scenario: "製作業務使能單頁 (Create a sales enablement one-pager)", chinesePrompt: "為業務推介［產品名稱］對［人物角色］製作單頁。包含關鍵利益、功能、常見使用情境、與競品差異。以可直接使用的使能文件格式輸出。", englishPrompt: "Create a one-pager to help reps pitch [product name] to [persona]. Include key benefits, features, common use cases, and competitor differentiators. Format as copy-ready enablement doc." },
                    { scenario: "準備常見異議的回應話術 (Prepare sales objection rebuttals)", chinesePrompt: "為以下常見異議撰寫回應：［插入 2–3 個異議］。語氣自然、自信，必要時加入備用數據或故事。以清單輸出。", englishPrompt: "Create rebuttals to these common objections: [insert 2–3 objections]. Make them sound natural and confident, and include a backup stat or story where useful. Output as list." },
                    { scenario: "尋找公開領域的客戶佐證 (Find customer proof points in the public domain)", chinesePrompt: "研究近期關於［我方產品或競品］的線上評論、社群提及、與推薦。聚焦客戶讚賞或批評的重點。摘要前 5 則引用、來源人物、與發布平台。包含連結。", englishPrompt: "Research recent online reviews, social mentions, and testimonials about [our product OR competitor product]. Focus on what customers are praising or criticizing. Summarize top 5 quotes, what persona each came from, and where it was posted. Include links." }
                ]
            },
            {
                title: "數據分析與績效洞察 (Data analysis & performance insights)",
                prompts: [
                    { scenario: "分析各階段轉換率 (Analyze pipeline conversion rates by stage)", chinesePrompt: "分析這份銷售管線匯出資料。計算各階段的轉換率並找出最大流失點。資料：［上傳管線 CSV］。輸出短摘要與各階段轉換率表。", englishPrompt: "Analyze this sales pipeline export. Calculate conversion rates between each stage and identify the biggest drop-off point. Data: [Upload pipeline CSV]. Output a short summary and a table of conversion % by stage." },
                    { scenario: "依成交率找出頂尖業務 (Identify top-performing reps by close rate)", chinesePrompt: "從這份業務活動與成交案件資料集中，計算各業務的成交率並排序。資料：［上傳業務績效 CSV］。輸出排名與每位業務的優勢一句話。", englishPrompt: "From this dataset of rep activities and closed deals, calculate the close rate for each rep and rank them. Data: [Upload rep performance CSV]. Output a ranked list and a sentence for each rep’s strength." },
                    { scenario: "可視化各季交易速度 (Visualize deal velocity across quarters)", chinesePrompt: "使用這份 CRM 匯出計算每季平均交易速度（從線索到成交的天數）。資料：［上傳含開／結束日期］。以簡圖展示趨勢並摘要趨勢線。", englishPrompt: "Use this CRM export to calculate average deal velocity per quarter (days from lead to close). Data: [Upload with open/close dates]. Show velocity trend in a simple chart and summarize the trendline." },
                    { scenario: "找出成交原因 (Summarize campaign attribution to closed deals)", chinesePrompt: "將活動來源與已成交的案件對應。識別哪個活動帶來最多成交營收。資料：［上傳活動＋案件匯出］。輸出排名與短篇活動摘要。", englishPrompt: "Match campaign sources to closed-won deals from this data. Identify which campaign drove the most closed revenue. Data: [Upload campaign + deal export]. Output a ranked list and a short campaign summary." },
                    { scenario: "產出績效比較圖表 (Generate performance comparison chart)", chinesePrompt: "以下是各季業務績效表：［貼上資料］。比較前段與後段表現者。展示趨勢圖並點出關鍵差異。輸出表格＋洞見。", englishPrompt: "Here’s a table of rep performance by quarter: [paste data]. Compare top vs bottom performers. Show chart with trends and call out key differences. Output as table + insights." }
                ]
            },
            {
                title: "資料視覺化 (Visuals & Sales Collateral)",
                prompts: [
                    { scenario: "以漏斗視圖呈現銷售流程 (Visualize sales process in funnel view)", chinesePrompt: "建立一個漏斗圖，顯示我們的銷售階段：［插入階段］。風格需乾淨易讀，適合新手上路文件。輸出為簡單圖片。", englishPrompt: "Create a funnel graphic showing our sales stages: [insert stages]. Make it clean and easy to read for onboarding docs. Output as simple image." },
                    { scenario: "可視化 B2B 銷售漏斗 (Visualize the B2B sales funnel)", chinesePrompt: "建立一張標準 B2B SaaS 銷售漏斗圖片，包含以下階段：開發、探索、展示、提案、成交（贏／輸）。使用現代扁平圖示與文字標籤。輸出品質需可用於簡報或使能文件。", englishPrompt: "Create an image of a standard B2B SaaS sales funnel with these stages: Prospecting, Discovery, Demo, Proposal, Closed Won/Lost. Use clean, modern icons and text labels. Output should be clear enough for use in a slide or enablement doc." },
                    { scenario: "繪製關鍵銷售人物角色 (Illustrate key sales personas)", chinesePrompt: "為 3 種人物角色建立專業插畫：（1）中型企業 CFO、（2）全球企業 IT 副總、（3）物流公司營運經理。風格扁平、現代，適合單頁或訓練簡報。", englishPrompt: "Create professional illustrations for 3 personas: (1) CFO of a mid-market company, (2) VP of IT at a global enterprise, and (3) Operations Manager at a logistics firm. Style should be flat and modern, ideal for use in a one-pager or training slide." },
                    { scenario: "建立業務區域覆蓋地圖 (Create a territory coverage map)", chinesePrompt: "製作簡化的美國地圖，將銷售區域分為西部／中部／東部。使用明顯配色並標註關鍵州名。輸出需乾淨，適合業務啟動大會簡報。", englishPrompt: "Create a simplified U.S. map showing sales territories split by region: West, Central, East. Use distinctive color zones and label key states. Output should look clean and suitable for a sales kickoff deck." },
                    { scenario: "設計團隊表揚圖 (Draft a team celebration graphic)", chinesePrompt: "設計一張有趣、現代的「本月最佳業務」慶祝圖。包含姓名／照片的預留位置與獎盃或徽章元素。風格需符合內部品牌或電子報調性。", englishPrompt: "Design a fun, modern graphic to celebrate “Top Rep of the Month.” Include a placeholder for name/photo and stylized trophy or badge. Style should match internal brand or newsletter vibe." }
                ]
            }
        ]
    },
    {
        title: "CRM、客戶關係團隊專用 (For customer success)",
        subCategories: [
            {
                title: "導入與生命週期策略 (Onboarding & lifecycle strategy)",
                prompts: [
                    { scenario: "建立使用者導入計畫 (Create onboarding plan template)", chinesePrompt: "為［客戶類型］建立可重複使用的使用者導入範本。參考典型時程、里程碑與利害關係人協調需求。以週次表格呈現，包含任務負責人與目標。", englishPrompt: "Create a reusable onboarding plan template for [type of customer]. Reference typical timelines, milestones, and stakeholder alignment needs. Format as a week-by-week table with task owners and goals." },
                    { scenario: "摘要上線回饋 (Summarize onboarding feedback)", chinesePrompt: "摘要最近 10 位［客群區隔］客戶的上線回饋。使用以下共用筆記與問卷答案。每個主題輸出一段短文：亮點、阻礙、建議。", englishPrompt: "Summarize onboarding feedback from our last 10 customers in [segment]. Use these shared notes and survey answers. Output a short paragraph per theme: wins, blockers, suggestions." },
                    { scenario: "研究最佳做法 (Identify best practices for high-touch onboarding)", chinesePrompt: "研究頂尖 B2B 公司如何設計高接觸式上線旅程。聚焦 ACV 逾 100 萬美元、採混合上線模式的公司。包含來源，並以條列摘要關鍵戰術，附參考文獻。", englishPrompt: "Research how leading B2B companies structure high-touch onboarding journeys. Focus on companies with $1M+ ACV and hybrid onboarding models. Include sources and structure the output as a bulleted summary of key tactics with references." },
                    { scenario: "提出前瞻性作業手冊 (Suggest proactive playbooks)", chinesePrompt: "為［產業／區隔］中的有流失風險客戶提出 3 套前瞻性外聯手冊。依近期流失、功能未使用、低互動趨勢設計。輸出內容包含：目標、觸發條件、CTA、與時程。", englishPrompt: "Recommend 3 proactive outreach playbooks for at-risk customers in [industry/segment]. Use trends from recent churn, feature inactivity, and low engagement. Output should include: goal, trigger, CTA, and timing." },
                    { scenario: "腦力激盪留存誘因 (Brainstorm retention incentives)", chinesePrompt: "為可能降級的［產業］帳戶提出創意留存策略。根據使用趨勢與續約猶豫提出方案。輸出 5 個驗證過的與 5 個新點子，含優缺點。", englishPrompt: "Suggest creative retention strategies for accounts likely to downgrade in [industry]. Use trends in usage and renewal hesitations we’ve seen. Output 5 tested and 5 novel ideas with pros/cons." }
                ]
            },
            {
                title: "競品研究 (Competitive & benchmark research)",
                prompts: [
                    { scenario: "比較 CS 組織架構基準 (Benchmark CS org structure)", chinesePrompt: "為與我們相似的［產業、規模］公司比較 CS 組織架構。聚焦各客群分配之角色與營收比例。輸出比較表，附人力配置比率說明。", englishPrompt: "Benchmark the CS org structure for companies like ours in [industry, size]. Focus on roles per customer segment and ratio to revenue. Output as a comparison table with notes on headcount ratios." },
                    { scenario: "按產業比較成功指標 (Benchmark success metrics by industry)", chinesePrompt: "研究［產業］領域用於客戶健康評分的前三大成功指標。包含 CSAT、NRR、使用頻率或新興基準。以表格比較指標、來源與基準值，附引用。", englishPrompt: "Research top 3 success metrics used for customer health scoring in the [industry] sector. Include CSAT, NRR, usage frequency, or other emerging benchmarks. Output as a table comparing metric, source, and benchmark value with citations." },
                    { scenario: "評估 CS 工具堆疊 (Evaluate CS tooling stacks)", chinesePrompt: "研究早期、成長、企業階段公司常見的客戶成功技術堆疊。包含類別（CRM、Success 平台、分析等）。輸出比較圖表，附範例與使用說明。", englishPrompt: "Research typical Customer Success tech stacks for companies in early-stage, growth-stage, and enterprise. Include categories (e.g., CRM, Success Platform, Analytics). Output a comparison chart with examples and usage notes." },
                    { scenario: "競品使能摘要 (Competitive enablement summary)", chinesePrompt: "研究競品在［產業］中售後支援企業客戶的作法。包含成功資源、團隊結構、與上線形式範例。輸出比較 3 家競品的表格，每項戰術附優缺點。", englishPrompt: "Research how competitors are supporting enterprise customers post-sale in [industry]. Include examples of success resources, team structure, and onboarding formats. Output as a table comparing 3 competitors with pros/cons per tactic." },
                    { scenario: "建立 CS 計畫競品比較 (Create competitive comparison of CS programs)", chinesePrompt: "研究我們前三大競品的客戶成功計畫樣貌。聚焦上線、健康追蹤、與擴張策略。輸出比較矩陣。", englishPrompt: "Research what customer success programs look like at our top 3 competitors. Focus on onboarding, health tracking, and expansion strategies. Output a comparison matrix." }
                ]
            },
            {
                title: "帳戶規劃與續約準備 (Account planning & renewal prep)",
                prompts: [
                    { scenario: "撰寫高階主管週更郵件 (Draft executive email update)", chinesePrompt: "為［客戶方高階利害關係人］撰寫每週更新郵件。使用本週通話內部筆記與使用指標：［貼上］。輸出為精煉短郵件＋ 3 點重點。", englishPrompt: "Write a weekly update email for [executive stakeholder at customer]. Use these internal notes from this week’s call and usage metrics: [paste here]. Output should be a short, polished email with 3 bullets." },
                    { scenario: "整理 QBR 說話重點 (Draft QBR talking points)", chinesePrompt: "為［客戶名稱］在 QBR 前總結主要亮點、風險、與產品使用重點。使用其最新健康分數、使用趨勢與客服單歷史。以條列內部準備文件格式輸出。", englishPrompt: "Summarize the top wins, risks, and product usage highlights for [Customer Name] ahead of our QBR. Use their latest health score, usage trends, and support ticket history. Format as a bulleted prep doc for internal review." },
                    { scenario: "續約會議準備清單 (Prep for renewal call)", chinesePrompt: "為［客戶名稱］建立續約通話準備清單。包含合約條款、目前使用、已知風險、與加售可能性。以條列清單輸出。", englishPrompt: "Create a renewal call prep checklist for [Customer Name]. Include contract terms, current usage, known risks, and upsell potential. Output as a bulleted checklist." },
                    { scenario: "建立帳戶計畫摘要 (Create account plan summary)", chinesePrompt: "為［客戶名稱］撰寫單頁帳戶計畫。使用最近兩次通話筆記＋合約資訊＋目標：［貼上］。以目標、阻礙、行動、與續約區塊排版。", englishPrompt: "Draft a 1-pager account plan for [Customer Name]. Use notes from our last 2 calls + contract info + goals: [paste here]. Output should be formatted as goals, blockers, actions, and renewals." },
                    { scenario: "續約風險摘要 (Outline renewal risk summary)", chinesePrompt: "為內部預測會議撰寫［客戶名稱］的續約風險摘要。包含續約日期、使用趨勢、情緒、與合約備註。輸出為一段摘要＋一句建議。", englishPrompt: "Draft a renewal risk summary for [Customer Name] ahead of our internal forecast call. Include their renewal date, usage trend, sentiment, and contract notes. Output should be a paragraph summary + 1-line recommendation." }
                ]
            },
            {
                title: "數據與健康度分析 (Data & health analysis)",
                prompts: [
                    { scenario: "按區隔列出成功指標 (Outline success metrics by segment)", chinesePrompt: "為［區隔］客戶草擬成功指標清單。包含採用目標、互動目標、與續約基準。以兩欄表格呈現：指標｜定義。", englishPrompt: "Outline a draft list of success metrics for [segment] customers. Include adoption goals, engagement targets, and renewal benchmarks. Format as a 2-column table: Metric" },
                    { scenario: "評估 CSAT 分數分布 (Evaluate CSAT score distribution)", chinesePrompt: "檢視第二季 CSAT 問卷資料。計算總平均、辨識異常分數、如有則摘要回饋主題。輸出短摘要，含關鍵統計與正負面回饋示例。", englishPrompt: "Review this CSAT survey data from Q2. Calculate overall average, identify outlier scores, and summarize feedback themes if available. Output as a short summary with key stats and top positive/negative feedback examples." },
                    { scenario: "分析客服單趨勢 (Analyze support ticket trends)", chinesePrompt: "檢視上季客服單匯出。識別前五大重複問題並提供根因短摘要。輸出排名清單，含問題、頻率、與可能的 CS 行動。", englishPrompt: "Examine this export of support tickets from the last quarter. Identify the top 5 recurring issues and provide a short summary of root causes. Output should include a ranked list with issue, frequency, and potential CS actions." },
                    { scenario: "偵測早期流失徵兆 (Spot early signs of churn)", chinesePrompt: "檢視最近 90 天的客戶使用資料。依使用下滑、登入頻率、客服互動找出可能流失的客戶。以表格摘要：Customer Name｜Risk Factor｜Notes。", englishPrompt: "Review this customer usage data from the past 90 days. Identify any customers who may be at risk of churning based on usage drop, login frequency, or support interactions. Summarize the findings in a table with columns: Customer Name" },
                    { scenario: "標準化客戶健康評分 (Standardize customer health scoring)", chinesePrompt: "為［區隔或地區］建立健康評分規則草案。使用使用率%、NPS、續約狀態、客服單量等輸入。輸出表格，含分數區間、權重、與顏色指示。", englishPrompt: "Build a draft health scoring rubric for [segment or region]. Use inputs like usage %, NPS, renewal status, and ticket volume. Output as a table with scoring ranges, weights, and color indicators." }
                ]
            },
            {
                title: "資料視覺化 (Visual & diagram design)",
                prompts: [
                    { scenario: "設計客戶健康評分模型圖 (Design customer health score mock-up)", chinesePrompt: "設計一個色碼健康評分儀表的視覺模型。包含低／中／高區間，建議數字範圍與圖示。風格：儀表板感、線條乾淨、專業。", englishPrompt: "Design a visual mock-up of a color-coded health score gauge for customers. Include Low, Medium, High ranges with suggested numerical ranges and icons. Style: dashboard-style, clean lines, professional." },
                    { scenario: "可視化客戶旅程地圖 (Visualize customer journey map)", chinesePrompt: "將以下客戶生命週期階段大綱轉為旅程視覺圖。使用此處列出的階段與痛點：［貼上文字］。輸出為標註清楚的五階段生命週期圖。", englishPrompt: "Turn this outline of customer lifecycle stages into a visual journey map. Use the stages and pain points listed here: [paste text]. Output as a labeled diagram with 5 lifecycle stages." },
                    { scenario: "繪製升級處理流程圖 (Illustrate escalation process flow)", chinesePrompt: "建立自 CSM 到 Support 到 Engineering 的內部升級流程圖。包含三層嚴重程度與交接節點標註。風格：流程圖、用色極簡、可上內部維基。", englishPrompt: "Create a diagram that illustrates the internal escalation process from CSM to Support to Engineering. Include 3 levels of severity and labeled handoff points. Style: flowchart format, minimal colors, ready for internal wiki." },
                    { scenario: "建立客戶成熟度視覺模型 (Build a visual customer maturity model)", chinesePrompt: "建立一張 SaaS 平台四階段客戶成熟度模型圖。每階段需有標題、關鍵行為模式、與建議 CS 觸點。風格：專業、乾淨、可上投影片。", englishPrompt: "Create an image that visualizes a 4-stage customer maturity model for a SaaS platform. Each stage should have a title, key behavior pattern, and suggested CS touchpoint. Style: professional, clean, slide-ready." }
                ]
            }
        ]
    },
    {
        title: "產品經理專用 (For product teams)",
        subCategories: [
            {
                title: "競品與市場分析 (Competitive & market research)",
                prompts: [
                    { scenario: "比較競品的上線體驗 (Compare competitors’ onboarding UX)", chinesePrompt: "研究三家關鍵競品的新手上線流程。請包含截圖、主要步驟、以及摩擦點或驚喜處。彙整比較表並提出改進建議。目標產品：［插入產品］", englishPrompt: "Research how 3 key competitors structure their onboarding flow for new users. Include screenshots, key steps, and points of friction or delight. Synthesize a comparison table and recommendations for improvement. Target product: [Insert product]" },
                    { scenario: "競品定價策略基準 (Benchmark competitor pricing strategies)", chinesePrompt: "我是一位要推出新 SaaS 的產品經理。研究該領域前五名競品的定價層級、免費 vs 付費、功能門檻、與加售觸發。使用公開來源並附上連結。輸出：含洞見與風險的比較表。", englishPrompt: "I’m a product manager launching a new SaaS product. Research how top 5 competitors in this space structure their pricing tiers, freemium vs. paid, feature gating, and upsell triggers. Use public sources and include URLs. Output: A comparison table with insights and risks." },
                    { scenario: "比較技術整合選項 (Compare tech stack options)", chinesePrompt: "比較將［技術／工具 A］與［技術／工具 B］整合進產品的優缺點。聚焦可擴充性、成本、支援、與開發者體驗。請附引用來源。", englishPrompt: "Compare the pros and cons of integrating [technology/tool A] vs. [technology/tool B] into our product. Focus on scalability, cost, support, and developer experience. Include citations." },
                    { scenario: "新功能法規風險識別 (Identify regulatory risks for new features)", chinesePrompt: "我正在為金融服務規劃［功能］。請研究美、英、歐盟近年的相關監管指引，彙整各地區摘要並附引用。輸出：法律考量表，供法務與產品設計參考。", englishPrompt: "I’m a PM scoping a [feature] for financial services. Research recent regulatory guidance in the US, UK, and EU around the use of [feature] in customer-facing products. Summarize by region with citations. Output: A table of legal considerations to flag for our legal team and product design implications." },
                    { scenario: "研究頂尖 PLG 策略 (Research top product-led growth tactics)", chinesePrompt: "研究近兩年高速成長的 SaaS 所採用的 7 大產品驅動成長策略，優先呈現可量化影響者。每項策略包含 1–2 個案例與來源連結。輸出：排序清單（策略、案例、成功指標）。", englishPrompt: "Research the top 7 product-led growth strategies used by fast-scaling SaaS companies in the last 2 years. Prioritize those with measurable impact. Include 1–2 examples per tactic and source links. Output: Ranked list with strategy, example, and success metric." }
                ]
            },
            {
                title: "產品規劃與路線圖 (Product strategy & roadmapping)",
                prompts: [
                    { scenario: "依影響力排序產品路線項目 (Prioritize product roadmap items based on impact)", chinesePrompt: "審閱這份即將進行的產品計畫清單。使用提供的影響分數、投入估算、與策略對齊說明，提出優先順序。請列出重排後清單並為每項提供理由。［插入計畫清單］", englishPrompt: "Review this list of upcoming product initiatives. Use the data provided (impact scores, effort estimates, and strategic alignment notes) to suggest priority order. Present the reordered list with justification for each recommendation. [Insert initiative list]" },
                    { scenario: "探索營收模式 (Explore monetization models)", chinesePrompt: "我們考慮調整定價。根據此產品價值與受眾，提出 3 種貨幣化策略，包含優缺點與採用公司範例。［插入產品與受眾細節］", englishPrompt: "We’re considering pricing changes. Based on this product value and audience, suggest 3 monetization strategies. Include pros, cons, and examples of companies using each. [Insert product and audience details]" },
                    { scenario: "撰寫產品願景敘述 (Draft a vision statement for the product)", chinesePrompt: "根據此長期目標與使用者需求，撰寫精煉的產品願景敘述；需鼓舞人心且聚焦實際成果。［插入產品目標］", englishPrompt: "Based on this long-term goal and user need, write a concise product vision statement. Keep it inspiring and grounded in real outcomes. [Insert product goal]" },
                    { scenario: "由客戶回饋腦力激盪功能想法 (Brainstorm feature ideas from customer feedback)", chinesePrompt: "審閱過去一季的客戶回饋，找出痛點並生成 5 個功能點子以回應重複主題。［插入回饋或摘要］", englishPrompt: "Review this batch of customer feedback from the past quarter. Identify pain points and generate a list of 5 feature ideas to address recurring themes. [Insert feedback or summary]" },
                    { scenario: "規劃 A/B 測試 (Plan A/B testing experiments)", chinesePrompt: "審閱這些 UI 變更並提出兩組 A/B 測試方案。包含假設、成功指標、與可能結果。［插入 UI 變更或使用者目標］", englishPrompt: "Review this list of product UI changes and propose 2 A/B test setups. Include hypothesis, success metrics, and potential outcomes. [Insert UI changes or user goals]" }
                ]
            },
            {
                title: "產品內容與溝通 (Product content & communication)",
                prompts: [
                    { scenario: "撰寫新功能 PRD (Draft PRD for a new feature)", chinesePrompt: "依此功能點子與使用者需求，撰寫 PRD 初稿。包含使用者故事、問題敘述、解決方案概述、驗收標準、與成功指標。［插入脈絡或問題］", englishPrompt: "Based on this feature idea and customer need, write a first-draft PRD. Include user story, problem statement, solution overview, acceptance criteria, and success metrics. [Insert context or problem]" },
                    { scenario: "撰寫更新日誌與發行說明 (Draft changelog and release notes)", chinesePrompt: "依此版本摘要，撰寫對使用者友善的更新說明，並以類別分組（新增、改進、修正）。［插入發行摘要或票據清單］", englishPrompt: "Using this release summary, draft user-facing changelog notes for our next version release. Use a friendly, clear tone and group by category (e.g., new, improved, fixed). [Insert release notes or ticket list]" },
                    { scenario: "建立上市內部 FAQ (Create a go-to-market FAQ)", chinesePrompt: "為銷售與客服撰寫即將上線功能的內部 FAQ。使用此背景與預期問題，語氣自信且具資訊量。［插入功能與上市細節］", englishPrompt: "Draft an internal FAQ for our sales and support teams about our upcoming feature launch. Use this background and anticipated questions. Write in a confident, informative tone. [Insert feature and launch details]" },
                    { scenario: "產生一句話價值主張 (Generate a one-sentence value proposition)", chinesePrompt: "依此功能描述，撰寫三個版本的一句話價值主張，分別貼合不同目標受眾。［插入功能描述］", englishPrompt: "Based on this feature description, write 3 versions of a clear, compelling one-sentence value proposition. Tailor each one to a different target audience. [Insert feature description]" },
                    { scenario: "撰寫新產品簡報大綱 (Draft pitch deck for new product)", chinesePrompt: "建立 5 張投影片的大綱，向內部利害關係人介紹新產品。包含問題、解決方案、市場、產品概覽、與時程。［插入產品概念］", englishPrompt: "Create a 5-slide outline for a pitch deck introducing our new product to internal stakeholders. Include problem, solution, market, product overview, and timeline. [Insert product idea]" }
                ]
            },
            {
                title: "UX 與視覺設計 (UX & visual design)",
                prompts: [
                    { scenario: "可視化使用者旅程圖 (Visualize a user journey map)", chinesePrompt: "為我們的［使用者人物］在［體驗］過程建立旅程圖。包含情緒高低、接觸點、與摩擦時刻。輸出為旅程流程視覺。", englishPrompt: "Create a user journey map for our [insert user persona] going through [insert experience]. Include emotional highs/lows, touchpoints, and moments of friction. Output as a visual flow." },
                    { scenario: "設計上線流程線框圖 (Design onboarding flow wireframe)", chinesePrompt: "產生金融 App 的三步驟上線流程線框風格圖：連結帳戶、設定財務目標、檢視建議。風格：灰階線框＋標籤。", englishPrompt: "Generate a wireframe-style image of a 3-step onboarding flow for a finance app. Steps include: linking an account, setting financial goals, and reviewing suggestions. Style: greyscale wireframe with labels." },
                    { scenario: "繪製產品比較視覺 (Illustrate product comparison visuals)", chinesePrompt: "建立兩個儀表板並排比較圖：一個資訊過載，另一個精簡且具可行洞察。風格：儀表板 UI，極簡、中性品牌。", englishPrompt: "Create a side-by-side visual comparison of two app dashboards: one cluttered with too many metrics, and one simplified with actionable insights. Style: dashboard UI, minimalistic, neutral branding." },
                    { scenario: "設計使用者旅程資訊圖 (Design user journey infographics)", chinesePrompt: "生成行動健康追蹤 App 的上線旅程資訊圖。包含里程碑、情緒、與摩擦點。風格：直式資訊圖、柔和配色。", englishPrompt: "Generate a user journey infographic showing the onboarding experience for a mobile health-tracking app. Include key milestones, emotions, and friction points. Style: infographic, vertical layout, soft colors." }
                ]
            },
            {
                title: "資料分析與洞察 (Data analysis & insights)",
                prompts: [
                    { scenario: "分析產品回饋主題 (Analyze product feedback themes)", chinesePrompt: "分析這批使用者回饋，辨識最常見的四大主題。為每一項提供示例引言與建議的產品影響。［插入回饋或資料］", englishPrompt: "Analyze this set of user feedback and identify the 4 most frequent themes. Summarize each with example quotes and suggested product implications. [Insert feedback or data dump]" },
                    { scenario: "綜整使用數據洞察 (Synthesize insights from usage data)", chinesePrompt: "依以下產品使用數據，摘要三項關鍵行為趨勢與對使用者需求的意涵，並建議兩個後續研究。［插入數據或摘要］", englishPrompt: "Based on the following product usage data, summarize 3 key behavioral trends and what they suggest about user needs. Recommend 2 follow-up investigations. [Insert data or summary]" },
                    { scenario: "識別產品採用風險 (Identify product adoption risks)", chinesePrompt: "檢視我們的產品推行計畫，點出 5 項採用風險，包含可能性、影響程度、與緩解建議。［插入推行計畫或摘要］", englishPrompt: "Review our product rollout plan and highlight 5 risks to successful adoption. Include likelihood, impact, and mitigation recommendations. [Insert rollout plan or summary]" },
                    { scenario: "分析 A/B 測試結果 (Analyze A/B test results)", chinesePrompt: "審閱最近 A/B 測試（實驗 vs 對照）的結果。辨識統計顯著性、變動的關鍵指標，並提出下一步。必要時以圖表清晰呈現。［上傳測試資料］", englishPrompt: "Review the results of our recent A/B test (test vs. control). Identify statistical significance, key metrics that changed, and recommend next steps. Present insights clearly with graphs if needed. [Upload test data]" },
                    { scenario: "比較不同客群的功能採用 (Compare feature adoption across customer segments)", chinesePrompt: "使用這份資料比較中小企業 vs 企業級客戶對關鍵功能的採用。強調主要差異、使用頻率、與留存影響。以表格＋洞見輸出。［上傳 CSV 或描述資料集］", englishPrompt: "Use this data to compare how small business vs. enterprise customers adopt our key features. Highlight major differences, usage frequencies, and retention impact. Format output as a table with insights. Upload CSV or describe dataset]" }
                ]
            }
        ]
    },
    {
        title: "工程師專用 (For engineering teams)",
        subCategories: [
            {
                title: "行業標竿分析 (Research & benchmarking)",
                prompts: [
                    { scenario: "評估雲端供應商以進行遷移 (Evaluate cloud providers for migration)", chinesePrompt: "我是一位基礎架構工程師，正在評估雲端遷移選項。背景：我們要將金融科技後端從自建機房遷移到雲端。請比較 AWS、GCP、Azure 在可擴充性、定價、合規性、與開發者工具方面的差異，並附引用。", englishPrompt: "I’m an infrastructure engineer evaluating cloud migration options. Context: We’re moving from on-prem to the cloud for a fintech backend. Output: Compare AWS, GCP, and Azure for scalability, pricing, compliance, and developer tooling. Include citations." },
                    { scenario: "研究即時應用框架 (Research frameworks for real-time apps)", chinesePrompt: "我正在打造一個即時協作工具。需求：低延遲與可擴充性。請比較主流框架（如 SignalR、Socket.io、WebRTC）的使用情境、優缺點、與其他 SaaS 公司的目前採用狀況，並附來源。", englishPrompt: "I’m building a real-time collaboration tool. Context: We need low-latency and scalability. Output: Compare top frameworks (e.g., SignalR, Socket.io, WebRTC) with use cases, pros/cons, and current usage by other SaaS companies. Include sources." },
                    { scenario: "觀測性工具基準比較 (Benchmark observability tools)", chinesePrompt: "請為頂尖觀測性工具進行基準比較。背景：我們想從基礎記錄升級到全棧監控。請建立 Datadog、New Relic、Prometheus、OpenTelemetry 的功能、定價、整合比較表，並附來源。", englishPrompt: "Benchmark the top observability tools. Context: We want to move from basic logging to full-stack monitoring. Output: Create a comparison table of features, pricing, integrations for Datadog, New Relic, Prometheus, and OpenTelemetry. Include sources." },
                    { scenario: "分析物流領域的 AI/ML 趨勢 (Analyze AI/ML trends in logistics)", chinesePrompt: "我在研究物流系統中的 AI/ML 採用。背景：公司考慮導入預測型路由。請撰寫五段式摘要：現行趨勢、供應商、與常見導入樣式，並附引用與連結。", englishPrompt: "I’m researching AI/ML adoption in logistics systems. Context: Our company is considering integrating predictive routing. Output: A 5-paragraph summary on current trends, vendors, and implementation patterns. Include citations and links." },
                    { scenario: "調查合規最佳實務 (Investigate compliance best practices)", chinesePrompt: "研究 GDPR/CCPA 合規最佳實務，以便與法務展開討論。背景：我們的 App 在歐、美儲存敏感用戶資料。請產出依法規分類的合規檢核表，附引用與官方文件連結。", englishPrompt: "Research best practices for GDPR/CCPA compliance so we can help kick off discussions with our legal team. Context: Our app stores sensitive user data in the EU and US. Output: A compliance checklist with citations, sorted by regulation. Include links to documentation and regulations." }
                ]
            },
            {
                title: "技術審查與文件撰寫 (Technical reviews & documentation)",
                prompts: [
                    { scenario: "審閱系統設計文件 (Review system design doc)", chinesePrompt: "我已草擬一份［專案／功能］的技術設計文件。請檢視其清晰度、架構合理性、與完整性，並標註缺失的考量或可能被審查者提出的問題。", englishPrompt: "I’ve drafted a technical design document for [insert project or feature]. Review it for clarity, architectural soundness, and completeness. Highlight any missing considerations or questions reviewers may raise." },
                    { scenario: "撰寫內部 API 文件 (Document internal API behavior)", chinesePrompt: "我需要為其他開發者撰寫此內部 API 的使用文件。以下是相關程式碼、資料結構、與使用範例：［貼上資料］。請建立清楚文件，包含端點、輸入／輸出格式、與預期行為。", englishPrompt: "I need to document how this internal API works for other developers. Here’s the relevant code, schema, and usage examples: [insert materials]. Create clear documentation including endpoints, input/output formats, and expected behavior." },
                    { scenario: "撰寫值班 Runbook (Draft runbook for on-call engineers)", chinesePrompt: "我需要為支援［系統名稱］的值班工程師建立 Runbook。請包含系統概述、常見警示、診斷步驟、與升級流程等章節。", englishPrompt: "I need to create a runbook for on-call engineers supporting [insert system]. Draft one that includes sections for system overview, common alerts, diagnostic steps, and escalation procedures." },
                    { scenario: "撰寫新進工程師上線指南 (Draft onboarding guide for new hires)", chinesePrompt: "我需要為加入［團隊名稱］的新進工程師撰寫上線指南。請草擬包含必備工具、權限設定、程式庫概覽、與第一週任務的自助式上線文件。", englishPrompt: "I need to write an onboarding guide for new engineers joining [insert team]. Create a draft with sections for required tools, access setup, codebase overview, and first tasks. Make it suitable for self-service onboarding." },
                    { scenario: "依規格撰寫 JIRA 票單 (Write JIRA ticket from spec)", chinesePrompt: "根據此［任務／功能］的工程規格，撰寫一張 JIRA 票單，包含問題敘述、背景脈絡、目標、驗收標準、與技術備註。", englishPrompt: "Based on this engineering spec for [insert task or feature], write a JIRA ticket that includes the problem statement, context, goals, acceptance criteria, and technical notes for implementation." }
                ]
            },
            {
                title: "除錯與優化 (Debugging & optimization)",
                prompts: [
                    { scenario: "故障排除 (Debug failing system in production)", chinesePrompt: "生產環境系統間歇性故障，根因難以定位。根據以下日誌、指標、與近期變更：［貼上脈絡］，請協助辨識最可能的原因並提出緩解建議。", englishPrompt: "A system in production is intermittently failing, and we’re struggling to isolate the root cause. Based on the following logs, metrics, and recent changes: [insert context], help identify the most likely causes and suggest next steps for mitigation." },
                    { scenario: "分析效能瓶頸 (Analyze performance bottlenecks)", chinesePrompt: "我們的服務在尖峰時段出現延遲與效能下降。以下是指標、日誌、與相關追蹤：［貼上脈絡］。請協助找出瓶頸並提出具體優化建議。", englishPrompt: "Our service is experiencing latency and degraded performance during peak usage. Here are metrics, logs, and relevant traces: [insert context]. Help identify the bottlenecks and recommend specific optimizations." },
                    { scenario: "分析資料管線失敗 (Analyze a data pipeline failure)", chinesePrompt: "昨天的一次執行中，關鍵資料管線失敗。以下為日誌、資料量趨勢、與錯誤輸出：［貼上脈絡］。請分析可能原因並提出避免再發的建議。", englishPrompt: "A critical data pipeline failed in yesterday’s run. Here are the logs, data volume trends, and error outputs: [insert context]. Analyze what likely went wrong and provide recommendations to prevent recurrence." },
                    { scenario: "提出觀測性改進 (Suggest observability improvements)", chinesePrompt: "我們目前使用［工具名稱］監控［服務名稱］。請檢視觀測性設計，並在指標、日誌、警示、與儀表板方面提出改進，以提升問題偵測與除錯效率。", englishPrompt: "We currently use [insert tools] for monitoring [insert service]. Review our observability setup and suggest improvements across metrics, logging, alerting, and dashboards to improve issue detection and debugging." },
                    { scenario: "腦力激盪測試邊界情境 (Brainstorm edge cases for testing)", chinesePrompt: "我們正為［功能／系統］設計測試案例。請腦力激盪可能未涵蓋的邊界情境與故障場景，包括不尋常的使用者輸入、系統狀態變化、與併發問題。", englishPrompt: "We’re preparing test cases for [insert feature/system]. Brainstorm potential edge cases and failure scenarios that may not be covered by standard testing, including unusual user inputs, system state changes, and concurrency issues." }
                ]
            },
            {
                title: "資料分析與報告 (Data analysis & reporting)",
                prompts: [
                    { scenario: "識別產品使用紀錄趨勢 (Identify trends in product usage logs)", chinesePrompt: "分析此產品使用紀錄 CSV。背景：我們想辨識跨時間與使用者區隔的使用趨勢。輸出：摘要統計＋折線／長條圖呈現關鍵趨勢。", englishPrompt: "Analyze this CSV of product usage logs. Context: We want to identify usage trends over time and across user segments. Output: Summary stats + line or bar charts highlighting key trends." },
                    { scenario: "可視化系統錯誤率 (Visualize system error rates over time)", chinesePrompt: "以此資料集繪製錯誤率的時間序列。背景：內容為過去一個月的應用程式日誌。輸出：時間序列圖、指明錯誤高峰、與簡短解讀。", englishPrompt: "Plot error rates over time from this dataset. Context: It contains application logs from the last month. Output: A time-series chart with callouts for error spikes and a short interpretation." },
                    { scenario: "分析效能測試結果 (Analyze performance test results)", chinesePrompt: "分析這組效能測試結果。背景：比較我們後端服務的兩個版本。輸出：並排比較圖＋文字摘要（改善或退步）。", englishPrompt: "Analyze this set of performance test results. Context: It compares two versions of our backend service. Output: Side-by-side comparison charts + text summary of improvements or regressions." },
                    { scenario: "依影響排序缺陷 (Prioritize bugs based on impact)", chinesePrompt: "分析此缺陷報告資料集。背景：每列包含嚴重度、頻率、與受影響使用者。輸出：高優先缺陷清單＋頻率 vs 嚴重度圖表。", englishPrompt: "Analyze this bug report dataset. Context: Each row includes severity, frequency, and affected users. Output: A prioritized list of top bugs with charts showing frequency vs. severity." },
                    { scenario: "摘要使用者問卷回饋 (Summarize feedback from user surveys)", chinesePrompt: "摘要此使用者問卷 CSV。背景：包含近期調查的評分與開放式回覆。輸出：關鍵主題、情緒分數、與評分分布圖表。", englishPrompt: "Summarize this user feedback CSV. Context: It includes ratings and open text responses from a recent survey. Output: Key themes, sentiment scores, and charts showing distribution of ratings." }
                ]
            },
            {
                title: "系統架構與視覺化 (System architecture & visualization)",
                prompts: [
                    { scenario: "建立元件圖 (Create a component diagram)", chinesePrompt: "我需要視覺化［系統／服務］的架構。請產生元件圖，標示關鍵服務、資料流、與第三方整合，並以清楚標籤與合邏輯的群組呈現。", englishPrompt: "I need to visualize the architecture of [insert system or service]. Generate a component diagram showing key services, data flows, and third-party integrations. Use clear labels and group components logically." },
                    { scenario: "可視化系統架構 (Visualize system architecture)", chinesePrompt: "建立一張系統架構圖。背景：微服務電商平台，包含支付、目錄、與使用者檔案服務。輸出：標註服務與資料流箭頭的圖示。", englishPrompt: "Create an image of the system architecture. Context: It’s a microservices-based e-commerce platform with services for payments, catalog, and user profiles. Output: Diagram with labeled services and data flow arrows." },
                    { scenario: "向利害關係人說明 CI/CD 流程 (Explain CI/CD pipeline to stakeholders)", chinesePrompt: "建立一張解釋 CI/CD 流程的圖像。背景：用於商務利害關係人的簡報。輸出：顯示開發→建置→測試→部署步驟的圖示，包含基本圖標與簡短描述。", englishPrompt: "Create an image that explains our CI/CD process. Context: This is for a presentation to business stakeholders. Output: Diagram showing dev → build → test → deploy steps with basic icons and short descriptions." },
                    { scenario: "建模機器學習管線資料流 (Model data flow in ML pipeline)", chinesePrompt: "建立一張機器學習管線的資料流圖。背景：我們收集原始使用者資料、清理、訓練模型、並提供預測。輸出：從原始資料到推論的標註流程圖。", englishPrompt: "Create an image showing data flow in a machine learning pipeline. Context: We collect raw user data, clean it, train models, and serve predictions. Output: A labeled flowchart from raw data to inference." },
                    { scenario: "繪製客戶旅程圖 (Diagram customer journey through app)", chinesePrompt: "建立一張行動銀行 App 的客戶旅程圖。背景：步驟包含上線、連結帳戶、交易、與客服支援。輸出：含步驟、畫面、與決策點的流程圖。", englishPrompt: "Create a customer journey map through our mobile banking app. Context: Steps include onboarding, account linking, transactions, and support. Output: A visual flowchart with steps, screens, and decision points." }
                ]
            }
        ]
    },
    {
        title: "人資團隊專用 (For HR Teams)",
        subCategories: [
            {
                title: "工作環境體驗與回饋 (Workspace experience and feedback)",
                prompts: [
                    { scenario: "起草員工調查問題 (Draft employee survey questions)", chinesePrompt: "撰寫 6–8 題用於衡量［例如：歸屬感、對主管的信任、工作量平衡］的員工調查問題。問題需中立、易懂。以每行一題呈現，並附建議評分量表。", englishPrompt: "Write 6–8 employee survey questions designed to measure [e.g. belonging, manager trust, workload balance]. Ensure the questions are neutral and easy to understand. Format them as one question per line with rating scale suggestions." },
                    { scenario: "產生績效評核提問 (Generate performance review prompts)", chinesePrompt: "針對［部門／團隊］設計五個績效評核提問，鼓勵反思、未來目標設定與可行回饋。語氣建設性、以成長為向。以評核表清單呈現。", englishPrompt: "Develop a set of five questions for performance reviews that encourage reflection, future goal setting, and actionable feedback. Tailor to [function/team], and keep the tone constructive and growth-oriented. Present the questions as a list for a review form." },
                    { scenario: "分析離職調查主題 (Analyze exit survey themes)", chinesePrompt: "檢視以下來自［部門／期間］的離職調查回覆，辨識最常見主題、關切點與情緒走勢。以條列摘要並加入代表性引言。［在此貼上回覆］", englishPrompt: "Review the following employee exit survey responses and identify the top recurring themes, concerns, and sentiment trends. These responses are from [department/timeframe]. Provide a thematic summary with bullet points and representative quotes. [Insert responses here]" },
                    { scenario: "分析員工流失趨勢 (Analyze trends in employee attrition)", chinesePrompt: "分析過去 12 個月的員工流失資料集，聚焦部門、年資與離職原因的模式。摘要重點洞見並提出 2–3 項 HR 行動建議。以條列＋短段落呈現。［上傳 CSV 或貼上表格］", englishPrompt: "Analyze this employee attrition dataset from the last 12 months. Focus on patterns by department, tenure, and exit reasons. Summarize key insights and suggest 2–3 actions HR should consider. Present findings as bullet points followed by a short paragraph. [Upload your CSV or paste table here]" },
                    { scenario: "產出薪酬基準報告 (Generate a compensation benchmarking report)", chinesePrompt: "依內部薪資資料與產業基準，標示角色、性別與職級的薪酬差異。包含平均值、標準差，能夠的話附視覺化圖表。提供給主管閱讀的短摘要。［上傳基準與內部檔案］", englishPrompt: "Based on this internal salary data and industry benchmarks, highlight pay discrepancies by role, gender, and level. Include averages, standard deviation, and a visual if possible. Provide a short summary for leadership review. [Upload benchmark and internal files]" }
                ]
            },
            {
                title: "人力資源研究與法規遵循 (HR research & compliance)",
                prompts: [
                    { scenario: "研究全球 HR 合規更新 (Research global HR compliance updates)", chinesePrompt: "研究 2024–2025 年 EU、US、APAC 的 HR 合規變更（聚焦遠距法規、員工分類、資料隱私）。附官方來源連結並以淺白文字摘要。輸出：三地區比較表＋每區一段摘要。", englishPrompt: "Research the latest 2024–2025 HR compliance changes in the EU, US, and APAC (focus on remote work laws, employee classification, and data privacy). Provide links to official sources and summarize in plain language. Present findings in a 3-region comparison table with a 1-paragraph summary per region." },
                    { scenario: "比較 DEI 預算平均值 (Benchmark average DEI budgets)", chinesePrompt: "研究美國 500–5,000 人公司常見的 DEI 計畫預算與團隊規模，如有則附產業基準。提供 3 個有引用的關鍵數據與給主管的條列摘要。", englishPrompt: "Research typical DEI program budgets and team sizes for companies with 500–5,000 employees in the US. Include industry benchmarks if available. Present key insights with 3 cited data points and include a simple bullet summary for leadership." },
                    { scenario: "探索 2025 年 HR 科技趨勢 (Explore top HR tech trends for 2025)", chinesePrompt: "［你要為 HR 主管做簡報。］研究並摘要 2025 年將影響 HR 的前 5 大科技趨勢。包含使用情境、供應商案例、與對中型企業的影響。彙整為精簡主管簡報，附引用與可行建議。", englishPrompt: "[You’re briefing HR leadership on tech trends.] Research and summarize the top 5 HR technology trends expected to shape 2025. Include use cases, vendor examples, and implications for mid-sized companies. Synthesize insights into a short executive briefing with citations and actionable recommendations." },
                    { scenario: "跨產業比較員工留任策略 (Compare employee retention strategies across industries)", chinesePrompt: "［你在為一家中型科技公司設計留任方案。］研究科技、醫療、金融三個產業的 3 項創新且高影響的留任策略。聚焦後疫情的參與挑戰。包含引用案例並以並排比較圖表摘要重點。", englishPrompt: "[You are building a retention initiative for a mid-sized tech firm.] Research 3 innovative, high-impact employee retention strategies used in tech, healthcare, and financial services. Focus on post-pandemic engagement challenges. Include cited examples and summarize key elements in a side-by-side comparison chart." },
                    { scenario: "研究招募工具 (Research tools for recruiting)", chinesePrompt: "研究 4 款中型企業常用且評價高的候選人篩選／尋源工具。摘要功能、定價、合規狀態（EEOC）與已知限制。附主要來源連結並以比較表呈現。", englishPrompt: "Research 4 top-rated candidate screening or sourcing tools used by mid-market companies. Summarize features, pricing, compliance status (EEOC), and known limitations. Provide links to primary sources and present findings in a comparison table." }
                ]
            },
            {
                title: "人才招募與員工敬業度 (Talent acquisition & employee engagement)",
                prompts: [
                    { scenario: "設計面試題目 (Create interview questions)", chinesePrompt: "依公司價值觀為［職缺名稱］（隸屬［團隊／部門］）設計行為面試題。同時評估技術能力與文化契合。提供 6–8 題並依能力分組。", englishPrompt: "Develop behavioral interview questions aligned to our company values for a [role title] opening in [team/department]. We want to assess both technical skills and culture fit. Provide 6–8 questions grouped by competency." },
                    { scenario: "撰寫職缺說明初稿 (Write a job description draft)", chinesePrompt: "依此資訊［職責、技能、團隊脈絡］撰寫專業的職缺說明，包含簡短導言、職責、必要資格、與角色吸引力亮點。", englishPrompt: "Based on this information [insert job responsibilities, skills, team context], write a professional job description for a [job title]. Include a short intro, responsibilities, required qualifications, and what makes the role appealing." },
                    { scenario: "腦力激盪員工參與方案 (Brainstorm engagement initiatives)", chinesePrompt: "針對［公司／團隊／地區］提出 5 個提升員工參與的實用點子，考量混合辦公、現有參與分數、與時間／資源限制。每一項包含簡述、預期影響與執行成本。", englishPrompt: "Generate five practical ideas for improving employee engagement across [company/team/region]. Consider our hybrid work model, current engagement scores, and time/resource constraints. Present each idea with a short description, expected impact, and implementation effort level." },
                    { scenario: "撰寫內部表揚貼文 (Write internal recognition blurb)", chinesePrompt: "為慶祝［員工／團隊］的近期成果（［描述內容］）撰寫短訊息。語氣溫暖、感謝，適用於 Slack 或 Email。字數 100 字以內。", englishPrompt: "Draft a short recognition message to celebrate [employee/team] for their recent accomplishment: [describe what they did]. Write it in a warm, appreciative tone suitable for Slack or email. Keep it under 100 words." },
                    { scenario: "設計 DEI 工作坊大綱 (Create a DEI workshop outline)", chinesePrompt: "為［公司／團隊］設計一小時 DEI 工作坊，目標是促進包容式溝通與覺察。包含議程、學習目標、互動活動、與 2–3 個討論題目。", englishPrompt: "Design a one-hour DEI workshop for employees at [company/team]. The goal is to foster inclusive communication and awareness. Include an agenda, key learning objectives, interactive activities, and 2–3 discussion questions." }
                ]
            },
            {
                title: "政策與方案開發 (Policy & program development)",
                prompts: [
                    { scenario: "撰寫內部政策摘要 (Draft an internal policy summary)", chinesePrompt: "摘要此［內部政策或手冊章節］的重點，協助 HR 業務夥伴理解並有效傳達。該政策關於［簡述或脈絡］。以清楚、專業語氣撰寫，200 字以內。", englishPrompt: "Summarize the key points of this [internal policy or handbook section] so HR business partners can understand and communicate it effectively. This policy relates to [brief description or context]. Present the summary in clear, professional language under 200 words." },
                    { scenario: "撰寫重返辦公 FAQ (Draft a return-to-office FAQ)", chinesePrompt: "為員工撰寫重返辦公的 FAQ。使用以下背景［填入 RTO 計畫要點］，以溫暖清晰的語氣回覆主要關切（如混合時程、健康規範、期待）。包含 5–7 組問答。", englishPrompt: "Write an employee-facing FAQ to support our return-to-office transition. Use this background information [insert key RTO plan details]. Cover top employee concerns (e.g. hybrid schedules, health protocols, expectations) in a warm and clear tone. Include 5–7 questions with answers." },
                    { scenario: "規劃新人上線週 (Plan onboarding week)", chinesePrompt: "為［部門或地區］的新進同仁建立 5 天上線時程。包含導覽目標、涵蓋主題、應見人員、與相關工具資源。以簡單日程表呈現，必要時含時間區段。", englishPrompt: "Build a 5-day onboarding schedule for new hires in [department or region]. Include orientation goals, topics to cover, people to meet, and relevant tools or resources. Present it in a simple day-by-day table with time blocks if helpful." },
                    { scenario: "腦力激盪福祉方案 (Brainstorm wellbeing initiatives)", chinesePrompt: "依近期回饋與預算限制，為［公司／團隊］提出三個量身打造的員工福祉方案。包含理由、估計成本、與可能的成功指標。以短提案摘要呈現。", englishPrompt: "Suggest three tailored wellbeing programs for employees at [company/team], considering recent feedback and budget constraints. Include rationale, estimated costs, and potential success metrics. Present ideas as a short proposal summary." },
                    { scenario: "規劃合規訓練推行 (Plan compliance training rollout)", chinesePrompt: "為［團隊／地區］設計分階段的合規訓練推行計畫。包含時程、溝通策略、目標對象、與支援材料。以條列或 4 週行事曆呈現。", englishPrompt: "Create a phased plan to roll out a new compliance training across [team/region]. Include timing, communications strategy, target audiences, and support materials. Present the plan in bullet points or as a 4-week calendar." }
                ]
            },
            {
                title: "內部品牌視覺與溝通 (Internal brand visuals & communication)",
                prompts: [
                    { scenario: "建立新人上線歡迎橫幅 (Create a welcome banner for onboarding)", chinesePrompt: "建立新人上線歡迎橫幅圖片。風格：乾淨、現代。氛圍：溫暖、包容。格式：水平橫幅，預留文字區。視覺可含多元團隊、咖啡杯、或數位協作圖示。", englishPrompt: "Create an image for a new employee onboarding welcome banner. Style: clean and modern. Mood: warm and inclusive. Format: horizontal banner with space for overlay text. Include visual cues like a diverse team, coffee cups, or digital collaboration tools." },
                    { scenario: "設計內部 DEI 海報 (Design an internal DEI poster)", chinesePrompt: "建立內部 DEI 活動的海報風格圖片。風格：大膽、極簡。元素：多元的抽象表徵（手、重疊形狀、色塊）。氛圍：樂觀、前瞻。保留標語或引言的空白。", englishPrompt: "Create a poster-style image for an internal DEI campaign. Style: bold, minimal. Include abstract representations of diversity (hands, overlapping shapes, color blocks). Mood: optimistic and forward-looking. Include placeholder space for a slogan or quote." },
                    { scenario: "插畫化混合辦公政策 (Illustrate a hybrid work policy)", chinesePrompt: "生成混合辦公情境插畫：居家、共用辦公空間、現代辦公室。風格：扁平插畫或柔和 3D。用途：HR 文件。", englishPrompt: "Generate an illustration showing a hybrid work scenario: a person working from home, a coworking space, and a modern office. Style: flat illustration or soft 3D. Intended for use in HR documentation." },
                    { scenario: "可視化員工生命週期 (Visualize the employee lifecycle)", chinesePrompt: "建立員工生命週期的簡易視覺圖：吸引、上線、發展、留任、離職。使用圖示或抽象人物表示各階段。風格：企業簡報可用。", englishPrompt: "Create a simple visual diagram of the employee lifecycle: attract, onboard, develop, retain, offboard. Use icons or abstract figures to represent each phase. Style: corporate presentation-ready." }
                ]
            }
        ]
    },
    {
        title: "IT人員專用 (For IT teams)",
        subCategories: [
            {
                title: "雲端與供應商評估 (Cloud & vendor evaluations)",
                prompts: [
                    { scenario: "比較雲端供應商 (Compare cloud providers)", chinesePrompt: "比較 AWS、Azure、GCP 在我們的使用情境下（［插入工作負載或環境］）。請考量成本、正常運作時間、全球可用性、與整合便利性。使用 2025 年資料研究，並以表格比較每家供應商，最後提供推薦。", englishPrompt: "Compare AWS, Azure, and GCP for our use case: [insert workload or environment]. Consider cost, uptime, global availability, and ease of integration. Research using 2025 data, and present a table comparing each provider with a recommendation at the end." },
                    { scenario: "產出供應商比較圖表 (Generate vendor comparison chart)", chinesePrompt: "研究並比較企業用遠端存取供應商。聚焦功能、價格、整合能力、與客服品質。使用 2025 年資料，並以比較表附說明整理結果。", englishPrompt: "Research and compare remote access vendors for enterprise use. Focus on features, pricing, integrations, and support quality. Use 2025 data, and summarize the findings in a comparison table with notes." },
                    { scenario: "比較 AI 觀測平台 (Compare AI observability tools)", chinesePrompt: "我是［公司名稱］的 IT Manager，正在評估觀測平台。研究 2025 年的產品供應、定價、支援環境、與關鍵差異。請附引用，並以比較表摘要洞見，最後對中型工程團隊提出推薦。", englishPrompt: "I’m an IT Manager at [insert company]. I’m evaluating observability platforms. Research current offerings, pricing, supported environments, and key differentiators in 2025. Include citations and summarize insights in a comparison table with a recommendation for a mid-size engineering org." },
                    { scenario: "調查零信任框架 (Investigate zero trust frameworks)", chinesePrompt: "我是資安架構師，正導入零信任。研究主流框架（如 NIST 800-207）與 2024–2025 年最佳實務更新，盡可能包含實務案例。請提供比較摘要與可供主管簡報的重點。", englishPrompt: "I’m a Security Architect working on adopting a zero trust model. Research leading frameworks (e.g., NIST 800-207) and recent updates to best practices in 2024–2025. Include real-world implementation case studies where possible. Provide a summarized comparison and an executive-ready briefing." }
                ]
            },
            {
                title: "IT 合規與資安 (IT compliance & security)",
                prompts: [
                    { scenario: "評估全球資料在地法規 (Assess global data residency laws)", chinesePrompt: "我是 IT 合規主管，正規劃全球資料儲存架構。請研究 2025 年 EU、US、APAC、LATAM 的資料在地要求，包含監管限制與優先雲端區域。引用官方文件並以區域分組表格摘要。", englishPrompt: "I’m an IT Compliance Lead planning a global data storage architecture. Research 2025 data residency requirements across the EU, US, APAC, and LATAM. Include regulatory restrictions and preferred cloud regions. Cite official documentation and summarize findings in a table grouped by region." },
                    { scenario: "分析遠端存取工具 (Analyze remote access tools)", chinesePrompt: "作為 IT 服務交付主管，我需要安全、可擴充的遠端存取工具以支援混合團隊。請比較 2025 年企業用供應商（如 BeyondTrust、TeamViewer Tensor、Chrome Remote Desktop），聚焦 SSO、加密、會話記錄、與價格。提供資安導向的主管摘要並附主來源連結。", englishPrompt: "As an IT Service Delivery Lead, I need a secure, scalable remote access tool for our hybrid team. Compare current vendors (e.g., BeyondTrust, TeamViewer Tensor, Chrome Remote Desktop) for enterprise use in 2025. Focus on SSO support, encryption, session logging, and pricing. Provide a security-focused executive summary with links to primary sources." },
                    { scenario: "產出合規檢核清單 (Generate compliance checklist)", chinesePrompt: "依 SOC 2 指南，建立即將內部稽核的 IT 控制檢核清單。使用現有稽核準備文件為背景。以領域分組（存取、變更管理、事件應對等）。", englishPrompt: "Based on SOC 2 guidelines, create a checklist of IT-specific controls to review for an upcoming internal audit. Use this existing audit prep document as background. Organize the checklist by domain (e.g., access, change management, incident response)." },
                    { scenario: "驗證存取控制 (Validate access controls)", chinesePrompt: "檢視使用者、角色、系統的存取矩陣。檢查各使用者的權限是否符合最小權限原則。找出可能的過度授權，並以表格列出需調整權限的使用者。", englishPrompt: "Review this access matrix of users, roles, and systems. Check whether each user’s access level follows our least-privilege policy. Identify any potential overprovisioning, and provide a table listing users with permissions that may need to be scaled back." },
                    { scenario: "審查 API 資安狀態 (Review API security posture)", chinesePrompt: "檢視此 API 結構與流量日誌樣本。辨識常見 API 資安議題（如輸入驗證不足、缺乏驗證）。以條列列出發現並提出修正建議。", englishPrompt: "Review this API schema and a sample set of traffic logs. Identify common API security issues such as poor input validation or lack of authentication. Provide a bullet-point list of findings with suggested fixes." }
                ]
            },
            {
                title: "IT 營運與資產管理 (IT operations & asset management)",
                prompts: [
                    { scenario: "撰寫 IT 新人上線清單 (Draft IT onboarding checklist)", chinesePrompt: "從 IT 視角建立新人的上線清單。包含帳號開通、資安訓練、硬體設定等關鍵步驟。參考現有流程大綱，並以日或週分組呈現。", englishPrompt: "Create a checklist for onboarding new hires from an IT perspective. Include key steps for account provisioning, security training, and hardware setup. Use this outline of our current process, and present the checklist organized by day or week." },
                    { scenario: "撰寫硬體生命週期政策 (Generate hardware lifecycle policy)", chinesePrompt: "為公司筆電與桌機建立生命週期管理政策草案。參考設備年齡與更換成本試算表。以正式文書撰寫更換時程、支援窗口、與環境考量。", englishPrompt: "Create a draft policy for managing the lifecycle of company laptops and desktops. Reference this spreadsheet of device ages and current replacement costs. Write a formal document with guidance on replacement timelines, support windows, and environmental considerations." },
                    { scenario: "撰寫資產盤點政策 (Draft asset inventory policy)", chinesePrompt: "撰寫 IT 資產維護與稽核的正式政策。以工具、部門、與相關利害關係人清單為起點。包含目的、職責、與盤點對帳流程。", englishPrompt: "Write a formal policy for maintaining and auditing IT asset inventory. Use this list of tools, departments, and stakeholders as a starting point. Include purpose, responsibilities, and process for inventory reconciliation." },
                    { scenario: "協助 IT 工單優先排序 (Help prioritize IT tickets)", chinesePrompt: "檢視 IT 支援工單佇列。依影響、緊急程度、與 SLA 的優先規則重排，並以優先待辦清單呈現，每筆附簡短理由。", englishPrompt: "Review this queue of open IT support tickets. Use this prioritization rubric based on impact, urgency, and SLA. Reorder the tickets accordingly and present the list as a prioritized backlog with a short reason for each ranking." },
                    { scenario: "追蹤硬體生命週期風險 (Track hardware lifecycle risk)", chinesePrompt: "使用包含購買日期、型號、OS 版本的設備清單。標示已過 EOL 或接近汰換門檻的資產。建立高風險設備表格並提供簡短敘述給 IT 主管。", englishPrompt: "Use this device inventory file containing purchase dates, models, and OS versions. Highlight which assets are past end-of-life or nearing refresh thresholds. Create a table of at-risk devices and include a narrative summary for IT leadership." }
                ]
            },
            {
                title: "IT 對內外溝通與事故處置 (IT communication & incident management)",
                prompts: [
                    { scenario: "撰寫事故後檢 (Draft an incident postmortem)", chinesePrompt: "摘要最近的［系統／服務］故障。包含根因、事件時間軸、用戶影響、與採取行動。根據事故票單或戰情室筆記撰寫，格式為可分享的內部後檢報告。", englishPrompt: "Summarize the recent [insert system or service] outage. Include the root cause, timeline of events, user impact, and actions taken. Use information from the incident ticket or war room notes, and format the summary as a shareable internal postmortem report." },
                    { scenario: "建立災難復原手冊草案 (Create a DR playbook draft)", chinesePrompt: "為關鍵生產服務建立 DR 手冊草案。使用系統圖與 RTO/RPO 目標。將手冊分為停機前、期間、與之後的步驟。", englishPrompt: "Create a draft disaster recovery playbook for a critical production service. Use this system diagram and our recovery objectives (RTO, RPO). Organize the playbook into steps to take before, during, and after a service outage." },
                    { scenario: "撰寫停機內部通知 (Write internal comms for downtime)", chinesePrompt: "撰寫專業的內部通知，宣告［系統／工具］の計畫性停機。包含時間、受影響使用者、對工作影響、與提問聯絡窗口。語氣為 IT 團隊更新。", englishPrompt: "Write a professional internal communication announcing planned downtime for [insert system or tool]. Include timing, affected users, impact on work, and who to contact for questions. Write the message in the tone of an IT team update." },
                    { scenario: "將錯誤日誌翻成白話 (Translate error logs to plain language)", chinesePrompt: "協助把系統錯誤日誌轉述為非技術主管也能理解的語言。必要時加入定義，並以幾句清楚句子解釋每則日誌。以郵件草稿形式呈現。", englishPrompt: "Help translate these system error logs into language that can be understood by a non-technical executive. Use definitions where needed, and summarize what each log entry means in a few clear sentences. Present the explanation as an email draft." },
                    { scenario: "評估 SaaS 工具冗餘 (Evaluate SaaS tool redundancy)", chinesePrompt: "檢視 IT、工程、與營運使用的 SaaS 工具清單。使用附帶的成本、團隊使用、與功能表格。找出重疊工具並推薦 3–5 個整併候選，為每項提供簡短理由。", englishPrompt: "Review our current list of SaaS tools used by IT, engineering, and ops. Use the attached spreadsheet with cost, team usage, and tool functions. Identify overlapping tools and recommend 3–5 candidates for consolidation, explaining why each was chosen in a short summary report." }
                ]
            },
            {
                title: "IT 監控與優化 (IT monitoring & optimization)",
                prompts: [
                    { scenario: "摘要系統健康趨勢 (Summarize system health trends)", chinesePrompt: "分析過去 30 天的系統健康日誌。聚焦 CPU／記憶體尖峰、服務中斷、與重複錯誤碼。提供簡潔重點摘要並加上可能原因或後續建議。", englishPrompt: "Analyze the system health logs from the last 30 days. Focus on spikes in CPU/memory, service outages, and recurring error codes. Provide a concise summary of the key issues and add brief commentary on possible causes or needed follow-ups." },
                    { scenario: "提出監控改進建議 (Suggest system monitoring improvements)", chinesePrompt: "依［系統］目前設定與近期警示紀錄檢視監控配置。找出 2–3 個改進空間，如警示覆蓋缺口、噪音降低、或指標調校。以短內部備忘錄呈現。", englishPrompt: "Review our monitoring setup for [insert system] based on the current configuration and recent alert history. Identify 2–3 areas for improvement, such as gaps in alert coverage, noise reduction, or metrics tuning. Present the suggestions in a short internal memo." },
                    { scenario: "分析服務可用率與事故頻度 (Analyze service uptime and incident frequency)", chinesePrompt: "檢視過去一季的每日可用率與事故日誌 CSV（針對［服務名稱］）。辨識停機模式、按嚴重度的問題頻率，並計算整體可用率。摘要發現並提出改善行動。", englishPrompt: "Review this CSV with daily uptime % and incident logs for [insert service] over the past quarter. Identify patterns in outages, frequency of issues by severity, and calculate overall uptime. Summarize findings and suggest actions for improvement in a brief report." },
                    { scenario: "稽核使用者存取異常 (Audit user access logs for anomalies)", chinesePrompt: "分析使用者存取日誌匯出。找出異常存取頻率、非工作時段登入、或登入失敗。標記可疑模式並以資安稽核格式摘要。", englishPrompt: "Analyze this user access log export. Identify users or IP addresses with unusual access frequency, after-hours logins, or failed attempts. Flag suspicious patterns and summarize results in a security review format." },
                    { scenario: "預測 IT 支援工單量 (Forecast IT support ticket volume)", chinesePrompt: "分析過去 12 個月按週的支援工單量匯出。找出季節性趨勢並預測下季工單量。視覺化趨勢並提供人力規劃說明。", englishPrompt: "Analyze this export of support ticket volume by week for the past 12 months. Identify seasonality trends and forecast volume for the next quarter. Visualize the trend and provide commentary for capacity planning." }
                ]
            }
        ]
    },
    {
        title: "管理職位專用 (For managers)",
        subCategories: [
            {
                title: "策略規劃與對齊 (Strategic planning & alignment)",
                prompts: [
                    { scenario: "撰寫季度目標 (Draft quarterly goals)", chinesePrompt: "為我的團隊撰寫清楚且可衡量的季度目標。以下是商業脈絡、公司目標與近期表現：［貼上脈絡］。請以簡潔條列呈現 3 個目標，每個目標含 3–4 個關鍵結果。", englishPrompt: "Draft clear and measurable quarterly goals for my team. Here is the business context, company objectives, and recent performance: [insert context]. Return 3 Objectives with 3-4 Key Results each, in a simple bullet format." },
                    { scenario: "高階簡報要點 (Exec update talking points)", chinesePrompt: "我需要向副總報告團隊進度。根據這份每週摘要：［貼上筆記］，請產出簡潔要點，分為：成就、阻礙、與需要協助。", englishPrompt: "I need to brief my VP on team progress. Based on this weekly summary: [insert notes], generate concise talking points grouped into achievements, blockers, and asks." },
                    { scenario: "技能落差分析 (Run a skills gap analysis)", chinesePrompt: "我想評估團隊的技能落差。這是目前技能矩陣與期望的未來狀態：［貼上資訊］。請識別關鍵落差並提出訓練或招募方案，以短表格呈現。", englishPrompt: "I’m trying to assess skill gaps on my team. Here’s our current skill matrix and desired future state: [insert info]. Identify key gaps and suggest training or hiring solutions. Return findings in a short table." },
                    { scenario: "招募路線圖規劃 (Plan a hiring roadmap)", chinesePrompt: "我需要規劃接下來兩季的招募需求。這是目前團隊結構與成長預測：［貼上資訊］。請提出分階段招募計畫，包含每個職位的理由與建議時程。", englishPrompt: "I need to plan hiring needs for the next two quarters. Here’s our current team structure and projected growth: [insert info]. Suggest a phased hiring plan with rationale for each role and proposed timing." },
                    { scenario: "策略轉向後重構目標 (Reframe goals after a pivot)", chinesePrompt: "我們剛經歷策略轉向。變動如下：［貼上細節］。請協助重構團隊目標與敘事，使其對齊新方向。提供 2–3 組談話要點與修訂後的團隊目標敘述。", englishPrompt: "We just experienced a strategic pivot. Here’s what changed: [insert details]. Help me reframe our team’s goals and narrative to align with the new direction. Provide 2-3 talking points and a revised team goal statement." }
                ]
            },
            {
                title: "管理者輔導與績效賦能 (Managerial coaching & performance enablement)",
                prompts: [
                    { scenario: "建立 1:1 會議模板 (Create a 1:1 template)", chinesePrompt: "為直屬同仁建立 1:1 會議模板，包含進度確認、阻礙、職涯成長與回饋。以條列式議程與引導問題呈現。", englishPrompt: "Draft a 1:1 meeting template for my direct reports. I want it to include check-ins on progress, roadblocks, career growth, and feedback. Format it as a bulleted agenda with guiding questions." },
                    { scenario: "優化回饋表達 (Improve feedback delivery)", chinesePrompt: "我想給一位表現未達標的同仁建設性回饋。問題是：［插入行為］。請提供 2–3 種表述方式，並說明各自的優缺點。", englishPrompt: "I want to give constructive feedback to a report who is underperforming. The issue is [insert behavior]. Suggest 2-3 ways to phrase it constructively, with pros and cons of each approach." },
                    { scenario: "準備困難對話 (Prepare for a difficult conversation)", chinesePrompt: "我即將與同仁就［插入議題］進行困難對話。請協助構思開場、主要訊息與提問。輸出 3 部分的對話指引。", englishPrompt: "I have a difficult conversation coming up with a team member about [insert issue]. Help me think through what to say, how to open, and what questions to ask. Return a 3-part conversation guide." },
                    { scenario: "化解跨團隊衝突 (Resolve a cross-team conflict)", chinesePrompt: "正在處理我方與他部門的衝突。這是緊張關係與近期事件摘要：［貼上資訊］。請提出可能根因與可嘗試的 3 步驟調解方案。", englishPrompt: "I’m dealing with a conflict between my team and another function. Here’s a summary of the tension and recent incidents: [insert info]. Suggest root causes and a 3-step mediation approach I can try." }
                ]
            },
            {
                title: "團隊效能分析與評估 (Team analytics & health diagnostics)",
                prompts: [
                    { scenario: "依工時辨識倦怠風險 (Identify burnout risk from hours)", chinesePrompt: "依據時數表資料（每人每週工時），標示早期倦怠風險。門檻：連續 2 週超過 45 小時。請摘要被標示員工與平均工時趨勢。", englishPrompt: "Based on this timesheet data (weekly hours logged per person), flag any early signs of burnout risk. Use a threshold of >45 hours for 2+ weeks. Return a summary of flagged employees and trends in average hours." },
                    { scenario: "分析工作量分布 (Analyze workload distribution)", chinesePrompt: "我有一份過去 4 週每位成員的任務與完成時間 CSV。請分析工作量分布，找出可能過載或未充分利用者，並以短段落與圖表摘要。", englishPrompt: "I have a CSV that shows task assignments and completion times per team member for the last 4 weeks. Analyze workload distribution across the team—identify who may be overburdened or underutilized, and summarize in a short paragraph with a chart." },
                    { scenario: "診斷團隊健康問題 (Diagnose team health issues)", chinesePrompt: "我注意到團隊出現失能或低投入跡象。根據近期行為與動態描述：［貼上描述］，請推測可能成因並提出 3 部分行動方案。", englishPrompt: "I’m noticing signs of disengagement or dysfunction on my team. Based on this description of recent behavior and team dynamics: [insert description], what are the likely causes and what should I do next? Provide a 3-part action plan." }
                ]
            },
            {
                title: "人員研究與標竿分析 (People & talent research & benchmarking)",
                prompts: [
                    { scenario: "混合團隊參與最佳實務 (Hybrid engagement best practices)", chinesePrompt: "我領導一支［產業］的混合團隊。請研究近兩年有效的參與與協作作法，聚焦提升信任、降低倦怠、維持生產力。提供前 5 名作法，附證據與連結。", englishPrompt: "I lead a hybrid team in [insert industry]. Research effective engagement and collaboration practices from the last 2 years. Focus on techniques proven to improve team trust, reduce burnout, and sustain productivity. Provide a top 5 list with supporting evidence and links." },
                    { scenario: "管理者：個人貢獻者比率基準 (Benchmark manager-to-IC ratios)", chinesePrompt: "我是［角色］於［公司類型］。想與同業比較管理者：IC 比率，聚焦產業常態、按團隊類型差異（工程、產品等）、與擴編建議。請附引用與比較表。", englishPrompt: "I’m a [insert role, e.g. Senior Engineering Manager] at a [insert company type, e.g., 500-person SaaS company]. I want to benchmark manager-to-IC ratios across similar tech firms. Focus on industry norms, variations by team type (engineering, product, etc.), and recommendations for scaling. Provide citations and a comparison table." },
                    { scenario: "研究有效的技能提升方案 (Research effective upskilling programs)", chinesePrompt: "我正在為［團隊類型］設計技能提升計畫。請找成功的內訓案例或框架，包含成效衡量方式、時長、與使用工具。以 3–4 段摘要並附連結。", englishPrompt: "I’m designing an upskilling program for a [insert team type, e.g., customer support team]. Find case studies or frameworks from companies that have implemented successful internal training programs. Include how they measured success, duration, and tools used. Summarize in 3–4 paragraphs with links." },
                    { scenario: "比較 DEI 策略範例 (Compare DEI strategy examples)", chinesePrompt: "我在規劃團隊的 DEI 目標。請研究領先公司在［產業］的團隊級 DEI 作法，包含 KPI、訓練與儀式。輸出比較表並附連結。", englishPrompt: "I’m helping shape our team’s DEI goals. Research how leading companies in [insert industry] structure their DEI initiatives at the team level. Include examples of KPIs, training, and rituals. Return a comparison table with links." },
                    { scenario: "理解倦怠風險與緩解 (Understand burnout risks and mitigation)", chinesePrompt: "團隊出現倦怠跡象。請研究近期研究或專家建議，說明知識工作者倦怠的辨識與預防。摘要關鍵風險因子並提出含引用的 3 部分行動方案。", englishPrompt: "I’m seeing signs of burnout on my team. Research recent studies or expert guidance on recognizing burnout in knowledge workers and preventing escalation. Summarize key risk factors and recommend a 3-part action plan with citations." }
                ]
            },
            {
                title: "團隊文化與視覺溝通 (Team culture & visual communication)",
                prompts: [
                    { scenario: "描繪團隊成長旅程 (Depict a team growth journey)", chinesePrompt: "設計一個團隊一整年成長旅程的視覺隱喻，包含挑戰、里程碑、與協作。風格應具啟發性，如時間線或穿越地景的路徑。", englishPrompt: "Design a visual metaphor for a team’s growth journey over a year. Include representations of challenges, milestones, and collaboration. Style should be inspiring, like a timeline or path through a landscape." },
                    { scenario: "視覺化團隊文化 (Summarize team culture visually)", chinesePrompt: "設計代表團隊文化的圖像。我們的價值包含：［插入 3–5 項，如好奇心、影響力、責任感］。以圖示或插畫對應各價值，版面乾淨，適用於 wiki 或看板。", englishPrompt: "Design an image that represents our team culture. Our values are [insert 3–5 values, e.g. curiosity, impact, accountability]. Use icons or illustrations to match each value, and organize in a clean layout suitable for a wiki or mural board." },
                    { scenario: "呈現季度重點領域 (Show quarterly focus areas)", chinesePrompt: "建立視覺儀表板或海報，顯示本季三大策略優先事項：［插入優先事項］。畫面需有吸引力、易於在全員簡報展示。", englishPrompt: "Create a visual dashboard or poster that shows our team’s three strategic priorities this quarter: [insert priorities]. Make it visually engaging and easy to present in an all-hands slide." }
                ]
            }
        ]
    },
    {
        title: "高階主管專用 (For executives)",
        subCategories: [
            {
                title: "投資人與市場情報 (Investor & market intelligence)",
                prompts: [
                    { scenario: "摘要投資人趨勢 (Summarize investor trends)", chinesePrompt: "我正在準備投資人更新。請研究［產業］的最新募資與市場趨勢，聚焦估值基準、風險情緒、與重要退出案例。以精簡簡報撰寫並附來源。", englishPrompt: "I’m preparing for our investor update. Research the latest funding and market trends in [industry]. Focus on valuation benchmarks, risk sentiment, and notable exits. Present in a concise brief with sources." },
                    { scenario: "調查投資人情緒 (Survey investor sentiment)", chinesePrompt: "研究目前［產業］公司的投資人情緒，從財報電話會議、投資人信、與分析師筆記擷取洞見。聚焦風險偏好、募資趨勢、與成長期待。提供一頁簡報並附連結。", englishPrompt: "Research current investor sentiment for companies in the [industry] space. Pull insights from earnings calls, investor letters, and analyst notes. Focus on risk appetite, funding trends, and growth expectations. Provide a 1-page briefing with source links." },
                    { scenario: "高階主管薪酬基準 (Benchmark executive compensation)", chinesePrompt: "研究［職稱，例如 CFO］在［公司規模與產業］的薪酬基準。包含總薪酬拆解、地區差異、與公私營公司趨勢。以一頁簡報呈現，附表格與引用。", englishPrompt: "Conduct research on executive compensation benchmarks for [title, e.g. CFO] at [company size and industry]. Include total compensation breakdowns, geographic variations, and trends across public/private companies. Summarize in a 1-page brief with data tables and citations." },
                    { scenario: "評估產業併購機會 (Evaluate M&A opportunities in a sector)", chinesePrompt: "我正在評估［產業／垂直領域］的併購選項。研究近 24 個月的收購案、常見交易金額、目標類型、與整合結果。提供公司案例、風險、與策略理由。以投資人式簡報呈現。", englishPrompt: "I’m evaluating M&A options in the [sector/vertical]. Research recent acquisitions (past 24 months), typical deal sizes, common targets, and integration outcomes. Provide company examples, risks, and strategic rationale. Format as an investor-style briefing." },
                    { scenario: "研判未來產業趨勢 (Assess future trends in [your industry])", chinesePrompt: "我是［公司／產業］的高階主管。請對未來三年［產業／主題］的 3–5 項新興趨勢進行深入研究，包含產業案例、專家引用、與對策略與人才規劃的影響。以主管摘要（條列＋來源連結）呈現。", englishPrompt: "I’m an executive at [company/industry]. Conduct deep research on 3–5 emerging trends in [industry/topic] over the next 3 years. Include industry-specific examples, expert citations, and potential implications for strategy and talent planning. Present as an executive summary with bullet points and links to sources." }
                ]
            },
            {
                title: "高階管理與組織溝通 (Executive & organizational communications)",
                prompts: [
                    { scenario: "起草願景聲明 (Draft a vision statement)", chinesePrompt: "請協助為我們的［公司／團隊／倡議］撰寫具說服力的願景聲明。我們的重點為：［插入目標、價值或方向］。語氣需鼓舞人心、精煉，且易於跨部門傳達。", englishPrompt: "Help me draft a compelling vision statement for our [company/team/initiative]. Our focus areas are: [insert key goals, values, or direction]. Make it inspiring, concise, and easy to communicate across departments." },
                    { scenario: "產出全員大會談話要點 (Generate town hall talking points)", chinesePrompt: "我需要一場公司全員大會的談話要點。主題是［插入主題或公告］。內容需具吸引力、清楚、前瞻性，總長不超過 5 分鐘。", englishPrompt: "I need talking points for an upcoming company-wide town hall. The theme is [insert theme or announcement]. Make it engaging, clear, and forward-looking. Limit to 5 minutes of content." },
                    { scenario: "更新內部溝通策略 (Refresh internal comms strategy)", chinesePrompt: "請為［公司或團隊］設計新的內部溝通計畫，目標是提升對齊、士氣與透明度。建議 3 項指導原則與簡易溝通行事曆。", englishPrompt: "Help me design a new internal communications plan for [company or team]. We’re trying to improve alignment, morale, and transparency. Suggest 3 guiding principles and a simple comms calendar." },
                    { scenario: "重組溝通時序規劃 (Plan a reorg comms sequence)", chinesePrompt: "我正在規劃組織重整的溝通。請依受眾（主管、經理、全員）提供逐步訊息計畫，包含語氣指南與各訊息的交付形式。", englishPrompt: "I’m planning communications for a reorg. Provide a step-by-step message plan by audience type (execs, managers, all staff). Include tone guidelines and delivery format per message." },
                    { scenario: "撰寫接班規劃備忘錄 (Draft a succession planning memo)", chinesePrompt: "請協助撰寫給［領導團隊／董事會］的接班規劃備忘錄。包含理由、時程、與對內溝通的下一步透明說明。", englishPrompt: "Help me draft a succession planning memo for our [leadership team/board]. Include reasoning, timing, and a transparent outline of next steps for internal comms." }
                ]
            },
            {
                title: "策略規劃與決策支援 (Strategic planning & decision support)",
                prompts: [
                    { scenario: "建立定價策略簡報 (Create a pricing strategy brief)", chinesePrompt: "我們正在檢視［產品／服務］的定價策略。基於［插入脈絡：目標、客群、競爭定位］，請提出 2–3 種定價模型並說明優缺點。", englishPrompt: "We’re revisiting our pricing strategy for [product/service]. Based on [insert context: goals, customer segments, competitive positioning], suggest 2–3 pricing models and pros/cons of each." },
                    { scenario: "優先排序成長槓桿 (Prioritize growth levers)", chinesePrompt: "依我們的目標［插入商業目標］，請識別 3 項高潛力成長槓桿並估算投入 vs 影響。以表格簡述與權衡。", englishPrompt: "Given our goals [insert business goals], identify 3 high-potential growth levers and estimate effort vs. impact. Include a table with short descriptions and trade-offs." },
                    { scenario: "分析市場進入風險 (Analyze market entry risks)", chinesePrompt: "我們考慮進入［新市場／地區］。請依當前經濟、法律、與競爭因素，條列摘要關鍵風險與緩解策略。", englishPrompt: "We are considering entering [new market/region]. Based on current economic, legal, and competitive factors, summarize key risks and mitigation strategies in bullet format." },
                    { scenario: "重構策略取捨比較 (Reframe strategic trade-offs)", chinesePrompt: "我們正在在［方案 A］與［方案 B］間選擇下一個重大投資。請比較成本、時間、團隊產能、與客戶影響的取捨，並依目標適配性提出推薦。", englishPrompt: "We’re choosing between [Option A] and [Option B] for our next big investment. Compare trade-offs across cost, time, team capacity, and customer impact. Recommend based on goal fit." },
                    { scenario: "設計三年策略大綱 (Design a 3-year strategy outline)", chinesePrompt: "依這些商業優先事項［插入高階目標］，請協助制定高階三年策略，含重點領域、風險、與每年里程碑。", englishPrompt: "Based on these business priorities [insert high-level goals], help me develop a high-level 3-year strategy. Include major focus areas, risks, and milestones per year." }
                ]
            },
            {
                title: "分析效能與數據洞察 (Analytical performance & data insights)",
                prompts: [
                    { scenario: "辨識績效最佳／最差區段 (Identify top and bottom performing segments)", chinesePrompt: "這份資料集涵蓋［地區／產品／客戶］的績效。請找出高於／低於平均的區段，說明驅動指標，並提出 2 項建議行動。", englishPrompt: "This is a dataset of performance across [regions/products/customers]. Identify which segments are over- and under-performing relative to the average. Show the metrics driving this and recommend 2 actions based on the findings." },
                    { scenario: "分析季度商業指標 (Analyze quarterly business metrics)", chinesePrompt: "我正在檢視第［插入季度］的績效資料。請分析此資料集（上傳 CSV），找出營收、流失、與獲客的關鍵趨勢。突顯 3 點可向董事會分享的洞見，並提出後續追問。", englishPrompt: "I’m reviewing performance data for Q[insert quarter]. Analyze this dataset [upload CSV] for key trends in revenue, churn, and customer acquisition. Highlight 3 insights I should share with the board and suggest follow-up questions I should ask." },
                    { scenario: "分析客戶旅程流失 (Analyze customer journey drop-off)", chinesePrompt: "我上傳了一份漏斗資料集顯示客戶旅程階段。請分析各階段轉換率並找出最大流失。提出 2–3 個假設與後續驗證步驟。", englishPrompt: "I uploaded a funnel dataset showing customer journey stages. Analyze conversion rates between each stage and identify the largest drop-offs. Suggest 2–3 hypotheses and next steps to test or investigate." },
                    { scenario: "依歷史趨勢預測下季 (Forecast next quarter based on historical trends)", chinesePrompt: "依此歷史資料［上傳］，建立下季［KPI，如營收］的簡易預測。使用基本時間序列模型並說明假設。以可給領導團隊的短摘要呈現。", englishPrompt: "Based on this historical data [upload], build a simple forecast for [KPI, e.g. revenue] over the next quarter. Use a basic time-series model and explain any assumptions made. Present as a short briefing I can share with my leadership team." },
                    { scenario: "優先排序策略投資 (Prioritize strategic investments)", chinesePrompt: "我上傳了現行或提案計畫的資料集，包含成本、影響分數、與預估 ROI 時程。請建立簡易評分模型並繪製投入 vs 影響，以摘要前 3 名推薦。", englishPrompt: "I uploaded a dataset of ongoing or proposed initiatives with cost, impact score, and estimated time to ROI. Help me prioritize these initiatives by building a simple scoring model and plotting effort vs. impact. Summarize the top 3 recommendations." }
                ]
            },
            {
                title: "高階視覺化與框架設計 (Executive visualization & framework design)",
                prompts: [
                    { scenario: "建立競爭版圖矩陣 (Build a competitive landscape grid)", chinesePrompt: "依以下競品與差異化特點［貼上］，建立以［X 軸］與［Y 軸］為基準的 2x2 矩陣。為各象限加上標籤並標示我們的位置。", englishPrompt: "Based on the following list of competitors and their differentiators [paste], create a 2x2 matrix plotting them by [x axis] and [y axis]. Label each quadrant and include our position." },
                    { scenario: "設計 2x2 市場定位矩陣 (Design a 2x2 market positioning matrix)", chinesePrompt: "為［產業］建立 2x2 矩陣，依［X 軸：如定價］與［Y 軸：如創新］繪製公司。標示象限、加入 6–8 家公司，並突顯我們的位置。版面需適用董事會簡報。", englishPrompt: "Create a 2x2 matrix plotting companies in [industry] by [X-axis: e.g. pricing] and [Y-axis: e.g. innovation]. Label each quadrant, add 6–8 companies, and highlight where we fit. Keep it suitable for a board presentation." },
                    { scenario: "呈現轉型時間軸 (Show transformation timeline)", chinesePrompt: "建立公司轉型旅程的視覺時間軸，涵蓋［第 1 年］到［第 3 年］。包含關鍵里程碑：策略轉向、團隊擴張、與市場拓展。風格：簡潔、醒目、專業。", englishPrompt: "Create a visual timeline showing a company transformation journey from [year 1] to [year 3]. Include key milestones: strategy shifts, team growth, market expansion. Style: simple, bold, professional." },
                    { scenario: "可視化策略願景／飛輪 (Visualize strategic vision or flywheel)", chinesePrompt: "為專注於［產業或目標］的公司建立高階策略飛輪或願景圖。呈現輸入（如客戶、數據、回饋）如何循環為輸出（如成長、創新）。風格需乾淨、現代、適合主管簡報。", englishPrompt: "Create a high-level strategic flywheel or vision diagram for a company focused on [industry or goal]. Show how inputs (e.g. customers, data, feedback) loop into outputs (e.g. growth, innovation). Keep it clean, modern, and executive-ready." },
                    { scenario: "繪製未來產品願景 (Illustrate a future product vision)", chinesePrompt: "建立［產業／產品］的未來願景概念圖，凸顯展現創新與顧客利益的特徵。風格需前瞻、抽象但清晰。", englishPrompt: "Create a conceptual image of a future product vision for [industry/product]. Highlight features that reflect innovation and customer benefit. Style should be forward-looking, abstract but clear." }
                ]
            }
        ]
    },
    {
        title: "財務團隊專用 (For finance)",
        subCategories: [
            {
                title: "財務標竿與市場分析 (Financial benchmarking & market analysis)",
                prompts: [
                    { scenario: "財務績效基準比較 (Benchmark financial performance)", chinesePrompt: "請以公開資料比較我們與［產業］公司的財務表現：包含毛利率、淨利、與 CAC。以表格呈現並附來源連結。", englishPrompt: "Benchmark our financial performance against companies in the [insert industry] sector. Use public data to compare gross margin, net profit, and CAC. Present results in a table with source links." },
                    { scenario: "與同業比較費用比率 (Benchmark expense ratios vs. peers)", chinesePrompt: "我是［公司／產業］的財務主管。研究 5 家相近公司的 SG&A 與 R&D 費用比率（如 SaaS／製造／醫療）。提供指標表、來源連結，與簡短比較分析。", englishPrompt: "I’m a finance lead at [insert company or industry]. Research current SG&A and R&D expense ratios for 5 comparable companies in the [insert sector, e.g., SaaS, manufacturing, healthcare]. Provide a table with metrics, source links, and a short analysis of how we compare." },
                    { scenario: "競爭對手募資分析 (Competitive fundraising analysis)", chinesePrompt: "我是 CFO，正準備下一輪募資。研究過去 12 個月在［產業］的募資輪次，摘要金額、估值、領投者、與定位。以簡報備忘錄格式呈現，附引用與條列重點。", englishPrompt: "I’m a CFO preparing for our next fundraising round. Research recent funding rounds (past 12 months) in [insert industry]. Summarize deal sizes, valuations, lead investors, and positioning. Format as a briefing memo with source citations and clear bullet-point insights." },
                    { scenario: "比較全球稅務規範 (Compare global tax regulations)", chinesePrompt: "我負責全球財務合規。請研究並比較［國家列表］的公司稅率與申報要求，聚焦稅賦誘因、申報門檻、與罰則。以比較圖表呈現並附官方來源連結。", englishPrompt: "I manage global finance compliance. Research and compare corporate tax rates and reporting requirements in [insert countries]. Focus on tax incentives, reporting thresholds, and penalties. Deliver a comparison chart with links to official sources." },
                    { scenario: "ESG 財務策略基準 (ESG finance strategy benchmark)", chinesePrompt: "我正在更新 ESG 財務策略。研究［產業］領先公司如何把 ESG 納入財務規劃與揭露。摘要 3–5 個案例，含 KPI、揭露頻率、與財務影響，並附參考。", englishPrompt: "I’m updating our ESG financial strategy. Research how leading companies in [insert industry] integrate ESG into financial planning and disclosures. Summarize 3–5 examples with their KPIs, reporting cadence, and financial impact. Include references." }
                ]
            },
            {
                title: "財務規劃與預測 (Financial planning & forecasting)",
                prompts: [
                    { scenario: "預測營收趨勢 (Forecast revenue trends)", chinesePrompt: "依過去 6 季資料預測下季營收。請引用我們的［資料集或產業］趨勢說明推論。以表格呈現預測並附短篇主管摘要。", englishPrompt: "Forecast next quarter’s revenue based on the past 6 quarters of data. Use the trends from our [insert dataset or industry] to explain your reasoning. Present the forecast in a table and write a short executive summary." },
                    { scenario: "撰寫預算假設 (Draft budget assumptions for planning)", chinesePrompt: "協助我起草下一年度計畫的預算假設。脈絡：［部門／地區／產品資訊］。輸出需包含關鍵假設、理由、與相依條件。", englishPrompt: "Help me draft budget assumptions for our next annual plan. Context: [insert department/region/product info]. Output should include key assumptions, rationale, and any dependencies." },
                    { scenario: "建模現金流情境 (Model cash flow scenarios)", chinesePrompt: "依這些變數（如營收區間、延遲、成本等）建模 3 種現金流情境。以表格呈現假設、關鍵驅動因子、與估計現金影響。", englishPrompt: "Model 3 cash flow scenarios based on these variables: [insert inputs such as revenue range, delays, or costs]. Output as a table with assumptions, key drivers, and estimated cash impact." },
                    { scenario: "工具投資 ROI 分析 (Conduct ROI analysis for tooling)", chinesePrompt: "為新導入的［軟體／工具］進行 ROI 分析。脈絡：［使用或定價資料］。輸出需包含回本期、假設、與簡短風險評估。", englishPrompt: "Conduct an ROI analysis for a new [insert software or tool] we’re considering. Context: [insert usage or pricing data]. Output should include payback period, assumptions, and a short risk assessment." },
                    { scenario: "比較定價策略 (Compare pricing strategies)", chinesePrompt: "比較我們［產品／服務］的 3 種潛在定價策略。以［過去年度］的定價資料為脈絡。並排表格呈現優缺點與估計影響。", englishPrompt: "Compare 3 potential pricing strategies for our [insert product or service]. Use prior pricing data from [insert past year] for context. Output should be a side-by-side comparison table with pros, cons, and estimated impact." }
                ]
            },
            {
                title: "財務溝通與報告 (Financial communication & reporting)",
                prompts: [
                    { scenario: "準備董事會財務要點 (Prepare board meeting talking points)", chinesePrompt: "為即將到來的董事會會議撰寫財務談話要點。請以我們的［Q2 結果或損益摘要］為輸入。用條列呈現重點，聚焦整體指標與風險／機會。", englishPrompt: "Draft financial talking points for an upcoming board meeting. Use our [insert Q2 results or P&L summary] as input. Write the talking points in bullet format, focusing on topline metrics and risk/upsides." },
                    { scenario: "撰寫投資人更新摘要 (Write investor update summary)", chinesePrompt: "為下一次投資人更新撰寫摘要。使用［績效報告亮點或募資進度］。以簡潔主管郵件格式，適合對外利害關係人。", englishPrompt: "Write a summary for our next investor update. Use highlights from [insert performance report or fundraising update]. Format the output as a concise executive email suitable for external stakeholders." },
                    { scenario: "撰寫 QBR 財務投影片 (Draft QBR financial slide content)", chinesePrompt: "為下一次 QBR 的財務表現段落撰寫投影片重點。輸入：［Q2 營收、毛利趨勢、重要成本變動］。以條列呈現並加入 1–2 句重點結語。", englishPrompt: "Draft the financial performance section for our next QBR deck. Use these inputs: [insert Q2 revenue, margin trends, notable cost changes]. Output as slide bullets with 1–2 takeaway lines." },
                    { scenario: "翻譯差異分析為白話摘要 (Translate variance analysis)", chinesePrompt: "將這份差異分析翻譯成管理者易懂的摘要。來源：［插入分析］。用淺白語言簡述各項差異產生的原因。", englishPrompt: "Translate this variance analysis into a manager-friendly summary. Source: [insert analysis]. Write in plain language with a brief explanation of why each variance occurred." },
                    { scenario: "摘要稽核發現 (Summarize audit findings)", chinesePrompt: "摘要我們的內部稽核重點。文件：［插入稽核發現］。輸出為面向主管的摘要，含三大主題與建議後續步驟。", englishPrompt: "Summarize key findings from our internal audit. Use this document: [insert findings]. Output should be a summary for executives, with 3 themes and recommended next steps." }
                ]
            },
            {
                title: "營運財務與流程改進 (Operational finance & process improvement)",
                prompts: [
                    { scenario: "分析降成本機會 (Analyze cost reduction opportunities)", chinesePrompt: "依最近的預算報告辨識降成本機會。以［成本中心或部門］拆解評估。輸出表格：機會、預估節省、與潛在風險。", englishPrompt: "Identify cost reduction opportunities from our recent budget report. Use the breakdown from [insert cost center or department] to evaluate. Provide a table with opportunities, projected savings, and any potential risks." },
                    { scenario: "評估併購標的適配 (Evaluate M&A target fit)", chinesePrompt: "評估併購標的的財務與策略適配。脈絡：［公司概況或關鍵指標］。輸出優缺點表格與三段風險／報酬摘要。", englishPrompt: "Evaluate the financial and strategic fit of an M&A target. Use this context: [insert company profile or key metrics]. Output should be a table of pros/cons and a 3-paragraph summary of risk/reward." },
                    { scenario: "找出會計流程缺口 (Identify accounting process gaps)", chinesePrompt: "檢視現行結帳清單並提出改善建議。文件：［SOP 或任務清單］。輸出需標示瓶頸並建議流程更新。", englishPrompt: "Review our current accounting close checklist and suggest improvements. Use this documentation: [insert SOP or task list]. Output should highlight bottlenecks and recommend process updates." },
                    { scenario: "供應商付款整併檢視 (Review vendor payments for consolidation)", chinesePrompt: "分析這份供應商付款資料（上傳檔案）。找出前 10 大支出供應商、偵測重複（如名稱相似），並建議整併名單。輸出表格與短篇降成本摘要。", englishPrompt: "Analyze vendor payments in this data [upload file]. Identify top 10 vendors by spend, spot any duplication (e.g., similar vendor names), and recommend vendors to consolidate. Output a table and short cost-reduction summary." },
                    { scenario: "採購策略降成本槓桿 (Procurement strategy cost levers)", chinesePrompt: "我正帶領財務計畫以降低採購成本。研究《財星 500》企業的作法，不傷害供應商關係。呈現 3–5 項策略，附成本影響案例與引用來源。", englishPrompt: "I’m leading a finance initiative to cut procurement costs. Research strategies used by Fortune 500 companies to reduce procurement spend without harming supplier relationships. Present 3–5 tactics with cost impact examples and cited sources." }
                ]
            },
            {
                title: "財務儀表板與視覺化敘事 (Financial dashboards & visual storytelling)",
                prompts: [
                    { scenario: "可視化營收成長漏斗 (Visualize revenue growth funnel)", chinesePrompt: "建立一張營收成長漏斗圖片，標註階段：Acquisition → Activation → Revenue → Retention → Expansion。風格需乾淨、現代、適合主管財務簡報，並為各階段加上圖示。", englishPrompt: "Create an image of a revenue growth funnel with labeled stages: Acquisition → Activation → Revenue → Retention → Expansion. Use a clean, modern style suitable for an executive finance presentation. Include icons for each stage." },
                    { scenario: "插畫化預算規劃流程 (Illustrate budget planning workflow)", chinesePrompt: "生成水平流程圖呈現預算規劃週期：Forecasting → Review → Stakeholder Input → Approval → Tracking → Adjustment。使用企業風格、淡色與清楚標籤。", englishPrompt: "Create a horizontal process flow diagram showing a budget planning cycle: Forecasting → Review → Stakeholder Input → Approval → Tracking → Adjustment. Use corporate-style visuals with subtle color and labels." },
                    { scenario: "ESG 對財務影響視覺 (ESG finance impact visual)", chinesePrompt: "生成視覺，展示 ESG 計畫如何影響財務指標，連結永續投資與成本節省、風險降低、與投資人興趣。風格現代、綠色主題、含箭頭。", englishPrompt: "Create a visual showing how ESG initiatives can impact finance metrics. Show links between sustainability investments and cost savings, risk mitigation, and investor interest. Use a modern, green-themed design with arrows." },
                    { scenario: "主管儀表板概念圖 (Executive dashboard concept)", chinesePrompt: "生成財務主管儀表板概念圖，顯示高階 KPI：Revenue、Gross Margin、Burn Rate、Runway、Budget vs. Actual。版面需乾淨、分區面板、含占位數字。", englishPrompt: "Generate a conceptual image of a finance executive dashboard showing high-level KPIs: Revenue, Gross Margin, Burn Rate, Runway, and Budget vs. Actual. Use a clean layout with panels and placeholder numbers." }
                ]
            }
        ]
    },
    {
        title: "行銷人員專用 (For marketing)",
        subCategories: [
            {
                title: "活動規劃與策略 (Campaign planning & strategy)",
                prompts: [
                    { scenario: "可視化活動時程 (Visualize campaign timeline)", chinesePrompt: "為即將到來的多渠道行銷活動建立時程表。關鍵日期與里程碑如下：［插入資訊］。請輸出為水平時間軸，包含階段、負責人、與截止日期。", englishPrompt: "Build a timeline for our upcoming multi-channel campaign. Key dates and milestones are: [insert info]. Output as a horizontal timeline with phases, owners, and deadlines." },
                    { scenario: "腦力激盪活動創意 (Brainstorm campaign ideas)", chinesePrompt: "為即將到來的［活動／上市］提出 5 個創意活動點子。受眾為［插入目標］，我們的目標是［插入目標］。每個點子包含主題、標語、與 1–2 個核心戰術。", englishPrompt: "Brainstorm 5 creative campaign ideas for our upcoming [event/launch]. The audience is [insert target], and our goal is [insert goal]. Include a theme, tagline, and 1-2 core tactics per idea." },
                    { scenario: "撰寫創意簡報 (Draft a creative brief)", chinesePrompt: "為下一檔付費媒體活動撰寫創意簡報。以下是目標、受眾、與 offer：［插入資訊］。請包含：目標、受眾洞察、語調、素材需求、與 KPI。", englishPrompt: "Create a creative brief for our next paid media campaign. Here’s the goal, audience, and offer: [insert info]. Include sections for objective, audience insights, tone, assets needed, and KPIs." },
                    { scenario: "建立訊息架構 (Build a messaging framework)", chinesePrompt: "為新產品建立訊息架構。產品資訊如下：［插入資訊］。輸出為 3 支柱表格：關鍵利益、佐證重點、與情感觸發。", englishPrompt: "Build a messaging framework for a new product. The product details are: [insert info]. Output a table with 3 pillars: key benefits, proof points, and emotional triggers." },
                    { scenario: "建立顧客旅程地圖 (Build a customer journey map)", chinesePrompt: "為我們的［產品／服務］建立顧客旅程地圖。典型客戶為［插入輪廓］。請分階段列出每階段的目標、接觸點、與可能痛點，並以表格輸出。", englishPrompt: "Create a customer journey map for our [product/service]. Our typical customer is [insert profile]. Break it into stages, goals, touchpoints, and potential pain points per stage. Output as a table." }
                ]
            },
            {
                title: "競爭與市場研究 (Competitive and market research)",
                prompts: [
                    { scenario: "競品內容策略分析 (Competitive content analysis)", chinesePrompt: "研究前 5 名競品的部落格內容策略。包含語氣、主題、頻率、SEO 重點、與 CTA。請提供網址、重點結論，並以表格比較共通與突出的做法。", englishPrompt: "Research how top 5 competitors structure their blog content strategy. Include tone, topics, frequency, SEO focus, and CTAs. Provide URLs, takeaways, and a table summarizing common and standout tactics." },
                    { scenario: "研究買方行為新趨勢 (Research emerging trends in buyer behavior)", chinesePrompt: "研究 2024 年［類型］買方在評估［產業］產品時的行為趨勢。包含行為改變、內容偏好、與通路使用。請附來源並以條列主管簡報呈現。", englishPrompt: "Research 2024 trends in how [type] buyers research and evaluate [industry] products. Include behavior shifts, content preferences, and channel usage. Cite sources and format as a short briefing with bullet-point insights." },
                    { scenario: "研究地區活動基準 (Research regional campaign benchmarks)", chinesePrompt: "研究 2024 年針對［地區］的數位活動常見 CTR、CPC、與轉換率。聚焦［廣告通路］。附來源連結並以表格比較各國的指標。", englishPrompt: "Research typical CTRs, CPCs, and conversion rates for digital campaigns targeting [location] in 2024. Focus on [ad channels]. Include source links and a table comparing each metric by country." },
                    { scenario: "研究產業活動競品參與 (Research industry event competitor presence)", chinesePrompt: "彙整我們競品在［即將到來的活動］的參與情況。包含攤位活動、演講場次、贊助、與媒體曝光。輸出為附連結與分析的表格。", englishPrompt: "Compile a summary of how our competitors are participating in [insert upcoming event]. Include booth activations, speaking sessions, sponsorships, and media coverage. Output as a table with links and analysis." },
                    { scenario: "研究行銷 AI 工具 (Research AI tools for marketers)", chinesePrompt: "研究最推薦的［工具類型］，依功能分類（如文案、規劃、分析、設計）。建立表格：功能、價格、優缺點、主要用例。請附來源。", englishPrompt: "Research the most recommended [tools] for marketers by function (e.g. copywriting, planning, analytics, design). Create a table with features, pricing, pros/cons, and primary use case. Include sources." }
                ]
            },
            {
                title: "內容與創意開發 (Content & creative development)",
                prompts: [
                    { scenario: "撰寫產品上市 EDM (Draft a product launch email)", chinesePrompt: "為新產品撰寫上市 EDM。使用以下產品與受眾資訊：［插入細節］。內容需具吸引力與說服力，並以可審稿的行銷郵件格式輸出。", englishPrompt: "Write a launch email for our new product. Use the following info about the product and target audience: [insert details]. Make it engaging and persuasive, formatted as a marketing email ready for review." },
                    { scenario: "產生廣告文案變體 (Generate ad copy variations)", chinesePrompt: "為［通路］活動產生 5 組廣告文案變體。以下是活動主題與受眾資訊：［插入脈絡］。每版測試不同的引子或語氣。", englishPrompt: "Create 5 ad copy variations for a [channel] campaign. Here’s the campaign theme and audience info: [insert context]. Each version should test a different hook or tone." },
                    { scenario: "建立社群貼文系列 (Create a social post series)", chinesePrompt: "為［活動／產品／里程碑］草擬 3 篇社群系列貼文。使用以下背景資訊：［貼上細節］。每則需包含文案與建議視覺描述。", englishPrompt: "Draft a 3-post social media series promoting [event, product, or milestone]. Use this background for context: [paste details]. Each post should include copy and a suggested visual description." },
                    { scenario: "撰寫客戶亮點貼文 (Create a customer spotlight post)", chinesePrompt: "依此成功案例：［貼上重點］撰寫客戶亮點貼文。語氣需口語、真誠，並符合品牌聲音。輸出為 LinkedIn 貼文草稿。", englishPrompt: "Write a customer spotlight post based on this success story: [paste key details]. Make it conversational, authentic, and aligned to our brand voice. Output as a LinkedIn post draft." },
                    { scenario: "撰寫解說影片腳本 (Create an explainer video script)", chinesePrompt: "為［產品／主題］撰寫 60 秒解說影片腳本。需涵蓋：［插入資訊］。語氣精煉有力，並附建議的視覺或動畫。", englishPrompt: "Draft a script for a 60-second explainer video about [product/topic]. Here’s what it should cover: [insert info]. Make it punchy and clear, with suggested visuals or animations." }
                ]
            },
            {
                title: "數據分析與優化 (Data analysis & optimization)",
                prompts: [
                    { scenario: "找出表現最佳通路 (Identify top-performing marketing channels)", chinesePrompt: "分析這份行銷成效試算表，找出 ROI 最高的通路。檔案包含 Q1–Q2 在 email、social、paid search、與 events 的活動數據。請摘要前 3 名通路並建立 ROI 圖表。", englishPrompt: "Analyze this marketing performance spreadsheet and identify which channels had the highest ROI. The file includes data from Q1–Q2 campaigns across email, social, paid search, and events. Summarize top 3 channels and create a chart showing ROI by channel." },
                    { scenario: "找出客戶流失模式 (Uncover customer churn patterns)", chinesePrompt: "檢視這份客戶流失資料集，辨識常見的流失特徵。使用年資、產品使用、客服單等欄位分組洞見。輸出短摘要並附表或圖呈現主要風險因子。", englishPrompt: "Review this customer churn dataset and identify common characteristics of churned customers. Use columns like tenure, product usage, and support tickets to group insights. Output a short summary with a chart or table showing top risk factors." },
                    { scenario: "摘要問卷結果 (Summarize survey results)", chinesePrompt: "摘要這份活動後客戶回饋問卷的洞見。檔案包含滿意度評分與開放式回覆。請提供 3 點主管摘要，並建立驅動滿意度的主要因子圖表。", englishPrompt: "Summarize insights from this post-campaign customer feedback survey. The file includes satisfaction ratings and open-ended responses. Provide a 3-bullet executive summary and a chart of top satisfaction drivers." },
                    { scenario: "預測下季潛在客數 (Forecast next quarter’s lead volume)", chinesePrompt: "使用過去 6 季的歷史潛在客數據，預測下季的預期量。請標示趨勢與季節性並輸出簡易預測圖表。", englishPrompt: "Use this historical lead volume data from the past 6 quarters to project expected lead volume for the next quarter. Highlight any trends, seasonal patterns, and output a simple forecast chart." },
                    { scenario: "優化活動預算配置 (Optimize campaign budget allocation)", chinesePrompt: "依據過往活動的花費與回收試算表，提出下季的預算重配建議。聚焦提升 ROI 並降低在表現不佳通路的支出。請以表格輸出新的百分比分配。", englishPrompt: "Based on this spreadsheet of previous campaign spend and returns, recommend a revised budget allocation for next quarter. Focus on maximizing ROI while reducing spend on underperforming channels. Output as a table with new % allocations." }
                ]
            },
            {
                title: "視覺與品牌溝通 (Visual & brand communication)",
                prompts: [
                    { scenario: "建立品牌風格指南大綱 (Develop a brand style guide outline)", chinesePrompt: "為［公司／產品］建立品牌風格指南大綱。包含字體、色彩、logo 使用、語氣、影像風格、與注意事項。", englishPrompt: "Create an outline for a brand style guide for [company/product]. Include sections for typography, color palette, logo usage, tone of voice, imagery style, and do’s/don’ts." },
                    { scenario: "概念化視覺敘事 (Conceptualize visual storytelling)", chinesePrompt: "針對［主題］的品牌活動，腦力激盪 3 個視覺敘事概念。包含概念名稱、視覺風格、與關鍵敘事元素（故事弧線、氛圍、色彩）。", englishPrompt: "Brainstorm 3 visual storytelling concepts for a brand campaign on [theme]. Include a concept name, visual style, and key narrative elements (e.g., story arc, mood, colors)." },
                    { scenario: "建立視覺情緒版 (Create visual campaign moodboard)", chinesePrompt: "為［活動／品牌更新］建立 4 張視覺情緒版。主題為［描述主題］、語氣為［描述語氣］。可採寫實或插畫風格。", englishPrompt: "Create a moodboard with 4 visuals for our [campaign or brand update]. Theme is [describe theme], and the tone should be [describe tone]. Use photoreal or illustrated style." },
                    { scenario: "評估品牌一致性 (Evaluate brand consistency)", chinesePrompt: "檢視以下行銷素材：［插入連結／檔案］，並評估在語氣、視覺、訊息上的一致性。請提供 3 項優勢與 3 個缺口，並提出建議。", englishPrompt: "Review the following marketing assets [insert links/files] and evaluate brand consistency in terms of tone, visuals, and messaging. Provide 3 strengths and 3 gaps with recommendations." },
                    { scenario: "更新品牌識別方向 (Refresh brand identity concepts)", chinesePrompt: "提出 3 種品牌識別更新的創意方向。包含可能的色彩盤、字體風格、視覺母題、與語氣更新，需與［受眾／市場變化］對齊。", englishPrompt: "Suggest 3 creative directions to refresh our brand identity. Include possible color palettes, typography styles, visual motifs, and tone updates that align with [audience/market shift]." }
                ]
            }
        ]
    }
];