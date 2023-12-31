import config from "@config/config.json";
import ImageFallback from "@layouts/components/ImageFallback";
import dateFormat from "@lib/utils/dateFormat";
import readingTime from "@lib/utils/readingTime";
import Link from "next/link";

const Post = ({ post, i }) => {
  const { summary_length, blog_folder } = config.settings;
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)]">
      {post.frontmatter.image && (
        <Link href={`/${blog_folder}/${post.slug}`}>
          <ImageFallback
            className="w-full object-cover"
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            width={470}
            height={405}
          />
        </Link>
      )}
      <div className="p-8">
        <h2 className="h4">
          <Link
            href={`/${blog_folder}/${post.slug}`}
            className="block hover:text-primary"
          >
            {post.frontmatter.title}
          </Link>
        </h2>
        <p className="mt-4">
          {post.content.slice(0, Number(summary_length))}...
        </p>
        <div className="mt-8">
          <button className=" mt-4 p-3 block hover:bg-primary hover:text-white text-primary bg-white">
            <Link
              href={`/${blog_folder}/${post.slug}`}
            >
              Read more
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
