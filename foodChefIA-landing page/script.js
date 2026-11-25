// ==========================================
// 1. BASE DE DATOS LOCAL (RESPALDO SI NO HAY INTERNET)
// ==========================================
const RECIPES_INTERNET_DATABASE = {
    pizza: {
        es: "<b>Receta de Pizza Casera:</b>\n1. Mezclar 500g de harina con 10g de levadura, sal y agua tibia.\n2. Amasar por 10 minutos y dejar leudar.\n3. Estirar la masa en una asadera, agregar salsa de tomate y queso muzzarella.\n4. Hornear a fuego máximo por 15 minutos.",
        en: "<b>Homemade Pizza Recipe:</b>\n1. Mix 500g of flour with 10g of yeast, salt, and warm water.\n2. Knead for 10 minutes and let it rise.\n3. Stretch the dough, add tomato sauce and mozzarella cheese.\n4. Bake at maximum temperature for 15 minutes."
    },
    milanesas: {
        es: "<b>Receta de Milanesas Tradicionales:</b>\n1. Pasar la carne (nalga o pollo) por huevo batido con ajo y perejil.\n2. Rebozar con pan rallado presionando bien.\n3. Cocinar al horno con un hilo de aceite o freír en aceite caliente hasta que estén doradas.",
        en: "<b>Traditional Milanesas Recipe:</b>\n1. Dip the meat (beef or chicken) in beaten eggs with garlic and parsley.\n2. Coat with breadcrumbs, pressing firmly.\n3. Bake with a drizzle of oil or fry in hot oil until golden brown."
    },
    arroz: {
        es: "<b>Receta de Arroz con Huevo Frito:</b>\n1. Hervir una taza de arroz con dos tazas de agua y una pizca de sal.\n2. En una sartén con aceite caliente, freír un huevo dejando la yema blanda.\n3. Servir el arroz caliente y colocar el huevo frito encima con una pizca de pimienta.",
        en: "<b>Rice with Fried Egg Recipe:</b>\n1. Boil one cup of rice with two cups of water and a pinch of salt.\n2. In a pan with hot oil, fry an egg keeping the yolk soft.\n3. Serve the hot rice and place the fried egg on top with a pinch of pepper."
    },
    hamburguesas: {
        es: "<b>Receta de Hamburguesas Caseras:</b>\n1. Condimentar carne picada con sal, pimienta y una cucharada de mostaza.\n2. Armar bollos y aplastarlos en forma de disco.\n3. Cocinar en una plancha caliente por 4 minutos de cada lado. Agregar queso arriba al dar la vuelta.",
        en: "<b>Homemade Burgers Recipe:</b>\n1. Season minced beef with salt, pepper, and a tablespoon of mustard.\n2. Shape into balls and flatten into patties.\n3. Cook on a hot griddle for 4 minutes per side. Add cheese on top when flipping."
    }
};

// ==========================================
// 2. DICCIONARIO PARA LA INTERFAZ
// ==========================================
const translations = {
    es: {
        pregunta: "¿Sin tiempo para la cena?",
        titulo: "Recetas rápidas de internet en segundos",
        ventajas: "SIN anuncios &nbsp;|&nbsp; SIN suscripciones molestas",
        placeholder: "Ingresa tu correo aquí...",
        btnSubmit: "¡Quiero mis recetas!",
        welcome: "¡Hola! Decime qué tenés en la heladera, o contame tu caso (ej: «quiero hacer pizza pero soy celíaco y tengo 30 min») y te busco la receta.",
        inputPlaceholder: "Ej: pizza, arroz y huevo... o «quiero pizza, soy celíaco, 30 min»",
        btnGenerar: "Generar receta",
        disclaimer: "La IA puede cometer errores.",
        lblFavs: "Recetas Favoritas",
        lblVoz: "Lectura por voz",
        lblTono: "Tono de voz",
        lblAlergias: "Alergias o restricciones",
        btnCerrarSesion: "Cerrar sesión",
        alertaCorreo: "Por favor, ingresa un correo válido.",
        alertaFavs: "Todos los favoritos borrados.",
        buscando: "Buscando recetas en internet...",
        ingredientes: "Ingredientes",
        preparacion: "Preparación",
        fuente: "Ver fuente original",
        sinResultados: "No encontré una receta para eso. Probá con otros ingredientes o con el nombre de un plato (ej: pollo, pasta, arroz).",
        sinConexion: "No pude conectarme a internet, te muestro una receta guardada.",
        conIngredientes: "Con tus ingredientes",
        usaTodos: "esta receta usa todos",
        usaAlgunos: "esta receta usa {n} de {t}",
        tambien: "También podrías hacer",
        entendi: "Entendí",
        faltaInfo: "Contame qué plato querés hacer o qué ingredientes tenés (podés sumar tiempo y restricciones, ej: «quiero pizza, soy celíaco, tengo 30 min»).",
        recetaApta: "Según su lista de ingredientes, esta receta cumple con: {r}.",
        recetaAdaptada: "Para que sea {r}, tenés que cambiar:",
        tiempoAprox: "Tiempo estimado: ~{m} min (aprox.)",
        tiempoNoLlega: "No encontré una receta de {m} min o menos; te muestro la más rápida.",
        sinConexionRestr: "Sin conexión no pude verificar los ingredientes: revisá que sea apta para {r}.",
        soloTuyos: "Usa solo tus ingredientes (más condimentos básicos como sal, pimienta, aceite o especias).",
        sinExactas: "No encontré ninguna receta que use solo tus ingredientes ({l}) más condimentos. Las más cercanas necesitan algo extra:",
        ademasLleva: "además lleva"
    },
    en: {
        pregunta: "No time for dinner?",
        titulo: "Quick recipes from the internet in seconds",
        ventajas: "NO ads &nbsp;|&nbsp; NO annoying subscriptions",
        placeholder: "Enter your email here...",
        btnSubmit: "I want my recipes!",
        welcome: "Hello! Tell me what you have in the fridge, or describe your case (e.g. \"I want pizza but I'm celiac and have 30 min\") and I will find the recipe.",
        inputPlaceholder: "Ex: pizza, rice and eggs... or \"pizza, I'm celiac, 30 min\"",
        btnGenerar: "Generate recipe",
        disclaimer: "AI can make mistakes.",
        lblFavs: "Favorite Recipes",
        lblVoz: "Voice reading",
        lblTono: "Voice pitch",
        lblAlergias: "Allergies or restrictions",
        btnCerrarSesion: "Log out",
        alertaCorreo: "Please enter a valid email.",
        alertaFavs: "All favorites deleted.",
        buscando: "Searching recipes on the internet...",
        ingredientes: "Ingredients",
        preparacion: "Instructions",
        fuente: "View original source",
        sinResultados: "I couldn't find a recipe for that. Try other ingredients or a dish name (e.g. chicken, pasta, rice).",
        sinConexion: "I couldn't connect to the internet, here's a saved recipe.",
        conIngredientes: "With your ingredients",
        usaTodos: "this recipe uses all of them",
        usaAlgunos: "this recipe uses {n} of {t}",
        tambien: "You could also make",
        entendi: "I understood",
        faltaInfo: "Tell me which dish you want or which ingredients you have (you can add time and restrictions, e.g. \"I want pizza, I'm celiac, I have 30 min\").",
        recetaApta: "According to its ingredient list, this recipe meets: {r}.",
        recetaAdaptada: "To make it {r}, you need to swap:",
        tiempoAprox: "Estimated time: ~{m} min (approx.)",
        tiempoNoLlega: "I couldn't find a recipe of {m} min or less; here's the fastest one.",
        sinConexionRestr: "Offline, I couldn't check the ingredients: make sure it's suitable for {r}.",
        soloTuyos: "Uses only your ingredients (plus basic seasonings like salt, pepper, oil or spices).",
        sinExactas: "I couldn't find any recipe that uses only your ingredients ({l}) plus seasonings. The closest ones need something extra:",
        ademasLleva: "also needs"
    }
};

// Idiomas nuevos (pt, fr, it) y textos nuevos de es/en
Object.assign(translations.es, {"guardar": "⭐ Guardar receta", "guardada": "✓ Guardada", "ver": "Ver", "borrar": "Borrar", "sinFavs": "Todavía no guardaste recetas.", "borrarTodos": "Borrar todos los favoritos", "phAlergias": "Ej: gluten, maní, lactosa, vegano"});
Object.assign(translations.en, {"guardar": "⭐ Save recipe", "guardada": "✓ Saved", "ver": "View", "borrar": "Delete", "sinFavs": "You haven't saved any recipes yet.", "borrarTodos": "Delete all favorites", "phAlergias": "Ex: gluten, peanuts, lactose, vegan"});
translations.pt = {
 "pregunta": "Sem tempo para o jantar?",
 "titulo": "Receitas rápidas da internet em segundos",
 "ventajas": "SEM anúncios &nbsp;|&nbsp; SEM assinaturas chatas",
 "placeholder": "Digite seu e-mail aqui...",
 "btnSubmit": "Quero minhas receitas!",
 "welcome": "Olá! Diga o que você tem na geladeira, ou conte seu caso (ex.: «quero fazer pizza mas sou celíaco e tenho 30 min») e eu busco a receita.",
 "inputPlaceholder": "Ex.: pizza, arroz e ovo... ou «quero pizza, sou celíaco, 30 min»",
 "btnGenerar": "Gerar receita",
 "disclaimer": "A IA pode cometer erros.",
 "lblFavs": "Receitas Favoritas",
 "lblVoz": "Leitura por voz",
 "lblTono": "Tom de voz",
 "lblAlergias": "Alergias ou restrições",
 "btnCerrarSesion": "Sair",
 "alertaCorreo": "Por favor, digite um e-mail válido.",
 "alertaFavs": "Todos os favoritos foram apagados.",
 "buscando": "Buscando receitas na internet...",
 "ingredientes": "Ingredientes",
 "preparacion": "Modo de preparo",
 "fuente": "Ver fonte original",
 "sinResultados": "Não encontrei uma receita para isso. Tente outros ingredientes ou o nome de um prato (ex.: frango, massa, arroz).",
 "sinConexion": "Não consegui me conectar à internet, mostro uma receita salva.",
 "conIngredientes": "Com seus ingredientes",
 "usaTodos": "esta receita usa todos",
 "usaAlgunos": "esta receita usa {n} de {t}",
 "tambien": "Você também poderia fazer",
 "entendi": "Entendi",
 "faltaInfo": "Conte qual prato quer fazer ou quais ingredientes tem (pode somar tempo e restrições, ex.: «quero pizza, sou celíaco, tenho 30 min»).",
 "recetaApta": "Segundo a lista de ingredientes, esta receita atende: {r}.",
 "recetaAdaptada": "Para ser {r}, você precisa trocar:",
 "tiempoAprox": "Tempo estimado: ~{m} min (aprox.)",
 "tiempoNoLlega": "Não encontrei receita de {m} min ou menos; mostro a mais rápida.",
 "sinConexionRestr": "Sem conexão não pude verificar os ingredientes: confira se é adequada para {r}.",
 "soloTuyos": "Usa só os seus ingredientes (mais temperos básicos como sal, pimenta, óleo ou especiarias).",
 "sinExactas": "Não encontrei nenhuma receita que use só os seus ingredientes ({l}) mais temperos. As mais próximas precisam de algo extra:",
 "ademasLleva": "também leva",
 "guardar": "⭐ Salvar receita",
 "guardada": "✓ Salva",
 "ver": "Ver",
 "borrar": "Apagar",
 "sinFavs": "Você ainda não salvou receitas.",
 "borrarTodos": "Apagar todos os favoritos",
 "phAlergias": "Ex.: glúten, amendoim, lactose, vegano"
};
translations.fr = {
 "pregunta": "Pas le temps pour le dîner ?",
 "titulo": "Des recettes rapides d'internet en quelques secondes",
 "ventajas": "SANS pub &nbsp;|&nbsp; SANS abonnements pénibles",
 "placeholder": "Entrez votre e-mail ici...",
 "btnSubmit": "Je veux mes recettes !",
 "welcome": "Bonjour ! Dites-moi ce que vous avez dans le frigo, ou décrivez votre cas (ex. : «je veux faire une pizza mais je suis cœliaque et j'ai 30 min») et je trouve la recette.",
 "inputPlaceholder": "Ex. : pizza, riz et œuf... ou «pizza, cœliaque, 30 min»",
 "btnGenerar": "Générer la recette",
 "disclaimer": "L'IA peut faire des erreurs.",
 "lblFavs": "Recettes favorites",
 "lblVoz": "Lecture vocale",
 "lblTono": "Ton de la voix",
 "lblAlergias": "Allergies ou restrictions",
 "btnCerrarSesion": "Se déconnecter",
 "alertaCorreo": "Veuillez saisir un e-mail valide.",
 "alertaFavs": "Tous les favoris ont été supprimés.",
 "buscando": "Recherche de recettes sur internet...",
 "ingredientes": "Ingrédients",
 "preparacion": "Préparation",
 "fuente": "Voir la source originale",
 "sinResultados": "Je n'ai pas trouvé de recette. Essayez d'autres ingrédients ou un nom de plat (ex. : poulet, pâtes, riz).",
 "sinConexion": "Je n'ai pas pu me connecter à internet, voici une recette enregistrée.",
 "conIngredientes": "Avec vos ingrédients",
 "usaTodos": "cette recette les utilise tous",
 "usaAlgunos": "cette recette en utilise {n} sur {t}",
 "tambien": "Vous pourriez aussi faire",
 "entendi": "J'ai compris",
 "faltaInfo": "Dites-moi quel plat vous voulez ou quels ingrédients vous avez (vous pouvez ajouter durée et restrictions, ex. : «je veux une pizza, cœliaque, 30 min»).",
 "recetaApta": "D'après sa liste d'ingrédients, cette recette respecte : {r}.",
 "recetaAdaptada": "Pour qu'elle soit {r}, il faut remplacer :",
 "tiempoAprox": "Temps estimé : ~{m} min (approx.)",
 "tiempoNoLlega": "Je n'ai pas trouvé de recette de {m} min ou moins ; voici la plus rapide.",
 "sinConexionRestr": "Hors ligne, je n'ai pas pu vérifier les ingrédients : vérifiez qu'elle convient à {r}.",
 "soloTuyos": "Utilise uniquement vos ingrédients (plus assaisonnements de base : sel, poivre, huile ou épices).",
 "sinExactas": "Aucune recette n'utilise uniquement vos ingrédients ({l}) plus assaisonnements. Les plus proches demandent un extra :",
 "ademasLleva": "contient aussi",
 "guardar": "⭐ Enregistrer la recette",
 "guardada": "✓ Enregistrée",
 "ver": "Voir",
 "borrar": "Supprimer",
 "sinFavs": "Vous n'avez pas encore de recettes enregistrées.",
 "borrarTodos": "Supprimer tous les favoris",
 "phAlergias": "Ex. : gluten, arachide, lactose, végan"
};
translations.it = {
 "pregunta": "Poco tempo per la cena?",
 "titulo": "Ricette veloci da internet in pochi secondi",
 "ventajas": "SENZA pubblicità &nbsp;|&nbsp; SENZA abbonamenti fastidiosi",
 "placeholder": "Inserisci la tua email qui...",
 "btnSubmit": "Voglio le mie ricette!",
 "welcome": "Ciao! Dimmi cosa hai in frigo, o racconta il tuo caso (es.: «voglio fare la pizza ma sono celiaco e ho 30 min») e cerco la ricetta.",
 "inputPlaceholder": "Es.: pizza, riso e uova... o «pizza, celiaco, 30 min»",
 "btnGenerar": "Genera ricetta",
 "disclaimer": "L'IA può commettere errori.",
 "lblFavs": "Ricette preferite",
 "lblVoz": "Lettura vocale",
 "lblTono": "Tono della voce",
 "lblAlergias": "Allergie o restrizioni",
 "btnCerrarSesion": "Esci",
 "alertaCorreo": "Inserisci un'email valida.",
 "alertaFavs": "Tutti i preferiti sono stati eliminati.",
 "buscando": "Cerco ricette su internet...",
 "ingredientes": "Ingredienti",
 "preparacion": "Preparazione",
 "fuente": "Vedi fonte originale",
 "sinResultados": "Non ho trovato una ricetta. Prova con altri ingredienti o il nome di un piatto (es.: pollo, pasta, riso).",
 "sinConexion": "Non sono riuscito a connettermi a internet, ecco una ricetta salvata.",
 "conIngredientes": "Con i tuoi ingredienti",
 "usaTodos": "questa ricetta li usa tutti",
 "usaAlgunos": "questa ricetta ne usa {n} su {t}",
 "tambien": "Potresti anche fare",
 "entendi": "Ho capito",
 "faltaInfo": "Dimmi quale piatto vuoi o quali ingredienti hai (puoi aggiungere tempo e restrizioni, es.: «voglio la pizza, celiaco, 30 min»).",
 "recetaApta": "In base alla lista degli ingredienti, questa ricetta rispetta: {r}.",
 "recetaAdaptada": "Per renderla {r}, devi sostituire:",
 "tiempoAprox": "Tempo stimato: ~{m} min (circa)",
 "tiempoNoLlega": "Non ho trovato ricette di {m} min o meno; ti mostro la più veloce.",
 "sinConexionRestr": "Offline non ho potuto verificare gli ingredienti: controlla che sia adatta a {r}.",
 "soloTuyos": "Usa solo i tuoi ingredienti (più condimenti base come sale, pepe, olio o spezie).",
 "sinExactas": "Non ho trovato ricette che usino solo i tuoi ingredienti ({l}) più condimenti. Le più vicine richiedono qualcosa in più:",
 "ademasLleva": "contiene anche",
 "guardar": "⭐ Salva ricetta",
 "guardada": "✓ Salvata",
 "ver": "Vedi",
 "borrar": "Elimina",
 "sinFavs": "Non hai ancora salvato ricette.",
 "borrarTodos": "Elimina tutti i preferiti",
 "phAlergias": "Es.: glutine, arachidi, lattosio, vegano"
};

// Texto de interfaz con respaldo a español (por si el idioma no está en el diccionario)
function t(lang, key) {
    return (translations[lang] && translations[lang][key]) || translations.es[key];
}

// ==========================================
// 3. FUNCIÓN DE CONEXIÓN DE LA LANDING
// ==========================================
function conectarLandingConIA() {
    const correoUsuario = document.getElementById('input-email').value;

    if (!correoUsuario || !correoUsuario.includes('@')) {
        alert(t(document.getElementById('idioma').value, 'alertaCorreo'));
        return;
    }

    guardarSesion(correoUsuario);

    const tuGmail = "William.pallares@proton.me";
    const asunto = encodeURIComponent("Nuevo registro en foodChefIa");
    const cuerpo = encodeURIComponent("Hola William, me quiero registrar en la IA. Mi correo es: " + correoUsuario);

    window.location.href = `mailto:${tuGmail}?subject=${asunto}&body=${cuerpo}`;

    mostrarIA();
}

// ==========================================
// 3.1 SESIÓN (se recuerda en este navegador)
// ==========================================
const CLAVE_SESION = 'foodchef_email';

function guardarSesion(correo) {
    try { localStorage.setItem(CLAVE_SESION, correo); } catch (e) { /* storage bloqueado */ }
}

function obtenerSesion() {
    try { return localStorage.getItem(CLAVE_SESION); } catch (e) { return null; }
}

function mostrarIA() {
    document.getElementById('seccion-landing').style.display = 'none';
    document.getElementById('seccion-ia').style.display = 'block';
}

function cerrarSesion() {
    try { localStorage.removeItem(CLAVE_SESION); } catch (e) { /* nada */ }
    document.getElementById('settingsMenu').classList.remove('open');
    document.getElementById('input-email').value = '';
    document.getElementById('seccion-ia').style.display = 'none';
    document.getElementById('seccion-landing').style.display = 'block';
}

// ==========================================
// 4. UTILIDADES: SEGURIDAD, TRADUCCIÓN Y API
// ==========================================
const MEALDB = "https://www.themealdb.com/api/json/v1/1";

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
}

// Traduce un texto corto con MyMemory (gratis, máx ~500 caracteres por pedido)
async function traducirChunk(texto, de, a) {
    if (!texto.trim() || de === a) return texto;
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=${de}|${a}`;
        const res = await fetch(url);
        const data = await res.json();
        const out = data && data.responseData && data.responseData.translatedText;
        // MyMemory devuelve mensajes de error como texto si se pasa del límite
        if (!out || /MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(out)) return texto;
        return out;
    } catch (e) {
        return texto; // si falla, dejamos el original
    }
}

// Traduce textos largos partiéndolos en pedazos por oraciones
async function traducir(texto, de, a) {
    if (de === a || !texto) return texto;
    const oraciones = texto.match(/[^.!?\n]+[.!?]*\s*/g) || [texto];
    const chunks = [];
    let actual = "";
    for (const o of oraciones) {
        if ((actual + o).length > 450) {
            if (actual) chunks.push(actual);
            actual = o;
        } else {
            actual += o;
        }
    }
    if (actual) chunks.push(actual);
    const traducidos = await Promise.all(chunks.map(c => traducirChunk(c, de, a)));
    return traducidos.join(" ");
}

async function getJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
}

const STOPWORDS = new Set([
    "con","y","e","de","del","la","el","los","las","un","una","algo","que","para","quiero","tengo",
    "tenes","tenés","hay","en","a","o","with","and","the","a","an","some","something","of","i","have",
    "com","et","avec","con","per"
]);

// ---------- INGREDIENTES ----------
// Diccionario rápido (evita depender de la traducción para los más comunes)
const DICC_ING = {
    huevo: "egg", huevos: "egg", arroz: "rice", pollo: "chicken", carne: "beef", "carne picada": "minced_beef",
    cerdo: "pork", pescado: "salmon", atun: "tuna", camaron: "prawns", camarones: "prawns", jamon: "ham",
    queso: "cheese", leche: "milk", manteca: "butter", crema: "cream", yogur: "yogurt", yogurt: "yogurt",
    papa: "potatoes", papas: "potatoes", patata: "potatoes", patatas: "potatoes", batata: "sweet_potato",
    cebolla: "onion", ajo: "garlic", tomate: "tomatoes", tomates: "tomatoes", zanahoria: "carrots",
    zapallo: "pumpkin", calabaza: "pumpkin", zapallito: "zucchini", zucchini: "zucchini", berenjena: "aubergine",
    morron: "red_pepper", pimiento: "red_pepper", champinones: "mushrooms", hongos: "mushrooms",
    espinaca: "spinach", lechuga: "lettuce", brocoli: "broccoli", choclo: "sweetcorn", maiz: "sweetcorn",
    arvejas: "peas", lentejas: "lentils", garbanzos: "chickpeas", porotos: "kidney_beans", frijoles: "kidney_beans",
    fideos: "pasta", pasta: "pasta", tallarines: "spaghetti", espagueti: "spaghetti", harina: "flour",
    pan: "bread", "pan rallado": "breadcrumbs", aceite: "olive_oil", sal: "salt", azucar: "sugar",
    limon: "lemon", naranja: "orange", manzana: "apples", banana: "bananas", platano: "bananas",
    chocolate: "chocolate", miel: "honey", avena: "oats", coco: "coconut", cordero: "lamb", pavo: "turkey",
    tocino: "bacon", panceta: "bacon", salchicha: "sausages", salchichas: "sausages", mozzarella: "mozzarella",
    muzzarella: "mozzarella", palta: "avocado", aguacate: "avocado", chorizo: "chorizo"
};

function sinAcentos(s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// "arroz, huevo y queso" -> ["arroz","huevo","queso"]
function separarIngredientes(texto) {
    const partes = separarPorConectores(texto);
    // "arroz huevo carne tomate" (solo espacios): si TODAS las palabras son ingredientes conocidos, separarlas
    if (partes.length === 1) {
        const porEspacios = separarPorEspacios(partes[0]);
        if (porEspacios) return porEspacios;
    }
    return partes;
}

// Divide por espacios solo si cada palabra es un ingrediente conocido (soporta "carne picada", "pan rallado")
function separarPorEspacios(frase) {
    const palabras = sinAcentos(frase.toLowerCase()).split(/\s+/).filter(w => w && !STOPWORDS.has(w));
    if (palabras.length < 2) return null;
    const out = [];
    for (let i = 0; i < palabras.length; i++) {
        const dos = palabras[i] + " " + (palabras[i + 1] || "");
        if (palabras[i + 1] && DICC_ING[dos.trim()]) { out.push(dos.trim()); i++; }
        else if (DICC_ING[palabras[i]]) out.push(palabras[i]);
        else return null; // hay una palabra desconocida: podría ser un nombre de plato
    }
    return out.length > 1 ? out.slice(0, 5) : null;
}

function separarPorConectores(texto) {
    return texto.toLowerCase()
        .split(/,|;|\+|\s+y\s+|\s+e\s+|\s+con\s+|\s+and\s+|\s+with\s+|\s+et\s+|\s+avec\s+|\s+com\s+/)
        .map(p => p
            .replace(/\b(algo|quiero|tengo|tenes|tenés|hay|unos|unas|un|una|el|la|los|las|de|del|some|something|i have)\b/g, " ")
            .replace(/\s+/g, " ").trim())
        .filter(p => p.length > 1)
        .slice(0, 5);
}

async function ingredienteAIngles(frase, lang) {
    const clave = sinAcentos(frase);
    if (DICC_ING[clave]) return DICC_ING[clave];
    const en = lang === "en" ? frase : await traducirChunk(frase, lang, "en");
    return en.toLowerCase().replace(/[^a-z\s]/g, "").trim().replace(/\s+/g, "_");
}

// Platos comunes (la base de recetas está en inglés y la traducción automática a veces falla)
const DICC_PLATOS = {
    pastel: ["cake"], pasteles: ["cake"], torta: ["cake", "pie"], tortas: ["cake", "pie"],
    bizcocho: ["cake"], bizcochuelo: ["cake"], tarta: ["tart", "pie"], tartas: ["tart", "pie"],
    postre: ["pudding", "cake"], postres: ["pudding", "cake"], budin: ["pudding"],
    galletas: ["cookies", "biscuit"], galletitas: ["cookies", "biscuit"], brownie: ["brownies"],
    panqueques: ["pancakes"], panqueque: ["pancakes"], crepes: ["pancakes"],
    ensalada: ["salad"], sopa: ["soup"], guiso: ["stew"], estofado: ["stew"],
    tortilla: ["omelette"], omelette: ["omelette"], empanadas: ["empanada", "pie"],
    hamburguesa: ["burger"], hamburguesas: ["burger"], milanesa: ["schnitzel", "chicken"],
    milanesas: ["schnitzel", "chicken"], ñoquis: ["gnocchi"], noquis: ["gnocchi"],
    lasana: ["lasagne"], lasagna: ["lasagne"], tacos: ["tacos"], curry: ["curry"],
    "papas fritas": ["chips", "fries", "potato"], "papa frita": ["chips", "fries", "potato"],
    "patatas fritas": ["chips", "fries", "potato"], papas: ["potato"], patatas: ["potato"],
    "puré de papas": ["mash", "potato"], "pure de papas": ["mash", "potato"]
};

// Busca recetas que contengan un ingrediente (prueba singular/plural)
async function recetasPorIngrediente(ing) {
    const variantes = [...new Set([ing, ing.replace(/s$/, ""), ing + "s"])];
    for (const v of variantes) {
        try {
            const data = await getJSON(`${MEALDB}/filter.php?i=${encodeURIComponent(v)}`);
            if (data.meals && data.meals.length) return data.meals;
        } catch (e) { /* probamos la siguiente variante */ }
    }
    return [];
}

async function detalleReceta(id) {
    const data = await getJSON(`${MEALDB}/lookup.php?i=${id}`);
    return data.meals ? data.meals[0] : null;
}

// ---------- BÚSQUEDA PRINCIPAL ----------
// Devuelve { meal, otros:[{idMeal,strMeal}], modo, coincide, total, ingredientes }
async function buscarRecetaEnInternet(consultaOriginal, lang) {
    const partes = separarIngredientes(consultaOriginal);

    // A) Varios ingredientes -> SOLO recetas que usen tus ingredientes (+ condimentos)
    if (partes.length > 1) {
        const ingsEn = await Promise.all(partes.map(p => ingredienteAIngles(p, lang)));
        const est = await buscarEstricto(ingsEn);

        if (est.hayCandidatos) {
            if (est.exactas.length) {
                const mejor = est.exactas[0];
                return {
                    meal: mejor.meal,
                    otros: est.exactas.slice(1, 4).map(e => e.meal),
                    modo: "ingredientes",
                    coincide: mejor.coincide,
                    total: partes.length,
                    ingredientes: partes
                };
            }
            return { modo: "sinExactas", cercanas: est.cercanas, ingredientes: partes };
        }
    }

    // B) Nombre de plato (o un solo ingrediente)
    const consultaEn = (await traducirChunk(consultaOriginal, lang, "en"))
        .toLowerCase().replace(/[^a-z\s]/g, "").trim();
    const palabras = consultaEn.split(/\s+/).filter(w => w.length > 2 && !STOPWORDS.has(w));
    const intentos = [consultaEn, ...palabras];
    for (const q of intentos) {
        if (!q) continue;
        const data = await getJSON(`${MEALDB}/search.php?s=${encodeURIComponent(q)}`);
        if (data.meals && data.meals.length) {
            return { meal: data.meals[0], otros: data.meals.slice(1, 4), modo: "nombre" };
        }
    }

    // C) Último intento: cada palabra como ingrediente
    const unico = partes.length ? await Promise.all(partes.map(p => ingredienteAIngles(p, lang))) : palabras;
    for (const ing of unico) {
        const lista = await recetasPorIngrediente(ing);
        if (lista.length) {
            const meal = await detalleReceta(lista[0].idMeal);
            if (meal) {
                return {
                    meal, otros: lista.slice(1, 4), modo: "ingredientes",
                    coincide: 1, total: Math.max(partes.length, 1), ingredientes: partes
                };
            }
        }
    }
    return null;
}

// Arma el mensaje final: aviso + receta + sugerencias clickeables
async function armarRespuesta(res, lang) {
    let html = "";

    if (res.modo === "sinExactas") {
        return await htmlSinExactas(res.cercanas, res.ingredientes, lang);
    }

    if (res.modo === "ingredientes") {
        const lista = res.ingredientes.map(escapeHtml).join(", ");
        const aviso = res.coincide >= res.total
            ? t(lang, "usaTodos")
            : t(lang, "usaAlgunos").replace("{n}", res.coincide).replace("{t}", res.total);
        html += `<i>${escapeHtml(t(lang, "conIngredientes"))} (${lista}): ${escapeHtml(aviso)}</i>\n`;
        html += `<i>${escapeHtml(t(lang, "soloTuyos"))}</i>\n\n`;
    }

    html += await formatearReceta(res.meal, lang);

    if (res.otros && res.otros.length) {
        const nombres = await Promise.all(res.otros.map(o => traducir(o.strMeal, "en", lang)));
        html += `\n\n<b>${escapeHtml(t(lang, "tambien"))}:</b>\n`;
        html += res.otros.map((o, i) =>
            `<button type="button" data-meal-id="${escapeHtml(o.idMeal)}" ` +
            `style="margin:3px 4px 0 0;padding:6px 10px;border:none;border-radius:8px;` +
            `background:var(--primary);color:#fff;cursor:pointer;font-size:0.85rem;">` +
            `${escapeHtml(nombres[i])}</button>`
        ).join("");
    }
    return html;
}

// Convierte la receta de la API en HTML, traducida al idioma elegido
async function formatearReceta(meal, lang) {
    // Ingredientes + medidas
    const ings = [];
    for (let i = 1; i <= 20; i++) {
        const ing = (meal["strIngredient" + i] || "").trim();
        const med = (meal["strMeasure" + i] || "").trim();
        if (ing) ings.push(`${med} ${ing}`.trim());
    }

    // Traducir título, ingredientes e instrucciones (todo en paralelo)
    const [titulo, ingsTxt, instrucciones] = await Promise.all([
        traducir(meal.strMeal, "en", lang),
        traducir(ings.join("; "), "en", lang),
        traducir((meal.strInstructions || "").replace(/\r?\n+/g, " "), "en", lang)
    ]);

    const listaIngs = ingsTxt.split(/;\s*/).map(i => `• ${escapeHtml(i)}`).join("\n");
    const pasos = instrucciones.split(/(?<=[.!?])\s+/).filter(s => s.trim())
        .map((s, i) => `${i + 1}. ${escapeHtml(s.trim())}`).join("\n");

    let html = "";
    if (meal.strMealThumb) {
        html += `<img src="${escapeHtml(meal.strMealThumb)}/preview" alt="${escapeHtml(titulo)}" style="width:100%;border-radius:10px;margin-bottom:8px;">\n`;
    }
    html += `<b>${escapeHtml(titulo)}</b>\n\n`;
    html += `<b>${t(lang, "ingredientes")}:</b>\n${listaIngs}\n\n`;
    html += `<b>${t(lang, "preparacion")}:</b>\n${pasos}`;

    const fuente = meal.strSource || meal.strYoutube;
    if (fuente && /^https?:\/\//.test(fuente)) {
        html += `\n\n<a href="${escapeHtml(fuente)}" target="_blank" rel="noopener noreferrer">${t(lang, "fuente")}</a>`;
    }
    return envolverReceta(meal.idMeal, titulo, html, lang);
}

// Respaldo local si falla internet
function recetaLocal(textoUsuario, lang) {
    const l = RECIPES_INTERNET_DATABASE;
    let k = null;
    if (textoUsuario.includes("pizza")) k = "pizza";
    else if (textoUsuario.includes("milanesa")) k = "milanesas";
    else if (textoUsuario.includes("arroz") || textoUsuario.includes("huevo")) k = "arroz";
    else if (textoUsuario.includes("hamburguesa") || textoUsuario.includes("burger")) k = "hamburguesas";
    if (!k) return null;
    const r = l[k];
    const txt = r[lang] || (lang === "pt" ? r.es : r.en);
    const titulo = ((txt.match(/<b>(.*?)<\/b>/) || [])[1] || k).replace(/:$/, "");
    return envolverReceta("local_" + k, titulo, txt, lang);
}

// ==========================================
// 4.5 CONSULTAS EN LENGUAJE NATURAL
//     (plato + restricciones + tiempo + ingredientes)
//     Ej: "quiero hacer pizza pero soy celíaco, tengo 30 min y harina de arroz"
// ==========================================
const L = (obj, lang) => (obj && (obj[lang] || (lang === "pt" ? obj.es : obj.en) || obj.es)) || "";
const S = (re, es, en) => ({ re, es, en });
const rx = (p) => new RegExp("\\b(?:" + p + ")\\b", "i");

// Quita acentos pero conserva la ñ
function normalizarTexto(s) {
    return s.toLowerCase().normalize("NFD")
        .replace(/n\u0303/g, "ñ")
        .replace(/[\u0300-\u036f]/g, "");
}

const PAL_CARNE = "chicken|beef|pork|lamb|bacon|ham|sausages?|chorizo|turkey|duck|mince|minced|veal|steak|lard|oxtail|prosciutto|salami|pepperoni";
const PAL_PESCADO = "fish|salmon|tuna|prawns?|shrimps?|anchov\\w*|cod|crab|squid|mussels?|lobster|sardines?|haddock|clams?|oysters?|scallops?|calamari|octopus";
const PAL_LACTEO = "milk|buttermilk|whey|custard|butter|ghee|cream|creme fraiche|mascarpone|yogh?urt|cheese|parmesan|mozzarella|cheddar|feta|ricotta|halloumi|paneer|gruyere";
const EXC_LACTEO = "coconut (?:milk|cream)|almond milk|soya? milk|oat milk|peanut butter|cocoa butter|cream of tartar|butter ?beans?|butternut|shea";

const SUST_LACTEOS = [
    S(/milk|buttermilk|whey|custard/, "leche deslactosada o vegetal (avena, almendra, soja)", "lactose-free or plant milk (oat, almond, soy)"),
    S(/butter|ghee/, "aceite de oliva o margarina vegetal", "olive oil or plant-based margarine"),
    S(/cream|creme fraiche|mascarpone/, "crema vegetal, de coco o sin lactosa", "plant-based, coconut or lactose-free cream"),
    S(/yogh?urt/, "yogur vegetal o sin lactosa", "plant-based or lactose-free yogurt"),
    S(/cheese|parmesan|mozzarella|cheddar|feta|ricotta|halloumi|paneer|gruyere/, "queso sin lactosa o vegano", "lactose-free or vegan cheese")
];
const SUST_CARNE = [
    S(new RegExp(PAL_CARNE), "tofu, seitán, lentejas, garbanzos o champiñones", "tofu, seitan, lentils, chickpeas or mushrooms")
];
const SUST_PESCADO = [
    S(new RegExp(PAL_PESCADO), "tofu, garbanzos u hongos (con alga nori para el sabor a mar)", "tofu, chickpeas or mushrooms (with nori for a sea flavor)")
];

// detectar: patrón sobre el texto del usuario (sin acentos). campo: patrón más laxo para el campo "Alergias".
const RESTRICCIONES = {
    gluten: {
        detectar: /celiac|coeliac|gluten|\btacc\b/,
        nombre: { es: "sin gluten (celíaco)", en: "gluten-free (celiac)" },
        palabras: rx("flour|bread|breadcrumbs?|pasta|spaghetti|noodles?|macaroni|penne|lasagn[ae]|fettuccine|linguine|tagliatelle|couscous|semolina|barley|wheat|pastry|filo|tortillas?|buns?|biscuits?|crackers?|soy sauce|bulgur|pitta|pita|naan|dough|rye|beer"),
        excepciones: /corn ?flour|cornflour|rice|potato|chickpea|gram flour|almond|coconut|tapioca|cassava|buckwheat|gluten.?free/i,
        sust: [
            S(/flour|dough|pastry|filo|buns?|pit?ta|naan|tortilla|biscuit|cracker/, "harina o premezcla sin TACC (o harina de arroz + fécula de mandioca/maíz)", "gluten-free flour or premix (or rice flour + tapioca/corn starch)"),
            S(/bread/, "pan o pan rallado sin TACC (también sirve harina de maíz)", "gluten-free bread or breadcrumbs (cornmeal also works)"),
            S(/pasta|spaghetti|noodle|macaroni|penne|lasagn|fettuccine|linguine|tagliatelle|couscous|semolina|bulgur|barley|wheat/, "fideos de arroz o maíz sin TACC (quinoa en lugar de cuscús)", "rice or corn gluten-free pasta (quinoa instead of couscous)"),
            S(/soy sauce/, "tamari certificado sin TACC", "certified gluten-free tamari")
        ],
        general: { es: "una versión certificada sin TACC", en: "a certified gluten-free version" },
        aviso: {
            es: "Revisá que todos los productos tengan el sello «Sin TACC» y evitá la contaminación cruzada (utensilios y tablas limpios).",
            en: "Check that every product has a gluten-free label and avoid cross-contamination (clean utensils and boards)."
        }
    },
    lactosa: {
        detectar: /lactos|lacteo|dairy|lactose|sin leche|milk.?free|laitier/,
        nombre: { es: "sin lácteos / lactosa", en: "dairy-free / lactose-free" },
        palabras: rx(PAL_LACTEO),
        excepciones: new RegExp(EXC_LACTEO, "i"),
        sust: SUST_LACTEOS,
        general: { es: "una versión sin lactosa o vegetal", en: "a lactose-free or plant-based version" },
        aviso: {
            es: "Mirá las etiquetas: muchos productos procesados tienen lácteos escondidos.",
            en: "Read the labels: many processed foods contain hidden dairy."
        }
    },
    vegano: {
        detectar: /vegan|vegetalian|plant.?based/,
        nombre: { es: "vegana", en: "vegan" },
        palabras: rx(PAL_CARNE + "|" + PAL_PESCADO + "|" + PAL_LACTEO + "|eggs?|honey|gelatine|gelatin|worcestershire"),
        excepciones: new RegExp(EXC_LACTEO + "|egg ?plant|vegan", "i"),
        sust: [
            S(/egg/, "1 cda de semillas de lino molidas + 3 cdas de agua por huevo (o puré de banana / aquafaba)", "1 tbsp ground flax + 3 tbsp water per egg (or mashed banana / aquafaba)"),
            S(/honey/, "jarabe de arce o de agave", "maple or agave syrup"),
            S(/gelatin/, "agar-agar", "agar-agar"),
            ...SUST_LACTEOS, ...SUST_CARNE, ...SUST_PESCADO
        ],
        general: { es: "una opción 100% vegetal", en: "a 100% plant-based option" },
        aviso: { es: "Revisá las etiquetas de salsas y caldos: suelen llevar ingredientes animales.", en: "Check sauce and stock labels: they often contain animal products." }
    },
    vegetariano: {
        detectar: /vegetarian/,
        nombre: { es: "vegetariana", en: "vegetarian" },
        palabras: rx(PAL_CARNE + "|" + PAL_PESCADO + "|gelatine|gelatin|worcestershire"),
        excepciones: /vegetarian/i,
        sust: [...SUST_CARNE, ...SUST_PESCADO, S(/gelatin/, "agar-agar", "agar-agar")],
        general: { es: "legumbres, tofu u hongos", en: "legumes, tofu or mushrooms" },
        aviso: { es: "Revisá los caldos y salsas: a veces llevan carne o pescado.", en: "Check stocks and sauces: they sometimes contain meat or fish." }
    },
    frutos_secos: {
        detectar: /(?:alerg\w*|allerg\w*|sin|free|no puedo(?: comer)?|intoleran\w*)\s+(?:a |al |a los |a las |to |de |the )?(?:mani|cacahuat\w*|cacahuet\w*|nueces|nuez|frutos secos|peanuts?|nuts?|tree nuts?)|nut.?free|peanut.?free/,
        campo: /mani|cacahuat|cacahuet|nuez|nueces|frutos secos|peanut|\bnuts?\b|almendra|avellana/,
        nombre: { es: "sin maní / frutos secos", en: "peanut / tree-nut free" },
        palabras: rx("peanuts?|almonds?|walnuts?|cashews?|hazelnuts?|pecans?|pistachios?|macadamia|pine nuts?|nuts?|nutella"),
        excepciones: null,
        sust: [],
        general: { es: "omitilo o reemplazalo por semillas de girasol o de zapallo", en: "leave it out or use sunflower or pumpkin seeds" },
        aviso: { es: "Revisá las etiquetas: pueden contener trazas de frutos secos.", en: "Read the labels: they may contain traces of nuts." }
    },
    mariscos: {
        detectar: /(?:alerg\w*|allerg\w*|sin|free|no puedo(?: comer)?|intoleran\w*)\s+(?:a |al |a los |a las |to |de |the )?(?:mariscos?|pescados?|seafood|shellfish|fish)/,
        campo: /marisc|pescado|seafood|shellfish|fish/,
        nombre: { es: "sin mariscos / pescado", en: "seafood-free" },
        palabras: rx(PAL_PESCADO),
        excepciones: null,
        sust: SUST_PESCADO,
        general: { es: "pollo, tofu o legumbres", en: "chicken, tofu or legumes" },
        aviso: { es: "Revisá caldos y salsas: pueden contener pescado.", en: "Check stocks and sauces: they may contain fish." }
    }
};

// Quita del texto las frases de restricción ("soy celíaco", "sin gluten"...) para quedarse con ingredientes/plato
function limpiarRestricciones(s) {
    let out = s;
    for (const k of Object.keys(RESTRICCIONES)) {
        out = out.replace(new RegExp(RESTRICCIONES[k].detectar.source, "g"), " ");
    }
    return out.replace(/\b(?:soy|sou|i am|i m|im|je suis|sono|pero|but)\b/g, " ").replace(/\s+/g, " ").trim();
}

// Analiza una frase libre. Devuelve { inteligente, plato, restricciones, minutos, ingredientes }
function analizarConsulta(texto, lang) {
    const t0 = normalizarTexto(texto);
    const campo = normalizarTexto((document.getElementById('alergias') || {}).value || "");

    // --- Restricciones (del texto y del campo "Alergias o restricciones") ---
    const restricciones = Object.keys(RESTRICCIONES).filter(k => {
        const d = RESTRICCIONES[k];
        return d.detectar.test(t0) || (campo && (d.campo || d.detectar).test(campo));
    });

    // --- Tiempo disponible ---
    let minutos = null;
    const sumar = n => { minutos = (minutos || 0) + n; };
    const reHoras = /(\d+(?:[.,]\d+)?)\s*(?:h|hs|hr|hrs|hora|horas|hour|hours|heure|heures|ora|ore)\b/;
    const reMin = /(\d+)\s*(?:min|mins|minuto|minutos|minute|minutes|minuti)\b/;
    const reMedia = /media hora|half an hour|half hour|meia hora|mezz ?ora|demi.?heure/;
    const reUnaHora = /\b(?:una|an|um|uma|une) (?:hora|hour|heure|ora)\b/;
    const mh = t0.match(reHoras), mm = t0.match(reMin);
    if (mh) sumar(Math.round(parseFloat(mh[1].replace(",", ".")) * 60));
    else if (reUnaHora.test(t0)) sumar(60);
    if (mm) sumar(parseInt(mm[1], 10));
    if (reMedia.test(t0)) sumar(30);
    const sinTiempo = t0.replace(reHoras, " ").replace(reMin, " ").replace(reMedia, " ").replace(reUnaHora, " ");

    // --- Plato ("quiero hacer pizza ...") ---
    let plato = null;
    const ART = "(?:(?:un|una|unos|unas|el|la|los|las|some|a|an|the|um|uma|le|les|des|il|lo)\\s+)?";
    const FIN = "(?=\\s+(?:\\d|pero|but|mas|mais|ma|porque|because|que|con|with|com|avec|y|and|e|et|soy|i|tengo|solo|only|en|in|dentro|within|libres?|disponibles?|free|available)\\b|[,.;?!]|$)";
    const mp = t0.match(new RegExp("\\b(?:hacer|cocinar|preparar|armar|make|cook|prepare|fazer|cozinhar|faire|cuisiner|preparer|fare|cucinare|preparare)\\s+" + ART + "([a-zñ ]+?)" + FIN))
            || t0.match(new RegExp("\\b(?:receta|recipe|recette|ricetta|receita)\\s+(?:de|del|para|for|of|pour|di|da)\\s+" + ART + "([a-zñ ]+?)" + FIN));
    if (mp) {
        let cand = mp[1].trim().split(/\s+/).slice(0, 4).join(" ");
        if (cand && !/^(?:con|with|com|avec|de|algo|something|cena|almuerzo|comida|desayuno|dinner|lunch|breakfast|meal|food|rapido|quick)\b/.test(cand)) {
            plato = cand;
        }
    }

    const inteligente = restricciones.length > 0 || minutos !== null || !!plato;

    // --- Ingredientes ("tengo harina, queso y tomate") ---
    let frag = null;
    const mi = sinTiempo.match(/\b(?:tengo|tenemos|tenes|dispongo(?: de)?|cuento con|i have|we have|i ve got|tenho|temos|ho)\s+(.+)/);
    if (mi) frag = mi[1];
    else if (plato) {
        const mc = sinTiempo.match(/\b(?:con|with|com|avec)\s+(.+)/);
        if (mc) frag = mc[1];
    }
    let ingredientes = [];
    if (frag) {
        frag = frag.split(/\b(?:pero|but|entonces|que|what|para|for|porque|because|quiero|want|soy|como|how|asi que)\b/)[0];
        frag = frag.replace(/\b(?:solo|solamente|apenas|only|just|unicamente|nada mas|poco|poca|pocos|pocas|de tiempo|of time|time|libres?|disponibles?|free|available|minutos?|mins?)\b/g, " ");
        frag = limpiarRestricciones(frag).replace(/^(?:\s|,|;|y\b|e\b|and\b|con\b|de\b|with\b)+/, "");
        ingredientes = separarIngredientes(frag);
    } else if (inteligente && !plato) {
        // Sin verbos: "arroz y huevo" (con alergias en el campo) o "pizza, soy celíaco"
        const partes = separarIngredientes(limpiarRestricciones(sinTiempo));
        if (partes.length > 1) ingredientes = partes;
        else if (partes.length === 1) plato = partes[0];
    }

    return { inteligente, plato, restricciones, minutos, ingredientes };
}

function ingredientesDe(meal) {
    const out = [];
    for (let i = 1; i <= 20; i++) {
        const ing = (meal["strIngredient" + i] || "").trim().toLowerCase();
        if (ing) out.push(ing);
    }
    return out;
}

// Ingredientes de la receta que chocan con alguna restricción
function conflictosDe(meal, restricciones) {
    const out = [];
    for (const ing of ingredientesDe(meal)) {
        for (const r of restricciones) {
            const d = RESTRICCIONES[r];
            if (d.palabras.test(ing) && !(d.excepciones && d.excepciones.test(ing))) {
                out.push({ ing, restriccion: r });
                break;
            }
        }
    }
    return out;
}

function sustitutoPara(ing, restriccion, lang) {
    const d = RESTRICCIONES[restriccion];
    const regla = d.sust.find(s => s.re.test(ing));
    return regla ? L(regla, lang) : L(d.general, lang);
}

// Estima los minutos leyendo "20 minutes", "1 hour"... en las instrucciones
function estimarMinutos(meal) {
    const txt = (meal.strInstructions || "").toLowerCase();
    let total = 0, hallado = false;
    for (const m of txt.matchAll(/(\d+)(?:\s*(?:-|to)\s*\d+)?\s*(hours?|hrs?|minutes?|mins?)\b/g)) {
        hallado = true;
        total += parseInt(m[1], 10) * (/^h/.test(m[2]) ? 60 : 1);
    }
    return hallado ? total + 10 : Math.max(15, Math.round(txt.length / 40));
}

function contarCoincidencias(meal, ingsEn) {
    const lista = ingredientesDe(meal);
    return ingsEn.filter(i => {
        const k = i.replace(/_/g, " ").replace(/s$/, "");
        return k && lista.some(x => x.includes(k));
    }).length;
}

// ==========================================
// 4.4 MODO ESTRICTO: SOLO TUS INGREDIENTES + CONDIMENTOS
// ==========================================
// Lo único que se permite sumar: sal, pimienta, aceite, vinagre, agua, hierbas, especias y salsas condimento.
// (Ajo y cebolla NO cuentan como condimento: si no los pusiste, no se usan.)
const ADJ_COND = "(?:ground|dried|fresh|freshly|chopped|crushed|flaked|black|white|sea|kosher|table|extra virgin|virgin|vegetable|sunflower|olive|sesame|canola|rapeseed|smoked|hot|sweet|mild|cold|warm|boiling|iced|ice|red wine|white wine|balsamic|cider|malt|rice|dijon|english|wholegrain|italian|mixed|dry|plain|good|pinch of|pinch)";
const BASE_COND = "(?:salt|pepper|peppercorns?|oil|vinegar|water|oregano|thyme|basil|parsley|rosemary|sage|dill|mint|chives|tarragon|coriander|cumin|paprika|cinnamon|nutmeg|turmeric|saffron|vanilla|allspice|cayenne(?: pepper)?|cloves|ginger|bay leaf|bay leaves|chil+i powder|chil+i flakes|curry powder|garam masala|garlic powder|onion powder|mustard|ketchup|mayonnaise|soy sauce|worcestershire sauce|tabasco|hot sauce|stock cube|bouillon cube|herbs|spices|mixed spice|herbes de provence|seasoning|italian seasoning)";
const ES_CONDIMENTO = new RegExp("^(?:" + ADJ_COND + "\\s+)*" + BASE_COND + "(?:\\s+(?:powder|flakes|leaves|leaf|seeds?|sprigs?))?$", "i");

function limpiarIng(ing) {
    return ing.toLowerCase().replace(/\(.*?\)/g, "").replace(/\s+/g, " ").trim();
}

function coincideIngrediente(ingReceta, ingEn) {
    const base = ingEn.replace(/_/g, " ").trim();
    const claves = [...new Set([base, base.replace(/s$/, ""), base.replace(/es$/, "")])].filter(k => k.length > 2);
    return claves.some(k => ingReceta.includes(k));
}

// Ingredientes de la receta que NO son tuyos ni condimentos
function ingredientesExtra(meal, ingsEn) {
    const extras = [];
    for (const crudo of ingredientesDe(meal)) {
        const ing = limpiarIng(crudo);
        if (ES_CONDIMENTO.test(ing)) continue;
        if (ingsEn.some(i => coincideIngrediente(ing, i))) continue;
        extras.push(ing);
    }
    return extras;
}

// Recetas (con detalle) que contienen alguno de tus ingredientes, las que usan más primero
async function candidatosPorIngredientes(ingsEn, max = 40) {
    const listas = (await Promise.all(ingsEn.map(recetasPorIngrediente))).filter(l => l.length);
    if (!listas.length) return [];
    const conteo = new Map();
    listas.forEach(l => l.forEach(m => {
        const e = conteo.get(m.idMeal) || { m, n: 0, r: Math.random() };
        e.n++;
        conteo.set(m.idMeal, e);
    }));
    const top = [...conteo.values()].sort((a, b) => b.n - a.n || a.r - b.r).slice(0, max);
    const detalles = await Promise.all(top.map(e => detalleReceta(e.m.idMeal).catch(() => null)));
    return detalles.filter(Boolean);
}

// Devuelve { hayCandidatos, exactas:[{meal,coincide}], cercanas:[{meal,extras}] }
async function buscarEstricto(ingsEn) {
    const candidatos = await candidatosPorIngredientes(ingsEn);
    if (!candidatos.length) return { hayCandidatos: false, exactas: [], cercanas: [] };
    const evaluadas = candidatos.map(meal => ({
        meal,
        extras: ingredientesExtra(meal, ingsEn),
        coincide: contarCoincidencias(meal, ingsEn)
    }));
    const exactas = evaluadas
        .filter(e => e.extras.length === 0 && e.coincide > 0)
        .sort((a, b) => b.coincide - a.coincide);
    const cercanas = evaluadas
        .slice()
        .sort((a, b) => a.extras.length - b.extras.length || b.coincide - a.coincide)
        .slice(0, 3)
        .map(e => ({ meal: e.meal, extras: e.extras }));
    return { hayCandidatos: true, exactas, cercanas };
}

// Mensaje cuando no existe ninguna receta que use solo tus ingredientes
async function htmlSinExactas(cercanas, ingredientes, lang) {
    const lista = ingredientes.map(escapeHtml).join(", ");
    let html = `${escapeHtml(t(lang, "sinExactas").replace("{l}", ingredientes.join(", ")))}\n`;
    const nombres = await Promise.all(cercanas.map(x => traducir(x.meal.strMeal, "en", lang)));
    const extras = await Promise.all(cercanas.map(x =>
        traducirChunk(x.extras.slice(0, 6).join("; "), "en", lang)));
    html += cercanas.map((x, i) =>
        `\n<button type="button" data-meal-id="${escapeHtml(x.meal.idMeal)}" ` +
        `style="margin:3px 4px 0 0;padding:6px 10px;border:none;border-radius:8px;` +
        `background:var(--primary);color:#fff;cursor:pointer;font-size:0.85rem;">` +
        `${escapeHtml(nombres[i])}</button> ` +
        `<i>${escapeHtml(t(lang, "ademasLleva"))}: ${escapeHtml(extras[i])}</i>`
    ).join("");
    return html;
}

// Búsqueda "inteligente": respeta plato, restricciones, tiempo e ingredientes
async function buscarRecetaInteligente(c, lang) {
    let candidatos = [];
    let ingsEn = await Promise.all(c.ingredientes.map(p => ingredienteAIngles(p, lang)));

    // 1) Si pidió un plato, buscarlo por nombre
    if (c.plato) {
        let consultas = DICC_PLATOS[c.plato.trim().toLowerCase()] || DICC_PLATOS[sinAcentos(c.plato.trim().toLowerCase())];
        if (!consultas) {
            const en = (await traducirChunk(c.plato, lang, "en")).toLowerCase().replace(/[^a-z\s]/g, "").trim();
            const palabras = en.split(/\s+/).filter(w => w.length > 2 && !STOPWORDS.has(w));
            consultas = [en, ...palabras];
        }
        for (const q of consultas) {
            if (!q) continue;
            const data = await getJSON(`${MEALDB}/search.php?s=${encodeURIComponent(q)}`);
            if (data.meals && data.meals.length) { candidatos = data.meals; break; }
        }
    }

    // Si dio ingredientes específicos, la receta solo puede usar esos (+ condimentos)
    const estricto = c.ingredientes.length > 0;
    if (estricto) {
        const porIng = await candidatosPorIngredientes(ingsEn);
        const ids = new Set(candidatos.map(m => m.idMeal));
        porIng.forEach(m => { if (!ids.has(m.idMeal)) candidatos.push(m); });
    }

    // 2) Si no hay plato (o no se encontró), buscar por ingredientes
    if (!candidatos.length) {
        if (!ingsEn.length && c.plato) ingsEn = [await ingredienteAIngles(c.plato, lang)];
        if (ingsEn.length) {
            const listas = (await Promise.all(ingsEn.map(recetasPorIngrediente))).filter(l => l.length);
            const conteo = new Map();
            listas.forEach(l => l.forEach(m => {
                const e = conteo.get(m.idMeal) || { m, n: 0, r: Math.random() };
                e.n++;
                conteo.set(m.idMeal, e);
            }));
            const top = [...conteo.values()].sort((a, b) => b.n - a.n || a.r - b.r).slice(0, 10);
            const detalles = await Promise.all(top.map(e => detalleReceta(e.m.idMeal).catch(() => null)));
            candidatos = detalles.filter(Boolean);
        }
    }
    if (!candidatos.length) return null;

    // 3) Evaluar cada candidata
    let evaluadas = candidatos.map(meal => ({
        meal,
        conflictos: conflictosDe(meal, c.restricciones),
        min: estimarMinutos(meal),
        coincide: contarCoincidencias(meal, ingsEn),
        extras: estricto ? ingredientesExtra(meal, ingsEn) : []
    }));

    // Con ingredientes específicos: descartar toda receta que lleve algo más que condimentos
    if (estricto) {
        const exactas = evaluadas.filter(e => e.extras.length === 0 && e.coincide > 0);
        if (!exactas.length) {
            const cercanas = evaluadas.slice()
                .sort((a, b) => a.extras.length - b.extras.length || b.coincide - a.coincide)
                .slice(0, 3)
                .map(e => ({ meal: e.meal, extras: e.extras }));
            return { sinExactas: true, consulta: c, cercanas };
        }
        evaluadas = exactas;
    }

    // Preferir las que no chocan con ninguna restricción; si no hay, las que menos choquen
    const limpias = evaluadas.filter(e => !e.conflictos.length);
    let pool = limpias.length ? limpias : evaluadas.slice().sort((a, b) => a.conflictos.length - b.conflictos.length);
    if (!limpias.length) {
        const minimo = pool[0].conflictos.length;
        pool = pool.filter(e => e.conflictos.length === minimo);
    }

    // Tiempo disponible
    let excedeTiempo = false;
    if (c.minutos) {
        const rapidas = pool.filter(e => e.min <= c.minutos);
        if (rapidas.length) pool = rapidas;
        else { excedeTiempo = true; pool = pool.slice().sort((a, b) => a.min - b.min); }
    }

    // Mejor coincidencia con tus ingredientes, luego la más rápida
    pool = pool.slice().sort((a, b) => b.coincide - a.coincide || (c.minutos ? a.min - b.min : 0));
    const mejor = pool[0];

    const resto = evaluadas.filter(e => e !== mejor);
    resto.sort((a, b) => a.conflictos.length - b.conflictos.length);

    return {
        meal: mejor.meal,
        otros: resto.slice(0, 3).map(e => e.meal),
        consulta: c,
        conflictos: mejor.conflictos,
        coincide: mejor.coincide,
        total: ingsEn.length,
        minutos: mejor.min,
        excedeTiempo
    };
}

async function botonesOtros(otros, lang) {
    const nombres = await Promise.all(otros.map(o => traducir(o.strMeal, "en", lang)));
    let html = `\n\n<b>${escapeHtml(t(lang, "tambien"))}:</b>\n`;
    html += otros.map((o, i) =>
        `<button type="button" data-meal-id="${escapeHtml(o.idMeal)}" ` +
        `style="margin:3px 4px 0 0;padding:6px 10px;border:none;border-radius:8px;` +
        `background:var(--primary);color:#fff;cursor:pointer;font-size:0.85rem;">` +
        `${escapeHtml(nombres[i])}</button>`
    ).join("");
    return html;
}

function textoRestricciones(restricciones, lang) {
    return restricciones.map(r => L(RESTRICCIONES[r].nombre, lang)).join(", ");
}

async function armarRespuestaInteligente(res, lang) {
    const c = res.consulta;
    if (res.sinExactas) return await htmlSinExactas(res.cercanas, c.ingredientes, lang);
    const restrTxt = textoRestricciones(c.restricciones, lang);
    let html = "";

    // Resumen de lo que entendió
    const partes = [];
    if (c.plato) partes.push(`${escapeHtml(c.plato)}`);
    if (c.restricciones.length) partes.push(`${escapeHtml(restrTxt)}`);
    if (c.minutos) partes.push(`≤ ${c.minutos} min`);
    if (c.ingredientes.length) partes.push(`${c.ingredientes.map(escapeHtml).join(", ")}`);
    if (partes.length) html += `<i>${escapeHtml(t(lang, "entendi"))}: ${partes.join(" · ")}</i>\n`;

    if (c.ingredientes.length) {
        const aviso = res.coincide >= res.total
            ? t(lang, "usaTodos")
            : t(lang, "usaAlgunos").replace("{n}", res.coincide).replace("{t}", res.total);
        html += `<i>${escapeHtml(aviso)}</i>\n`;
        html += `<i>${escapeHtml(t(lang, "soloTuyos"))}</i>\n`;
    }
    if (c.minutos && res.excedeTiempo) {
        html += `<i>${escapeHtml(t(lang, "tiempoNoLlega").replace("{m}", c.minutos))}</i>\n`;
    }
    html += `${escapeHtml(t(lang, "tiempoAprox").replace("{m}", res.minutos))}\n\n`;

    // Receta
    html += await formatearReceta(res.meal, lang);

    // Aptitud / adaptaciones
    if (c.restricciones.length) {
        if (res.conflictos.length) {
            const unicos = [];
            res.conflictos.forEach(x => { if (!unicos.some(u => u.ing === x.ing)) unicos.push(x); });
            const nombres = await Promise.all(unicos.map(x => traducirChunk(x.ing, "en", lang)));
            html += `\n\n<b>${escapeHtml(t(lang, "recetaAdaptada").replace("{r}", restrTxt))}</b>\n`;
            html += unicos.map((x, i) =>
                `• ${escapeHtml(nombres[i] || x.ing)} → ${escapeHtml(sustitutoPara(x.ing, x.restriccion, lang))}`
            ).join("\n");
        } else {
            html += `\n\n${escapeHtml(t(lang, "recetaApta").replace("{r}", restrTxt))}`;
        }
        const avisos = [...new Set(c.restricciones.map(r => L(RESTRICCIONES[r].aviso, lang)))];
        html += `\n\n${avisos.map(escapeHtml).join(" ")}`;
    }

    if (res.otros && res.otros.length) html += await botonesOtros(res.otros, lang);
    return html;
}

// ==========================================
// 4.9 FAVORITOS (se guardan en este navegador)
// ==========================================
const CLAVE_FAVS = 'foodchef_favs';
const idiomaActual = () => document.getElementById('idioma').value;

function leerFavs() {
    try { return JSON.parse(localStorage.getItem(CLAVE_FAVS)) || []; } catch (e) { return []; }
}
function escribirFavs(lista) {
    try { localStorage.setItem(CLAVE_FAVS, JSON.stringify(lista)); } catch (e) { /* storage bloqueado */ }
}

// Envuelve una receta con su botón "Guardar"
function envolverReceta(id, titulo, html, lang) {
    return `<div class="receta" data-id="${escapeHtml(id)}" data-titulo="${escapeHtml(titulo)}">${html}\n\n` +
           `<button type="button" class="btn-guardar-receta">${escapeHtml(t(lang, "guardar"))}</button></div>`;
}

function renderFavs() {
    const lang = idiomaActual();
    const cont = document.getElementById('fav');
    const favs = leerFavs();
    if (!favs.length) {
        cont.innerHTML = `<div class="fav-item"><i>${escapeHtml(t(lang, "sinFavs"))}</i></div>`;
        return;
    }
    cont.innerHTML = favs.map(f =>
        `<div class="fav-item"><span>${escapeHtml(f.titulo)}</span><span style="white-space:nowrap">` +
        `<button type="button" data-fav-ver="${escapeHtml(f.id)}">${escapeHtml(t(lang, "ver"))}</button>` +
        `<button type="button" data-fav-del="${escapeHtml(f.id)}">${escapeHtml(t(lang, "borrar"))}</button></span></div>`
    ).join('');
}

function vaciarFavs() {
    try { localStorage.removeItem(CLAVE_FAVS); } catch (e) { /* nada */ }
    renderFavs();
    alert(t(idiomaActual(), 'alertaFavs'));
}

// ==========================================
// 5. MÉTODOS DEL CHAT
// ==========================================
function toggleDark() {
    document.body.classList.toggle('dark');
}

function toggleSettings() {
    document.getElementById('settingsMenu').classList.toggle('open');
}

function agregarMensaje(clase, html) {
    const chat = document.getElementById('chat');
    const div = document.createElement('div');
    div.className = 'msg ' + clase;
    div.innerHTML = html;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
    return div;
}

let buscando = false;

async function enviar() {
    if (buscando) return;

    const input = document.getElementById('input');
    const textoOriginal = input.value.trim();
    const textoUsuario = textoOriginal.toLowerCase();
    if (!textoOriginal) return;

    const lang = document.getElementById('idioma').value;
    const btn = document.getElementById('btn');

    // 1. Mensaje del usuario (escapado para evitar inyección de HTML)
    agregarMensaje('user', escapeHtml(textoOriginal));
    input.value = '';

    // 2. Mensaje de "buscando..."
    buscando = true;
    btn.disabled = true;
    const cargando = agregarMensaje('ia', t(lang, "buscando"));

    let respuestaFinal = "";
    const consulta = analizarConsulta(textoOriginal, lang);
    try {
        if (consulta.inteligente) {
            // Frase libre: plato / restricciones / tiempo / ingredientes
            if (!consulta.plato && !consulta.ingredientes.length) {
                respuestaFinal = escapeHtml(t(lang, "faltaInfo"));
            } else {
                const r = await buscarRecetaInteligente(consulta, lang);
                respuestaFinal = r ? await armarRespuestaInteligente(r, lang)
                                   : escapeHtml(t(lang, "sinResultados"));
            }
        } else {
            // Búsqueda clásica: "pizza", "arroz y huevo"...
            const resultado = await buscarRecetaEnInternet(textoOriginal, lang);
            if (resultado) {
                respuestaFinal = await armarRespuesta(resultado, lang);
            } else {
                respuestaFinal = escapeHtml(t(lang, "sinResultados"));
            }
        }
    } catch (error) {
        console.error("Error buscando receta:", error);
        const local = recetaLocal(textoUsuario, lang, textoOriginal);
        respuestaFinal = escapeHtml(t(lang, "sinConexion")) + "\n\n" +
            (local || escapeHtml(t(lang, "sinResultados")));
        if (local && consulta.restricciones.length) {
            respuestaFinal += "\n\n" + escapeHtml(
                t(lang, "sinConexionRestr").replace("{r}", textoRestricciones(consulta.restricciones, lang)));
        }
    }

    // 3. Reemplazar "buscando..." por la receta
    cargando.innerHTML = respuestaFinal;
    document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;

    buscando = false;
    btn.disabled = false;
}

// Cambio de idioma desde el selector de la landing: sincroniza con el de la IA
function cambiarIdiomaDesdeLanding() {
    const lang = document.getElementById('idiomaLanding').value;
    document.getElementById('idioma').value = lang;
    cambiarIdiomaInterfaz();
}

const etiquetasCabecera = {
    es: { ajustes: 'Ajustes', tema: 'Tema' },
    en: { ajustes: 'Settings', tema: 'Theme' },
    pt: { ajustes: 'Ajustes', tema: 'Tema' },
    fr: { ajustes: 'Réglages', tema: 'Thème' },
    it: { ajustes: 'Impostazioni', tema: 'Tema' }
};

function cambiarIdiomaInterfaz() {
    const lang = document.getElementById('idioma').value;

    // Mantener sincronizados ambos selectores y recordar la elección
    const selLanding = document.getElementById('idiomaLanding');
    if (selLanding && [...selLanding.options].some(o => o.value === lang)) selLanding.value = lang;
    document.documentElement.lang = lang;
    const et = etiquetasCabecera[lang] || etiquetasCabecera.es;
    const bAj = document.getElementById('btnAjustes'); if (bAj) bAj.innerText = et.ajustes;
    const bTe = document.getElementById('btnSol'); if (bTe) bTe.innerText = et.tema;
    try { localStorage.setItem('foodchef_lang', lang); } catch (e) { /* storage bloqueado */ }

    if (translations[lang]) {
        if (document.getElementById('text-pregunta')) document.getElementById('text-pregunta').innerText = translations[lang].pregunta;
        if (document.getElementById('text-titulo')) document.getElementById('text-titulo').innerHTML = translations[lang].titulo;
        if (document.getElementById('text-ventajas')) document.getElementById('text-ventajas').innerHTML = translations[lang].ventajas;
        if (document.getElementById('input-email')) document.getElementById('input-email').placeholder = translations[lang].placeholder;
        if (document.getElementById('btn-submit')) document.getElementById('btn-submit').innerText = translations[lang].btnSubmit;

        document.getElementById('welcomeMsg').innerText = translations[lang].welcome;
        document.getElementById('input').placeholder = translations[lang].inputPlaceholder;
        document.getElementById('btn').innerText = translations[lang].btnGenerar;
        document.getElementById('disclaimerTxt').innerText = translations[lang].disclaimer;
        document.getElementById('lblFavs').innerText = translations[lang].lblFavs;
        document.getElementById('lblVoz').innerText = translations[lang].lblVoz;
        document.getElementById('lblTono').innerText = translations[lang].lblTono;
        document.getElementById('lblAlergias').innerText = translations[lang].lblAlergias;
        document.getElementById('btnCerrarSesion').innerText = translations[lang].btnCerrarSesion;
        document.getElementById('btnBorrarFavs').innerText = t(lang, 'borrarTodos');
        document.getElementById('alergias').placeholder = t(lang, 'phAlergias');
        renderFavs();
    }
}


// Click en las recetas sugeridas dentro del chat
document.getElementById('chat').addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-meal-id]');
    if (!btn || buscando) return;
    const lang = document.getElementById('idioma').value;
    buscando = true;
    agregarMensaje('user', escapeHtml(btn.textContent));
    const cargando = agregarMensaje('ia', t(lang, "buscando"));
    try {
        const meal = await detalleReceta(btn.dataset.mealId);
        cargando.innerHTML = meal ? await formatearReceta(meal, lang) : escapeHtml(t(lang, "sinResultados"));
    } catch (err) {
        cargando.innerHTML = escapeHtml(t(lang, "sinConexion"));
    }
    buscando = false;
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
});

// Restaurar el idioma elegido la última vez
try {
    const idiomaGuardado = localStorage.getItem('foodchef_lang');
    if (idiomaGuardado && translations[idiomaGuardado]) {
        document.getElementById('idioma').value = idiomaGuardado;
        cambiarIdiomaInterfaz();
    }
} catch (e) { /* nada */ }

// Si ya inició sesión antes, entra directo a la IA sin pasar por la landing
if (obtenerSesion()) {
    mostrarIA();
}

// Guardar receta en favoritos
document.getElementById('chat').addEventListener('click', (e) => {
    const b = e.target.closest('.btn-guardar-receta');
    if (!b) return;
    const box = b.closest('.receta');
    if (!box) return;
    const lang = idiomaActual();
    const id = box.dataset.id + '_' + lang;
    const favs = leerFavs();
    if (!favs.some(f => f.id === id)) {
        const clon = box.cloneNode(true);
        clon.querySelectorAll('.btn-guardar-receta').forEach(x => x.remove());
        favs.unshift({ id, titulo: box.dataset.titulo, html: clon.innerHTML.trim() });
        escribirFavs(favs.slice(0, 50));
        renderFavs();
    }
    b.textContent = t(lang, 'guardada');
    b.disabled = true;
});

// Ver / borrar un favorito
document.getElementById('fav').addEventListener('click', (e) => {
    const ver = e.target.closest('[data-fav-ver]');
    const del = e.target.closest('[data-fav-del]');
    if (ver) {
        const f = leerFavs().find(x => x.id === ver.dataset.favVer);
        if (f) agregarMensaje('ia', f.html);
    } else if (del) {
        escribirFavs(leerFavs().filter(x => x.id !== del.dataset.favDel));
        renderFavs();
    }
});

renderFavs();
