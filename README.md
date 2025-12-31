### 1Project Overview
This project is built as part of the BeyondChats Full Stack Web Developer Intern assignment.
The application:
    Scrapes blog articles from BeyondChats.
    Stores them in MongoDB.
    Exposes CRUD APIs.
    Uses Google Gemini AI to generate updated, SEO-optimized versions of articles.
    Displays both original and AI-updated articles in a responsive React UI.
* **Features**
 * **Phase 1 – Scraping & Backend APIs**
       Scrape the 5 oldest articles from BeyondChats blog
       Store articles in MongoDB
       RESTful CRUD APIs for articles
 * **Phase 2 – AI-Powered Article Updating**
       Fetch original articles via API
       Search Google for top-ranking related articles
       Scrape reference articles
       Use Google Gemini API to rewrite content
       Store updated article with references
 *  **Phase 3 – Frontend (React + Tailwind)**
       Responsive UI
       View original & AI-updated articles
       Status badges (Original / AI Updated)
       Clean, professional design
    * **Tech Stack**
      * **Backend**
        Node.js
        Express.js
        MongoDB (Mongoose)
        Axios
        Cheerio
        Google Gemini API
    * **Frontend**
        React (Vite)
        Tailwind CSS
    * **Local Setup Instructions**
      * **Clone Repository**
            git clone https://github.com/your-username/beyondchats-assignment.git
            cd beyondchats-assignment
    * **Backend Setup**
          cd backend
          npm install
      * **Create .env file:**
            PORT=5000
            MONGO_URI=your_mongodb_connection_string
            GEMINI_API_KEY=your_gemini_api_key
            NODE_ENV=development
    * **Run backend:**
          npm run dev
    * **Run Scraper (Phase 1)**
          npm run scrape
    * **Run AI Update Script (Phase 2)**
          npm run ai:update
    * **Frontend Setup**
          cd ../frontend
          npm install
          npm run dev
  * **Frontend runs on: http://localhost:5173**


### 2.Data Flow Summary
    Scraper fetches BeyondChats blog articles
    Articles stored in MongoDB
    Backend exposes CRUD APIs
    AI script fetches articles and updates content using Gemini
    Updated articles saved back to DB
    React frontend fetches and displays data
