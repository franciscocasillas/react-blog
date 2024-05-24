import PropTypes from "prop-types";

function BlogPost({ title, author, date, excerpt, image, post = true }) {
	return (
		<article>
			<h2>{title}</h2>
			<p>{author}</p>
			<p>{date}</p>
			{excerpt && <p>{excerpt}</p>}
			{image && <img src={image} alt={title} />}
		</article>
	);
}

BlogPost.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	excerpt: PropTypes.string,
	image: PropTypes.string,
	post: PropTypes.bool,
};

export default BlogPost;
