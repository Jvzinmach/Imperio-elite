const recipesDB = [
    // 11-20: Frutas e Citricos
    { title: "Bolo de Laranja com Casca", base: "Amêndoas", flavor: "Laranja", extra: "Calda de Eritritol" },
    { title: "Bolo de Maçã com Canela", base: "Aveia", flavor: "Maçã em cubos", extra: "Nozes picadas" },
    { title: "Bolo de Abacaxi Invertido", base: "Coco", flavor: "Rodelas de Abacaxi", extra: "Caramelo de Xilitol" },
    { title: "Bolo de Maracujá Fofinho", base: "Arroz", flavor: "Suco de Maracujá", extra: "Sementes para decorar" },
    { title: "Bolo de Limão Siciliano", base: "Amêndoas", flavor: "Suco de Limão Siciliano", extra: "Raspas finas" },
    { title: "Bolo de Tangerina", base: "Aveia", flavor: "Suco de Tangerina", extra: "Gomos para decorar" },
    { title: "Bolo de Pera com Cardamomo", base: "Castanha de Caju", flavor: "Pera", extra: "Cardamomo em pó" },
    { title: "Bolo de Coco Gelado", base: "Coco", flavor: "Leite de Coco", extra: "Coco ralado úmido" },
    { title: "Bolo de Banana com Passas", base: "Aveia", flavor: "Banana Nanica", extra: "uvas passas pretas" },
    { title: "Bolo de Ameixa Seca", base: "Nozes", flavor: "Ameixas picadas", extra: "Doce de Leite Fit (opcional)" },

    // 21-30: Chocolates
    { title: "Brownie Fit de Batata Doce", base: "Batata Doce", flavor: "Cacau 100%", extra: "Nozes" },
    { title: "Bolo de Chocolate com Pimenta", base: "Amêndoas", flavor: "Chocolate 70%", extra: "Pimenta Caiena" },
    { title: "Bolo Mousse de Cacau", base: "Ovos (sem farinha)", flavor: "Cacau Black", extra: "Morangos" },
    { title: "Bolo de Chocolate com Menta", base: "Aveia", flavor: "Essência de Menta", extra: "Gotas de Chocolate" },
    { title: "Bolo Floresta Negra Fit", base: "Amêndoas", flavor: "Cacau", extra: "Cerejas frescas" },
    { title: "Bolo de Nutella Fit (Avelã)", base: "Avelã", flavor: "Cacau", extra: "Avelãs tostadas" },
    { title: "Bolo Chokito Saudável", base: "Aveia", flavor: "Cacau", extra: "Flocos de Arroz" },
    { title: "Bolo de Café com Chocolate", base: "Amêndoas", flavor: "Café Expresso", extra: "Nibs de Cacau" },
    { title: "Petit Gateau Low Carb", base: "Manteiga Ghee", flavor: "Chocolate 85%", extra: "Servir quente" },
    { title: "Bolo de Alfarroba", base: "Arroz", flavor: "Alfarroba em pó", extra: "Coco" },

    // 31-40: Legumes e Diferentes
    { title: "Bolo de Abobrinha com Cacau", base: "Abobrinha ralada", flavor: "Cacau", extra: "Canela" },
    { title: "Bolo de Abóbora com Coco", base: "Abóbora Cabotiá", flavor: "Coco", extra: "Cravo" },
    { title: "Bolo de Beterraba (Red Velvet)", base: "Beterraba", flavor: "Baunilha", extra: "Limão (para cor)" },
    { title: "Bolo de Batata Doce Roxo", base: "Batata Doce Roxa", flavor: "Neutro", extra: "Coco" },
    { title: "Bolo de Inhame Funcional", base: "Inhame cozido", flavor: "Baunilha", extra: "Chia" },
    { title: "Bolo de Grão de Bico (Proteico)", base: "Grão de Bico", flavor: "Cacau", extra: "Melado" },
    { title: "Bolo de Feijão Branco (Blondie)", base: "Feijão Branco", flavor: "Baunilha", extra: "Gotas de Chocolate Branco zero" },
    { title: "Bolo de Mandioca (Aipim)", base: "Mandioca crua", flavor: "Coco", extra: "Queijo ralado (opcional)" },
    { title: "Bolo de Milho Verde (Espiga)", base: "Milho fresco", flavor: "Natural", extra: "Palha para decorar" },
    { title: "Bolo Salgado de Legumes", base: "Grão de Bico", flavor: "Cenoura e Ervilha", extra: "Orégano" },

    // 41-50: Castanhas e Sementes
    { title: "Bolo de Nozes", base: "Farinha de Nozes", flavor: "Mel", extra: "Nozes inteiras" },
    { title: "Bolo de Amendoim (Paçoca)", base: "Amendoim", flavor: "Pasta de Amendoim", extra: "Xilitol" },
    { title: "Bolo de Castanha do Pará", base: "Castanha do Pará", flavor: "Neutro", extra: "Castanhas picadas" },
    { title: "Bolo de Gergelim", base: "Gergelim", flavor: "Tahine", extra: "Mel" },
    { title: "Bolo de Chia com Limão", base: "Aveia", flavor: "Limão", extra: "Sementes de Chia" },
    { title: "Bolo de Linhaça", base: "Linhaça Dourada", flavor: "Maçã", extra: "Canela" },
    { title: "Bolo de Sementes de Girassol", base: "Girassol", flavor: "Baunilha", extra: "Mix de sementes" },
    { title: "Bolo de Macadâmia", base: "Macadâmia", flavor: "Chocolate Branco zero", extra: "Macadâmias tostadas" },
    { title: "Bolo de Pistache com Cranberry", base: "Pistache", flavor: "Baunilha", extra: "Cranberries secos" },
    { title: "Bolo de Amêndoas Laminadas", base: "Amêndoas", flavor: "Essência de Amêndoas", extra: "Lâminas de Amêndoa" },

    // 51-60: Funcionais e Fit
    { title: "Bolo Whey Protein Baunilha", base: "Aveia", flavor: "Whey Baunilha", extra: "Morango" },
    { title: "Bolo Whey Protein Chocolate", base: "Aveia", flavor: "Whey Chocolate", extra: "Pasta de Amendoim" },
    { title: "Bolo Energético de Açaí", base: "Aveia", flavor: "Polpa de Açaí", extra: "Granola sem açúcar" },
    { title: "Bolo Pré-treino de Batata Doce", base: "Batata Doce", flavor: "Canela", extra: "Café" },
    { title: "Bolo Pós-treino Clara de Ovo", base: "Claras", flavor: "Limão", extra: "Proteico" },
    { title: "Bolo Rico em Fibras (Psyllium)", base: "Farelo de Aveia", flavor: "Banana", extra: "Psyllium" },
    { title: "Bolo Detox (Couve e Limão)", base: "Arroz", flavor: "Suco Verde", extra: "Hortelã" },
    { title: "Bolo Anti-inflamatório (Cúrcuma)", base: "Amêndoas", flavor: "Gengibre", extra: "Cúrcuma (Açafrão)" },
    { title: "Bolo Low Fodmap", base: "Farinha de Arroz", flavor: "Mirtilo", extra: "Sem lactose" },
    { title: "Bolo Keto (Gordura Boa)", base: "Farinha de Coco", flavor: "Manteiga de Cacau", extra: "MCT Oil" },

    // 61-80: Variações Criativas
    { title: "Bolo de Iogurte com Frutas", base: "Iogurte Natural", flavor: "Frutas Vermelhas", extra: "Calda de Iogurte" },
    { title: "Bolo de Ricota Fit", base: "Ricota", flavor: "Limão", extra: "Uvas passas" },
    { title: "Bolo de Queijadinha", base: "Queijo Ralado", flavor: "Coco", extra: "Leite de coco" },
    { title: "Bolo de Churros Fit", base: "Amêndoas", flavor: "Canela", extra: "Doce de Leite sem açúcar" },
    { title: "Bolo de Pão de Mel Fit", base: "Amêndoas", flavor: "Mel e Especiarias", extra: "Chocolate derretido" },
    { title: "Bolo de Tapioca (Cuscuz)", base: "Tapioca Granulada", flavor: "Coco", extra: "Leite condensado fit" },
    { title: "Bolo de Arroz Cru", base: "Arroz cru demolhado", flavor: "Iogurte", extra: "Coco" },
    { title: "Bolo de Fubá com Goiabada Fit", base: "Fubá", flavor: "Erva doce", extra: "Goiabada sem açúcar" },
    { title: "Bolo de Leite Ninho Fit", base: "Leite em pó desnatado", flavor: "Baunilha", extra: "Polvilhado com leite em pó" },
    { title: "Bolo Gelado de Abacaxi", base: "Coco", flavor: "Abacaxi", extra: "Embrulhado no papel alumínio" },
    { title: "Bolo Toalha Felpuda Fit", base: "Coco", flavor: "Leite de Coco", extra: "Muito coco ralado" },
    { title: "Bolo de Cenoura Americana (Carrot Cake)", base: "Cenoura ralada", flavor: "Nozes e Especiarias", extra: "Frosting de Cream Cheese" },
    { title: "Bolo de Banana Caramelada", base: "Aveia", flavor: "Caramelo fit", extra: "Bananas no fundo" },
    { title: "Bolo Mármore (Baunilha e Cacau)", base: "Arroz", flavor: "Misto", extra: "Mesclado" },
    { title: "Bolo Napolitano", base: "Arroz", flavor: "Baunilha, Morango, Chocolate", extra: "Três camadas" },
    { title: "Bolo de Cereja Fresca", base: "Amêndoas", flavor: "Cereja", extra: "Amêndoas em lascas" },
    { title: "Bolo de Pêssego em Calda Fit", base: "Aveia", flavor: "Pêssego", extra: "Calda de pêssego diet" },
    { title: "Bolo de Figo com Mel", base: "Nozes", flavor: "Figo fresco", extra: "Mel" },
    { title: "Bolo de Tâmara (Sticky Toffee)", base: "Tâmaras", flavor: "Caramelo", extra: "Molho toffee fit" },
    { title: "Bolo de Damasco", base: "Amêndoas", flavor: "Damasco seco", extra: "Coco" },

    // 81-100: Mug Cakes (Microondas) e Rápidos
    { title: "Mug Cake de Chocolate", base: "Microondas", flavor: "Cacau", extra: "Pronto em 2 min" },
    { title: "Mug Cake de Banana", base: "Microondas", flavor: "Canela", extra: "Pronto em 2 min" },
    { title: "Mug Cake de Coco", base: "Microondas", flavor: "Coco", extra: "Pronto em 2 min" },
    { title: "Mug Cake de Cenoura", base: "Microondas", flavor: "Cenoura ralada", extra: "Calda rápida" },
    { title: "Mug Cake Proteico", base: "Microondas", flavor: "Whey", extra: "Pós treino rápido" },
    { title: "Mug Cake de Maçã", base: "Microondas", flavor: "Cubos de maçã", extra: "Cheirinho de canela" },
    { title: "Mug Cake de Fubá", base: "Microondas", flavor: "Fubá", extra: "Café da tarde express" },
    { title: "Mug Cake de Amendoim", base: "Microondas", flavor: "Pasta de amendoim", extra: "Energia" },
    { title: "Mug Cake Red Velvet", base: "Microondas", flavor: "Corante natural", extra: "Cream cheese" },
    { title: "Mug Cake de Limão", base: "Microondas", flavor: "Limão", extra: "Azedinho" },
    { title: "Bolo de Caneca de Nutella Fit", base: "Microondas", flavor: "Avelã e Cacau", extra: "Cremoso" },
    { title: "Bolo de Caneca de Churros", base: "Microondas", flavor: "Doce de leite", extra: "Canela" },
    { title: "Bolo de Caneca de Café", base: "Microondas", flavor: "Café solúvel", extra: "Acorda menina" },
    { title: "Bolo de Caneca de Abóbora", base: "Microondas", flavor: "Abóbora e Coco", extra: "Low carb total" },
    { title: "Bolo de Caneca Sensação", base: "Microondas", flavor: "Morango e Chocolate", extra: "Delícia" },
    { title: "Bolo de Frigideira de Maçã", base: "Frigideira", flavor: "Rodelas de maçã", extra: "Caramelo" },
    { title: "Bolo de Frigideira de Cacau", base: "Frigideira", flavor: "Cacau", extra: "Calda por cima" },
    { title: "Bolo de Frigideira Salgado", base: "Frigideira", flavor: "Frango e Ricota", extra: "Lanche" },
    { title: "Bolo de Frigideira de Coco", base: "Frigideira", flavor: "Coco", extra: "Tostadinho" },
    { title: "Bolo de Aniversário Fit (O Grand Finale)", base: "Amêndoas e Nozes", flavor: "Baunilha e Frutas", extra: "Recheado e Decorado" }
];

// Estrutura de capítulos
const chapters = [
    { id: 1, title: "Frutas & Citrinos", subtitle: "Frescor Natural", icon: "🍋", range: [0, 9] },
    { id: 2, title: "Chocolates", subtitle: "Pura Tentação", icon: "🍫", range: [10, 19] },
    { id: 3, title: "Legumes Especiais", subtitle: "Funcional e Nutrição", icon: "🥕", range: [20, 29] },
    { id: 4, title: "Castanhas & Sementes", subtitle: "Crocância Saudável", icon: "🌰", range: [30, 39] },
    { id: 5, title: "Fitness & Proteicos", subtitle: "Pré e Pós Treino", icon: "💪", range: [40, 49] },
    { id: 6, title: "Clássicos Reinventados", subtitle: "Tradição com Saúde", icon: "🎂", range: [50, 69] },
    { id: 7, title: "Express (Caneca & Frigideira)", subtitle: "Prontos em Minutos", icon: "⚡", range: [70, 89] }
];

// Variações de instruções para tornar menos robótico
const instructionVariations = {
    ovenPreheat: [
        "Pré-aqueça o forno a 180°C e unte uma forma.",
        "Comece pré-aquecendo o forno a 180°C. Unte bem uma forma.",
        "Prepare o forno a 180°C e não esqueça de untar a forma com óleo de coco.",
        "Aqueça o forno até 180°C enquanto prepara os ingredientes. Unte a forma."
    ],
    mixing: [
        "No liquidificador ou batedeira, bata os ovos, os líquidos e o adoçante.",
        "Bata bem os ovos com os ingredientes líquidos e o adoçante até ficar cremoso.",
        "Use o liquidificador para misturar os ovos, líquidos e adoçante até obter uma mistura homogênea.",
        "Comece batendo os ovos junto com os líquidos e o adoçante."
    ],
    dryIngredients: [
        "Em uma tigela, misture os ingredientes secos (farinha de {base}).",
        "Numa tigela à parte, combine todos os secos: farinha de {base} e fermento.",
        "Separe os secos (farinha de {base}) numa tigela grande.",
        "Reserve uma tigela para misturar a farinha de {base} com os demais secos."
    ],
    combine: [
        "Junte o creme líquido aos secos e misture bem. Adicione o sabor ({flavor}).",
        "Una os líquidos aos ingredientes secos, mexendo delicadamente. Incorpore {flavor}.",
        "Adicione a mistura líquida aos secos e mexa até ficar homogêneo. Coloque {flavor}.",
        "Combine as duas misturas e adicione {flavor} para dar o toque especial."
    ],
    baking: [
        "Asse por cerca de 25-35 minutos. Faça o teste do palito.",
        "Leve ao forno por aproximadamente 30 minutos ou até dourar. Teste com o palito.",
        "Asse de 25 a 35 minutos. O palito deve sair limpo quando estiver pronto.",
        "Deixe assar por 30-35 minutos. Sempre teste com um palito antes de tirar do forno."
    ],
    finish: [
        "Finalize com {extra}.",
        "Decore ou sirva com {extra}.",
        "Para um toque especial, adicione {extra}.",
        "O segredo final é {extra}."
    ]
};

function getRandomVariation(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateIngredientList(recipe) {
    const bases = {
        "Amêndoas": ["2 xícaras de farinha de amêndoas", "3 ovos", "1/2 xícara de óleo de coco", "1/2 xícara de adoçante"],
        "Aveia": ["2 xícaras de farinha de aveia", "3 ovos", "1/2 xícara de azeite", "1 xícara de leite vegetal"],
        "Coco": ["1 xícara de farinha de coco", "4 ovos (ela absorve mais)", "1 xícara de leite de coco", "1/2 xícara de adoçante"],
        "Arroz": ["2 xícaras de farinha de arroz", "3 ovos", "1/2 xícara de óleo", "1 xícara de água ou suco"],
        "Microondas": ["1 ovo", "2 colheres de farinha de aveia/amêndoas", "1 colher de óleo", "1 colher de adoçante"],
        "Frigideira": ["1 ovo", "2 colheres de farinha", "1 colher de água", "Adoçante a gosto"]
    };

    let baseIngredients = bases[recipe.base] || bases["Amêndoas"];
    let ingredients = [...baseIngredients];

    if (recipe.flavor && !ingredients.some(i => i.includes(recipe.flavor))) {
        ingredients.push(`Ingrediente principal: ${recipe.flavor} (a gosto ou 1 xícara)`);
    }

    if (recipe.extra && !ingredients.some(i => i.includes(recipe.extra))) {
        ingredients.push(`Para finalizar: ${recipe.extra}`);
    }

    ingredients.push("1 colher (sopa) de fermento em pó");

    return ingredients.map(i => `<li>${i}</li>`).join("");
}

function generateInstructions(recipe) {
    if (recipe.base === "Microondas") {
        return `
            <li>Misture todos os ingredientes em uma caneca grande (300ml).</li>
            <li>Mexa bem com um garfo até ficar homegêneo.</li>
            <li>Leve ao microondas por 1 minuto e 30 segundos a 2 minutos (depende da potência).</li>
            <li>Decore com ${recipe.extra} e sirva quentinho!</li>
        `;
    } else if (recipe.base === "Frigideira") {
        return `
            <li>Misture o ovo, a farinha e os demais ingredientes em uma tigelinha.</li>
            <li>Unte uma frigideira pequena com óleo de coco ou manteiga.</li>
            <li>Despeje a massa e tampe. Deixe em fogo baixo por 3 a 5 minutos.</li>
            <li>Vire e deixe dourar do outro lado.</li>
            <li>Sirva com ${recipe.extra}.</li>
        `;
    }

    // Instruções variadas para receitas normais
    return `
        <li>${getRandomVariation(instructionVariations.ovenPreheat)}</li>
        <li>${getRandomVariation(instructionVariations.mixing)}</li>
        <li>${getRandomVariation(instructionVariations.dryIngredients).replace('{base}', recipe.base)}</li>
        <li>${getRandomVariation(instructionVariations.combine).replace('{flavor}', recipe.flavor)}</li>
        <li>Por último, misture o fermento delicadamente.</li>
        <li>${getRandomVariation(instructionVariations.baking)}</li>
        <li>${getRandomVariation(instructionVariations.finish).replace('{extra}', recipe.extra)}</li>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('generated-recipes-container');
    const tocContainer = document.getElementById('generated-toc');

    if (!listContainer) return;

    // Gerar capítulos e receitas
    chapters.forEach(chapter => {
        // Criar página de capítulo
        const chapterHTML = `
            <div class="page page-break chapter-page">
                <div class="chapter-number">Capítulo ${chapter.id}</div>
                <div class="chapter-icon">${chapter.icon}</div>
                <h1 class="chapter-title">${chapter.title}</h1>
                <div class="chapter-subtitle">${chapter.subtitle}</div>
            </div>
        `;
        listContainer.innerHTML += chapterHTML;

        // Gerar receitas do capítulo
        const [start, end] = chapter.range;
        for (let i = start; i <= end; i++) {
            const recipe = recipesDB[i];
            const recipeNum = i + 11;
            const recipeID = `rec${recipeNum}`;

            const recipeHTML = `
                <div class="page page-break" id="${recipeID}">
                    <a href="#toc" class="back-to-index"><i class="fa-solid fa-arrow-left"></i> Índice</a>
                    <div class="interior-page recipe-page">
                        <div class="recipe-header">
                            <h2 class="recipe-title">${recipeNum}. ${recipe.title}</h2>
                            <div class="recipe-meta">
                                <span><i class="fa-regular fa-clock"></i> 30 min</span>
                                <span><i class="fa-solid fa-leaf"></i> Sem Glúten</span>
                                <span><i class="fa-solid fa-fire"></i> Baixas Cal</span>
                            </div>
                        </div>
                        
                        <div class="recipe-body">
                            <div class="recipe-details">
                                <div class="section-card ingredients">
                                    <h3 class="section-title">Ingredientes</h3>
                                    <ul class="ingredients-list">
                                        ${generateIngredientList(recipe)}
                                    </ul>
                                </div>
                                <div class="section-card instructions">
                                    <h3 class="section-title">Modo de Preparo</h3>
                                    <ol class="instructions-list">
                                        ${generateInstructions(recipe)}
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="page-number">Página ${recipeNum + 10}</div>
                    </div>
                </div>
            `;
            listContainer.innerHTML += recipeHTML;

            // Adicionar ao TOC
            if (tocContainer) {
                tocContainer.innerHTML += `<li class="toc-item"><a href="#${recipeID}">${recipeNum}. ${recipe.title}</a> <span>${recipeNum + 10}</span></li>`;
            }
        }
    });
});
