import Sidebar from '@/components/sidebar/Sidebar';
import Content from '@/components/content/Content';
import Skills from '@/components/Skills/Skills';
import styles from './page.module.css';
import Experience from '@/components/experience/Experience';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content />
        <div className={styles.line}></div>
        <Skills />
        <div className={styles.line}></div>
        <Experience />
        <div className={styles.line}></div>
        <Projects />
        <div className={styles.line}></div>
        <Contact />
      </div>
    </main>
  );
}
