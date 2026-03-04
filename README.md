# Youth Arabská

Tento projekt je webová aplikace pro projekt Youth Arabská, postavená na **React**, **Vite** a **Tailwind CSS**.

## Požadavky

Před spuštěním se ujistěte, že máte nainstalované:
- [Node.js](https://nodejs.org/) (doporučena verze 18.x nebo novější)
- [npm](https://www.npmjs.com/) (obvykle součástí instalace Node.js)

## Spuštění projektu

Následujte tyto kroky pro zprovoznění projektu na vašem počítači:

1. **Klonování repozitáře:**
   ```bash
   git clone https://github.com/vase-uzivatelske-jmeno/YouthArabskaWeb.git
   cd YouthArabskaWeb
   ```

2. **Instalace závislostí:**
   ```bash
   npm install
   ```

3. **Spuštění vývojového serveru:**
   ```bash
   npm run dev
   ```
   Aplikace bude dostupná na adrese `http://localhost:5173`.

## Dostupné příkazy

- `npm run dev` – spustí lokální vývojový server
- `npm run build` – vytvoří produkční verzi aplikace ve složce `dist`
- `npm run preview` – lokální náhled produkčního buildu
- `npm run lint` – provede kontrolu kvality kódu (ESLint)

## Deployment

Projekt je nastaven pro automatické nasazení přes **GitHub Actions**. Při každém pushnutí do hlavní větve se spustí workflow, které aplikaci sestaví a nasadí.
