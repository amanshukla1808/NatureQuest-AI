# 🌿 NatureQuest AI

### **Get Out. Explore. Discover.**

NatureQuest AI is an AI-powered outdoor exploration game designed to encourage people to **put their phones down and interact with the real world**.

Instead of using AI to keep users on a screen, NatureQuest uses AI to create personalized outdoor missions, analyze discoveries, and encourage users to explore nature.

> **“Most AI apps try to keep you on the screen. NatureQuest AI uses AI to get you off it.”**

---

## 🎯 The Problem

People increasingly spend their free time looking at screens instead of interacting with their surroundings.

Even when people go outside, they often remain focused on their phones.

NatureQuest AI approaches this problem differently:

**The screen is only used to start the experience. The actual experience happens outside.**

---

## 💡 Our Solution

NatureQuest AI turns an ordinary walk into an interactive outdoor adventure.

The user receives an AI-generated mission such as:

* 🌿 Find something with a repeating natural pattern.
* 🍃 Find two different types of leaves.
* 🐦 Find evidence that an animal has been nearby.
* 🌳 Find something in nature older than you.
* 🔎 Discover something you normally ignore.

The user then puts their phone away, completes the mission, and returns to document their discovery.

AI analyzes the discovery and unlocks the next challenge.

---

## 🤖 AI at the Core

AI isn't just being used as a chatbot.

NatureQuest AI is designed around AI for:

* 📸 Understanding outdoor discoveries
* 🧠 Generating exploration missions
* 🎯 Verifying mission completion
* 🔄 Adapting future missions to the user's discoveries
* 🌱 Creating a personalized outdoor experience

The long-term goal is to run an **open-weight AI model locally in the browser**, minimizing the need to send user photos to external servers.

---

## 🔐 Why Open-Source AI?

Open AI models are important to this project because the application deals with **photos of the user's surroundings**.

A local/open approach can provide:

### 🔒 Privacy

Photos and observations can remain on the user's device instead of being sent to a third-party AI service.

### 📡 Offline capability

The long-term architecture can allow NatureQuest to work in areas with little or no internet connectivity.

### 💰 Lower cost

Local inference can eliminate per-request API costs.

### 🛠️ Customization

Developers can replace, modify, or fine-tune the model for different environments.

### 🌍 Accessibility

Open models make it possible for developers to build and experiment without depending entirely on a closed AI provider.

---

# 🎮 How It Works

```text
             START
                │
                ▼
        🤖 AI generates
          outdoor mission
                │
                ▼
          📱 PHONE DOWN
                │
                ▼
       🌳 Explore the real world
                │
                ▼
         📸 Document discovery
                │
                ▼
        🤖 AI analyzes discovery
                │
                ▼
          ⭐ Earn XP
                │
                ▼
       🎯 Unlock next mission
```

---

# ✨ Features

### 🎯 AI Outdoor Missions

Receive challenges designed to make you interact with your surroundings.

### 📸 Discovery Upload

Take a photograph of what you discovered.

### 🤖 AI Verification

The AI can analyze the discovery and determine whether the mission was completed.

### ⭐ XP & Levels

Complete missions to earn experience points and progress through different explorer levels.

### 🔒 Phone Down Mode

Once a mission begins, the user is encouraged to stop looking at the screen and explore.

### 🌱 Adaptive Exploration

Future versions can generate missions based on what the user has already discovered.

### 📱 Mobile Friendly

Designed to work on phones so users can take the experience outdoors.

---

# 🏗️ Tech Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript

### AI

* Open-weight / open-source AI model
* Browser-based inference
* Computer vision for outdoor discovery analysis

### Storage

* Browser Local Storage
* No mandatory user account

---

# 📁 Project Structure

```text
NatureQuest-AI/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/NatureQuest-AI.git
```

## 2. Open the project

Go into the project directory:

```bash
cd NatureQuest-AI
```

## 3. Run the project

You can simply open:

```text
index.html
```

in a modern web browser.

For the best experience, use a local development server such as VS Code Live Server.

---

# 🧪 Current Prototype

The current prototype includes:

* Landing page
* Outdoor mission generation
* Mission timer
* Camera/photo upload
* XP system
* Level system
* Mission completion flow
* Responsive mobile interface

The AI verification layer is currently represented by a prototype function and can be replaced with a browser-compatible open-weight model.

---

# 🔮 Future Roadmap

### Phase 1 — Prototype

* [x] Landing page
* [x] Mission system
* [x] XP system
* [x] Camera upload
* [x] Responsive UI

### Phase 2 — Real AI

* [ ] Integrate browser-compatible open-weight vision model
* [ ] Real image classification
* [ ] AI-generated missions
* [ ] Mission verification
* [ ] Confidence scores

### Phase 3 — Outdoor Intelligence

* [ ] Plant identification
* [ ] Bird identification
* [ ] Animal evidence detection
* [ ] Environmental observation
* [ ] Offline AI inference

### Phase 4 — Personal Nature Journal

* [ ] Local discovery history
* [ ] Exploration map
* [ ] Visit history
* [ ] Environmental changes over time
* [ ] Personal biodiversity dashboard

---

# 🏆 Touch Grass Challenge

NatureQuest AI was built around the idea:

> **What if AI didn't make us spend more time on our phones?**

Instead of maximizing screen time, NatureQuest minimizes it.

The application gives the user an objective, sends them outside, and encourages them to put the phone away.

**AI starts the adventure.
The real world completes it.**

---

# 🌍 Example Mission

```text
🎯 MISSION #01

Find something outside that has
a repeating natural pattern.

⏱ 05:00

🔒 PHONE DOWN

Go explore.

Come back when you've found it.
```

After the user returns:

```text
📸 Upload your discovery

        ↓

🤖 AI ANALYSIS

        ↓

✅ MISSION COMPLETED

+50 XP

        ↓

🎯 NEXT MISSION
```

---

# 🔒 Privacy Philosophy

NatureQuest AI is designed with a **local-first philosophy**.

The goal is to make AI useful without requiring users to continuously upload personal photos, location information, or observations to centralized servers.

As the project evolves, open-weight models and browser-based inference will make this approach increasingly practical.

---

# 👨‍💻 Built For

**Touch Grass — Open-Source AI Challenge**

The project explores how open AI can be used to create technology that encourages **real-world interaction instead of increased screen time**.

---

## ⭐ If You Like This Project

Give the repository a ⭐ and follow the project as NatureQuest AI evolves.

### **Get out. Explore. Discover. 🌿**
