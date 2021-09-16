import styles from './Layout.module.scss';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return <div className={styles.container}>{children}</div>;
}
