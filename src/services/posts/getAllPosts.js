import axios from "axios";

const getAllPosts = async () => {
    try {
       
        const { data } = await axios.get("/api/posts");
        return data.posts;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default getAllPosts;
