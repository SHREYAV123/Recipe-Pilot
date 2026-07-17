# 🍳 Recipe Pilot

> **AI-powered recipe generator that transforms your available ingredients into delicious recipes in seconds.**

Recipe Pilot helps users reduce food waste by generating personalized recipes using ingredients they already have. Simply enter the ingredients available in your kitchen, and the AI suggests recipes with cooking steps, estimated cooking time, serving size, nutritional information, and ingredient substitutions.

---

## 🚀 Live Demo

- **Frontend:** https://recipe-pilot-nine.vercel.app/
- **Backend API:** https://recipe-pilot.onrender.com/

---

# ✨ Features

- 🥕 Generate recipes using available ingredients
- 🤖 AI-powered recipe generation with Groq LLM
- 🍽️ Displays serving size
- ⏱️ Cooking time estimation
- 📝 Step-by-step cooking instructions
- 🔄 Ingredient substitution suggestions
- 🥗 Nutritional information
- 📱 Fully responsive design
- ⚡ Fast and modern React + Vite frontend
- 🌙 Beautiful dark UI

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- Lucide React

## Backend

- Node.js
- Express.js
- Groq API (Llama 3)
- CORS
- Dotenv

---

# 📂 Project Structure

```text
RecipePilot/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── IngredientInput.jsx
│   │   │   ├── RecipeCard.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Error.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── About.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   │   └── recipeController.js
│   │
│   ├── routes/
│   │   └── recipeRoutes.js
│   │
│   ├── services/
│   │   │   └── groqService.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/SHREYAV123/Recipe-Pilot.git

cd RecipePilot
```

---

## 2. Install Frontend

```bash
cd frontend

npm install
```

Run the frontend

```bash
npm run dev
```

---

## 3. Install Backend

```bash
cd backend

npm install
```

Create a `.env` file

```env
PORT=5000
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Run the backend

```bash
npm run dev
```

---

# 🔗 API Endpoint

### Generate Recipe

```http
POST /api/recipe
```

### Request Body

```json
{
  "ingredients": [
    "tomato",
    "onion",
    "potato",
    "cheese"
  ]
}
```

### Sample Response

```json
{
  "title": "Cheesy Potato Skillet",
  "time": "25 minutes",
  "servings": "2",
  "ingredients": [
    "2 potatoes",
    "1 onion",
    "1 tomato",
    "100g cheese"
  ],
  "steps": [
    "Slice the vegetables.",
    "Cook onions until golden.",
    "Add potatoes and tomatoes.",
    "Top with cheese and serve."
  ],
  "nutrition": {
    "calories": "420 kcal",
    "protein": "16 g",
    "carbs": "48 g",
    "fat": "18 g"
  },
  "swaps": [
    "Cheddar → Mozzarella",
    "Potato → Sweet Potato"
  ]
}
```

---

# 🎯 How It Works

1. Enter the ingredients available in your kitchen.
2. The React frontend sends the ingredients to the Express backend.
3. The backend calls the Groq AI API.
4. The AI generates a personalized recipe.
5. The recipe is displayed with:
   - Ingredients
   - Cooking steps
   - Cooking time
   - Serving size
   - Nutritional information
   - Ingredient substitutions

---

# 📦 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# 💻 Available Scripts

## Frontend

```bash
npm run dev
npm run build
npm run preview
```

## Backend

```bash
npm run dev
npm start
```

---

# 🚀 Future Improvements

- ❤️ Save favorite recipes
- 📜 Recipe history
- 🛒 Grocery shopping list
- 🌐 Multi-language support
- 🎙️ Voice-based ingredient input
- 📷 Ingredient detection using image upload
- 🍕 Cuisine and diet filters
- 🔍 Search recipes
- 👤 User authentication

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push to GitHub.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 👨‍💻 Author

**Shreya Sahu**

---

# ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.

It motivates me to build more open-source projects!
