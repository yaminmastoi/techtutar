import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      {/* NAVBAR */}

      <nav className="landing-nav">
        <h2 className="logo">TechTutar AI</h2>
        <Link to="/auth" className="nav-btn">
          Start Chat
        </Link>
      </nav>

      {/* 1 HERO */}

      <section className="hero">
        <h1>
          The Future of <span>AI Assistance</span>
        </h1>

        <p>
          TechTutar AI is an intelligent assistant designed to help developers,
          students and creators learn faster and solve complex problems using
          artificial intelligence.
        </p>

        <Link to="/auth" className="hero-btn">
          Try TechTutar AI
        </Link>
      </section>

      {/* 2 ABOUT */}

      <section className="section">
        <h2>What is TechTutar AI?</h2>

        <p>
          TechTutar AI is a smart AI assistant that helps users generate ideas,
          write code, learn programming concepts and increase productivity using
          advanced AI technology.
        </p>
      </section>

      {/* 3 WHY AI */}

      <section className="section light">
        <h2>Why Use AI?</h2>

        <p>
          Artificial intelligence can dramatically improve the way we work and
          learn. TechTutar AI provides instant answers, explanations and
          creative solutions for everyday tasks.
        </p>
      </section>

      {/* 4 FEATURES */}

      <section className="features">
        <div className="feature-card">
          <h3>⚡ Instant AI Answers</h3>
          <p>Ask any question and get intelligent responses instantly.</p>
        </div>

        <div className="feature-card">
          <h3>💻 Coding Assistant</h3>
          <p>Debug code, generate scripts and learn programming.</p>
        </div>

        <div className="feature-card">
          <h3>🚀 Productivity</h3>
          <p>Automate writing, emails and everyday tasks.</p>
        </div>
      </section>

      {/* 5 HOW IT WORKS */}

      <section className="section">
        <h2>How TechTutar AI Works</h2>

        <p>
          Simply type your question and TechTutar AI analyzes it using powerful
          machine learning models to provide the best possible response in
          seconds.
        </p>
      </section>

      {/* 6 FOR DEVELOPERS */}

      <section className="section light">
        <h2>Built for Developers</h2>

        <p>
          Developers can use TechTutar AI to generate code snippets, debug
          errors and learn new programming concepts faster.
        </p>
      </section>

      {/* 7 FOR STUDENTS */}

      <section className="section">
        <h2>Perfect for Students</h2>

        <p>
          Students can learn difficult subjects, understand concepts and solve
          problems quickly using AI assistance.
        </p>
      </section>

      {/* 8 CONTENT CREATION */}

      <section className="section light">
        <h2>Content Creation</h2>

        <p>
          Generate blog ideas, captions, emails and articles instantly with AI
          powered writing assistance.
        </p>
      </section>

      {/* 9 SPEED */}

      <section className="section">
        <h2>Fast and Powerful</h2>

        <p>
          TechTutar AI is optimized for speed and performance providing
          responses within seconds.
        </p>
      </section>

      {/* 10 SECURITY */}

      <section className="section light">
        <h2>Privacy & Security</h2>

        <p>
          Your data stays secure and private while interacting with TechTutar
          AI.
        </p>
      </section>

      {/* 11 COMMUNITY */}

      <section className="section">
        <h2>Growing AI Community</h2>

        <p>
          Join a community of learners, developers and creators exploring the
          future of AI together.
        </p>
      </section>

      {/* 12 CTA */}

      <section class="cta-section">
        <h1>Start Using TechTutor AI Today</h1>
        <button class="cta-btn">Start Now</button>
      </section>
      {/* 13 FOOTER */}

      <footer className="footer">
        © {new Date().getFullYear()} TechTutar AI | Made By Yamin Alee | Powered
        By www.mastoitechsolution.com
      </footer>
    </div>
  );
}
