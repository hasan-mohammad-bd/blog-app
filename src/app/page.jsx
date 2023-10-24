
import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";


export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page} />
        <Menu/>
      </div>
    </div>
  );
}
