
function setFlagCookie() {
    const flag = 'FLAG{l0v3_1s_1n_th3_c00k13s}';
    // Set cookie with flag
    document.cookie = `ctf_flag=${flag}; path=/; max-age=86400`;
    // Also set a decoy cookie
    document.cookie = `session_id=a7f3d9e2b5c8f1a4; path=/; max-age=86400`;
    document.cookie = `user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9; path=/; max-age=86400`;
}

// Initialize on page load
window.addEventListener('load', function() {
    setFlagCookie();
    console.log('%c🚨 SYSTEM ALERT 🚨', 'color: #ff1493; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to HackFax 2026 - Valentine\'s Day Edition', 'color: #ff69b4; font-size: 16px;');
    console.log('%cHint: Real hackers know to check everywhere... even cookies 🍪', 'color: #ffaa00; font-size: 14px;');
});