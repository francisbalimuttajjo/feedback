<h1> About the Project</h1>
 The <strong> feedback app</strong> is a review platform for a fictional software product where users can test and give their feedback regarding their experiences; and also give recommendations/suggestions on areas where they feel improvement can be done. The project is hosted on vercel and can be viewed live at <em> https://feedbackbafra.vercel.app</em>
Users can view,create,delete,comment  and upvote a  feedback/reviews/suggestions. However for creating,upvoting and deleting the user has to sign in with their google account, dont wory about signing out, the option is available. users can upvote a feedback once by clicking the upvote icon 


<h1>Technologies Used </h1>
<ul>
  <li>
    Material Ui
  </li>
  <li>
    Tailwind Css
  </li>
  <li>
    Next Js
    </li><li>
  Mongoose</li><li>
    MongoDb</li><li>
  Next-auth(Google Provider)</li>
  </li>
</ul>


<h1>Getting Started</h1>
Locally, u just need to clone the project to your local machine and run npm install to install all the dependencies; Then run npm run dev to start your development environment,
however, u need to get Google credentials for authentication and for that reason am recommending you test the app live at <em> https://feedbackbafra.vercel.app </em>


<h1>Data Flow</h1>

The project has three Mongodb collections (feedback,comments and likes),comments referencing to the parent(feedback) and likes referencing to the parent(comments). Feedback and Comments are populated with comments and likes respectively using the mongoose virtual properties at query time. Parent referencing was employed in this project for the data modelling.


<!-- <div align="center">
    <img src="![feedback](https://user-images.githubusercontent.com/63359032/152752525-21abd567-f80a-451c-ae79-ba08c8e62fc0.jpg)" width="400px"</img> 
</div> -->
![feedback](https://user-images.githubusercontent.com/63359032/152752525-21abd567-f80a-451c-ae79-ba08c8e62fc0.jpg)
