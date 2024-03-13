<script>
    import { Router, Route } from "svelte-routing";
    import './css/main.scss'
    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Blog from "./routes/Blog.svelte";
  </script>
  
  <div>
    <nav>
      <a href="./">Home</a>
      <a href="./About">About</a>
      <a href="./Blog">Blog</a>
    </nav>
  
    <Router>
      <Route path="./" component={Home} />
      <Route path="./About" component={About} />
      <Route path="./Blog" component={Blog} />
    </Router>
  </div>
  <style>
    nav {
      display: flex;
      justify-content: space-around;
      padding: 1em;
      background: #e47d7d;
    }
    a {
      text-decoration: none;
      color: #333;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>