
import React from "react";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import Login from "./components/Login";
import TodoApp from "./components/TodoApp";
import Card from "./components/Card";
import Accordion from "./components/Accordion";

function App() {
  
  const user1 = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://i.pravatar.cc/100?img=7",
    imageSize: 90,

    
  };

  const user2 = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "https://i.pravatar.cc/100?img=8",
    imageSize: 90,
  };

  return (
    <div 
    style={{padding: "20px",
            fontFamily: "sans-serif",
            backgroundColor: "#ba89b6ff",
           }}>
      <h1 style={{ textAlign: "center" }}> React Lab — All Exercises</h1>

      {/* ========== EXERCISE 3–4: USER PROFILE ========== */}
      <section style={{ marginTop: 30 }}>
        <h2>Exercise 3–4: User Profile</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <UserProfile userData={user1} theme="light" />
          <UserProfile userData={user2} theme="dark" />
        </div>
      </section>

      {/* ========== EXERCISE 5: COUNTER ========== */}
      <section style={{ marginTop: 40 }}>
        <h2>Exercise 5: Counter</h2>
        <Counter />
      </section>

      {/* ========== EXERCISE 6: LOGIN FORM ========== */}
      <section style={{ marginTop: 40 }}>
        <h2>Exercise 6: Login</h2>
        <Login />
      </section>

      {/* ========== EXERCISE 7: CARD COMPONENT ========== */}
      <section style={{ marginTop: 40 }}>
        <h2>Exercise 7: Card</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card title="About React">
            <p>React is a JavaScript library for building user interfaces.</p>
          </Card>
          <Card title="About You">
            <p>I'm learning how to build reusable React components!</p>
          </Card>
        </div>
      </section>

      {/* ========== EXERCISE 7: ACCORDION ========== */}
      <section style={{ marginTop: 40 }}>
        <h2>Exercise 7: Accordion</h2>
        <Accordion />
      </section>

      {/* ========== PART VI: TODO APP ========== */}
      <section style={{ marginTop: 40, marginBottom: 60 }}>
        <h2>Part VI: Todo App</h2>
        <TodoApp />
      </section>
    </div>
  );
}

export default App;
