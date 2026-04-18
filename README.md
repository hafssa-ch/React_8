# 📘 TP 8 – Consommer une API avec Fetch et Axios dans React

## 🎯 Objectifs

* Comprendre la différence entre `fetch()` et `axios`
* Consommer une API REST
* Afficher des données dans React
* Gérer le chargement et les erreurs

---

## ⚙️ Installation

```bash
npx create-react-app tp-api
cd tp-api
npm install axios
npm start
```

---

## 📁 Structure du projet

```
src/
 ├── App.js
  components/
      ├── FetchData.js
      ├── AxiosData.js

 ├── App.css
 └── index.js
```

---

## 🔄 Fonctionnement

### 🔹 FetchData

* Utilise `fetch()`
* Récupère des articles depuis :
  https://jsonplaceholder.typicode.com/posts
* Affiche les 5 premiers titres

### 🔹 AxiosData

* Utilise `axios`
* Récupère des utilisateurs depuis :
  https://jsonplaceholder.typicode.com/users
* Affiche nom + email

---

## ⚡ Concepts utilisés

* `useState` → gérer les données
* `useEffect` → exécuter la requête au chargement
* Gestion des états :

  * `loading`
  * `error`

---

## 🖥️ Résultat attendu

* Liste des articles (fetch)
* Liste des utilisateurs (axios)
* Messages de chargement et d’erreur


https://github.com/user-attachments/assets/c863913f-bbc6-4207-a753-71fed4571bac


---

## 🧠 Résumé

| fetch()               | axios             |
| --------------------- | ----------------- |
| Natif                 | Librairie externe |
| Plus verbeux          | Plus simple       |
| Gestion manuelle JSON | Automatique       |

---

## 📌 API utilisée

https://jsonplaceholder.typicode.com/

---
