
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ayzat's Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header class="site-header">
    <div class="header-inner">
        <a href="index.html" class="brand">
            Ayzat<span class="brand-dot">.</span>
        </a>

        <nav>
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="pop.html">My work</a>
            <a href="pol.html">Contact</a>
        </nav>
    </div>
</header>


<main>

<header class="hero" id="top">
    <div class="hero-content">
        <p class="eyebrow">WELCOME TO MY WEBSITE</p>
        <h1>Ayzat's Portfolio</h1>
        <p class="hero-description">
            Student, creative thinker and future programmer.
        </p>
        <!-- JavaScript Greeting -->
<h2 id="greeting">Welcome to my portfolio!</h2>

<button id="askName" type="button">
    Enter your name
</button>
        <img src="gh.jpg" alt="Mountains">
    </div>
</header>

<section class="section about" id="about">
    <h2>About Me</h2>

    <img class="about-photo" src="gh.jpg" alt="Mountains">

    <p>Hello! I'm <strong>Ayzat</strong>, a student at Ala-Too College in Bishkek.</p>

    <p>
        I am a college student who enjoys learning new things
        and developing creative ideas. I am interested in programming,
        web development, and drawing. I like creating something new
        and improving my skills. My goal is to become a
        <em>professional programmer</em> and work on interesting projects.
    </p>

    <blockquote>
        <p>-( * 3 * )-</p>
    </blockquote>

    <details>
        <summary>Extra information</summary>
        <p>
            I am interested in programming, design, and technology.
            Explore my website to learn more about me and my projects.
        </p>
    </details>
</section>

<section class="section" id="skills">
    <h2>My Skills</h2>

    <ol class="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>English</li>
    </ol>

    <p>
        <label for="portfolio-progress">My learning progress:</label>
        <progress id="portfolio-progress" value="3" max="5"></progress>
        <strong>3 / 5</strong>
    </p>

    <table>
        <caption>My Learning</caption>

        <thead>
            <tr>
                <th>Skill</th>
                <th>Description</th>
                <th>Number</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th>HTML</th>
                <td>Creating web pages</td>
                <td>1</td>
            </tr>

            <tr>
                <th>CSS</th>
                <td>Designing websites</td>
                <td>2</td>
            </tr>

            <tr>
                <th>JavaScript</th>
                <td>Basic programming</td>
                <td>3</td>
            </tr>

            <tr>
                <th>Java</th>
                <td>Learning programming</td>
                <td>4</td>
            </tr>

            <tr>
                <th>English</th>
                <td>Communication and learning</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>
</section>

</main>

<footer>
    <p>© Ayzat. - Ala-Too College. - Kyrgyzstan</p>
    
</footer>

<a href="#top" id="scrollTopBtn" class="back-to-top">
    ↑ Top
</a>

<script src="script.js"></script>
<script src="scroll.js" defer></script>


</body>
</html>
