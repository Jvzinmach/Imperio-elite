// GSAP Timeline for the Creative
const tl = gsap.timeline();

// Caption Helper
function setCaption(text) {
    const el = document.getElementById("caption-text");
    if (!text) {
        gsap.to(el, { opacity: 0, duration: 0.3 });
    } else {
        el.innerText = text;
        gsap.to(el, { opacity: 1, duration: 0.3 });
    }
}

// INITIAL STATE: Hide all, show scene 1
gsap.set(".scene", { autoAlpha: 0, display: "none" });
gsap.set("#scene-1", { autoAlpha: 1, display: "flex" });

console.log("Animation Sequence Started");

// --- SCENE 1: SADNESS (0s - 2.5s) ---
// "Tem diabetes e cansou de comer 'isopor'?"
tl.call(setCaption, ["Tem diabetes e cansou de comer 'isopor'? 🤢"], 0.2)
    .from("#scene-1 .emoji-container", { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, 0.2)
    .from(".text-hook", { y: 30, opacity: 0, duration: 0.5 }, 0.5)

    // EXIT SCENE 1
    .to("#scene-1", { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => gsap.set("#scene-1", { display: "none" }) }, 2.5)

    // --- SCENE 2: REVOLT (2.5s - 4.5s) ---
    // "CHEGA! A vida é curta demais!"
    .call(() => gsap.set("#scene-2", { display: "flex" }), null, 2.5)
    .fromTo("#scene-2", { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power4.out" }, 2.5)
    .call(setCaption, ["CHEGA! A vida é curta demais! 🚫"], 2.8)
    .from(".text-revolt", { scale: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" }, 2.8)

    // EXIT SCENE 2
    .to("#scene-2", { opacity: 0, duration: 0.2, onComplete: () => gsap.set("#scene-2", { display: "none" }) }, 4.5)

    // --- SCENE 3: JOY/SOLUTION (4.5s - 8s) ---
    // "100 Receitas Zero Açúcar e deliciosas"
    .call(() => gsap.set("#scene-3", { display: "flex" }), null, 4.5)
    .to("#scene-3", { opacity: 1, duration: 0.5 }, 4.5)
    .call(setCaption, ["100 Receitas Zero Açúcar pra você! 🍰"], 4.8)

    .from(".principal-cake", { y: 200, opacity: 0, duration: 0.8, ease: "power2.out" }, 4.8)
    .from(".text-solution", { scale: 0.5, opacity: 0, duration: 0.5 }, 5.2)
    .from(".tags .tag", { scale: 0, stagger: 0.2, ease: "back.out" }, 5.5)

    // EXIT SCENE 3
    .to("#scene-3", { opacity: 0, duration: 0.5, onComplete: () => gsap.set("#scene-3", { display: "none" }) }, 8.0)

    // --- SCENE 4: OFFER (8s+) ---
    // "Clica e volta a comer com prazer!"
    .call(() => gsap.set("#scene-4", { display: "flex" }), null, 8.0)
    .to("#scene-4", { opacity: 1, duration: 0.5 }, 8.0)

    .from(".text-offer", { y: -50, opacity: 0, duration: 0.5 }, 8.3)
    .from(".book-cover-3d", { scale: 0, duration: 0.7, ease: "elastic.out(1, 0.6)" }, 8.5)
    .call(setCaption, ["Clica no botão para baixar agora! 👇"], 8.5)
    .from(".sub-offer", { opacity: 0, y: 20 }, 9.0)
    .from(".cta-btn", { scale: 1.1, repeat: -1, yoyo: true, duration: 0.8 }, 9.2);
