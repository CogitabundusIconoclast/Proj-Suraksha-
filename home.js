// Suraksha Home/Intro Page JS
// Handles feature navigation, background switching, smooth transitions, scroll animations, and info icons

const features = {
    intro: {
        bg: 'Assets/home page.jpeg', // Updated to new home page image
        content: `
        <section class="intro-section scroll-animate">
            <div class="intro-icon"><i class='bx bxs-bulb'></i></div>
            <div class="intro-title">Welcome to Suraksha</div>
            <div class="intro-desc">India's most advanced legal and safety platform. <br>We combine 24x7 SOS, AI-powered legal help, real-time complaint tracking, and more.<br><br><b>How we're different:</b><br>• All-in-one legal & safety app<br>• AI legal assistant (Eurus)<br>• Anonymous complaint filing<br>• Real-time case tracking<br>• Direct access to legal experts<br>• Verified local authority contacts<br>• Awareness & safety resources<br><br>Scroll down to explore our features!</div>
        </section>
        <section class="intro-section scroll-animate">
            <div class="intro-icon"><i class='bx bx-shield-quarter'></i></div>
            <div class="intro-title">Why Suraksha?</div>
            <div class="intro-desc">We go beyond the market by offering a seamless, secure, and user-friendly experience. Our platform is designed for everyone—individuals, legal professionals, and organizations.<br><br>• Transparent, privacy-first design<br>• Fast, responsive support<br>• Built for Indian legal needs</div>
        </section>
        <section class="intro-section scroll-animate">
            <div class="intro-icon"><i class='bx bxs-rocket'></i></div>
            <div class="intro-title">Get Started</div>
            <div class="intro-desc">Click any feature on the left to learn more and see how Suraksha can help you.</div>
        </section>
        `
    },
    sos: {
        bg: 'Assets/SOS_BG.jpg',
        content: `
        <div class="feature-content">
            <h2><i class='bx bxs-alarm-exclamation'></i> 24x7 SOS Emergency Button</h2>
            <p>A prominently displayed, 5-tap activated emergency alert button. Instantly sends a distress signal to predefined contacts or a central monitoring system, automatically sharing the user's current location for immediate assistance + opening the emergency Camera...</p>
            <button class="btn animated-btn" onclick="alert('Coming soon!')">Activate SOS</button>
            <div style="margin-top:18px;color:#bfa100;font-weight:600;">Coming soon</div>
        </div>
        `
    },
    eurus: {
        bg: 'Assets/AI_BABU.png',
        content: `
        <div class="feature-content">
            <h2><i class='bx bx-bot'></i> Eurus (AI Legal Assistant)</h2>
            <p>An AI, specifically trained to be equal to or better than human lawyers. Eurus helps you with paperwork, preparing for court, fighting your own case, and more. Stuck with no legal help? Ask Eurus.<br><br><b>Coming soon!</b></p>
        </div>
        `
    },
    complaint: {
        bg: 'Assets/complaint_bg.jpg',
        content: `
        <div class="feature-content">
            <h2><i class='bx bxs-file'></i> Complaint Filing System</h2>
            <label>Describe your complaint <span class='info-icon' tabindex='0' onclick='toggleTooltip(this)' onblur='hideTooltip(this)' aria-label='Info'>i</span><span class='info-tooltip'>Describe your issue in detail. Attach supporting documents if available.</span></label>
            <textarea style="width:100%;min-height:80px;margin-bottom:18px;"></textarea>
            <div class="file-upload-box">
                <button type="button" class="plusButton
