import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

type Page = 'home' | 'blog' | 'blogPost';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPostData | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const navigateToBlog = () => {
    setCurrentPage('blog');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedPost(null);
  };

  const navigateToBlogPost = (post: BlogPostData) => {
    setSelectedPost(post);
    setCurrentPage('blogPost');
  };

  const navigateBackToBlog = () => {
    setCurrentPage('blog');
    setSelectedPost(null);
  };

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Blog 
          isDark={isDark} 
          onNavigateHome={navigateToHome}
          onNavigateToPost={navigateToBlogPost}
        />
      </div>
    );
  }

  if (currentPage === 'blogPost' && selectedPost) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <BlogPost 
          post={selectedPost} 
          onBack={navigateBackToBlog}
          onNavigateHome={navigateToHome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar isDark={isDark} />
      <Hero isDark={isDark} onNavigateToBlog={navigateToBlog} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Experience isDark={isDark} />
      <Certifications isDark={isDark} />
      <Education isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;