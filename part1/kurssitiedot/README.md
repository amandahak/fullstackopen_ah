# Kurssin tehtävät 1.1, 1.2, 1.3, 1.4 ja 1.5 "Kurssitiedot"

_part1/kurssitiedot/src/App.jsx_

**Sovellus toimii seuraavasti:**

Kurssin tiedot (nimi ja osat) määritellään App-komponentissa.

_App_-komponentti välittää nämä tiedot propsien avulla alikomponenteille.

_Header_-komponentti näyttää kurssin nimen.

_Content_-komponentti käy läpi kurssin osat ja renderöi jokaisesta Part-komponentin.

_Part_-komponentti näyttää yhden osan nimen ja tehtävien määrän.

_Total_-komponentti laskee ja näyttää kaikkien osien tehtävien yhteismäärän.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


npm create vite@latest kurssitiedot -- --template react

> part1@0.0.0 npx
> create-vite kurssitiedot --template react