import axios from "axios";

const getPostComments = async ({ id }) => {
    try {
      

        const { data } = await axios.get(`/api/comments/post/${id}`);
        return data.comments;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default getPostComments;
