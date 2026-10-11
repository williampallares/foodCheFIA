// ==========================================
// 1. BASE DE DATOS LOCAL (RESPALDO SI NO HAY INTERNET)
// ==========================================
const RECIPES_INTERNET_DATABASE = {
    pizza: {
        es: "<b>🍕 Receta de Pizza Casera:</b>\n1. Mezclar 500g de harina con 10g de levadura, sal y agua tibia.\n2. Amasar por 10 minutos y dejar leudar.\n3. Estirar la masa en una asadera, agregar salsa de tomate y queso muzzarella.\n4. Hornear a fuego máximo por 15 minutos.",
        en: "<b>🍕 Homemade Pizza Recipe:</b>\n1. Mix 500g of flour with 10g of yeast, salt, and warm water.\n2. Knead for 10 minutes and let it rise.\n3. Stretch the dough, add tomato sauce and mozzarella cheese.\n4. Bake at maximum temperature for 15 minutes."
    },
    milanesas: {
        es: "<b>🥩 Receta de Milanesas Tradicionales:</b>\n1. Pasar la carne (nalga o pollo) por huevo batido con ajo y perejil.\n2. Rebozar con pan rallado presionando bien.\n3. Cocinar al horno con un hilo de aceite o freír en aceite caliente hasta que estén doradas.",
        en: "<b>🥩 Traditional Milanesas Recipe:</b>\n1. Dip the meat (beef or chicken) in beaten eggs with garlic and parsley.\n2. Coat with breadcrumbs, pressing firmly.\n3. Bake with a drizzle of oil or fry in hot oil until golden brown."
    },
    arroz: {
        es: "<b>🍚 Receta de Arroz con Huevo Frito:</b>\n1. Hervir una taza de arroz con dos tazas de agua y una pizca de sal.\n2. En una sartén con aceite caliente, freír un huevo dejando la yema blanda.\n3. Servir el arroz caliente y colocar el huevo frito encima con una pizca de pimienta.",
        en: "<b>🍚 Rice with Fried Egg Recipe:</b>\n1. Boil one cup of rice with two cups of water and a pinch of salt.\n2. In a pan with hot oil, fry an egg keeping the yolk soft.\n3. Serve the hot rice and place the fried egg on top with a pinch of pepper."
    },
    hamburguesas: {
        es: "<b>🍔 Receta de Hamburguesas Caseras:</b>\n1. Condimentar carne picada con sal, pimienta y una cucharada de mostaza.\n2. Armar bollos y aplastarlos en forma de disco.\n3. Cocinar en una plancha caliente por 4 minutos de cada lado. Agregar queso arriba al dar la vuelta.",
        en: "<b>🍔 Homemade Burgers Recipe:</b>\n1. Season minced beef with salt, pepper, and a tablespoon of mustard.\n2. Shape into balls and flatten into patties.\n3. Cook on a hot griddle for 4 minutes per side. Add cheese on top when flipping."
    }
};

// ==========================================
// 2. DICCIONARIO PARA LA INTERFAZ
// ==========================================
const translations = {
    es: {
        pregunta: "¿No tienes tiempo para cocinar?",
        titulo: "¡¡No hay problema!! En <span class='marca'>foodChefIa</span> resolvemos tu cena en minutos.",
        ventajas: "❌ SIN anuncios &nbsp;|&nbsp; ❌ SIN suscripciones molestas",
        placeholder: "Ingresa tu correo aquí...",
        btnSubmit: "¡¡¡Cocina ya!!!",
        welcome: "¡Hola! Decime qué tenés en la heladera y te busco la receta.",
        inputPlaceholder: "Ej: pizza, milanesas, algo con arroz y huevo...",
        btnGenerar: "Generar receta",
        disclaimer: "⚠️ La IA puede cometer errores.",
        lblFavs: "⭐ Recetas Favoritas",
        lblVoz: "🔊 Lectura por voz",
        lblTono: "🎚 Tono de voz",
        lblAlergias: "🚫 Alergias o restricciones",
        btnCerrarSesion: "🚪 Cerrar sesión",
        alertaCorreo: "Por favor, ingresa un correo válido.",
        alertaFavs: "Todos los favoritos borrados.",
        buscando: "🔎 Buscando recetas en internet...",
        ingredientes: "Ingredientes",
        preparacion: "Preparación",
        fuente: "Ver fuente original",
        sinResultados: "No encontré una receta para eso. Probá con otros ingredientes o con el nombre de un plato (ej: pollo, pasta, arroz).",
        sinConexion: "⚠️ No pude conectarme a internet, te muestro una receta guardada.",
        conIngredientes: "Con tus ingredientes",
        usaTodos: "esta receta usa todos",
        usaAlgunos: "esta receta usa {n} de {t}",
        tambien: "También podrías hacer"
    },
    en: {
        pregunta: "No time to cook?",
        titulo: "No problem! At <span class='marca'>foodChefIa</span>, we solve your dinner in minutes.",
        ventajas: "❌ NO ads &nbsp;|&nbsp; ❌ NO annoying subscriptions",
        placeholder: "Enter your email here...",
        btnSubmit: "Cook now!",
        welcome: "Hello! Tell me what you have in the fridge and I will find the recipe.",
        inputPlaceholder: "Ex: pizza, burgers, something with rice and eggs...",
        btnGenerar: "Generate recipe",
        disclaimer: "⚠️ AI can make mistakes.",
        lblFavs: "⭐ Favorite Recipes",
        lblVoz: "🔊 Voice reading",
        lblTono: "🎚 Voice pitch",
        lblAlergias: "🚫 Allergies or restrictions",
        btnCerrarSesion: "🚪 Log out",
        alertaCorreo: "Please enter a valid email.",
        alertaFavs: "All favorites deleted.",
        buscando: "🔎 Searching recipes on the internet...",
        ingredientes: "Ingredients",
        preparacion: "Instructions",
        fuente: "View original source",
        sinResultados: "I couldn't find a recipe for that. Try other ingredients or a dish name (e.g. chicken, pasta, rice).",
        sinConexion: "⚠️ I couldn't connect to the internet, here's a saved recipe.",
        conIngredientes: "With your ingredients",
        usaTodos: "this recipe uses all of them",
        usaAlgunos: "this recipe uses {n} of {t}",
        tambien: "You could also make"
    }
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

    const tuGmail = "juan.manuel.aguirre.pallares@gmail.com";
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

    // A) Varios ingredientes -> buscar la receta que use más de ellos
    if (partes.length > 1) {
        const ingsEn = await Promise.all(partes.map(p => ingredienteAIngles(p, lang)));
        const listas = await Promise.all(ingsEn.map(recetasPorIngrediente));
        const conDatos = listas.filter(l => l.length);

        if (conDatos.length) {
            const conteo = new Map();
            conDatos.forEach(lista => lista.forEach(m => {
                const e = conteo.get(m.idMeal) || { meal: m, n: 0, r: Math.random() };
                e.n++;
                conteo.set(m.idMeal, e);
            }));
            const ranking = [...conteo.values()].sort((a, b) => b.n - a.n || a.r - b.r);
            const mejor = ranking[0];
            const meal = await detalleReceta(mejor.meal.idMeal);
            if (meal) {
                return {
                    meal,
                    otros: ranking.slice(1, 4).map(e => e.meal),
                    modo: "ingredientes",
                    coincide: mejor.n,
                    total: partes.length,
                    ingredientes: partes
                };
            }
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

    if (res.modo === "ingredientes") {
        const lista = res.ingredientes.map(escapeHtml).join(", ");
        const aviso = res.coincide >= res.total
            ? t(lang, "usaTodos")
            : t(lang, "usaAlgunos").replace("{n}", res.coincide).replace("{t}", res.total);
        html += `<i>🥕 ${escapeHtml(t(lang, "conIngredientes"))} (${lista}): ${escapeHtml(aviso)}</i>\n\n`;
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
    html += `<b>🍽️ ${escapeHtml(titulo)}</b>\n\n`;
    html += `<b>${t(lang, "ingredientes")}:</b>\n${listaIngs}\n\n`;
    html += `<b>${t(lang, "preparacion")}:</b>\n${pasos}`;

    const fuente = meal.strSource || meal.strYoutube;
    if (fuente && /^https?:\/\//.test(fuente)) {
        html += `\n\n🔗 <a href="${escapeHtml(fuente)}" target="_blank" rel="noopener noreferrer">${t(lang, "fuente")}</a>`;
    }
    return html;
}

// Respaldo local si falla internet
function recetaLocal(textoUsuario, lang, textoOriginal) {
    const l = RECIPES_INTERNET_DATABASE;
    let r = null;
    if (textoUsuario.includes("pizza")) r = l.pizza;
    else if (textoUsuario.includes("milanesa")) r = l.milanesas;
    else if (textoUsuario.includes("arroz") || textoUsuario.includes("huevo")) r = l.arroz;
    else if (textoUsuario.includes("hamburguesa") || textoUsuario.includes("burger")) r = l.hamburguesas;
    if (r) return r[lang] || r.es;
    return null;
}

// ==========================================
// 5. MÉTODOS DEL CHAT
// ==========================================
function toggleDark() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('btnSol');
    btn.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
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
    try {
        const resultado = await buscarRecetaEnInternet(textoOriginal, lang);
        if (resultado) {
            respuestaFinal = await armarRespuesta(resultado, lang);
        } else {
            respuestaFinal = escapeHtml(t(lang, "sinResultados"));
        }
    } catch (error) {
        console.error("Error buscando receta:", error);
        const local = recetaLocal(textoUsuario, lang, textoOriginal);
        respuestaFinal = escapeHtml(t(lang, "sinConexion")) + "\n\n" +
            (local || escapeHtml(t(lang, "sinResultados")));
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

function cambiarIdiomaInterfaz() {
    const lang = document.getElementById('idioma').value;

    // Mantener sincronizados ambos selectores y recordar la elección
    const selLanding = document.getElementById('idiomaLanding');
    if (selLanding && [...selLanding.options].some(o => o.value === lang)) selLanding.value = lang;
    document.documentElement.lang = lang;
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
    }
}

function vaciarFavs() {
    document.getElementById('fav').innerHTML = '';
    alert(t(document.getElementById('idioma').value, 'alertaFavs'));
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
