# Stryker + Playwright Hello World

Minimales Beispielprojekt für Mutation Testing mit [StrykerJS](https://stryker-mutator.io/) und Playwright E2E-Tests.

Die Beispielanwendung berechnet einen Rabatt:

- ab 100 Euro gibt es 10 % Rabatt
- darunter bleibt der Preis unverändert

Stryker mutiert den JavaScript-Code in `src/price.js` und startet anschließend die Playwright-Tests.

## Projektstruktur

```text
.
├─ public/
│  └─ index.html
├─ src/
│  └─ price.js
├─ tests/
│  └─ price.spec.js
├─ package.json
├─ playwright.config.js
├─ stryker.config.mjs
└─ README.md
```

## Installation

```bash
npm install
npx playwright install
```

## Anwendung lokal starten

```bash
npm run start
```

Danach im Browser öffnen:

```text
http://127.0.0.1:5173
```

## Playwright E2E-Test ausführen

```bash
npm run test:e2e
```

## Mutationstests ausführen

```bash
npm run mutation
```

Stryker erzeugt Mutanten aus `src/price.js`, zum Beispiel aus:

```js
amount >= 100
```

wird unter anderem:

```js
amount > 100
```

Der Playwright-Test prüft bewusst den Grenzwert `100`. Dadurch sollte dieser Mutant erkannt und getötet werden.

## Hinweis für echte Projekte

Für große Anwendungen sollte man nicht sofort den kompletten Code mutieren. Sinnvoller ist ein kleiner Startbereich, zum Beispiel:

```js
mutate: [
  "src/app/domain/**/*.ts",
  "src/app/services/**/*.ts"
]
```

E2E-basierte Mutationstests sind deutlich langsamer als Unit-Test-basierte Mutationstests.
