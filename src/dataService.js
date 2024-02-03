const DATA_KEY = 'posts';

export const getPosts = () => {
  const storedData = localStorage.getItem(DATA_KEY);
  return storedData ? JSON.parse(storedData) : [];
};

export const addPost = (newPost) => {
  const existingPosts = getPosts();
  const updatedPosts = [...existingPosts, newPost];
  localStorage.setItem(DATA_KEY, JSON.stringify(updatedPosts));
};
