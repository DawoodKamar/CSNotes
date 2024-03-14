import styles from "./topicsList.module.css";
import Link from "next/link";

// Fetch function for the list of available topics
const getData = async () => {
  const res = await fetch("http:localhost:3000/api/topics", {
    cache: "no-store", //temparory
  });
  if (!res.ok) {
    throw new Error("Could not get topics!");
  }
  return res.json();
};

// Topic list component
const TopicsList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Topics</h2>
      <div className={styles.topics}>
        {/* Map over the list of topics and display them */}
        {data?.map((item) => (
          <Link
            href={`/topics?topic=${item.slug}`}
            className={styles.topic}
            key={item.id}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicsList;
