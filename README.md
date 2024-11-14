This is our submission for PSA Code Sprint Hackathon 2024

# PSA Crisis Management Dashboard

This project is an AI-powered predictive analytics platform designed to help PSA (Port of Singapore Authority) forecast potential disruptions in port operations. By gathering real-time data from various sources like weather forecasts, historical weather events, and news APIs, the backend processes this data using an LLM (Large Language Model) to generate insights. These insights are presented in the frontend through a dashboard, which displays alerts and operational statistics.

## Deployment

You can check out the live version of the app here: [PSA Crisis Management Dashboard](https://psa-frontend-tau.vercel.app/)

## How the App Works

- The **backend** collects data from external APIs like XWeather and OpenWeather, processes it using OpenAI’s API to generate insights, and stores alerts in a Supabase database.
- The **frontend** subscribes to a Supabase realtime table to receive and display alerts in real-time.
- The frontend also contains a statistics dashboard showing operational metrics and notifications.
- **Roadmap**: We plan to add user authentication and personalization, so alerts can be region-specific for users.

## Prerequisites and Installation

### Prerequisites

#### Frontend:

- **Node.js** installed. You can download it from [here](https://nodejs.org/).

#### Backend:

- **Python** installed. You can download it from [here](https://www.python.org/).

#### Environment Variables (required for both):

You will need to set up environment variables for both the backend and frontend:

- **Frontend**:

  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_API_KEY`
  - `NEXT_PUBLIC_SUPABASE_JWT_SECRET`

- **Backend**:
  - `SUPABASE_URL`
  - `SUPABASE_API_KEY`
  - `SUPABASE_JWT_SECRET`
  - `OPENAI_KEY`
  - `XWEATHER_KEY`
  - `XWEATHER_SECRET`
  - `OPENWEATHER`

#### API Access:

- **XWeather**: You can get your API keys from [XWeather](https://www.xweather.com/weather-api).
- **OpenWeather**: You can get your API keys from [OpenWeather](https://openweathermap.org/appid).
- **Supabase**: Create your own project at [Supabase](https://supabase.com/) and create a table with the following schema:

```sql
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  data TEXT,
  insights TEXT
);
```

Enable **realtime** for the `notifications` table to allow the frontend to subscribe to updates.

## Quick Start

### Frontend

1. **Navigate to the `frontend/` folder**.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the frontend server**:
   ```bash
   npm run dev
   ```

### Backend

1. **Navigate to the `backend/` folder**.
2. **Install dependencies** (if required, ensure `requirements.txt` is in place):
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the backend server**:
   ```bash
   python main.py
   ```

## Roadmap

- Add user authentication to personalize alerts based on the user’s region.
- Improve data aggregation with more external sources to provide detailed insights.
- Enhance the dashboard UI for better user experience.

## License

This project is licensed under MIT License.
