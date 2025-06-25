# 🎮 GameHub - Prohlížeč her

GameHub je responzivní webová aplikace postavená pomocí Reactu a TypeScriptu, která uživatelům umožňuje procházet, vyhledávat a filtrovat videohry s využitím [RAWG Video Games Database API](https://rawg.io/apidocs). Cílem projektu bylo vytvořit čisté a intuitivní uživatelské rozhraní pro objevování nových herních titulů.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

**[Live Demo](https://[SEM_VLOŽTE_ODKAZ_NA_VAŠI_NASAZENOU_APLIKACI])**

---

## 📸 Náhled aplikace

*(Doporučuji sem vložit screenshot nebo krátký GIF, jak vaše aplikace vypadá v akci. Můžete ho nahrát přímo do GitHub repozitáře a odkázat na něj.)*

![GameHub Screenshot](/[CESTA_K_VAŠEMU_SCREENSHOTU].png)

---

## ✨ Klíčové funkce

* **Procházení her:** Zobrazení seznamu her v přehledné mřížce s obrázkem, názvem, hodnocením a žánry.
* **Vyhledávání v reálném čase:** Vyhledávací pole pro rychlé nalezení konkrétní hry.
* **Pokročilé filtrování:** Možnost filtrovat hry podle žánru a platformy.
* **Detail hry:** Samostatná stránka pro každou hru s podrobnými informacemi, jako je popis, vydavatel, platformy a screenshoty.
* **Paginace:** Možnost listovat mezi stránkami výsledků a prozkoumat tak kompletní katalog her.
* **Loading Skeletons:** Moderní zobrazení načítání pro lepší uživatelský zážitek.
* **Responzivní design:** Aplikace je plně funkční a skvěle vypadá na mobilních zařízeních, tabletech i desktopech.

---

## 🚀 Použité technologie

Tento projekt byl vytvořen s využitím moderních technologií a postupů ve front-end vývoji.

* **React (s Vite)** - Pro rychlý a moderní vývoj uživatelského rozhraní.
* **TypeScript** - Pro typovou bezpečnost a lepší škálovatelnost kódu.
* **TailwindCSS** - Pro rychlé a efektivní stylování pomocí utility-first tříd.
* **Zustand** - Jako minimalistický a výkonný nástroj pro globální správu stavu (filtry, stránkování).
* **React Router** - Pro zajištění navigace a vícestránkové struktury aplikace.
* **RAWG API** - Jako zdroj veškerých dat o videohrách.

---

## 🔧 Instalace a spuštění lokálně

Pro spuštění projektu na vašem lokálním stroji postupujte následovně:

1.  **Naklonujte repozitář:**
    ```bash
    git clone [https://github.com/Dominik-G-js/Gamehub.git](https://github.com/Dominik-G-js/Gamehub.git)
    cd Gamehub
    ```

2.  **Nainstalujte závislosti:**
    ```bash
    npm install
    ```

3.  **Nastavte API klíč:**
    * Vytvořte v kořenovém adresáři projektu soubor `.env.local`.
    * Do souboru vložte svůj API klíč z [rawg.io](https://rawg.io/apidocs) v následujícím formátu:
        ```
        VITE_RAWG_API_KEY=VAŠ_API_KLÍČ_SEM
        ```

4.  **Spusťte vývojový server:**
    ```bash
    npm run dev
    ```
    Aplikace by měla být dostupná na adrese `http://localhost:5173`.

---

## 📂 Struktura projektu

Projekt je strukturován s důrazem na modularitu a přehlednost.

```
src/
├── api/          # Funkce pro komunikaci s API
├── components/   # Znovupoužitelné UI komponenty (GameCard, Navbar...)
├── hooks/        # Vlastní React hooky (useGames, useGenres...)
├── pages/        # Komponenty pro jednotlivé stránky (HomePage, GameDetailPage...)
├── store/        # Logika pro Zustand store
├── types/        # TypeScript definice typů a rozhraní
└── App.tsx       # Hlavní komponenta a definice routování
```

---

## ✍️ Autor

**Dominik G.**

* GitHub: [@Dominik-G-js](https://github.com/Dominik-G-js)
* LinkedIn: [in/dominik-g-9aab2b225](https://www.linkedin.com/in/dominik-g-9aab2b225/)
