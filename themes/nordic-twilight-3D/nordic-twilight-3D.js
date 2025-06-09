(()=>{console.log("\u{1F3A8} Loading Nordic Twilight 3D theme...");var t=()=>({isActive:!1,init(){console.log("\u{1F30C} Initializing Nordic Twilight 3D indicator"),this.isActive=!0,this.addVisualIndicator(),this.setupThemeListener()},addVisualIndicator(){let e=document.createElement("div");if(e.id="nordic-3d-indicator",e.style.cssText=`
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #6366f1, #8b5cf6);
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 12px;
                font-weight: bold;
                z-index: 10000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                animation: pulse 2s infinite;
            `,e.textContent="\u{1F30C} 3D Theme Active",!document.getElementById("nordic-3d-styles")){let i=document.createElement("style");i.id="nordic-3d-styles",i.textContent=`
                    @keyframes pulse {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        50% { opacity: 0.8; transform: scale(1.05); }
                    }
                `,document.head.appendChild(i)}document.body.appendChild(e),console.log("\u2705 Visual indicator added")},removeVisualIndicator(){let e=document.getElementById("nordic-3d-indicator"),i=document.getElementById("nordic-3d-styles");e&&e.remove(),i&&i.remove(),console.log("\u{1F9F9} Visual indicator removed")},setupThemeListener(){document.addEventListener("themeChanged",e=>{e.detail.newTheme==="nordic-twilight-3d"?(console.log("\u{1F30C} Nordic Twilight 3D is now active"),document.getElementById("nordic-3d-indicator")||this.addVisualIndicator()):(console.log("\u{1F9F9} Nordic Twilight 3D is no longer active"),this.removeVisualIndicator())})},destroy(){this.removeVisualIndicator(),this.isActive=!1}});function o(){if(typeof window.Alpine<"u"){console.log("\u{1F527} Registering Nordic Twilight 3D theme components..."),window.Alpine.data("nordicTwilight3DIndicator",t),console.log("\u2705 Nordic Twilight 3D theme components registered");let i="nordic-twilight-3DThemeComponentsReady";console.log(`\u{1F50D} Setting signal: ${i}`),window[i]=!0}else console.warn("\u26A0\uFE0F Alpine.js not available, retrying..."),setTimeout(o,50)}o();setTimeout(()=>{t().init()},100);console.log("\u{1F3A8} Nordic Twilight 3D debug theme loaded");})();
