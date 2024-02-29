import Quiz from "@/components/quiz/Quiz"
import styles from "./blogpage.module.css"
import createDOMPurify from "dompurify"
import { JSDOM } from 'jsdom';
import he from 'he';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store", //temporary
  });
  if (!res.ok) {
    throw new Error("Could not get post!");
  }
  return res.json();
};

const BlogPage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  const window = (new JSDOM('')).window;
  const DOMPurify = createDOMPurify(window);

  // Function to check if the URL is a valid YouTube embed URL
  function isYoutubeEmbedUrl(url) {
    const youtubeEmbedUrlRegex = /^https?:\/\/www\.youtube(-nocookie)?\.com\/embed\/[\w-]+(\?.*)?$/;
    return youtubeEmbedUrlRegex.test(url);
  }

  // Add a hook to DOMPurify to check iframe src attributes
  DOMPurify.addHook('uponSanitizeElement', (node, data) => {
    if (data.tagName === 'iframe') {
      const src = node.getAttribute('src') || '';
      if (!isYoutubeEmbedUrl(src)) {
        // If the iframe src isn't a valid YouTube embed URL, remove the node
        node.parentNode.removeChild(node);
      }
    }
  });
  const decodedContent = he.decode(data?.desc);

  const cleanHTML = DOMPurify.sanitize(decodedContent, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'src', 'title', 'width', 'height']
  });

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.topic}>{data.topicSlug}</p>
        <h1 className={styles.title}>{data.title}</h1>
      </div>
      <div className={styles.postDetails} dangerouslySetInnerHTML={{ __html: cleanHTML }} />
      <Quiz />
    </div>
  );
};

export default BlogPage;
