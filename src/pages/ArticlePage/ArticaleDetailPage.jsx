import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import CommentForm from "../../components/Comments/CommentForm";
import CommentContainer from "../../components/Comments/CommentContainer";
import SocialMediaShare from "./SocialMediaShare";

const BreadCrumbData = [{
  link:"/",
  title:"Home"
},{
  title:"Article",
  link:"/Article"
},{
  title:"Article title",
  link:"/Article/1"
}]

const latestArticles = [{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},]

const tags = ["medical","lifestyle","sport","music","cluture","food","Education"]
const ArticaleDetailPage = () => {
  return (
    <MainLayout>
      <section className="mb-5 container mx-auto max-w-5xl px-5 lg:max-w-none  flex flex-col lg:px-28 py-5  lg:flex-row lg:gap-10 lg:justify-between lg:items-start   ">
        <div>
        <article className="flex-1">
          <BreadCrumb data={BreadCrumbData}/>
        </article>
        <img src={images.post1} className="rounded-xl w-full my-5" alt="Atricle image " />
        <Link to={"/Article?category=selectedCategory"} className=" text-primary text-2xl px-1 hover:underline w-fit font-bold leading-8 tracking-widest">Education</Link>
        <h1 className=" dark:text-white text-semiblack text-3xl font-bold my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p className="text-gray-600 dark:text-gray-400 tracking-wider leading-7">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quam adipisci. Aspernatur vero at tenetur id similique atque et tempora repellat ad? Vel blanditiis molestias quis et itaque distinctio eum, quam aliquid totam dicta cupiditate saepe iusto expedita doloribus amet, reprehenderit omnis, veniam facilis ab. Voluptatem, soluta praesentium. Ipsam, a? dolor sit, amet consectetur adipisicing elit. Unde nihil eos deserunt sed amet blanditiis laborum autem necessitatibus quia aperiam accusamus modi, nobis perferendis accusantium eius quae. Provident, distinctio laudantium?</p>

        <CommentContainer loginnedUserId="a"/>
        </div>

{/* leave a comment  */}


 {/* latest articles  */}
        <div className=" py-5 flex flex-col gap-8 px-5 mt-14 lg:mt-0 shadow-2xl shadow-blue-500/20 rounded-xl dark:shadow-primary/20">
          <h1 className="text-3xl font-bold ">Latest Articles </h1>
          <div className="flex flex-row gap-5 flex-wrap ">
            {latestArticles.map((article,i)=> <div key={i} className="flex  gap-3 md:w-[300px] lg:w-[400px]">
              <img src={article.img} alt="" width={100} className="rounded-2xl object-cover" />
              <div className="px-2 ">
                <h1 className=" font-bold">{article.title}</h1>
                <p className="text-gray-500 ">{article.data}</p>
              </div>
            </div>)}
          </div>
          <div className="flex flex-wrap flex-col gap-5 py-5 capitalize">
            <h1 className="text-3xl font-bold  ">tags</h1>
            <div className="flex gap-4 flex-wrap ">
            {tags.map((tag,i)=><button key={i} className="p-4 bg-primary capitalize rounded-lg cursor-pointer text-center w-fit text-white">{tag}</button>)}  

            </div>
          </div>
        <SocialMediaShare/>
        </div>
        </section>{" "}
    </MainLayout>
  );
};

export default ArticaleDetailPage;
