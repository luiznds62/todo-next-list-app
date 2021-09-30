import Head from 'next/head';
import Script from 'next/script';
import Sidenav from '../components/sidenav/Sidenav';
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.scss';
import Main from '../components/main/Main';
import taskService from '../services/TaskService';

export default function Home({ tasks }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Todo List app generated by Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></Script>

      <Layout>
        <Sidenav tasks={tasks}></Sidenav>
        <Main></Main>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const tasks = JSON.stringify(await taskService.getTasks());

  if (!tasks) {
    return {
      notFound: true
    };
  }

  return {
    props: { tasks }
  };
}
