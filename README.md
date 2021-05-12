# Libraries used for UI

> ant design

# Libraries used for Chart

> Apex Charts

# Libraries / Frameworks used for state management

> react-redux

# How the application structured!

1. View and layout parts of pages like header, flex, Loader and Charts are placed under the the components folder.

2. The viewsLayout folder holds the actual header and content part of the page, whenever user enter the leanerslist url in browser or successfully login in the route with comes to the generic viewsLayout component and fro their it navigates it content to particular route.

3. Pages contains three component

   - Login ---\* it contains the login page code.
   - LearnersList ---\* The page which displays the learners List
   - ViewLearner ---\* The page which shows the particular learner data(This can't be view directly by entering the url in browser, it can be viewed only by click the item in Learnerslist. If try to view by entering the url it will redirect to the LearnersList page by default).

4. Redux page contains three folder with one file

   - The action page actually dispatch the action to the reducer
   - The reducer page which holds the state and store values which can be configured with the store
   - The constant which contains the constant things which can be used throughout the application
   - The store file which actally craete the store for our whole application.

5. Style.css file is actually imported as link stylesheet in index.html and some generic styles are written in that styles.css file.

# How does the login state managed?

1. Actually the LoginForm.js component which dispatch the two actions when user trying to login to system.
   - one action is SHOW_LOADING which is dispatched after user clicks the login button, and another is AUTHENTICATED action which dispatched 2s after user clicks login button(this delay is for indicating the process)
   - whenever the AUTHENTICATED action dispatched it take object with values username and password as parameter and store it to the store and with this object value I am checking the users are viewing the list by logining to system or by directly.
   - LOG_OUT can be made by dispatch the action after the user click logout button in header component. I am just returning the initstate(initial state) for this particular action in store, by doing this the state in the store will resume back to initial state and logout the user, which navigates to the login page.

# How does the viewLearner happening?

1.  Whenever the user clicks on userlist item the learnerData action is dispatched with learner object as perameter which is used to display the details in viewLearner component. After dispatching the action am navigating the route to viewLearner page, here am getting that particular data by mappig the state to props.

# How does the viewLearner component structured?

1.  Actually the viewLearner component depends on the two other components which is SideLayout for displaying learners personal data and Apexpie for displaying the Learners stat's.


    * Actually the SideLayout components which depends on the Flex component.

# Why generic Flex component?

1.  I implemented this generic Flex component which does the flexbox css implementation which also minimizing the lots of flexbox css work throughtout the application. Actually it takes some props for its className and the styles for this className is written in styles.css.
