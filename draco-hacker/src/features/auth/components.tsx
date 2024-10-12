"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function GetStarted() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to PSA Draco Hackers</h1>
      </header>

      <div className="content">
        <p>
          Please <a href="/api/auth/login">log in</a> to start using the app.
        </p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 2.5rem;
        }
        .content {
          margin-top: 20px;
        }
        .actions {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
        .button {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
        }
        .button:hover {
          background-color: #005bb5;
        }
        .footer {
          margin-top: 40px;
        }
        .footer p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export function LoggingOut() {
  return (
    <div className="container">
      <header className="header">
        <h1>Logging you out...</h1>
      </header>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 2.5rem;
        }
        .content {
          margin-top: 20px;
        }
        .actions {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
        .button {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
        }
        .button:hover {
          background-color: #005bb5;
        }
        .footer {
          margin-top: 40px;
        }
        .footer p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
