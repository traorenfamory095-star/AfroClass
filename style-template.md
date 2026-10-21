Bonne nouvelle : trois de tes quatre couleurs existent déjà dans Tailwind. Seul le bleu foncé est à déclarer.

| Couleur de la fiche | Hex | Classe Tailwind existante |
|---|---|---|
| Cyan | `#0891B2` | `cyan-600` |
| Accent | `#D97706` | `amber-600` |
| Fond clair | `#F8FAFC` | `slate-50` |
| Bleu foncé | `#0F2C59` | aucune, à créer |

## Ajouter le bleu foncé

L'idée est de donner un nom à ta couleur pour pouvoir écrire `bg-brand`, `text-brand`, etc. C'est comme enregistrer un pot de peinture sur mesure dans ta palette. Les 3 autres pots sont déjà dans la boîte.

**Tailwind v4** (celui d'une installation récente avec Vite), dans `src/index.css` :

```css
@import "tailwindcss";

@theme {
  --color-brand: #0F2C59;
  --color-accent: #D97706;
  --color-cyan-brand: #0891B2;
  --color-surface: #F8FAFC;
}
```

Ligne par ligne :
- `@import "tailwindcss";` charge Tailwind.
- `@theme { ... }` est la zone où tu déclares tes propres valeurs.
- `--color-brand: #0F2C59;` crée automatiquement `bg-brand`, `text-brand`, `border-brand`, etc. Le mot après `--color-` devient le nom de la classe.

**Tailwind v3**, dans `tailwind.config.js` :

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0F2C59",
        accent: "#D97706",
        "cyan-brand": "#0891B2",
        surface: "#F8FAFC",
      },
    },
  },
}
```

`extend` ajoute tes couleurs sans supprimer celles de Tailwind. Sans lui, tu remplacerais toute la palette par défaut.

## Utilisation

```jsx
<button className="bg-accent text-white px-5 py-2.5 rounded-xl">
  Commencer
</button>

<h1 className="text-brand text-4xl font-extrabold">
  Apprenez. Progressez.
</h1>

<body className="bg-surface">
```

## Quel choix faire ?

Pour l'accent, le cyan et le fond, tu peux soit écrire directement `bg-amber-600`, `text-cyan-600`, `bg-slate-50`, soit les renommer comme ci-dessus. Je te conseille de les renommer : si tu changes un jour de couleur d'accent, tu modifies une seule ligne au lieu de chercher `amber-600` dans tout le projet.

Pour savoir quelle version tu as, regarde si `tailwind.config.js` existe (v3) ou si ton `index.css` contient `@import "tailwindcss"` (v4).

Tu veux qu'on passe à l'initialisation du projet Vite avec Tailwind, étape par étape ?