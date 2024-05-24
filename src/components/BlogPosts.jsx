import BlogPost from "./BlogPost";
import posts from "../data/posts.js";

function BlogPosts() {
	return (
		<section>
			{posts.map((post) => (
				<div key={post.title}>
					<BlogPost {...post} />
				</div>
			))}
		</section>
	);
}

export default BlogPosts;
