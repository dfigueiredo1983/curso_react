import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { RouterLink } from '../RouterLink';

type availableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as availableThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    console.log('Clicado. ', Date.now());

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    // document.documentElement.setAttribute('data-theme', theme);
  };

  // useEffect(() => {
  //   console.log('', Date.now());
  // }); // Executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('', Date.now());
  // }, []); // Executa apenas quando o React monta o componente pela primeira vez

  // useEffect(() => {
  //   console.log('', Date.now());
  // }, [theme]); // Executa quando o atributo dentro do array é alterado

  useEffect(() => {
    console.log('', Date.now());
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // chave, valor - posso salvar um objeto json

    return () => {
      // executado quando o componente é removido da página
      console.log('Olha, este componente será atualizado');
    };
  }, [theme]); // Executa quando o atributo dentro do array é alterado

  return (
    <nav className={styles.menu}>
      {/* <h1>{theme}</h1> */}
      <RouterLink
        className={styles.menuLink}
        href='/'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href='/history/'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href='/settings/'
        aria-label='Ir para configurações'
        title='Ir para configurações'
      >
        <SettingsIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={event => handleThemeChange(event)}
      >
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}
