function SinglePost({ currentUser }) {
  console.log(currentUser.posts);
  return (
    <>
      <div>{currentUser.post}</div>
      <div>Ideally we display all posts made by this user</div>
      <div>And give this page a form to edit the posts</div>
    </>
  );
}
export default SinglePost;

//i imageine we will need to map over posts.
//check if post is made by currentuser
//render only posts by current user

//for some reason the console log shows line 2 is "rendered" 3 times
//first time object is undefined
//second time posts are found....
