// import { fetchAllPosts } from "api/apiposts";
// import { useEffect } from "react";

// const searchInput = document.getElementById("searching");
// searchInput.addEventListener("input", (e) => {
//   const value = e.target.value;
//   console.log(value);
// });
// //now in the console we can track what is input... need to filter based on this
// //logs many times for some reason...
// //return value from above and pass it to search function to compare and push to filtered posts???

function Search({ Posts, setPosts }) {
  //   const filteredPosts = [];

  //   useEffect(() => {
  //     const getAllPost = async () => {
  //       const result = await fetchAllPosts();
  //       const allPosts = result.data.posts;
  //       //console.log("posts to filter", allPosts);
  //       //the above line shows we can grab all posts... we need to filter it to a new array
  //     };
  //     getAllPost();
  //   }, []);

  return (
    <>
      <div className="searchContainer">
        <div>
          <label>Search</label>
        </div>
        <input type={"search"} id={"searching"} />
      </div>
    </>
  );
}

export default Search;
