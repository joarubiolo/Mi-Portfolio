#!/bin/bash
# Comandos para subir el portfolio a GitHub y deployar en Vercel
# Ejecutar en: C:\Users\rubio\Documents\Web Services\personal-web

# 1. Desconectar del repo anterior
git remote remove origin

# 2. Agregar nuevo remote (reemplaza TU_TOKEN con tu token de GitHub)
git remote add origin https://github.com/joarubiolo/Mi-Portfolio.git

# 3. Verificar que todo esté agregado
git add .

# 4. Crear commit
git commit -m "Initial commit: Portfolio Joaquin Rubiolo - Data Science

Features:
- Responsive portfolio website
- Bilingual support (ES/EN)
- Project showcase with filtering
- Contact form
- Modern UI with Tailwind CSS

Projects included:
- Restaurant Recommendation System (ML/XGBoost)
- AI Image Description Agent (OpenAI)
- Aurora Clothes Ecommerce (Vexor/MercadoPago)

Tech Stack:
- HTML5/CSS3/JavaScript
- Tailwind CSS
- Vercel for hosting"

# 5. Subir a GitHub
git push -u origin main

echo "✅ Portfolio subido a GitHub!"
echo "🌐 Repo: https://github.com/joarubiolo/Mi-Portfolio"
