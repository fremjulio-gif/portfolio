# SYSTEM RULES & SKILLS SYSTEM — GEMINI.md

Ce document contient les règles d'architecture logicielle, de design, et de résolution de bugs pour notre portfolio interactif DAW/OS. En tant qu'agent de codage, tu dois appliquer ces principes de manière absolue sur chaque modification de code.

## 🎨 1. SKILL: frontend-design
- **Esthétique Studio Premium :** Applique un design ultra-minimaliste "Glassmorphism" pur (`backdrop-blur-md bg-white/[0.01] border border-white/5`).
- **Typographie & Hiérarchie :** Ratios de contrastes élevés (texte principal en blanc à 90% d'opacité, textes d'accompagnement en blanc à 40-50% d'opacité). Les chiffres clés doivent être imposants et techniques (`font-mono text-4xl md:text-5xl tracking-tight`).
- **Curseur de visée :** Le curseur global du bureau doit simuler un réticule de précision chirurgicale (`cursor-crosshair`).
- **Responsive adaptatif :** Toutes les grilles (comme les specs et statistiques) doivent être aérées pour respirer. Interdiction d'empiler 6 éléments de front sur ordinateur si cela compresse le texte. Privilégie une grille balancée de 3 colonnes sur 2 lignes (`grid grid-cols-2 lg:grid-cols-3 gap-6`).

## 🛑 2. SKILL: anti-ui-slop
- **Pas de transitions concurrentes :** Supprime systématiquement les classes de transition natives de Tailwind CSS (`transition-all`, `duration-`, `ease-`) sur n'importe quel élément HTML cible d'animations contrôlées en JavaScript via Anime.js V4. Sinon, les deux moteurs luttent à 60 FPS, créant un gel visuel ou des saccades.
- **Sécurisation des Pointer-Events :** Tout élément visuel décoratif (faisceaux de lumière, calques de pluie cinématiques, visualiseur d'arrière-plan) doit obligatoirement porter la classe CSS `pointer-events-none` pour ne jamais intercepter accidentellement les clics ou le défilement destinés aux boutons, potentiomètres et fenêtres d'applications.
- **Shadow DOM Isolation :** Ne tente jamais d'altérer directement via JS les nœuds internes de composants complexes encapsulés dans un Shadow DOM (comme `<spline-viewer>`). Gère le masquage des éléments publicitaires exclusivement en exploitant les Shadow Parts CSS (`spline-viewer::part(logo) { display: none !important; }`).

## ⚡ 3. SKILL: full-output-enforcement
- **Zéro omission :** Lorsque tu modifies ou crées un composant ou le fichier principal, tu as l'interdiction d'écrire des commentaires d'élision comme `// ... le reste du code reste le même` ou `/* Code d'origine inchangé */`.
- **Intégrité de livraison :** Tu dois réécrire l'intégralité du bloc, de la fonction, ou du fichier de la première à la dernière ligne pour éviter toute régression ou perte accidentelle de logique lors de la fusion du code.

## 🔍 4. SKILL: diagnosing-bugs
- **Cycle de vie de la Web Audio API :** Les navigateurs bloquent l'audio non sollicité. Initialise systématiquement l'AudioContext dans un état suspendu (`suspended`) et ne le réveille (`audioCtx.resume()`) qu'au premier clic d'interaction utilisateur (bouton "Entrer" de l'écran d'accueil).
- **Gestion des voix (Voice Stealing) :** Pour chaque synthétiseur ou oscillateur généré dynamiquement dans le séquenceur, appelle explicitement `source.stop()` sur l'instance précédente avant de lancer un nouveau son pour éliminer toute fuite de mémoire ou saturation audio.
- **Routage de secours pour les Images :** Pour les miniatures externes de projets (comme les images YouTube), ajoute toujours un gestionnaire d'erreur `onerror` en JS pour appliquer une image de secours locale ou un style de repli en cas de blocage d'accès ou d'absence de version HD.
