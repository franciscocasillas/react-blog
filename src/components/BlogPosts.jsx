import BlogPost from "./BlogPost";
import posts from "../data/posts.js";

function BlogPosts() {
	return (
		<section>
			{posts.map((post) => (
				<BlogPost {...post} key={post.title} />
			))}
		</section>
	);
}

export default BlogPosts;
